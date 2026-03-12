"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Screenshot({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, close]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className="group relative w-full cursor-zoom-in"
        onClick={() => setOpen(true)}
      >
        <div
          className="
            overflow-hidden
            rounded-2xl
            bg-white
            ring-1 ring-slate-200/80
            shadow-[0_32px_80px_rgba(15,23,42,0.12)]
            transition-all
            duration-300
            group-hover:scale-[1.015]
            group-hover:shadow-[0_40px_100px_rgba(15,23,42,0.20)]
          "
        >
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={750}
            className="w-full h-auto"
          />
        </div>

        {/* Zoom hint */}
        <div
          className="
            absolute bottom-3 right-3
            rounded-full
            bg-black/40
            px-2.5 py-1
            text-xs text-white/80
            opacity-0
            backdrop-blur-sm
            transition-opacity duration-200
            group-hover:opacity-100
          "
        >
          Click to enlarge
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Image container */}
            <motion.div
              className="relative w-full max-w-6xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={close}
                className="
                  absolute -top-10 right-0
                  flex items-center gap-2
                  text-sm text-white/70
                  transition hover:text-white
                "
              >
                Close
                <kbd className="rounded border border-white/20 px-1.5 py-0.5 text-xs opacity-60">
                  ESC
                </kbd>
              </button>

              <div className="overflow-hidden rounded-2xl bg-white shadow-[0_60px_160px_rgba(0,0,0,0.5)]">
                <Image
                  src={src}
                  alt={alt}
                  width={1600}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
