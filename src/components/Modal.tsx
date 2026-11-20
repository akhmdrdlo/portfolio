"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

/** Accessible modal on native <dialog>: focus trap, Esc to close, backdrop click to close, scroll lock. */
export function Modal({
  open,
  onClose,
  label,
  children,
  className = "",
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      d.showModal();
      window.__lenis?.stop();
    } else if (!open && d.open) {
      d.close();
    }
    return () => {
      if (open) window.__lenis?.start();
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-label={label}
      onClose={onClose}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className={`m-auto max-h-[92svh] w-[min(1100px,calc(100vw-2rem))] overflow-visible bg-transparent p-0 backdrop:bg-navy-deep/85 backdrop:backdrop-blur-[2px] open:animate-[modal-in_0.45s_var(--ease-out-expo)] ${className}`}
    >
      {open ? (
        <div className="relative">
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup"
            className="absolute right-2 top-2 z-10 grid h-11 w-11 place-items-center rounded-full bg-surface text-ink shadow-sticker transition-transform hover:rotate-90 md:-right-3 md:top-0 md:translate-x-full"
          >
            <X size={20} />
          </button>
          {children}
        </div>
      ) : null}
    </dialog>
  );
}
