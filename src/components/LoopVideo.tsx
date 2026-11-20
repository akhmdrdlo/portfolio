"use client";

import { useEffect, useRef, useState } from "react";
import { MQ } from "@/lib/gsap";

function tryPlay(v: HTMLVideoElement, visible: boolean) {
  if (!visible || !v.getAttribute("src")) return;
  if (window.matchMedia(MQ.reduced).matches) return;
  v.play().catch(() => {});
}

/**
 * Silent looping video (muted, inline, no controls).
 * - Plays only while on screen; pauses off screen to save battery.
 * - `lazy` defers downloading until the element is near the viewport.
 * - Reduced-motion users get the poster frame only.
 */
export function LoopVideo({
  src,
  poster,
  className = "",
  lazy = false,
  label,
}: {
  src: string;
  poster: string;
  className?: string;
  lazy?: boolean;
  label?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useRef(false);
  const [load, setLoad] = useState(!lazy);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        inView.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          setLoad(true);
          tryPlay(v, true);
        } else {
          v.pause();
        }
      },
      { rootMargin: lazy ? "300px 0px" : "0px" },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [lazy]);

  // Once the source is attached (lazy case), start playback if we're still on screen.
  useEffect(() => {
    if (load && ref.current) tryPlay(ref.current, inView.current);
  }, [load]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay={!lazy}
      preload={lazy ? "none" : "auto"}
      disablePictureInPicture
      aria-label={label}
      aria-hidden={label ? undefined : true}
      tabIndex={-1}
      src={load ? src : undefined}
    />
  );
}
