"use client";

import { useState, useEffect, useId } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export function ImageLightbox({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
  layoutId?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const id = useId();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  const lightbox = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-16"
          style={{ background: "#ffffff" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="max-h-[80vh] rounded-2xl overflow-hidden"
            layoutId={id}
            layout
            transition={{ layout: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }}
          >
            <img
              src={src}
              alt={alt}
              className="max-h-[80vh]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <LayoutGroup>
      <motion.div
        className={className}
        onClick={() => setOpen(true)}
        layoutId={id}
        layout
        transition={{ layout: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }}
      >
        <img src={src} alt={alt} className="w-full" />
      </motion.div>
      {mounted && createPortal(lightbox, document.body)}
    </LayoutGroup>
  );
}
