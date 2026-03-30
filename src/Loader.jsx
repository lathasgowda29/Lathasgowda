import { useState, useEffect } from "react";

const LOADER_TEXT = "Hi, I am Latha";
/** Characters typed in accent teal; remainder in white. */
const LOADER_PREFIX_LEN = "Hi, I am ".length;
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
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#031418] transition-opacity duration-500 ease-out"
      style={{
        opacity: isFadingOut ? 0 : 1,
        pointerEvents: isFadingOut ? "none" : "auto",
      }}
      aria-hidden={isFadingOut}
    >
      <p className="font-Caveat text-[32px] font-Regular tracking-tight">
        <span className="text-[#5EA2B9]">
          {LOADER_TEXT.slice(0, visibleChars).slice(0, LOADER_PREFIX_LEN)}
        </span>
        <span className="text-white">
          {LOADER_TEXT.slice(0, visibleChars).slice(LOADER_PREFIX_LEN)}
        </span>
        <span
          className="inline-block w-0.5 animate-pulse bg-white"
          style={{ opacity: visibleChars < LOADER_TEXT.length ? 1 : 0 }}
          aria-hidden
        />
      </p>
    </div>
  );
}
