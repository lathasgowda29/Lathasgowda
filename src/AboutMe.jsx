import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logoUrl from "./assets/logo.svg";

// Profile image from Figma design (asset expires in 7 days — replace with local asset if needed)
const imgProfile =
  "https://www.figma.com/api/mcp/asset/2bb09690-0cb8-4117-9ec3-168aa5c78f91";

function Navbar() {
  return (
    <nav className="mx-auto flex min-h-[60px] w-full max-w-[589px] flex-wrap items-center justify-center gap-y-2 rounded-[70px] bg-white px-3 py-2 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.2)] sm:flex-nowrap sm:justify-start sm:px-6 sm:py-0">
      <Link to="/">
        <img src={logoUrl} alt="Logo" className="h-8 w-8 shrink-0" />
      </Link>

      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-0 sm:ml-[97px] sm:flex-none sm:justify-start">
        <Link
          to="/"
          className="px-2 font-source-sans text-sm font-normal leading-6 tracking-[0.25px] text-dark"
        >
          Home
        </Link>
        <Link
          to="/case-studies/gen-ai"
          className="px-2 font-source-sans text-sm font-normal leading-6 tracking-[0.25px] text-dark"
        >
          Case studies
        </Link>
        <Link
          to="/case-studies/about-me"
          className="px-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-teal"
        >
          About me
        </Link>
        <a
          href="mailto:lathalaav6@gmail.com"
          className="px-2 font-source-sans text-sm font-normal leading-6 tracking-[0.25px] text-dark"
        >
          Contact
        </a>
      </div>

      <a href="https://drive.google.com/file/d/1DA3bWyLAUIbS1uXnKu466CxsajH9Engd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="ml-0 shrink-0 rounded-[14px] border border-teal bg-white px-4 py-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-dark sm:ml-auto">
        Resume
      </a>
    </nav>
  );
}

function AboutHeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10 px-4 pt-[62px] md:flex-row md:items-center md:gap-[88px]">
      {/* Profile image — left side */}
      <div className="h-[min(60vw,400px)] w-full max-w-[516px] shrink-0 overflow-hidden rounded-[24px] sm:h-[480px] md:h-[682px] md:w-[516px]">
        <img
          src={imgProfile}
          alt="Latha"
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* Text content — right side */}
      <div className="flex min-w-0 flex-1 flex-col gap-[20px]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="font-geist text-[32px] font-semibold leading-[40px] text-dark md:text-[48px] md:leading-[54px]">
            I'm Latha !
          </h1>
          <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-[#0c4f60]">
            Senior product designer at yellow.ai
          </p>
        </div>
        <div className="flex flex-col gap-4 font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-dark">
          <p>
            I'm a Senior Product Designer at Yellow.ai with over 4+ years of
            experience designing user-centered digital products. I focus on
            creating experiences that are functional, scalable, and visually
            refined.
          </p>
          <p>
            My approach to design is rooted in curiosity and problem-solving. I
            enjoy breaking down complex systems and transforming them into
            clear, intuitive experiences through thoughtful design.
          </p>
        </div>
        <a
          href="mailto:lathalaav6@gmail.com"
          className="mt-2 w-fit rounded-[14px] bg-teal px-4 py-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-colors duration-200 hover:bg-teal-dark"
        >
          Lets connect
        </a>
      </div>
    </section>
  );
}

// Design journey timeline from Figma (asset expires in 7 days — replace with local asset if needed)
const imgAboutDesignJourney =
  "https://www.figma.com/api/mcp/asset/9103e8d4-072d-417b-865c-62925a5a58ea";

function DesignJourneySection() {
  return (
    <section className="mx-auto flex w-full max-w-[1120px] flex-col gap-10 px-4 pb-[120px] pt-[120px] lg:flex-row lg:gap-[80px]">
      {/* Left: Intro text */}
      <div className="w-full min-w-0 shrink-0 lg:w-[300px]">
        <h2 className="font-geist text-[28px] font-semibold leading-[36px] tracking-[0.25px] text-dark sm:text-[34px] sm:leading-[44px]">
          Design Journey at Yellow.ai
        </h2>
        <p className="mt-5 font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          Over the past 4+ years at Yellow.ai, I&apos;ve grown from a design intern
          to a Senior Product Designer. This journey has shaped how I approach
          complex product challenges, collaborate with teams, and design
          scalable user experiences.
        </p>
      </div>

      {/* Right: Timeline image from Figma */}
      <div className="relative min-h-[min(280px,50vh)] w-full flex-1 lg:min-h-[724px]">
        <img
          src={imgAboutDesignJourney}
          alt="Design journey at Yellow.ai — Intern to Sr. Product Design"
          className="h-full w-full max-w-full object-contain lg:max-w-[708px]"
        />
      </div>
    </section>
  );
}

function AboutAchievementCardsSection() {
  const bg1 = new URL("./assets/journey/card-bg-1.svg", import.meta.url).href;
  const bg2 = new URL("./assets/journey/card-bg-2.svg", import.meta.url).href;
  const bg3 = new URL("./assets/journey/card-bg-3.svg", import.meta.url).href;
  const bg4 = new URL("./assets/journey/card-bg-4.svg", import.meta.url).href;
  const bg5 = new URL("./assets/journey/card-bg-5.svg", import.meta.url).href;
  const wave1 = new URL("./assets/journey/wave-1.svg", import.meta.url).href;
  const wave2 = new URL("./assets/journey/wave-2.svg", import.meta.url).href;
  const wave3 = new URL("./assets/journey/wave-3.svg", import.meta.url).href;
  const wave4 = new URL("./assets/journey/wave-4.svg", import.meta.url).href;
  const wave5 = new URL("./assets/journey/wave-5.svg", import.meta.url).href;
  const badge1 = new URL("./assets/journey/badge-1.svg", import.meta.url).href;
  const badge2 = new URL("./assets/journey/badge-2.svg", import.meta.url).href;
  const badge3 = new URL("./assets/journey/badge-3.svg", import.meta.url).href;
  const badge4 = new URL("./assets/journey/badge-4.svg", import.meta.url).href;
  const badge5 = new URL("./assets/journey/badge-5.svg", import.meta.url).href;
  const photo1 = new URL("./assets/journey/photo-1.jpg", import.meta.url).href;
  const photo2 = new URL("./assets/journey/photo-2.jpg", import.meta.url).href;
  const photo3 = new URL("./assets/journey/photo-3.jpg", import.meta.url).href;
  const photo4 = new URL("./assets/journey/photo-4.jpg", import.meta.url).href;
  const photo5 = new URL("./assets/journey/photo-5.jpg", import.meta.url).href;

  const cardClipPath =
    "path('M0 16C0 7.16344 7.16344 0 16 0H320C328.837 0 336 7.16344 336 16V292.373C336 296.616 334.314 300.686 331.314 303.686L289.686 345.314C286.686 348.314 282.616 350 278.373 350H16C7.16344 350 0 342.837 0 334V16Z')";
  const cardShadow =
    "drop-shadow(0px 6px 25px rgba(0,0,0,0.08)) drop-shadow(0px 0px 2px rgba(0,0,0,0.5))";

  const cardsRef = useRef(null);
  const offsetRef = useRef(0);
  const directionRef = useRef(-1);
  const pausedRef = useRef(false);
  const lastManualRef = useRef(0);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    let animId;
    const speed = 0.3;
    const maxDrift = 150;
    const resumeDelay = 2000;

    const animate = () => {
      const now = Date.now();
      if (!pausedRef.current && now - lastManualRef.current > resumeDelay) {
        offsetRef.current += speed * directionRef.current;
        if (offsetRef.current <= -maxDrift) directionRef.current = 1;
        if (offsetRef.current >= 0) directionRef.current = -1;
        el.style.transform = `translateX(${offsetRef.current}px)`;
      }
      animId = requestAnimationFrame(animate);
    };

    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        lastManualRef.current = Date.now();
        offsetRef.current = Math.max(
          -maxDrift,
          Math.min(0, offsetRef.current - e.deltaX)
        );
        el.style.transform = `translateX(${offsetRef.current}px)`;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const journeyMobileItems = [
    {
      label: "Best designer",
      body: "Q4 2023 for driving impactful design improvements across Goal Node, API Simplification, & Knowledge Base",
      photo: photo4,
    },
    {
      label: "Best designer",
      body: "Q1 2025 for leading design initiatives across Gen AI, Copilot Experience, Website, and Access Control.",
      photo: photo5,
    },
    {
      label: "Quick designer",
      body: "Q4 2022 for driving impactful design improvements across Inbox & Studio Builder",
      photo: photo3,
    },
    {
      label: "Hackathon winner",
      body: "Winner – Hackathon for conceptualizing and building an innovative Prompt Debugger solution.",
      photo: photo2,
    },
    {
      label: "Best designer",
      body: "Q3 2024 for elevating the Inbox experience and enhancing Studio Builder with intuitive, scalable design solutions.",
      photo: photo1,
    },
  ];

  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 pb-16 pt-8">
      <div className="flex flex-col gap-8 lg:hidden">
        <h2 className="text-center font-geist text-[28px] font-semibold leading-[36px] tracking-[0.25px] text-dark sm:text-[34px] sm:leading-[44px]">
          My journey at yellow
        </h2>
        <p className="mx-auto max-w-[624px] text-center font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-dark">
          Designing the future of intelligent experiences. In just three years at
          Yellow.ai, I&apos;ve grown from Designer to Senior Designer —
          transforming complex systems into intuitive, scalable products. Blending
          technical depth with bold creativity, I build user-centric solutions that
          drive real impact, earning four Best Designer awards along the journey.
        </p>
        <div className="flex flex-col gap-6">
          {journeyMobileItems.map((item, idx) => (
            <article
              key={idx}
              className="flex min-w-0 flex-col gap-3 rounded-[24px] border border-teal/25 bg-warm-white p-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.08)]"
            >
              <p className="font-source-sans text-[18px] font-semibold uppercase leading-normal text-dark">
                {item.label}
              </p>
              <p className="font-geist text-[14px] font-normal leading-[18px] tracking-[0.1px] text-dark">
                {item.body}
              </p>
              <div className="h-[160px] w-full min-w-0 overflow-hidden rounded-[12px] sm:h-[200px]">
                <img src={item.photo} alt="" className="h-full w-full object-cover" />
              </div>
            </article>
          ))}
        </div>
      </div>

    <div className="hidden w-full min-w-0 overflow-x-auto lg:flex lg:justify-center">
    <section className="relative mx-auto h-[960px] w-[1280px] min-w-[1280px] shrink-0 overflow-hidden px-4">
      {/* Title — same layout as Home JourneySection */}
      <h2 className="absolute left-1/2 top-[85px] w-[464px] max-w-[calc(100%-32px)] -translate-x-1/2 text-center font-geist text-[34px] font-semibold leading-[44px] tracking-[0.25px] text-dark">
        My journey at yellow
      </h2>

      {/* Subtitle */}
      <p className="absolute left-1/2 top-[145px] w-[624px] max-w-[calc(100%-32px)] -translate-x-1/2 text-center font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-dark">
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
        {/* Card D: far left */}
        <div className="group absolute left-[-38px] top-[369.77px] flex h-[355.811px] w-[342.057px] items-center justify-center hover:z-50">
          <div
            className="rotate-[1deg] transition-transform duration-300 ease-out group-hover:rotate-0 group-hover:scale-105"
            style={{ filter: cardShadow }}
          >
            <div className="relative h-[350px] w-[336px]" style={{ clipPath: cardClipPath }}>
              <img src={bg4} alt="" className="absolute inset-0 block h-full w-full" />
              <div
                className="absolute left-[-96px] top-[14.5px] flex h-[377px] w-[427px] items-center justify-center"
                style={{ transform: "scaleY(-1) rotate(180deg)" }}
              >
                <img src={wave4} alt="" className="block h-[89.66%] w-[94.79%]" />
              </div>
              <div className="absolute left-[30.38px] top-[36.01px] flex w-[276px] flex-col gap-[10px] text-dark">
                <p className="font-source-sans text-[22px] font-semibold uppercase leading-normal">
                  Best designer
                </p>
                <p className="font-geist text-[14px] font-normal leading-[18px] tracking-[0.1px]">
                  Q4 2023 for driving impactful design improvements across Goal Node, API Simplification, &amp; Knowledge Base
                </p>
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

        {/* Card E: left-center */}
        <div className="group absolute left-[calc(8.33%+96.53px)] top-[314.16px] flex h-[403.029px] w-[391.672px] items-center justify-center hover:z-50">
          <div
            className="-rotate-[10deg] transition-transform duration-300 ease-out group-hover:rotate-0 group-hover:scale-105"
            style={{ filter: cardShadow }}
          >
            <div className="relative h-[350px] w-[336px]" style={{ clipPath: cardClipPath }}>
              <img src={bg5} alt="" className="absolute inset-0 block h-full w-full" />
              <div className="absolute left-[-96px] top-[14.5px] h-[377px] w-[427px]">
                <img src={wave5} alt="" className="absolute inset-[3.56%_0.34%_6.43%_4.87%] block h-auto w-auto" />
              </div>
              <div className="absolute left-[28.61px] top-[21.19px] flex w-[276px] flex-col gap-[10px] text-dark">
                <p className="font-source-sans text-[22px] font-semibold uppercase leading-normal">
                  Best designer
                </p>
                <p className="font-geist text-[14px] font-normal leading-[18px] tracking-[0.1px]">
                  Q1 2025 for leading design initiatives across Gen AI, Copilot Experience, Website, and Access Control.
                </p>
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

        {/* Card C: center-left */}
        <div className="group absolute left-[calc(33.33%+69.92px)] top-[351px] flex h-[393.356px] w-[381.441px] items-center justify-center hover:z-50">
          <div
            className="-rotate-[8deg] transition-transform duration-300 ease-out group-hover:rotate-0 group-hover:scale-105"
            style={{ filter: cardShadow }}
          >
            <div className="relative h-[350px] w-[336px]" style={{ clipPath: cardClipPath }}>
              <img src={bg3} alt="" className="absolute inset-0 block h-full w-full" />
              <div
                className="absolute left-[-36px] top-[-175.5px] flex h-[388.5px] w-[427px] items-center justify-center"
                style={{ transform: "rotate(180deg)" }}
              >
                <img src={wave3} alt="" className="block h-[94.7%] w-[94.79%]" />
              </div>
              <div className="absolute left-[31.08px] top-[31.01px] flex w-[276px] flex-col gap-[10px] text-dark">
                <p className="font-source-sans text-[22px] font-semibold uppercase leading-normal">
                  Quick designer
                </p>
                <p className="font-geist text-[14px] font-normal leading-[18px] tracking-[0.1px]">
                  Q4 2022 for driving impactful design improvements across Inbox &amp; Studio Builder
                </p>
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

        {/* Card B: center-right */}
        <div className="group absolute left-[calc(58.33%+67.64px)] top-[311px] flex h-[393.356px] w-[381.441px] items-center justify-center hover:z-50">
          <div
            className="rotate-[8deg] transition-transform duration-300 ease-out group-hover:rotate-0 group-hover:scale-105"
            style={{ filter: cardShadow }}
          >
            <div className="relative h-[350px] w-[336px]" style={{ clipPath: cardClipPath }}>
              <img src={bg2} alt="" className="absolute inset-0 block h-full w-full" />
              <div
                className="absolute left-[-96px] top-[14.5px] flex h-[377px] w-[427px] items-center justify-center"
                style={{ transform: "scaleY(-1) rotate(180deg)" }}
              >
                <img src={wave2} alt="" className="block h-[89.66%] w-[94.79%]" />
              </div>
              <div className="absolute left-[30.13px] top-[31.07px] flex w-[276px] flex-col gap-[10px] text-dark opacity-80">
                <p className="font-source-sans text-[22px] font-semibold uppercase leading-normal">
                  Hackathon winner
                </p>
                <p className="font-geist text-[14px] font-normal leading-[18px] tracking-[0.1px]">
                  Winner – Hackathon for conceptualizing and building an innovative Prompt Debugger solution.
                </p>
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

        {/* Card A: far right */}
        <div
          className="group absolute left-[calc(91.67%-68.31px)] top-[360.68px] h-[350px] w-[336px] transition-transform duration-300 ease-out hover:z-50 hover:scale-105"
          style={{ filter: cardShadow }}
        >
          <div className="relative h-full w-full" style={{ clipPath: cardClipPath }}>
            <img src={bg1} alt="" className="absolute inset-0 block h-full w-full" />
            <div
              className="absolute left-[-193.62px] top-[-195.53px] flex h-[716.716px] w-[691.741px] items-center justify-center"
              style={{ transform: "scaleY(-1) rotate(130.86deg)" }}
            >
              <img src={wave1} alt="" className="block h-[60.78%] w-[89.84%]" />
            </div>
            <div className="absolute left-[38.06px] top-[25.46px] flex w-[276px] flex-col gap-[10px] text-dark">
              <p className="font-source-sans text-[22px] font-semibold uppercase leading-normal">
                Best designer
              </p>
              <p className="font-geist text-[14px] font-normal leading-[18px] tracking-[0.1px]">
                Q3 2024 for elevating the Inbox experience and enhancing Studio Builder with intuitive, scalable design solutions.
              </p>
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
    </div>
    </section>
  );
}

function AboutCtaSection() {
  return (
    <section className="mx-auto w-full max-w-[1120px] px-4 py-[80px]">
      <div className="flex min-h-[276px] w-full flex-col justify-center rounded-[24px] bg-teal-dark px-6 py-10 md:h-[276px] md:px-10 md:py-0">
        <h2 className="w-full max-w-[90vw] font-geist text-[26px] font-semibold leading-[32px] tracking-[0.25px] text-white md:whitespace-nowrap md:text-[34px] md:leading-[44px]">
          Let&apos;s Build Better, Together.
        </h2>
        <p className="mt-4 w-full max-w-[368px] font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-white">
          Every product is unique. That&apos;s why I design tailored solutions
          that align with your goals and deliver real results.
        </p>
        <a
          href="mailto:lathalaav6@gmail.com"
          className="mt-6 w-fit rounded-[14px] bg-teal px-4 py-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}

// Footer icons from Figma (assets expire in 7 days — replace with local assets if needed)
const footerIconEmail = "https://www.figma.com/api/mcp/asset/efc137be-4607-440a-a0c4-a5de537c5aa0";
const footerIconLinkedin = "https://www.figma.com/api/mcp/asset/8f0085f2-dfa1-45dd-90ed-bf8f61b2ec45";

function AboutFooter() {
  return (
    <footer className="mx-auto w-full max-w-[1120px] px-4 pb-[40px]">
      <div className="mx-auto h-px w-full max-w-[1120px] rounded-[14px] bg-[#a4a5a7] opacity-50" />
      <div className="flex w-full flex-col items-center gap-4 px-4 pt-[40px] sm:flex-row sm:items-center sm:justify-between">
        <img src={logoUrl} alt="Latha" className="h-8 w-8" />
        <p className="flex-1 text-center font-['Inter',sans-serif] text-[14px] font-normal leading-6 tracking-[0.25px] text-dark">
          Latha © 2026
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:lathalaav6@gmail.com" className="group"><img src={footerIconEmail} alt="Email" className="h-6 w-6 transition-all duration-200 group-hover:[filter:brightness(0)_saturate(100%)]" /></a>
          <a href="https://www.linkedin.com/in/latha-s-640073119?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="group"><img src={footerIconLinkedin} alt="LinkedIn" className="h-6 w-6 transition-all duration-200 group-hover:[filter:brightness(0)_saturate(100%)]" /></a>
        </div>
      </div>
    </footer>
  );
}

export default function AboutMe() {
  return (
    <div className="min-h-screen min-w-0 bg-white">
      <div className="w-full px-4 pt-4">
        <div className="relative w-full min-h-[min(100dvh,926px)] rounded-t-[24px] bg-cream md:min-h-[926px]">
          <div className="relative min-h-[min(100dvh,920px)] px-4 pt-4 md:min-h-[920px]">
            <div className="pt-6">
              <Navbar />
            </div>

            <AboutHeroSection />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1280px]">
        <DesignJourneySection />
        <AboutAchievementCardsSection />
        <AboutCtaSection />
        <AboutFooter />
      </div>
    </div>
  );
}
