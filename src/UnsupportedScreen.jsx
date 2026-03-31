/** Figma: Fig — https://www.figma.com/design/RGSPJHsXADunB8qnzVjxSC/Latha?node-id=891-42290 */
import illustrationUrl from "./assets/unsupported-illustration.png";

const ILLU_W = 433;
const ILLU_H = 476;

/**
 * Below 1024px: “Designed for a bigger screen” (Figma 890:41570 tablet, 932:13706 mobile).
 * 700px–1023px: row, text left / illustration right.
 * Under 700px: column, centered, smaller illustration.
 */
export default function UnsupportedScreen() {
  return (
    <div className="min-h-[100dvh] bg-white px-[36px] py-8">
      <div
        className={[
          "mx-auto flex w-full max-w-full min-h-[calc(100dvh-4rem)]",
          "flex-col items-center justify-center gap-6",
          "min-[700px]:flex-row min-[700px]:items-center min-[700px]:justify-center min-[700px]:gap-8",
        ].join(" ")}
      >
        <div
          className={[
            "flex min-w-0 max-w-[294px] flex-col gap-[22.4px]",
            "items-center text-center max-[699px]:order-2",
            "min-[700px]:items-start min-[700px]:text-left",
          ].join(" ")}
        >
          <h1 className="w-full font-geist text-[24px] font-semibold leading-[28px] text-dark">
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

        <div
          className={[
            "shrink-0 max-[699px]:order-1",
            "max-[699px]:w-[min(346px,85vw)]",
            "min-[700px]:w-[min(433px,calc(100vw-380px))]",
          ].join(" ")}
        >
          <img
            src={illustrationUrl}
            alt=""
            className="block h-auto w-full object-contain object-center"
            width={ILLU_W}
            height={ILLU_H}
            style={{ aspectRatio: `${ILLU_W} / ${ILLU_H}` }}
          />
        </div>
      </div>
    </div>
  );
}
