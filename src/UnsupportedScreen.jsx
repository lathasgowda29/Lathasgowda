import illustrationUrl from "./assets/unsupported-illustration.png";

const ILLU_W = 433;
const ILLU_H = 476;

export default function UnsupportedScreen() {
  return (
    <div className="min-h-[100dvh] bg-white px-[36px] py-8">
      <div
        className={[
          "mx-auto flex w-full max-w-full min-h-[calc(100dvh-4rem)]",
          // Narrow: text left, image right, vertically centered
          "flex-row items-center justify-center gap-6 min-[400px]:gap-8",
          // Wider: image top, text below with 8px between blocks
          "min-[480px]:flex-col min-[480px]:items-center min-[480px]:gap-2",
        ].join(" ")}
      >
        <div className="flex min-w-0 max-w-[294px] flex-[0_1_294px] flex-col items-start gap-[22.4px] min-[480px]:order-2 min-[480px]:flex-none min-[480px]:w-full min-[480px]:max-w-[294px]">
          <h1
            className="w-full font-source-sans text-[28px] font-semibold leading-[29px] tracking-[0.4306px] text-dark"
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
            1024px. Mobile version is on the way
          </p>
        </div>

        <div className="m-4 min-[480px]:mb-0 shrink-0 min-[480px]:order-1">
          <img
            src={illustrationUrl}
            alt=""
            className="block h-[476px] w-[433px] object-contain object-center"
            width={ILLU_W}
            height={ILLU_H}
          />
        </div>
      </div>
    </div>
  );
}
