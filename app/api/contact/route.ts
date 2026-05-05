import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function readEnvFromAppFile(): { user?: string; pass?: string } {
  const envPath = path.join(process.cwd(), "app", ".env");
  if (!existsSync(envPath)) return {};

  const raw = readFileSync(envPath, "utf8");
  const lines = raw.split(/\r?\n/);
  const map: Record<string, string> = {};

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const [k, ...rest] = trimmed.split("=");
    map[k.trim()] = rest.join("=").trim();
  }

  return {
    user: map.EMAIL_USER,
    pass: map.EMAIL_PASS,
  };
}

function getMailAuth() {
  const fallback = readEnvFromAppFile();
  return {
    user: process.env.EMAIL_USER || fallback.user,
    pass: process.env.EMAIL_PASS || fallback.pass,
  };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const subject = body.subject?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const { user, pass } = getMailAuth();
    if (!user || !pass) {
      return NextResponse.json(
        { ok: false, error: "Email credentials are missing." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: user,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}
