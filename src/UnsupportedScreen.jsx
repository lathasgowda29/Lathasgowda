import illustrationUrl from "./assets/narrow-screen-illustration.png";

/** Figma: “About” narrow frame — text left, illustration right (890:41570 / 891:42272–891:42290). */
export default function UnsupportedScreen() {
  return (
    <div className="min-h-[100dvh] bg-white p-6 min-[600px]:px-9 min-[600px]:py-8">
      <div
        className={[
          "mx-auto flex w-full max-w-[1200px] min-h-[calc(100dvh-3rem)]",
          "flex-col items-center justify-center gap-8",
          "min-[600px]:min-h-[calc(100dvh-4rem)] min-[600px]:flex-row min-[600px]:items-center min-[600px]:justify-center min-[600px]:gap-10",
        ].join(" ")}
      >
        <div
          className={[
            "flex w-full max-w-[min(100%,432.6px)] shrink-0 flex-col gap-[22.4px]",
            "order-2 items-center text-center min-[600px]:order-1 min-[600px]:max-w-[294px] min-[600px]:items-start min-[600px]:text-left",
          ].join(" ")}
        >
          <h1
            className="w-full font-geist text-[24px] font-semibold leading-[28px] text-dark"
            style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
          >
            Designed for a bigger screen
          </h1>
          <p
            className="w-[277.2px] max-w-full font-roboto text-[11.2px] font-normal leading-[15.4px] tracking-[0.105px] text-[#60686d]"
            style={{
              fontVariationSettings: "'wdth' 100",
              fontFeatureSettings: "'lnum' 1, 'pnum' 1, 'frac' 1",
            }}
          >
            For the best experience, use a desktop or a screen wider than
            1000px. Mobile version is on the way
          </p>
        </div>

        <div className="order-1 flex w-full max-w-[432.6px] shrink-0 items-center justify-center min-[600px]:order-2 min-[600px]:w-auto">
          <img
            src={illustrationUrl}
            alt=""
            className="block h-auto w-full max-w-[432.6px] object-contain object-center"
            width={433}
            height={476}
          />
        </div>
      </div>
    </div>
  );
}
