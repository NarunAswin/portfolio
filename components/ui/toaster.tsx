"use client";

import { Toaster as Sonner } from "sonner";

export function Toaster() {
  return (
    <Sonner
      position="top-right"
      richColors
      closeButton
      toastOptions={{
        style: {
          background: "rgba(23,31,51,0.95)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "#dae2fd",
        },
      }}
    />
  );
}
