export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight animate-fade-up">
          Hi, I’m <span className="text-blue-600">Narun Aswin</span>
        </h1>

        <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400 animate-fade-up delay-200">
          Frontend Developer specializing in React, Next.js, and modern UI
          development. I build fast, responsive, and scalable web applications.
        </p>

        <div className="mt-8 flex gap-4 animate-fade-up delay-300">
          <a
            href="#projects"
            className="rounded-xl bg-blue-600 px-6 py-3 text-white font-medium transition hover:scale-105 hover:bg-blue-700"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-6 py-3 font-medium transition hover:scale-105 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white dark:bg-zinc-950">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "JavaScript",
            "Git & GitHub",
            "Azure Boards",
            "REST APIs",
          ].map((skill, i) => (
            <div
              key={skill}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 text-center font-medium transition hover:-translate-y-1 hover:shadow-lg animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 text-center bg-zinc-50 dark:bg-black"
      >
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Open to frontend developer opportunities and freelance work.
        </p>

        <a
          href="mailto:narunaswin@gmail.com"
          className="inline-block rounded-xl bg-blue-600 px-8 py-3 text-white font-medium transition hover:scale-105 hover:bg-blue-700"
        >
          Email Me
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-zinc-500 dark:text-zinc-600">
        © {new Date().getFullYear()} Narun Aswin. All rights reserved.
      </footer>
    </main>
  );
}
