export default function SiteCta() {
  return (
    <section className="w-full">
      <div className="mx-auto flex min-h-[276px] w-full max-w-[1120px] flex-col justify-center rounded-[24px] bg-teal-dark px-6 py-10 lg:h-[276px] lg:px-10 lg:py-0">
        <h2 className="w-full max-w-[90vw] font-geist text-[26px] font-semibold leading-[32px] tracking-[0.25px] text-white lg:whitespace-nowrap lg:text-[34px] lg:leading-[44px]">
          Let&apos;s Build Better, Together.
        </h2>
        <p className="mt-4 w-full max-w-[368px] font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-white">
          Every product is unique. That&apos;s why I design tailored solutions
          that align with your goals and deliver real results.
        </p>
        <a
          href="mailto:lathasgowda29@gmail.com"
          className="mt-6 w-fit rounded-[14px] bg-teal px-4 py-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-colors duration-200 hover:bg-teal-dark"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}
