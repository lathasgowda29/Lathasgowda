import { useEffect, useRef } from "react";
import ScaledArtboard from "./ScaledArtboard";

export default function JourneyRecognitionSection() {
  const bg1 = new URL("../assets/journey/card-bg-1.svg", import.meta.url).href;
  const bg2 = new URL("../assets/journey/card-bg-2.svg", import.meta.url).href;
  const bg3 = new URL("../assets/journey/card-bg-3.svg", import.meta.url).href;
  const bg4 = new URL("../assets/journey/card-bg-4.svg", import.meta.url).href;
  const bg5 = new URL("../assets/journey/card-bg-5.svg", import.meta.url).href;
  const wave1 = new URL("../assets/journey/wave-1.svg", import.meta.url).href;
  const wave2 = new URL("../assets/journey/wave-2.svg", import.meta.url).href;
  const wave3 = new URL("../assets/journey/wave-3.svg", import.meta.url).href;
  const wave4 = new URL("../assets/journey/wave-4.svg", import.meta.url).href;
  const wave5 = new URL("../assets/journey/wave-5.svg", import.meta.url).href;
  const badge1 = new URL("../assets/journey/badge-1.svg", import.meta.url).href;
  const badge2 = new URL("../assets/journey/badge-2.svg", import.meta.url).href;
  const badge3 = new URL("../assets/journey/badge-3.svg", import.meta.url).href;
  const badge4 = new URL("../assets/journey/badge-4.svg", import.meta.url).href;
  const badge5 = new URL("../assets/journey/badge-5.svg", import.meta.url).href;
  const photo1 = new URL("../assets/journey/photo-1.jpg", import.meta.url).href;
  const photo2 = new URL("../assets/journey/photo-2.jpg", import.meta.url).href;
  const photo3 = new URL("../assets/journey/photo-3.jpg", import.meta.url).href;
  const photo4 = new URL("../assets/journey/photo-4.jpg", import.meta.url).href;
  const photo5 = new URL("../assets/journey/photo-5.jpg", import.meta.url).href;

  const cardClipPath = "path('M0 16C0 7.16344 7.16344 0 16 0H320C328.837 0 336 7.16344 336 16V292.373C336 296.616 334.314 300.686 331.314 303.686L289.686 345.314C286.686 348.314 282.616 350 278.373 350H16C7.16344 350 0 342.837 0 334V16Z')";
  const cardShadow = "drop-shadow(0px 6px 25px rgba(0,0,0,0.08)) drop-shadow(0px 0px 2px rgba(0,0,0,0.5))";

  const cardsRef = useRef(null);
  const mobileJourneyRowRef = useRef(null);
  const mobileJourneyScrollRef = useRef(null);
  const offsetRef = useRef(0);
  const directionRef = useRef(-1);
  const pausedRef = useRef(false);
  const lastManualRef = useRef(0);

  useEffect(() => {
    let animId;
    const speed = 0.3;
    const maxDrift = 150;
    const resumeDelay = 2000;

    const applyTranslateX = (px) => {
      const t = `translateX(${px}px)`;
      if (cardsRef.current) cardsRef.current.style.transform = t;
      if (mobileJourneyRowRef.current) mobileJourneyRowRef.current.style.transform = t;
    };

    const animate = () => {
      const now = Date.now();
      if (!pausedRef.current && now - lastManualRef.current > resumeDelay) {
        offsetRef.current += speed * directionRef.current;
        if (offsetRef.current <= -maxDrift) directionRef.current = 1;
        if (offsetRef.current >= 0) directionRef.current = -1;
        applyTranslateX(offsetRef.current);
      }
      animId = requestAnimationFrame(animate);
    };

    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        lastManualRef.current = Date.now();
        offsetRef.current = Math.max(-maxDrift, Math.min(0, offsetRef.current - e.deltaX));
        applyTranslateX(offsetRef.current);
      }
    };

    const desktopEl = cardsRef.current;
    const mobileScrollEl = mobileJourneyScrollRef.current;
    if (desktopEl) desktopEl.addEventListener("wheel", handleWheel, { passive: false });
    if (mobileScrollEl) mobileScrollEl.addEventListener("wheel", handleWheel, { passive: false });
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      if (desktopEl) desktopEl.removeEventListener("wheel", handleWheel);
      if (mobileScrollEl) mobileScrollEl.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const MOBILE_CARD_SCALE = 0.62;
  const MOBILE_CARD_VW = Math.round(336 * MOBILE_CARD_SCALE);
  const MOBILE_CARD_VH = Math.round(350 * MOBILE_CARD_SCALE) + 43;

  return (
    <section className="w-full pb-16 pt-8">
      <div className="flex flex-col gap-8 md:hidden">
        <h2 className="text-center font-geist text-[28px] font-semibold leading-[36px] tracking-[0.25px] text-dark sm:text-[34px] sm:leading-[44px]">
          Recognition Along the Way
        </h2>
        <p className="mx-auto max-w-[624px] text-center font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-dark">
          Designing the future of intelligent experiences. In just three years at
          Yellow.ai, I&apos;ve grown from Designer to Senior Designer —
          transforming complex systems into intuitive, scalable products. Blending
          technical depth with bold creativity, I build user-centric solutions that
          drive real impact, earning four Best Designer awards along the journey.
        </p>
        <div
          ref={mobileJourneyScrollRef}
          className="-mx-4 overflow-x-auto"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          <div
            ref={mobileJourneyRowRef}
            className="flex will-change-transform items-center pl-6 pr-8"
            style={{ width: "max-content" }}
          >

            <div className="relative z-[5] shrink-0" style={{ width: MOBILE_CARD_VW, height: MOBILE_CARD_VH }}>
              <div className="absolute" style={{ left: '50%', top: '50%', transform: `translate(-50%, -50%) rotate(1deg) scale(${MOBILE_CARD_SCALE})`, filter: cardShadow }}>
                <div className="relative h-[350px] w-[336px]" style={{ clipPath: cardClipPath }}>
                  <img src={bg4} alt="" className="absolute inset-0 block h-full w-full" />
                  <div className="absolute left-[-96px] top-[14.5px] flex h-[377px] w-[427px] items-center justify-center" style={{ transform: "scaleY(-1) rotate(180deg)" }}>
                    <img src={wave4} alt="" className="block h-[89.66%] w-[94.79%]" />
                  </div>
                  <div className="absolute left-[30.38px] top-[36.01px] flex w-[276px] flex-col gap-[10px] text-dark">
                    <p className="font-source-sans text-[22px] font-semibold uppercase leading-normal">Best designer</p>
                    <p className="font-geist text-[14px] font-normal leading-[18px] tracking-[0.1px]">Q4 2023 for driving impactful design improvements across Goal Node, API Simplification, &amp; Knowledge Base</p>
                  </div>
                  <div className="absolute left-[28.53px] top-[141.91px] h-[173px] w-[284px] overflow-hidden rounded-[12px]">
                    <img src={photo4} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute bottom-[6px] right-[7px] h-[38px] w-[38px]" style={{ transform: "scaleY(-1)" }}>
                    <img src={badge4} alt="" className="block h-full w-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-[4] -ml-10 shrink-0" style={{ width: MOBILE_CARD_VW, height: MOBILE_CARD_VH }}>
              <div className="absolute" style={{ left: '50%', top: '50%', transform: `translate(-50%, -50%) rotate(-10deg) scale(${MOBILE_CARD_SCALE})`, filter: cardShadow }}>
                <div className="relative h-[350px] w-[336px]" style={{ clipPath: cardClipPath }}>
                  <img src={bg5} alt="" className="absolute inset-0 block h-full w-full" />
                  <div className="absolute left-[-96px] top-[14.5px] h-[377px] w-[427px]">
                    <img src={wave5} alt="" className="absolute inset-[3.56%_0.34%_6.43%_4.87%] block h-auto w-auto" />
                  </div>
                  <div className="absolute left-[28.61px] top-[21.19px] flex w-[276px] flex-col gap-[10px] text-dark">
                    <p className="font-source-sans text-[22px] font-semibold uppercase leading-normal">Best designer</p>
                    <p className="font-geist text-[14px] font-normal leading-[18px] tracking-[0.1px]">Q1 2025 for leading design initiatives across Gen AI, Copilot Experience, Website, and Access Control.</p>
                  </div>
                  <div className="absolute left-[23.19px] top-[126.76px] h-[173px] w-[284px] overflow-hidden rounded-[12px]">
                    <img src={photo5} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute bottom-[6px] right-[7px] h-[38px] w-[38px]" style={{ transform: "scaleY(-1)" }}>
                    <img src={badge5} alt="" className="block h-full w-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-[3] -ml-10 shrink-0" style={{ width: MOBILE_CARD_VW, height: MOBILE_CARD_VH }}>
              <div className="absolute" style={{ left: '50%', top: '50%', transform: `translate(-50%, -50%) rotate(-8deg) scale(${MOBILE_CARD_SCALE})`, filter: cardShadow }}>
                <div className="relative h-[350px] w-[336px]" style={{ clipPath: cardClipPath }}>
                  <img src={bg3} alt="" className="absolute inset-0 block h-full w-full" />
                  <div className="absolute left-[-36px] top-[-175.5px] flex h-[388.5px] w-[427px] items-center justify-center" style={{ transform: "rotate(180deg)" }}>
                    <img src={wave3} alt="" className="block h-[94.7%] w-[94.79%]" />
                  </div>
                  <div className="absolute left-[31.08px] top-[31.01px] flex w-[276px] flex-col gap-[10px] text-dark">
                    <p className="font-source-sans text-[22px] font-semibold uppercase leading-normal">Quick designer</p>
                    <p className="font-geist text-[14px] font-normal leading-[18px] tracking-[0.1px]">Q4 2022 for driving impactful design improvements across Inbox &amp; Studio Builder</p>
                  </div>
                  <div className="absolute left-[32.71px] top-[130.41px] h-[173px] w-[284px] overflow-hidden rounded-[12px]">
                    <img src={photo3} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute bottom-[6px] right-[7px] h-[38px] w-[38px]" style={{ transform: "scaleY(-1)" }}>
                    <img src={badge3} alt="" className="block h-full w-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-[2] -ml-10 shrink-0" style={{ width: MOBILE_CARD_VW, height: MOBILE_CARD_VH }}>
              <div className="absolute" style={{ left: '50%', top: '50%', transform: `translate(-50%, -50%) rotate(8deg) scale(${MOBILE_CARD_SCALE})`, filter: cardShadow }}>
                <div className="relative h-[350px] w-[336px]" style={{ clipPath: cardClipPath }}>
                  <img src={bg2} alt="" className="absolute inset-0 block h-full w-full" />
                  <div className="absolute left-[-96px] top-[14.5px] flex h-[377px] w-[427px] items-center justify-center" style={{ transform: "scaleY(-1) rotate(180deg)" }}>
                    <img src={wave2} alt="" className="block h-[89.66%] w-[94.79%]" />
                  </div>
                  <div className="absolute left-[30.13px] top-[31.07px] flex w-[276px] flex-col gap-[10px] text-dark opacity-80">
                    <p className="font-source-sans text-[22px] font-semibold uppercase leading-normal">Hackathon winner</p>
                    <p className="font-geist text-[14px] font-normal leading-[18px] tracking-[0.1px]">Winner – Hackathon for conceptualizing and building an innovative Prompt Debugger solution.</p>
                  </div>
                  <div className="absolute left-[30.98px] top-[131.72px] h-[173px] w-[284px] overflow-hidden rounded-[12px]">
                    <img src={photo2} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute bottom-[6px] right-[7px] h-[38px] w-[38px]" style={{ transform: "scaleY(-1)" }}>
                    <img src={badge2} alt="" className="block h-full w-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-[1] -ml-10 shrink-0" style={{ width: MOBILE_CARD_VW, height: MOBILE_CARD_VH }}>
              <div className="absolute" style={{ left: '50%', top: '50%', transform: `translate(-50%, -50%) scale(${MOBILE_CARD_SCALE})`, filter: cardShadow }}>
                <div className="relative h-[350px] w-[336px]" style={{ clipPath: cardClipPath }}>
                  <img src={bg1} alt="" className="absolute inset-0 block h-full w-full" />
                  <div className="absolute left-[-193.62px] top-[-195.53px] flex h-[716.716px] w-[691.741px] items-center justify-center" style={{ transform: "scaleY(-1) rotate(130.86deg)" }}>
                    <img src={wave1} alt="" className="block h-[60.78%] w-[89.84%]" />
                  </div>
                  <div className="absolute left-[38.06px] top-[25.46px] flex w-[276px] flex-col gap-[10px] text-dark">
                    <p className="font-source-sans text-[22px] font-semibold uppercase leading-normal">Best designer</p>
                    <p className="font-geist text-[14px] font-normal leading-[18px] tracking-[0.1px]">Q3 2024 for elevating the Inbox experience and enhancing Studio Builder with intuitive, scalable design solutions.</p>
                  </div>
                  <div className="absolute left-[37.44px] top-[141.38px] h-[173px] w-[284px] overflow-hidden">
                    <img src={photo1} alt="" className="absolute left-[-1.94%] top-0 h-full w-[104.21%] max-w-none" />
                  </div>
                  <div className="absolute bottom-[6px] right-[7px] h-[38px] w-[38px]" style={{ transform: "scaleY(-1)" }}>
                    <img src={badge1} alt="" className="block h-full w-full" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    <div className="hidden w-full min-w-0 md:block">
    <ScaledArtboard designWidth={1280} designHeight={960}>
    <section className="relative mx-auto h-[960px] w-[1280px] overflow-hidden">
      {/* Title */}
      <h2 className="absolute left-1/2 top-[85px] w-[464px] -translate-x-1/2 text-center font-geist text-[34px] font-semibold leading-[44px] tracking-[0.25px] text-dark">
        Recognition Along the Way
      </h2>

      {/* Subtitle */}
      <p className="absolute left-[calc(50%+3px)] top-[145px] w-[624px] -translate-x-1/2 text-center font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-dark">
        Designing the future of intelligent experiences. In just three years at
        Yellow.ai, I&apos;ve grown from Designer to Senior Designer —
        transforming complex systems into intuitive, scalable products. Blending
        technical depth with bold creativity, I build user-centric solutions that
        drive real impact, earning four Best Designer awards along the journey.
      </p>

      <div
        ref={cardsRef}
        className="absolute inset-0"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >

      {/* === Card D: far left, -1deg === */}
      <div className="group absolute left-[-38px] top-[369.77px] flex h-[355.811px] w-[342.057px] items-center justify-center hover:z-50">
        <div className="rotate-[1deg] transition-transform duration-300 ease-out group-hover:rotate-0 group-hover:scale-105" style={{ filter: cardShadow }}>
          <div className="relative h-[350px] w-[336px]" style={{ clipPath: cardClipPath }}>
            <img src={bg4} alt="" className="absolute inset-0 block h-full w-full" />
            <div className="absolute left-[-96px] top-[14.5px] flex h-[377px] w-[427px] items-center justify-center" style={{ transform: "scaleY(-1) rotate(180deg)" }}>
              <img src={wave4} alt="" className="block h-[89.66%] w-[94.79%]" />
            </div>
            <div className="absolute left-[30.38px] top-[36.01px] flex w-[276px] flex-col gap-[10px] text-dark">
              <p className="font-source-sans text-[22px] font-semibold uppercase leading-normal">Best designer</p>
              <p className="font-geist text-[14px] font-normal leading-[18px] tracking-[0.1px]">Q4 2023 for driving impactful design improvements across Goal Node, API Simplification, &amp; Knowledge Base</p>
            </div>
            <div className="absolute left-[28.53px] top-[141.91px] h-[173px] w-[284px] overflow-hidden rounded-[12px]">
              <img src={photo4} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-[6px] right-[7px] h-[38px] w-[38px]" style={{ transform: "scaleY(-1)" }}>
              <img src={badge4} alt="" className="block h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* === Card E: left-center, 10deg === */}
      <div className="group absolute left-[calc(8.33%+96.53px)] top-[314.16px] flex h-[403.029px] w-[391.672px] items-center justify-center hover:z-50">
        <div className="-rotate-[10deg] transition-transform duration-300 ease-out group-hover:rotate-0 group-hover:scale-105" style={{ filter: cardShadow }}>
          <div className="relative h-[350px] w-[336px]" style={{ clipPath: cardClipPath }}>
            <img src={bg5} alt="" className="absolute inset-0 block h-full w-full" />
            <div className="absolute left-[-96px] top-[14.5px] h-[377px] w-[427px]">
              <img src={wave5} alt="" className="absolute inset-[3.56%_0.34%_6.43%_4.87%] block h-auto w-auto" />
            </div>
            <div className="absolute left-[28.61px] top-[21.19px] flex w-[276px] flex-col gap-[10px] text-dark">
              <p className="font-source-sans text-[22px] font-semibold uppercase leading-normal">Best designer</p>
              <p className="font-geist text-[14px] font-normal leading-[18px] tracking-[0.1px]">Q1 2025 for leading design initiatives across Gen AI, Copilot Experience, Website, and Access Control.</p>
            </div>
            <div className="absolute left-[23.19px] top-[126.76px] h-[173px] w-[284px] overflow-hidden rounded-[12px]">
              <img src={photo5} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-[6px] right-[7px] h-[38px] w-[38px]" style={{ transform: "scaleY(-1)" }}>
              <img src={badge5} alt="" className="block h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* === Card C: center-left, 8deg === */}
      <div className="group absolute left-[calc(33.33%+69.92px)] top-[351px] flex h-[393.356px] w-[381.441px] items-center justify-center hover:z-50">
        <div className="-rotate-[8deg] transition-transform duration-300 ease-out group-hover:rotate-0 group-hover:scale-105" style={{ filter: cardShadow }}>
          <div className="relative h-[350px] w-[336px]" style={{ clipPath: cardClipPath }}>
            <img src={bg3} alt="" className="absolute inset-0 block h-full w-full" />
            <div className="absolute left-[-36px] top-[-175.5px] flex h-[388.5px] w-[427px] items-center justify-center" style={{ transform: "rotate(180deg)" }}>
              <img src={wave3} alt="" className="block h-[94.7%] w-[94.79%]" />
            </div>
            <div className="absolute left-[31.08px] top-[31.01px] flex w-[276px] flex-col gap-[10px] text-dark">
              <p className="font-source-sans text-[22px] font-semibold uppercase leading-normal">Quick designer</p>
              <p className="font-geist text-[14px] font-normal leading-[18px] tracking-[0.1px]">Q4 2022 for driving impactful design improvements across Inbox &amp; Studio Builder</p>
            </div>
            <div className="absolute left-[32.71px] top-[130.41px] h-[173px] w-[284px] overflow-hidden rounded-[12px]">
              <img src={photo3} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-[6px] right-[7px] h-[38px] w-[38px]" style={{ transform: "scaleY(-1)" }}>
              <img src={badge3} alt="" className="block h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* === Card B: center-right, -8deg === */}
      <div className="group absolute left-[calc(58.33%+67.64px)] top-[311px] flex h-[393.356px] w-[381.441px] items-center justify-center hover:z-50">
        <div className="rotate-[8deg] transition-transform duration-300 ease-out group-hover:rotate-0 group-hover:scale-105" style={{ filter: cardShadow }}>
          <div className="relative h-[350px] w-[336px]" style={{ clipPath: cardClipPath }}>
            <img src={bg2} alt="" className="absolute inset-0 block h-full w-full" />
            <div className="absolute left-[-96px] top-[14.5px] flex h-[377px] w-[427px] items-center justify-center" style={{ transform: "scaleY(-1) rotate(180deg)" }}>
              <img src={wave2} alt="" className="block h-[89.66%] w-[94.79%]" />
            </div>
            <div className="absolute left-[30.13px] top-[31.07px] flex w-[276px] flex-col gap-[10px] text-dark opacity-80">
              <p className="font-source-sans text-[22px] font-semibold uppercase leading-normal">Hackathon winner</p>
              <p className="font-geist text-[14px] font-normal leading-[18px] tracking-[0.1px]">Winner – Hackathon for conceptualizing and building an innovative Prompt Debugger solution.</p>
            </div>
            <div className="absolute left-[30.98px] top-[131.72px] h-[173px] w-[284px] overflow-hidden rounded-[12px]">
              <img src={photo2} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-[6px] right-[7px] h-[38px] w-[38px]" style={{ transform: "scaleY(-1)" }}>
              <img src={badge2} alt="" className="block h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* === Card A: far right, 0deg === */}
      <div className="group absolute left-[calc(91.67%-68.31px)] top-[360.68px] h-[350px] w-[336px] transition-transform duration-300 ease-out hover:z-50 hover:scale-105" style={{ filter: cardShadow }}>
        <div className="relative h-full w-full" style={{ clipPath: cardClipPath }}>
        <img src={bg1} alt="" className="absolute inset-0 block h-full w-full" />
        <div className="absolute left-[-193.62px] top-[-195.53px] flex h-[716.716px] w-[691.741px] items-center justify-center" style={{ transform: "scaleY(-1) rotate(130.86deg)" }}>
          <img src={wave1} alt="" className="block h-[60.78%] w-[89.84%]" />
        </div>
        <div className="absolute left-[38.06px] top-[25.46px] flex w-[276px] flex-col gap-[10px] text-dark">
          <p className="font-source-sans text-[22px] font-semibold uppercase leading-normal">Best designer</p>
          <p className="font-geist text-[14px] font-normal leading-[18px] tracking-[0.1px]">Q3 2024 for elevating the Inbox experience and enhancing Studio Builder with intuitive, scalable design solutions.</p>
        </div>
        <div className="absolute left-[37.44px] top-[141.38px] h-[173px] w-[284px] overflow-hidden">
          <img src={photo1} alt="" className="absolute left-[-1.94%] top-0 h-full w-[104.21%] max-w-none" />
        </div>
        <div className="absolute bottom-[6px] right-[7px] h-[38px] w-[38px]" style={{ transform: "scaleY(-1)" }}>
          <img src={badge1} alt="" className="block h-full w-full" />
        </div>
        </div>
      </div>
      </div>
    </section>
    </ScaledArtboard>
    </div>
    </section>
  );
}
