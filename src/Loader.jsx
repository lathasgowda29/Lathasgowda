import { useState, useEffect } from "react";

const LOADER_TEXT = "Hi, I am Latha";
const TYPING_DELAY_MS = 80;
const LOADER_DURATION_MS = 2500;
const FADE_DURATION_MS = 500;

export default function Loader({ onComplete }) {
  const [visibleChars, setVisibleChars] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (visibleChars < LOADER_TEXT.length) {
      const t = setTimeout(() => setVisibleChars((c) => c + 1), TYPING_DELAY_MS);
      return () => clearTimeout(t);
    }
  }, [visibleChars]);

  useEffect(() => {
    let doneTimer;
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      doneTimer = setTimeout(() => {
        onComplete?.();
      }, FADE_DURATION_MS);
    }, LOADER_DURATION_MS);
    return () => {
      clearTimeout(timer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-dark-bg transition-opacity duration-500 ease-out"
      style={{
        opacity: isFadingOut ? 0 : 1,
        pointerEvents: isFadingOut ? "none" : "auto",
      }}
      aria-hidden={isFadingOut}
    >
      <p className="font-geist text-[32px] font-semibold tracking-tight text-white">
        {LOADER_TEXT.slice(0, visibleChars)}
        <span
          className="inline-block w-0.5 animate-pulse bg-white"
          style={{ opacity: visibleChars < LOADER_TEXT.length ? 1 : 0 }}
          aria-hidden
        />
      </p>
    </div>
  );
}
