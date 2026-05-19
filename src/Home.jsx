import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import caseStudyCardWebWidget from "./assets/case-study-card-web-widget.png";
import caseStudyCardApiConfig from "./assets/case-study-card-api-config.png";
import caseStudyCardGenAi from "./assets/case-study-card-gen-ai.png";
import caseStudyCardAiCopilot from "./assets/case-study-card-ai-copilot.png";
import gradientCard1 from "./assets/gradient-card-1.png";
import gradientCard2 from "./assets/gradient-card-2.png";
import gradientCard3 from "./assets/gradient-card-3.png";
import gradientCard4 from "./assets/gradient-card-4.png";
import gradientCard5 from "./assets/gradient-card-5.png";
import gradientCard6 from "./assets/gradient-card-6.png";
import gradientCard7 from "./assets/gradient-card-7.png";
import gradientCard8 from "./assets/gradient-card-8.png";
import gradientCard9 from "./assets/gradient-card-9.png";
import SiteCta from "./components/SiteCta";
import SiteFooter from "./components/SiteFooter";
import SiteNav from "./components/SiteNav";
import {
  SITE_BELOW_FOLD_COLUMN,
} from "./components/siteBelowFoldLayout";

/**
 * Scales fixed Figma-width artboards to fit the column without horizontal scroll.
 * Outer box height/width match the scaled visual size so layout doesn't collapse.
 */
function ScaledArtboard({ designWidth, designHeight, children, className = "" }) {
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

/** Design width for "How Great Products Take Shape" — scale as a single unit below viewport. */
const PROCESS_SECTION_DESIGN_WIDTH = 1280;

/**
 * Centers a fixed-width block (max-w-7xl) and scales it with transform so it fits without horizontal scroll.
 * Outer size = design × scale; inner keeps design pixel layout.
 */
function ScaledCenteredSection({ designWidth, children, className = '' }) {
  const measureRef = useRef(null);
  const contentRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState(0);

  useEffect(() => {
    const measureEl = measureRef.current;
    const contentEl = contentRef.current;
    if (!measureEl || !contentEl) return;

    const update = () => {
      const w = measureEl.clientWidth;
      if (w <= 0) return;
      const s = Math.min(1, w / designWidth);
      setScale(s);
      setScaledHeight(contentEl.scrollHeight * s);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(measureEl);
    ro.observe(contentEl);
    return () => ro.disconnect();
  }, [designWidth]);

  const scaledW = designWidth * scale;

  return (
    <div className={`w-full max-w-7xl min-w-0 mx-auto overflow-hidden ${className}`}>
      <div ref={measureRef} className="flex w-full min-w-0 max-w-full justify-center">
        <div className="overflow-hidden" style={{ width: scaledW, height: scaledHeight }}>
          <div
            ref={contentRef}
            className="origin-top-left will-change-transform"
            style={{
              width: designWidth,
              transform: `scale(${scale})`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function AnnouncementBanner() {
  return (
    <div className="mx-auto flex min-h-9 w-full max-w-[518px] flex-col items-start gap-2 rounded-[14px] border border-teal bg-warm-white px-4 py-2 md:max-w-[510px] md:flex-row md:items-center md:gap-4 md:py-0 lg:max-w-[518px] lg:gap-6">
      <span className="min-w-0 font-source-sans text-sm font-normal leading-6 tracking-[0.25px] text-dark">
        New AI Bot Builder cut build time and boosted $15M ARR
      </span>
      <Link
        to="/case-studies/Gen AI"
        className="font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-teal transition-colors duration-200 hover:underline lg:ml-auto"
      >
        View case study →
      </Link>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="flex flex-col items-center px-0">
      <h1 className="w-full max-w-[824px] text-center font-geist text-[36px] font-semibold leading-[42px] text-dark lg:text-[48px] lg:leading-[54px]">
        Driving Product Excellence Through Strategic Design Thinking
      </h1>

      <p className="mt-[16px] w-full max-w-[620px] text-center font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-dark">
        Connecting user insights and business vision to craft digital
        experiences that balance user needs with strategic business goals.
      </p>

      <div className="mt-[20px] flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
          className="rounded-[14px] bg-teal px-4 py-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-colors duration-200 hover:bg-teal-dark"
        >
          View case studies
        </button>
        <a
          href="mailto:lathasgowda29@gmail.com"
          className="font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-teal transition-colors duration-200 hover:underline"
        >
          Lets connect
        </a>
      </div>
    </div>
  );
}

const gradientCardImages = [
  gradientCard1,
  gradientCard2,
  gradientCard3,
  gradientCard4,
  gradientCard5,
  gradientCard6,
  gradientCard7,
  gradientCard8,
  gradientCard9,
];
const IMAGE_COUNT = gradientCardImages.length;

function GradientCard() {
  const [imageIndex, setImageIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % IMAGE_COUNT);
    }, 1000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative mx-auto aspect-[1120/682] w-full min-w-0 max-w-[1120px] overflow-hidden rounded-[24px]">
      <div
        className="absolute inset-0 rounded-[24px]"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1120 682' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-1.0468e-14 53.1 -87.202 -4.3368e-15 560 586)'><stop stop-color='rgba(59,130,152,1)' offset='0'/><stop stop-color='rgba(45,103,120,1)' offset='0.20673'/><stop stop-color='rgba(31,75,88,1)' offset='0.41346'/><stop stop-color='rgba(17,48,56,1)' offset='0.62019'/><stop stop-color='rgba(10,34,40,1)' offset='0.72356'/><stop stop-color='rgba(3,20,24,1)' offset='0.82692'/></radialGradient></defs></svg>")`,
        }}
      />
      {/* 16px inset; stacked imgs + opacity crossfade (1s interval unchanged). */}
      <div className="absolute inset-4 overflow-hidden rounded-[16px]">
        {gradientCardImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${i === imageIndex ? "z-10 opacity-100" : "z-0 opacity-0"}`}
          />
        ))}
      </div>
    </div>
  );
}

const TOOLTIP_OFFSET = 12;
const PASSWORD = "2906";

function PasswordModal({ onClose, onSubmit, error }) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = () => {
    onSubmit(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
    if (e.key === "Escape") onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40" onClick={onClose}>
      <div
        className="rounded-[24px] bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-geist text-[20px] font-semibold text-dark">Enter password</h3>
        <input
          ref={inputRef}
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="mt-4 w-full rounded-[14px] border border-teal px-4 py-2 font-source-sans text-base"
          placeholder="Password"
          autoComplete="off"
        />
        {error && (
          <p className="mt-2 font-source-sans text-sm text-red-600">{error}</p>
        )}
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-[14px] bg-teal px-4 py-2 font-source-sans text-sm font-semibold text-white"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-[14px] border border-teal bg-white px-4 py-2 font-source-sans text-sm font-semibold text-dark"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function CaseStudyCard({ bg, title, description, textSide = "left", gap = "gap-4", href, imageSrc, comingSoon, passwordProtected }) {
  const navigate = useNavigate();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!comingSoon) return;
    posRef.current = { x: e.clientX, y: e.clientY };
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        setTooltipPos(posRef.current);
        rafRef.current = null;
      });
    }
  };

  const handleMouseEnter = () => {
    if (comingSoon) setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    if (comingSoon) {
      setShowTooltip(false);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    }
  };

  const handleClick = (e) => {
    if (comingSoon) e.preventDefault();
  };

  const textContent = (
    <div className={`flex min-w-0 flex-col ${gap} md:gap-2 ${gap.replace("gap-", "lg:gap-")} ${textSide === "left" ? "w-full max-w-[528px] md:max-w-none lg:w-[528px]" : "w-full max-w-[432px] md:max-w-none lg:w-[432px]"}`}>
      <h3 className="font-geist text-[20px] font-semibold leading-7 tracking-[0.15px] text-dark md:text-[17px] md:leading-6 lg:text-[20px] lg:leading-7">
        {title}
      </h3>
      <p className="font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-dark md:text-[14px] md:leading-5 lg:text-base lg:leading-6">
        {description}
      </p>
    </div>
  );

  const imagePlaceholder = (
    <div className="home-case-study-card__image h-[265px] w-full max-w-[428px] shrink-0 overflow-hidden rounded-[24px] bg-white sm:h-[280px] md:h-[260px] md:w-[300px] md:rounded-[16px] lg:h-[374px] lg:w-[428px] lg:rounded-[24px]">
      {imageSrc ? (
        <img src={imageSrc} alt="" className="h-full w-full object-cover" />
      ) : null}
    </div>
  );

  const cardContent = textSide === "left" ? (
    <>
      <div className="order-2 flex w-full min-w-0 justify-center px-4 pb-8 pt-5 md:order-1 md:items-center md:px-4 md:pb-0 md:pt-0 lg:w-auto lg:pl-[64px] lg:pr-[28px] lg:pb-0 lg:pt-0">{textContent}</div>
      <div className="order-1 flex justify-center px-4 pt-4 md:order-2 md:pt-0 md:ml-auto lg:ml-auto lg:pr-2">{imagePlaceholder}</div>
    </>
  ) : (
    <>
      <div className="order-1 flex justify-center px-4 pt-4 md:pt-0 lg:pl-2">{imagePlaceholder}</div>
      <div className="order-2 flex w-full min-w-0 justify-center px-4 pb-8 pt-5 md:items-center md:px-4 md:pb-0 md:pt-0 lg:pl-[64px] lg:pr-[64px] lg:pb-0">{textContent}</div>
    </>
  );

  const handlePasswordSubmit = (input) => {
    if (input === PASSWORD) {
      navigate(href);
      setShowPasswordModal(false);
      setPasswordError("");
    } else {
      setPasswordError("Incorrect password");
    }
  };

  const handlePasswordModalClose = () => {
    setShowPasswordModal(false);
    setPasswordError("");
  };

  if (href && !comingSoon) {
    return (
      <>
        <Link
          to={href}
          onClick={(e) => {
            if (passwordProtected) {
              e.preventDefault();
              setShowPasswordModal(true);
            }
          }}
          className={`mx-auto flex h-auto min-h-[390px] w-full max-w-[1120px] flex-col items-stretch rounded-[24px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.3)] transition-shadow duration-200 hover:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)] md:flex-row md:items-center md:min-h-0 md:py-2 md:max-w-[864px] lg:h-[390px] lg:flex-row lg:items-center lg:py-0 lg:max-w-[1120px] ${bg}`}
        >
          {cardContent}
        </Link>
        {passwordProtected && showPasswordModal && (
          <PasswordModal
            onClose={handlePasswordModalClose}
            onSubmit={handlePasswordSubmit}
            error={passwordError}
          />
        )}
      </>
    );
  }

  return (
    <div
      role={comingSoon ? "presentation" : undefined}
      className={`mx-auto flex h-auto min-h-[390px] w-full max-w-[1120px] flex-col items-stretch rounded-[24px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.3)] md:flex-row md:items-center md:min-h-0 md:py-2 md:max-w-[864px] lg:h-[390px] lg:flex-row lg:items-center lg:py-0 lg:max-w-[1120px] ${comingSoon ? "cursor-not-allowed transition-shadow duration-200 hover:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)]" : ""} ${bg}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {cardContent}
      {comingSoon && showTooltip && (
        <div
          className="pointer-events-none fixed z-[9999] -translate-x-1/2 whitespace-nowrap rounded-md bg-dark px-3 py-1.5 font-source-sans text-sm text-white shadow-lg"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y + TOOLTIP_OFFSET,
          }}
        >
          Coming soon
        </div>
      )}
    </div>
  );
}

function CaseStudiesSection() {
  return (
    <section id="case-studies" className="w-full pb-[24px] pt-[120px] lg:pt-[200px]">
      <h2 className="mx-auto w-full max-w-[464px] text-center font-geist text-[34px] font-semibold leading-[44px] tracking-[0.25px] text-dark">
        Stories of Design in Action
      </h2>
      <p className="mx-auto mt-4 w-full max-w-[624px] text-center font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-dark">
        Browse case studies revealing how design decisions shaped user journeys
        and delivered tangible business value.
      </p>

      <div className="mt-[40px] flex flex-col gap-6">
        <CaseStudyCard
          bg="bg-card-blue"
          textSide="left"
          title="From Long Prompts to Structured AI Workflows : Boosted Adoption by 61%"
          description="Redesigned prompt-heavy interactions into structured AI steps, enabling users to build dynamic conversations faster and with fewer errors."
          href="/case-studies/Gen AI"
          imageSrc={caseStudyCardGenAi}
        />
        <CaseStudyCard
          bg="bg-card-mint"
          textSide="right"
          title="Simplifying API Configuration: Reduced Setup Errors by 40%"
          description="Redesigned API selection and configuration to surface endpoint context clearly, helping users integrate faster and avoid configuration mistakes."
          href="/case-study/api-configuration"
          imageSrc={caseStudyCardApiConfig}
        />
        <CaseStudyCard
          bg="bg-card-tan"
          textSide="left"
          gap="gap-3"
          title="Redesigning Chat Widget to Improve Engagement and Discoverability"
          description="Created a more intuitive chat experience that improves feature discoverability and streamlines customer interactions."
          href="/case-study/chat-widget"
          imageSrc={caseStudyCardWebWidget}
          passwordProtected
        />
        <CaseStudyCard
          bg="bg-cream"
          textSide="right"
          gap="gap-3"
          title="Designing an AI Copilot for Faster Automation Creation"
          description="An AI assistant that helps users generate prompts and automation steps instantly, reducing friction in building workflows"
          href="/case-study/ai-copilot"
          imageSrc={caseStudyCardAiCopilot}
          comingSoon
        />
      </div>
    </section>
  );
}

const processRadarUrl = new URL("./assets/process-radar.png", import.meta.url).href;
const discoveryImageUrl = new URL("./assets/discovery-stage.png", import.meta.url).href;
const researchImageUrl = new URL("./assets/research-stage.png", import.meta.url).href;
const analysisImageUrl = new URL("./assets/analysis-stage.png", import.meta.url).href;
const iterationsImageUrl = new URL("./assets/iterations-stage.png", import.meta.url).href;
const PROCESS_CARDS = [
  {
    title: "Design Depth Across Every Stage",
    description:
      "Whether you need a lean MVP or a fully fleshed-out product, I adapt my process to match your ambition balancing speed, insight, and polish.",
    image: processRadarUrl,
    imageAlt: "Design process stages: Discovery, Research, Analysis, Implement, Validate, Iterations",
    layout: "imageLeft",
    useTealBg: false,
  },
  {
    title: "Discovery",
    description:
      'Early alignment with stakeholders to define the "why" behind the product, ensuring clarity before a single pixel is pushed.',
    image: discoveryImageUrl,
    imageAlt: "Discovery stage: stakeholder alignment and product definition",
    layout: "imageRight",
    useTealBg: true,
  },
  {
    title: "Research",
    description:
      "I dig deep into user behavior and business needs through interviews, surveys, and competitor analysis to uncover real insights.",
    image: researchImageUrl,
    imageAlt: "Research stage: user interviews, surveys, and competitor analysis",
    layout: "imageLeft",
    useTealBg: true,
    imageContainerBg: "teal",
  },
  {
    title: "Analysis",
    description:
      "I translate findings into clear problem statements, user personas, and opportunity maps to shape a focused direction.",
    image: analysisImageUrl,
    imageAlt: "Analysis stage: problem statements, user personas, and opportunity maps",
    layout: "imageRight",
    useTealBg: true,
  },
  {
    title: "Implement",
    description:
      "From wireframes to high-fidelity UI, I turn concepts into functional, developer-ready designs optimized for usability and scalability.",
    image: new URL("./assets/Implement.png", import.meta.url).href,
    imageAlt: "Implement stage: wireframes to high-fidelity UI",
    layout: "imageLeft",
    useTealBg: true,
    mainCardBg: "#0f6378",
    imageContainerBg: "teal-mid",
    useImplementBg: true,
  },
  {
    title: "Validate",
    description:
      "Usability tests, click data, and feedback loops help ensure the solution solves the right problem—before launch.",
    image: new URL("./assets/Validate.png", import.meta.url).href,
    imageAlt: "Validate stage: usability tests, click data, and feedback loops",
    layout: "imageRight",
    useTealBg: true,
    mainCardBg: "#0f6378",
    imageContainerBg: "teal-mid",
    useImplementBg: true,
  },
  {
    title: "Iterations",
    description:
      "Design is never done. I refine continuously, guided by metrics, user feedback, and business evolution.",
    image: iterationsImageUrl,
    imageAlt: "Iterations stage: continuous refinement",
    layout: "imageLeft",
    useTealBg: true,
    mainCardBg: "#5ea2b9",
    imageContainerBg: "teal-light",
    useIterationsBg: true,
  },
];

function processMainCardBg(card) {
  return card.mainCardBg || (card.useTealBg ? "#093B48" : "#031418");
}

function processDeckBackLayerColors(card) {
  const c = card;
  return [
    c.useIterationsBg ? "#093B48" : c.useImplementBg ? "#0F6378" : c.useTealBg ? "#A2E6FE" : "#A2E6FE",
    c.useIterationsBg ? "#0F6378" : c.useImplementBg ? "#031418" : c.useTealBg ? "#5EA2B9" : "#5EA2B9",
    c.useIterationsBg ? "#031418" : c.useImplementBg ? "#A2E6FE" : c.useTealBg ? "#0F6378" : "#0F6378",
    c.useIterationsBg ? "#A2E6FE" : c.useImplementBg ? "#5EA2B9" : c.useTealBg ? "#093B48" : "#093B48",
  ];
}

function processMobileImageFrameClass(card) {
  if (!card.useTealBg) return "bg-[#113b43]";
  if (card.layout === "imageRight") {
    return card.imageContainerBg === "teal-mid" ? "bg-teal-mid" : "bg-teal";
  }
  if (card.imageContainerBg === "teal-mid") return "bg-teal-mid";
  if (card.imageContainerBg === "teal") return "bg-teal";
  if (card.imageContainerBg === "teal-light") return "bg-teal-light";
  return "bg-teal-dark";
}

/** Desktop 1120×515 card interior — used in scroll-linked dual layers */
function ProcessDesktopCardFace({ card }) {
  if (card.layout === "imageRight") {
    return (
      <>
        <div className="flex w-[448px] flex-col gap-5 pl-[80px] pt-[192px] text-white">
          <h3 className="font-geist text-[24px] font-semibold leading-7">{card.title}</h3>
          <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">{card.description}</p>
        </div>
        <div
          className={`ml-auto mr-2 mt-2 mb-2 flex h-[499px] w-[428px] shrink-0 items-center justify-center overflow-hidden rounded-[24px] p-3 ${card.imageContainerBg === "teal-mid" ? "bg-teal-mid" : "bg-teal"}`}
        >
          <img src={card.image} alt={card.imageAlt} className="size-full rounded-[16px] object-cover" />
        </div>
      </>
    );
  }
  return (
    <>
      <div
        className={`m-2 flex h-[499px] w-[428px] shrink-0 items-center justify-center overflow-hidden rounded-[24px] ${card.imageContainerBg === "teal" ? "bg-teal p-2" : card.imageContainerBg === "teal-mid" ? "bg-teal-mid p-2" : card.imageContainerBg === "teal-light" ? "bg-teal-light p-2" : "bg-teal-dark"}`}
      >
        <img
          src={card.image}
          alt={card.imageAlt}
          className={card.imageContainerBg === "teal" || card.imageContainerBg === "teal-mid" || card.imageContainerBg === "teal-light" ? "size-full rounded-[16px] object-cover" : "max-h-full max-w-full object-contain"}
        />
      </div>
      <div className="flex w-[413px] flex-col justify-center gap-[21px] pl-[64px] text-white">
        <h3 className="font-geist text-[24px] font-semibold leading-7">{card.title}</h3>
        <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">{card.description}</p>
      </div>
    </>
  );
}

const PROCESS_STACK_GAP_PX = 12;

/** Mobile process card — Figma node 1106:9831 */
const MOBILE_PROCESS_CARD_W = 357;
const MOBILE_PROCESS_DECK_H = 579;
const MOBILE_PROCESS_IMG_W = 283;
const MOBILE_PROCESS_IMG_H = 226;
const MOBILE_PROCESS_IMAGE_FRAME_H = 268;
const MOBILE_PROCESS_IMAGE_FRAME_W = 341;
const MOBILE_PROCESS_TEXT_MAX_W = 325;
const MOBILE_PROCESS_BACK_LAYERS = [
  { left: 64, top: 66, width: 229, height: 513 },
  { left: 48, top: 92, width: 261, height: 471 },
  { left: 32, top: 60, width: 293, height: 487 },
  { left: 16, top: 30, width: 325, height: 501 },
];

/**
 * Stacked deck per slot (0 = top / active). Replace with Inspect values from Figma node 2:58628
 * (file chQqUkCHyI08kdqDolaXun) when available — spacing uses PROCESS_STACK_GAP_PX steps.
 */
const PROCESS_STACK_LAYER_SPECS = [
  { y: 0, scale: 1, opacity: 1 },
  { y: PROCESS_STACK_GAP_PX * 1, scale: 0.96, opacity: 0.93 },
  { y: PROCESS_STACK_GAP_PX * 2, scale: 0.92, opacity: 0.86 },
  { y: PROCESS_STACK_GAP_PX * 3, scale: 0.88, opacity: 0.79 },
  { y: PROCESS_STACK_GAP_PX * 4, scale: 0.84, opacity: 0.72 },
  { y: PROCESS_STACK_GAP_PX * 5, scale: 0.8, opacity: 0.65 },
  { y: PROCESS_STACK_GAP_PX * 6, scale: 0.76, opacity: 0.58 },
];

/** Full 1120×579 deck: four back layers + main face (per Figma). */
function ProcessDeckLayer({ card }) {
  const c = card;
  return (
    <div className="relative h-[579px] w-[1120px] shrink-0">
      <div
        className={`absolute left-[64px] top-[66px] h-[513px] w-[992px] rounded-[24px] ${c.useIterationsBg ? "bg-[#093B48]" : c.useImplementBg ? "bg-[#0F6378]" : c.useTealBg ? "bg-[#A2E6FE]" : "bg-teal-light"}`}
      />
      <div
        className={`absolute left-[48px] top-[92px] h-[471px] w-[1024px] rounded-[24px] ${c.useIterationsBg ? "bg-[#0F6378]" : c.useImplementBg ? "bg-[#031418]" : c.useTealBg ? "bg-[#5EA2B9]" : "bg-teal-mid"}`}
      />
      <div
        className={`absolute left-[32px] top-[60px] h-[487px] w-[1056px] rounded-[24px] ${c.useIterationsBg ? "bg-[#031418]" : c.useImplementBg ? "bg-[#A2E6FE]" : c.useTealBg ? "bg-[#0F6378]" : "bg-teal"}`}
      />
      <div
        className={`absolute left-[16px] top-[30px] h-[501px] w-[1088px] rounded-[24px] ${c.useIterationsBg ? "bg-[#A2E6FE]" : c.useImplementBg ? "bg-[#5EA2B9]" : c.useTealBg ? "bg-[#093B48]" : "bg-teal-dark"}`}
      />
      <div className="relative z-10 h-[515px] w-[1120px] overflow-hidden rounded-[24px]">
        <div className="absolute inset-0 rounded-[24px]" style={{ backgroundColor: processMainCardBg(c) }} />
        <div className="relative z-10 flex h-full w-full flex-row">
          <ProcessDesktopCardFace card={c} />
        </div>
      </div>
    </div>
  );
}

function ProcessMobileCardFace({ card, textMinHeight }) {
  const imgCover =
    card.useTealBg &&
    (card.layout === "imageRight" ||
      card.imageContainerBg === "teal" ||
      card.imageContainerBg === "teal-mid" ||
      card.imageContainerBg === "teal-light");

  return (
    <div className="relative z-10 flex flex-col items-center px-4 pb-6 pt-2">
      <div
        className={`flex shrink-0 items-center justify-center overflow-hidden rounded-[24px] ${processMobileImageFrameClass(card)}`}
        style={{ width: MOBILE_PROCESS_IMAGE_FRAME_W, height: MOBILE_PROCESS_IMAGE_FRAME_H }}
      >
        <div
          className="relative overflow-hidden"
          style={{ width: MOBILE_PROCESS_IMG_W, height: MOBILE_PROCESS_IMG_H }}
        >
          <img
            src={card.image}
            alt={card.imageAlt}
            className={
              imgCover ? "h-full w-full object-cover object-center" : "h-full w-full object-contain object-center"
            }
          />
        </div>
      </div>
      <div
        className="mt-7 flex w-full flex-col items-center gap-3 text-center text-white"
        style={{
          maxWidth: MOBILE_PROCESS_TEXT_MAX_W,
          minHeight: textMinHeight ?? undefined,
        }}
      >
        <h3 className="font-geist text-[24px] font-semibold leading-7">{card.title}</h3>
        <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">{card.description}</p>
      </div>
    </div>
  );
}

function ProcessMobileDeckLayer({ card, textMinHeight }) {
  const colors = processDeckBackLayerColors(card);
  return (
    <div className="relative shrink-0" style={{ width: MOBILE_PROCESS_CARD_W, height: MOBILE_PROCESS_DECK_H }}>
      {MOBILE_PROCESS_BACK_LAYERS.map((rect, i) => (
        <div
          key={i}
          className="absolute rounded-[24px]"
          style={{
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height,
            backgroundColor: colors[i],
          }}
        />
      ))}
      <div
        className="relative z-10 overflow-hidden rounded-[24px]"
        style={{ width: MOBILE_PROCESS_CARD_W, height: 513 }}
      >
        <div className="absolute inset-0 rounded-[24px]" style={{ backgroundColor: processMainCardBg(card) }} />
        <ProcessMobileCardFace card={card} textMinHeight={textMinHeight} />
      </div>
    </div>
  );
}

function ProcessStepNavArrow({ direction, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex size-8 shrink-0 items-center justify-center rounded-full text-[#5c5c5c] transition-colors hover:text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        {direction === "prev" ? (
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

function ProcessSection() {
  const totalCards = PROCESS_CARDS.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const mobileProcessTextMeasureRef = useRef(null);
  const [mobileProcessTextMinH, setMobileProcessTextMinH] = useState(null);

  useLayoutEffect(() => {
    const root = mobileProcessTextMeasureRef.current;
    if (!root) return;
    let max = 0;
    for (const child of root.children) {
      max = Math.max(max, child.offsetHeight);
    }
    if (max > 0) setMobileProcessTextMinH(max);
  }, []);

  const advanceCard = () => {
    setCurrentIndex((i) => (i + 1) % totalCards);
  };

  const goPrev = () => {
    setCurrentIndex((i) => (i - 1 + totalCards) % totalCards);
  };

  const goNext = () => {
    setCurrentIndex((i) => (i + 1) % totalCards);
  };

  const stackInteractive = {
    role: "button",
    tabIndex: 0,
    "aria-label": `Process stages. Click to change cards. Showing ${PROCESS_CARDS[currentIndex].title}.`,
    onClick: advanceCard,
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        advanceCard();
      }
    },
  };

  return (
    <div className="w-full">
      <section
        className="sticky top-0 flex w-full min-h-0 flex-col overflow-hidden bg-white"
        aria-labelledby="process-section-heading process-section-heading-md"
      >
        <div className="md:hidden w-full pt-[80px]">
          <h2
            id="process-section-heading"
            className="mx-auto max-w-[532px] px-4 text-center font-geist text-[28px] font-semibold leading-[36px] tracking-[0.25px] text-dark sm:text-[34px] sm:leading-[44px]"
          >
            How Great Products Take Shape
          </h2>
          <p className="mx-auto mt-4 max-w-[624px] px-4 text-center font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-dark">
            Behind every great product is a thoughtful process that blends research,
            strategy, and design to solve real user problems and drive business
            success.
          </p>

          <div
            ref={mobileProcessTextMeasureRef}
            className="pointer-events-none fixed left-0 top-0 -z-50 opacity-0"
            aria-hidden
            style={{ width: MOBILE_PROCESS_TEXT_MAX_W }}
          >
            {PROCESS_CARDS.map((c) => (
              <div key={`mpt-${c.title}`} className="flex flex-col items-center gap-3 text-center text-white">
                <h3 className="font-geist text-[24px] font-semibold leading-7">{c.title}</h3>
                <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">{c.description}</p>
              </div>
            ))}
          </div>

          <div className="relative mx-auto mt-[37px] flex w-full justify-center overflow-x-auto px-4">
            <div
              className="process-section-stack relative h-[579px] w-[357px] shrink-0 cursor-pointer overflow-hidden rounded-[24px] outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
              {...stackInteractive}
            >
              {Array.from({ length: totalCards }, (_, slot) => {
                const cardIndex = (currentIndex + slot) % totalCards;
                const spec = PROCESS_STACK_LAYER_SPECS[slot];
                if (!spec) return null;
                const z = 10 + (totalCards - 1 - slot);
                return (
                  <div
                    key={slot}
                    className="process-stack-layer pointer-events-none absolute left-0 top-0 h-[579px] w-[357px] origin-top will-change-transform"
                    style={{
                      zIndex: z,
                      transform: `translateY(${spec.y}px) scale(${spec.scale})`,
                      opacity: spec.opacity,
                    }}
                  >
                    <ProcessMobileDeckLayer card={PROCESS_CARDS[cardIndex]} textMinHeight={mobileProcessTextMinH} />
                  </div>
                );
              })}
            </div>
          </div>

          <nav className="mt-6 flex items-center justify-center gap-10 px-4" aria-label="Process stage">
            <ProcessStepNavArrow direction="prev" label="Previous process stage" onClick={goPrev} />
            <span
              aria-live="polite"
              className="min-w-[3ch] text-center font-source-sans text-lg font-normal tabular-nums leading-6 tracking-[0.5px] text-[#5c5c5c]"
            >
              {currentIndex + 1}/{totalCards}
            </span>
            <ProcessStepNavArrow direction="next" label="Next process stage" onClick={goNext} />
          </nav>

          <div className="mx-auto mt-10 h-px w-full max-w-[1120px] rounded-[14px] bg-[#a4a5a7] opacity-50" />
        </div>

        <div className="hidden md:block">
          <ScaledCenteredSection designWidth={PROCESS_SECTION_DESIGN_WIDTH}>
            <section className="mx-auto w-[1280px] pt-[126px]">
              <h2
                id="process-section-heading-md"
                className="mx-auto w-[532px] text-center font-geist text-[28px] font-semibold leading-[36px] tracking-[0.25px] text-dark sm:text-[34px] sm:leading-[44px]"
              >
                How Great Products Take Shape
              </h2>
              <p className="mx-auto mt-4 max-w-[624px] text-center font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-dark">
                Behind every great product is a thoughtful process that blends research,
                strategy, and design to solve real user problems and drive business
                success.
              </p>

              <div className="relative mx-auto mt-[37px] w-[1120px]">
                <div
                  className="process-section-stack relative h-[579px] w-full cursor-pointer overflow-hidden rounded-[24px] outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
                  {...stackInteractive}
                >
                  {Array.from({ length: totalCards }, (_, slot) => {
                    const cardIndex = (currentIndex + slot) % totalCards;
                    const spec = PROCESS_STACK_LAYER_SPECS[slot];
                    if (!spec) return null;
                    const z = 10 + (totalCards - 1 - slot);
                    return (
                      <div
                        key={slot}
                        className="process-stack-layer pointer-events-none absolute left-0 top-0 h-[579px] w-[1120px] origin-top will-change-transform"
                        style={{
                          zIndex: z,
                          transform: `translateY(${spec.y}px) scale(${spec.scale})`,
                          opacity: spec.opacity,
                        }}
                      >
                        <ProcessDeckLayer card={PROCESS_CARDS[cardIndex]} />
                      </div>
                    );
                  })}
                </div>

                <nav
                  className="mt-6 flex items-center justify-center gap-10"
                  aria-label="Process stage"
                >
                  <ProcessStepNavArrow direction="prev" label="Previous process stage" onClick={goPrev} />
                  <span
                    aria-live="polite"
                    className="min-w-[3ch] text-center font-source-sans text-lg font-normal tabular-nums leading-6 tracking-[0.5px] text-[#5c5c5c]"
                  >
                    {currentIndex + 1}/{totalCards}
                  </span>
                  <ProcessStepNavArrow direction="next" label="Next process stage" onClick={goNext} />
                </nav>
              </div>

              {/* Divider */}
              <div className="mx-auto mt-[84px] h-px w-[1120px] rounded-[14px] bg-[#a4a5a7] opacity-50" />
            </section>
          </ScaledCenteredSection>
        </div>
      </section>
    </div>
  );
}

const FIGMA_FIT = { width: "125%", height: "111.69%", left: "-17.86%", top: "-8.31%" };

const TESTIMONIALS = [
  {
    name: "Chandan Sindhe",
    role: "Associate director Product design - Yellow.ai",
    quote: "I had the opportunity to hire and manage Latha when she joined our team as an intern, and she quickly proved herself to be a highly capable and dependable professional. From the very beginning, she demonstrated strong ownership, curiosity, and a genuine willingness to learn.\n\nWhat stood out most was how quickly Latha adapted to the pace and expectations of the team. She consistently approached tasks with clarity and responsibility, often going beyond what was expected to ensure the work was done well. Her proactive attitude and commitment to improving her craft made her a valuable contributor to the team.",
    mainImg: "chandan-main.png",
    mainImgStyle: { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
    avatars: ["avatar-far-left.png", "avatar-near-left.png", "chandan-main.png", "avatar-near-right.png", "avatar-far-right.png"],
    avatarStyles: [
      FIGMA_FIT,
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      FIGMA_FIT,
    ],
  },
  {
    name: "Abhimanyu singh",
    role: "Ex VP - Yellow.ai",
    quote: "I worked with Latha on multiple Voice initiatives at Yellow.ai, including Voice specific changes to the Builder and adding Voice support to Co-Pilot.\n\nVoice is a hard problem space, and Latha quickly understood that it needs a different approach compared to chat. She consistently designed experiences that were intuitive and practical.\n\nShe brought structured thinking, asked the right questions early, and collaborated closely with product and engineering to make sure designs worked in production. She was also very open to feedback and iteration.",
    mainImg: "abhimanyu-main.png",
    mainImgStyle: { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
    avatars: ["avatar-far-left-b.png", "avatar-near-left-b.png", "abhimanyu-main.png", "avatar-near-right-b.png", "avatar-far-right-b.png"],
    avatarStyles: [
      FIGMA_FIT,
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      FIGMA_FIT,
    ],
  },
  {
    name: "Aagam Mehta",
    role: "Principal Product Manager - Yellow.ai",
    quote: "She is easily one of the most effective product designers I've worked with. What stood out immediately was her ability to deeply understand problem statements before moving into solutions. She asks thoughtful questions, aligns quickly on goals, and brings strong product sense and user empathy into every discussion. As a Product Manager, this made collaboration extremely smooth and productive.\n\nLatha has a great understanding of different product needs, whether it is rapid prototyping, designing intuitive platform experiences, or building workflows for complex systems like voice and automation. She adapts her approach based on the problem space and consistently arrives at practical, well-thought-out solutions.",
    mainImg: "aagam-main.png",
    mainImgStyle: { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
    avatars: ["aagam-far-left.png", "aagam-near-left.png", "aagam-main.png", "aagam-near-right.png", "aagam-far-right.png"],
    avatarStyles: [
      FIGMA_FIT,
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      FIGMA_FIT,
    ],
  },
  {
    name: "Priya Thomas",
    role: "Product Design Lead - Yellow.ai",
    quote: "She consistently stands out for her speed, clarity, and ownership. She is exceptional at quickly translating ideas into tangible flows that help teams align, validate assumptions, and move forward with confidence. Her work is thoughtful and grounded in real product constraints. She's also a strong multitasker who manages multiple tasks effectively without compromising quality, balancing priorities seamlessly and ensuring nothing slips through the cracks.\n\nWhat truly differentiates Latha is her willingness to openly share her perspective. She constructively calls out inconsistencies and surfaces underlying problems early, helping the team address gaps before they escalate. She would be a valuable asset to any team working on complex initiatives.",
    mainImg: "priya-main.png",
    mainImgStyle: { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
    avatars: ["priya-far-left.png", "priya-near-left.png", "priya-main.png", "priya-near-right.png", "priya-far-right.png"],
    avatarStyles: [
      FIGMA_FIT,
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      FIGMA_FIT,
      FIGMA_FIT,
    ],
  },
  {
    name: "Vikash Kumar",
    role: "Product Manager - Sleekflow",
    quote: "I can confidently say she has one of the strongest user empathy and product sense. she brings a rare clarity to build complex systems—especially in areas like AI agents, orchestration workflows, and automation-heavy experiences where the products are mostly non deterministic.\n\nI like her working style as well, where as a PM I align with her for goals we want to achieve and she drove most of the UX research and solutions independently.\n\nBeyond design craft, she's a great collaborator—working seamlessly with product, engineering, and AI teams to ship meaningful outcomes.",
    mainImg: "vikash-main.png",
    mainImgStyle: FIGMA_FIT,
    avatars: ["vikash-far-left.png", "vikash-near-left.png", "vikash-main.png", "vikash-near-right.png", "vikash-far-right.png"],
    avatarStyles: [
      FIGMA_FIT,
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      FIGMA_FIT,
    ],
  },
  {
    name: "Apoorva Shrivastava",
    role: "Product Manager - Opensolar",
    quote: "She is one of those rare designers who pairs sharp product sense with clean, usable design and genuine user empathy.\n\nWe worked closely on the AI agent builder, and she was incredibly fast at turning feedback into polished iterations. In tight sprints she surfaced multiple thoughtful directions, explained tradeoffs clearly, and delivered options that were both beautiful and practical. Every interaction felt deliberately designed, with attention to the small details that make complex experiences feel effortless.\n\nAny team building complex, user-facing experiences would be lucky to have her. I would work with her again in a heartbeat.",
    mainImg: "apoorva-main.png",
    mainImgStyle: { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
    avatars: ["apoorva-far-left.png", "apoorva-near-left.png", "apoorva-main.png", "apoorva-near-right.png", "apoorva-far-right.png"],
    avatarStyles: [
      FIGMA_FIT,
      FIGMA_FIT,
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      FIGMA_FIT,
    ],
  },
  {
    name: "Aakanksha Jain",
    role: "Senior Product Manager - Yellow.ai",
    quote: "Working with Latha at Yellow.ai was a masterclass in user-centric design. She played a critical role in our move toward Agentic AI, designing the first workflows that started with a Goal Node a complex task that she handled with ease. Latha's fingerprints are all over our platform, from the foundational workflow builder components to the specialized Voice UX. She has an incredible knack for walking through user pain points and arriving at the right design decision before the problem even scales.",
    mainImg: "aakanksha-main.png",
    mainImgStyle: { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
    avatars: ["aakanksha-far-left.png", "aakanksha-near-left.png", "aakanksha-main.png", "aakanksha-near-right.png", "aakanksha-far-right.png"],
    avatarStyles: [
      FIGMA_FIT,
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      { width: "125.86%", height: "112.49%", left: "-19.47%", top: "-8.84%" },
      FIGMA_FIT,
    ],
  },
];

function TestimonialsSection() {
  const base = `${import.meta.env.BASE_URL}assets/testimonials/`;
  const bannerSvg = `${base}banner.svg`;
  const arrowCircle = `${base}arrow-circle.svg`;

  const [currentIndex, setCurrentIndex] = useState(0);
  const t = TESTIMONIALS[currentIndex];
  const n = TESTIMONIALS.length;

  const mobileCardMeasureRef = useRef(null);
  const mobileMeasureHiddenRef = useRef(null);
  const [mobileCardWidth, setMobileCardWidth] = useState(0);
  const [mobileBlueBodyMinHeight, setMobileBlueBodyMinHeight] = useState(null);

  const goPrev = () => setCurrentIndex((i) => (i - 1 + n) % n);
  const goNext = () => setCurrentIndex((i) => (i + 1) % n);

  useLayoutEffect(() => {
    const el = mobileCardMeasureRef.current;
    if (!el || typeof window === "undefined") return;

    const updateWidth = () => {
      if (window.matchMedia("(min-width: 768px)").matches) return;
      const w = el.offsetWidth;
      if (w > 0) setMobileCardWidth(w);
    };

    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    window.addEventListener("resize", updateWidth);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useLayoutEffect(() => {
    const root = mobileMeasureHiddenRef.current;
    if (!root || mobileCardWidth <= 0) return;

    let maxH = 0;
    for (const child of root.children) {
      maxH = Math.max(maxH, child.offsetHeight);
    }
    if (maxH > 0) setMobileBlueBodyMinHeight(maxH);
  }, [mobileCardWidth]);

  return (
    <section className="relative z-10 w-full pb-12 max-[1280px]:pt-[80px] min-[1281px]:pt-[80px]">
      {/* Below lg: fluid carousel — no absolute overlap */}
      <div className="flex min-w-0 flex-col items-center gap-6 md:hidden">
        <h2 className="text-center font-geist text-[28px] font-semibold leading-[36px] tracking-[0.25px] text-dark sm:text-[34px] sm:leading-[44px]">
          Words from Collaborators
        </h2>
        <p className="max-w-[624px] text-center font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-dark">
          Insights from those who&apos;ve worked together to turn complex
          challenges into intuitive digital experiences.
        </p>

        <div
          ref={mobileCardMeasureRef}
          className="relative w-full overflow-hidden rounded-[24px] bg-teal-light-tint"
        >
          {/* Top grey: banner only — no text (tint underlay matches body; no double alpha vs inner) */}
          <div className="relative z-0 h-[118px] w-full shrink-0 overflow-hidden">
            <img src={bannerSvg} alt="" className="block h-full w-full object-cover object-top" />
          </div>

          {/* Sky blue body: transparent so one tint shows through; overlap hides SVG/white wedge under slanted edge */}
          <div
            className="relative z-10 -mt-4 rounded-b-[24px] bg-transparent px-4 pb-8"
            style={
              mobileBlueBodyMinHeight != null
                ? { minHeight: mobileBlueBodyMinHeight }
                : undefined
            }
          >
            <div className="absolute left-1/2 top-0 z-20 h-[98px] w-[98px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
              <img
                src={`${base}${t.mainImg}`}
                alt={t.name}
                className="absolute max-w-none"
                style={t.mainImgStyle}
              />
            </div>

            <div className="relative z-10 flex flex-col items-center pt-[57px]">
              <div className="flex w-full items-center justify-between px-1">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                  className="relative flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full transition-all duration-200 hover:ring-[1px] hover:ring-teal focus:outline-none"
                >
                  <img src={arrowCircle} alt="" className="absolute inset-0 block h-full w-full rounded-full" />
                  <svg className="relative" width="8" height="8" viewBox="0 0 24 24" fill="none">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="#1c1f24" />
                  </svg>
                </button>

                <p className="text-center font-geist text-[24px] font-semibold leading-8 text-dark">
                  {t.name}
                </p>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next testimonial"
                  className="relative flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full transition-all duration-200 hover:ring-[1px] hover:ring-teal focus:outline-none"
                >
                  <img src={arrowCircle} alt="" className="absolute inset-0 block h-full w-full rounded-full" />
                  <svg className="relative" width="8" height="8" viewBox="0 0 24 24" fill="none">
                    <path d="M4 13h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4v2z" fill="#1c1f24" />
                  </svg>
                </button>
              </div>

              <p className="mt-2 max-w-[289px] text-center font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-[#494c50]">
                {t.role}
              </p>

              <p className="mt-6 w-full text-center font-source-sans text-[14px] font-normal leading-6 tracking-[0.5px] text-dark whitespace-pre-line">
                &ldquo;{t.quote.replace(/\n\n/g, "\n")}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Off-screen clones: same typography as blue body to compute max height (no per-slide resize). */}
        <div
          ref={mobileMeasureHiddenRef}
          className="pointer-events-none fixed left-0 top-0 -z-50 overflow-hidden opacity-0"
          aria-hidden
          style={{ width: mobileCardWidth > 0 ? mobileCardWidth : 0 }}
        >
          {TESTIMONIALS.map((item) => (
            <div key={`measure-${item.name}`} className="flex flex-col items-center px-4 pb-8 pt-[57px]">
              <div className="flex w-full items-center justify-between px-1">
                <span className="inline-block h-[23px] w-[23px] shrink-0" />
                <p className="text-center font-geist text-[24px] font-semibold leading-8 text-dark">
                  {item.name}
                </p>
                <span className="inline-block h-[23px] w-[23px] shrink-0" />
              </div>
              <p className="mt-2 max-w-[289px] text-center font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-[#494c50]">
                {item.role}
              </p>
              <p className="mt-6 w-full text-center font-source-sans text-[14px] font-normal leading-6 tracking-[0.5px] text-dark whitespace-pre-line">
                &ldquo;{item.quote.replace(/\n\n/g, "\n")}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <div className="h-px w-full max-w-[1120px] rounded-[14px] bg-dark/20 opacity-50" />
      </div>

    <div className="hidden w-full min-w-0 md:block">
    <ScaledArtboard designWidth={1280} designHeight={1000}>
    <section className="relative mx-auto h-[1000px] w-[1280px]">
      {/* Title */}
      <h2 className="absolute left-1/2 top-[124px] w-[464px] -translate-x-1/2 text-center font-geist text-[34px] font-semibold leading-[44px] tracking-[0.25px] text-dark">
        Words from Collaborators
      </h2>

      {/* Subtitle */}
      <p className="absolute left-1/2 top-[184px] w-[624px] -translate-x-1/2 text-center font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-dark">
        Insights from those who&apos;ve worked together to turn complex
        challenges into intuitive digital experiences.
      </p>

      {/* Layer 1: Light blue background (#a2e6fe, 20% opacity) */}
      <div className="absolute left-[82px] top-[256px] h-[702px] w-[1118px] rounded-[24px] bg-teal-light opacity-20" />

      {/* Layer 2: Banner / curved cover shape */}
      <div className="absolute left-[81px] top-[256px] h-[443px] w-[1120px]">
        <img
          src={bannerSvg}
          alt=""
          className="block h-[98.68%] w-full max-w-none"
        />
      </div>

      {/* Layer 3: Far-left small avatar (90px, 50% opacity) */}
      <div className="absolute left-[calc(12.5%+82px)] top-[366px] h-[90px] w-[90px] -translate-x-1/2 overflow-hidden rounded-full opacity-50">
        <img
          src={`${base}${t.avatars[0]}`}
          alt=""
          className="absolute max-w-none"
          style={t.avatarStyles[0]}
        />
      </div>

      {/* Layer 4: Near-left avatar (150px, 70% opacity) */}
      <div className="absolute left-[calc(29.17%+28.67px)] top-[336px] h-[150px] w-[150px] -translate-x-1/2 overflow-hidden rounded-full opacity-70">
        <img
          src={`${base}${t.avatars[1]}`}
          alt=""
          className="absolute max-w-none"
          style={t.avatarStyles[1]}
        />
      </div>

      {/* Layer 5: Center main avatar (246px) */}
      <div className="absolute left-1/2 top-[336px] h-[246px] w-[246px] -translate-x-1/2 overflow-hidden rounded-full">
        <img
          src={`${base}${t.mainImg}`}
          alt={t.name}
          className="absolute max-w-none"
          style={t.mainImgStyle}
        />
      </div>

      {/* Layer 6: Near-right avatar (150px, 70% opacity) */}
      <div className="absolute left-[calc(70.83%-28.17px)] top-[336px] h-[150px] w-[151px] -translate-x-1/2 overflow-hidden rounded-full opacity-70">
        <img
          src={`${base}${t.avatars[3]}`}
          alt=""
          className="absolute max-w-none"
          style={t.avatarStyles[3]}
        />
      </div>

      {/* Layer 7: Far-right small avatar (90px, 50% opacity) */}
      <div className="absolute left-[calc(87.5%-82px)] top-[366px] h-[90px] w-[90px] -translate-x-1/2 overflow-hidden rounded-full opacity-50">
        <img
          src={`${base}${t.avatars[4]}`}
          alt=""
          className="absolute max-w-none"
          style={t.avatarStyles[4]}
        />
      </div>

      {/* Name */}
      <p className="absolute left-1/2 top-[606px] w-[624px] -translate-x-1/2 text-center font-geist text-[24px] font-semibold leading-8 text-dark">
        {t.name}
      </p>

      {/* Role */}
      <p className="absolute left-1/2 top-[642px] w-[624px] -translate-x-1/2 text-center font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-caption">
        {t.role}
      </p>

      {/* Quote: 32px below role, 64px min margin from arrows, 24px bottom margin, center-aligned */}
      <p className="absolute left-[216px] right-[216px] top-[698px] mb-6 text-center font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark whitespace-pre-line">
        &ldquo;{t.quote.replace(/\n\n/g, "\n")}&rdquo;
      </p>

      {/* Left arrow */}
      <button type="button" onClick={goPrev} className="absolute left-[80px] top-[754px] flex h-[72px] w-[72px] items-center justify-center rounded-full transition-all duration-200 hover:ring-[1px] hover:ring-teal focus:outline-none focus:ring-2 focus:ring-teal active:bg-teal/10">
        <img src={arrowCircle} alt="" className="absolute inset-0 block h-full w-full rounded-full" />
        <svg className="relative" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="#1c1f24" />
        </svg>
      </button>

      {/* Right arrow */}
      <button type="button" onClick={goNext} className="absolute left-[calc(91.67%-45.33px)] top-[754px] flex h-[72px] w-[72px] items-center justify-center rounded-full transition-all duration-200 hover:ring-[1px] hover:ring-teal focus:outline-none focus:ring-2 focus:ring-teal active:bg-teal/10">
        <img src={arrowCircle} alt="" className="absolute inset-0 block h-full w-full rounded-full" />
        <svg className="relative" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 13h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4v2z" fill="#1c1f24" />
        </svg>
      </button>
    </section>
    </ScaledArtboard>
    </div>
    </section>
  );
}

function JourneySection() {
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

export default function Home() {
  return (
    <div className="min-h-screen min-w-0 overflow-x-hidden bg-white">
      <div className="w-full bg-white px-4 pb-4 pt-4">
        <div className="w-full min-w-0 overflow-hidden rounded-[24px] bg-cream">
          <div className={`${SITE_BELOW_FOLD_COLUMN} relative px-6 pb-8 pt-2 lg:min-h-[1162px] lg:px-[64px]`}>
            <div className="relative w-full overflow-visible pt-0 md:pt-6">
              <SiteNav variant="home" />
            </div>

            <div className="mt-20 lg:mt-[146px]">
              <AnnouncementBanner />
            </div>

            <div className="mt-6">
              <HeroSection />
            </div>

            <div className="mt-16 lg:mt-[100px]">
              <GradientCard />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-6 lg:px-[80px]">
        <div className={SITE_BELOW_FOLD_COLUMN}>
          <CaseStudiesSection />
          <ProcessSection />
          <TestimonialsSection />
          <JourneySection />
          <SiteCta />
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
