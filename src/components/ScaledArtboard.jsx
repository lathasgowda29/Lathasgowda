import { useEffect, useRef, useState } from "react";

/**
 * Scales fixed Figma-width artboards to fit the column without horizontal scroll.
 * Outer box height/width match the scaled visual size so layout doesn't collapse.
 */
export default function ScaledArtboard({ designWidth, designHeight, children, className = "" }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      if (w <= 0) return;
      setScale(Math.min(1, w / designWidth));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);

  const scaledW = designWidth * scale;
  const scaledH = designHeight * scale;

  return (
    <div ref={containerRef} className={`w-full min-w-0 ${className}`}>
      <div className="mx-auto overflow-hidden" style={{ width: scaledW, height: scaledH }}>
        <div
          className="origin-top-left will-change-transform"
          style={{
            width: designWidth,
            height: designHeight,
            transform: `scale(${scale})`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
