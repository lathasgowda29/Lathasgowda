import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoUrl from "./assets/logo.svg";
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

/** Below hero: 80px horizontal padding from viewport; column max 1280px. */
const HOME_INSET = "px-[80px]";
const HOME_COLUMN = "mx-auto w-full max-w-[1280px] min-w-0";

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

function Navbar() {
  return (
    <nav className="mx-auto flex min-h-[60px] w-full max-w-[589px] flex-wrap items-center justify-center gap-y-2 rounded-[70px] bg-white px-3 py-2 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.2)] lg:flex-nowrap lg:justify-start lg:px-6 lg:py-0">
      <Link to="/">
        <img src={logoUrl} alt="Logo" className="h-8 w-8 shrink-0" />
      </Link>

      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-0 lg:ml-[97px] lg:flex-none lg:justify-start">
        <a
          href="#"
          className="px-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-teal transition-opacity duration-200 hover:opacity-80"
        >
          Home
        </a>
        <Link
          to="/case-studies/gen-ai"
          className="px-2 font-source-sans text-sm font-normal leading-6 tracking-[0.25px] text-dark transition-opacity duration-200 hover:opacity-80"
        >
          Case studies
        </Link>
        <Link
          to="/case-studies/about-me"
          className="px-2 font-source-sans text-sm font-normal leading-6 tracking-[0.25px] text-dark transition-opacity duration-200 hover:opacity-80"
        >
          About me
        </Link>
        <a
          href="mailto:lathalaav6@gmail.com"
          className="px-2 font-source-sans text-sm font-normal leading-6 tracking-[0.25px] text-dark transition-opacity duration-200 hover:opacity-80"
        >
          Contact
        </a>
      </div>

      <a href="https://drive.google.com/file/d/1DA3bWyLAUIbS1uXnKu466CxsajH9Engd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="ml-0 shrink-0 rounded-[14px] border border-teal bg-white px-4 py-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-dark transition-colors duration-200 hover:border-2 hover:border-teal lg:ml-auto">
        Resume
      </a>
    </nav>
  );
}

function AnnouncementBanner() {
  return (
    <div className="mx-auto flex min-h-9 w-full max-w-[518px] flex-col items-start gap-2 rounded-[14px] border border-teal bg-warm-white px-4 py-2 lg:flex-row lg:items-center lg:gap-6 lg:py-0">
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
        Driving Product Excellence through Strategic Design Thinking
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
          href="mailto:lathalaav6@gmail.com"
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
    <div className={`flex min-w-0 flex-col ${gap} ${textSide === "left" ? "w-full max-w-[528px] md:w-[528px]" : "w-full max-w-[432px] md:w-[432px]"}`}>
      <h3 className="font-geist text-[20px] font-semibold leading-7 tracking-[0.15px] text-dark">
        {title}
      </h3>
      <p className="font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-dark">
        {description}
      </p>
    </div>
  );

  const imagePlaceholder = (
    <div className="h-[200px] w-full max-w-[428px] shrink-0 overflow-hidden rounded-[24px] bg-white sm:h-[280px] md:h-[374px] md:w-[428px]">
      {imageSrc ? (
        <img src={imageSrc} alt="" className="h-full w-full object-cover" />
      ) : null}
    </div>
  );

  const cardContent = textSide === "left" ? (
    <>
      <div className="order-2 flex w-full min-w-0 justify-center px-4 pb-8 pt-2 md:order-1 md:w-auto md:pl-[64px] md:pr-[28px] md:pb-0 md:pt-0">{textContent}</div>
      <div className="order-1 flex justify-center px-4 pt-4 md:order-2 md:ml-auto md:pr-2 md:pt-0">{imagePlaceholder}</div>
    </>
  ) : (
    <>
      <div className="order-1 flex justify-center px-4 pt-4 md:pl-2 md:pt-0">{imagePlaceholder}</div>
      <div className="order-2 flex w-full min-w-0 justify-center px-4 pb-8 md:pl-[64px] md:pr-[64px] md:pb-0">{textContent}</div>
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
          className={`mx-auto flex h-auto min-h-[390px] w-full max-w-[1120px] flex-col items-stretch rounded-[24px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.3)] transition-shadow duration-200 hover:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)] lg:h-[390px] lg:flex-row lg:items-center ${bg}`}
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
      className={`mx-auto flex h-auto min-h-[390px] w-full max-w-[1120px] flex-col items-stretch rounded-[24px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.3)] lg:h-[390px] lg:flex-row lg:items-center ${comingSoon ? "cursor-not-allowed transition-shadow duration-200 hover:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)]" : ""} ${bg}`}
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
const discoveryImageUrl = "https://www.figma.com/api/mcp/asset/6f7e8427-cfa7-4f89-abb3-44f84b29c6c5";
const analysisImageUrl = "https://www.figma.com/api/mcp/asset/57b34415-a009-4cbd-a659-5f14026f0e93";
const researchImageUrl = "https://www.figma.com/api/mcp/asset/66cfb390-02e3-4934-893a-dbf8d5f97aef";
const iterationsImageUrl = "https://www.figma.com/api/mcp/asset/b285f5e3-886d-4a7b-8d0d-9bc5b6e6b072";
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
const PROCESS_STACK_GAP_MOBILE_PX = 8;

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

function ProcessMobileStackedCard({ card, stackIndex, gapPx, slideIn }) {
  const yOff = -stackIndex * gapPx;
  const style =
    slideIn && stackIndex > 0
      ? { zIndex: stackIndex + 1, ["--stack-y"]: `${yOff}px` }
      : { zIndex: stackIndex + 1, transform: `translateY(${yOff}px)` };
  return (
    <div
      className={`absolute inset-x-0 bottom-0 mx-auto w-full max-w-[1120px] overflow-hidden rounded-[24px] will-change-transform ${slideIn && stackIndex > 0 ? "process-stack-slide-in" : ""}`}
      style={style}
    >
      <div className="absolute inset-0 rounded-[24px]" style={{ backgroundColor: processMainCardBg(card) }} />
      <div className="relative z-10 flex flex-col gap-6 p-6">
        {card.layout === "imageRight" ? (
          <>
            <div className="h-[200px] w-full min-w-0 overflow-hidden rounded-[16px] sm:h-[240px]">
              <img src={card.image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="flex min-w-0 flex-col gap-3 text-white">
              <h3 className="font-geist text-[20px] font-semibold leading-7 md:text-[24px]">{card.title}</h3>
              <p className="font-source-sans text-[16px] font-normal leading-7 tracking-[0.5px] md:text-[18px]">{card.description}</p>
            </div>
          </>
        ) : (
          <>
            <div className="h-[200px] w-full min-w-0 overflow-hidden rounded-[16px] sm:h-[240px]">
              <img src={card.image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="flex min-w-0 flex-col gap-3 text-white">
              <h3 className="font-geist text-[20px] font-semibold leading-7 md:text-[24px]">{card.title}</h3>
              <p className="font-source-sans text-[16px] font-normal leading-7 tracking-[0.5px] md:text-[18px]">{card.description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ProcessSection() {
  const [currentCard, setCurrentCard] = useState(0);
  const wrapperRef = useRef(null);
  const totalCards = PROCESS_CARDS.length;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const updateStep = () => {
      const rect = wrapper.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const wrapperHeight = totalCards * viewportHeight;
      const scrollableHeight = wrapperHeight - viewportHeight;

      if (scrollableHeight <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      const step = Math.min(
        Math.floor(progress * totalCards),
        totalCards - 1
      );
      setCurrentCard(step);
    };

    const handleScroll = () => requestAnimationFrame(updateStep);

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateStep();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalCards]);

  const frontCard = PROCESS_CARDS[currentCard];

  return (
    <div
      ref={wrapperRef}
      className="w-full"
      style={{ height: `${totalCards * 100}vh` }}
    >
      <section
        className="sticky top-0 mx-auto w-[1280px] pt-[126px]"
        style={{ height: "100vh" }}
      >
      <h2 className="mx-auto w-[532px] text-center font-geist text-[34px] font-semibold leading-[44px] tracking-[0.25px] text-dark">
        How Great Products Take Shape
      </h2>
      <p className="mx-auto mt-4 w-[624px] text-center font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-dark">
        Behind every great product is a thoughtful process that blends research,
        strategy, and design to solve real user problems and drive business
        success.
      </p>

      <div className="relative mx-auto mt-[37px] h-[579px] w-[1120px]">
        {/* Back layers — Iterations: #A2E6FE, #031418, #0F6378, #093B48; Implement: #5EA2B9, #A2E6FE, #031418, #0F6378; Discovery/Analysis/Research: #093B48, #0F6378, #5EA2B9, #A2E6FE */}
        <div
          className={`absolute left-[64px] top-[66px] h-[513px] w-[992px] rounded-[24px] ${frontCard.useIterationsBg ? "bg-[#093B48]" : frontCard.useImplementBg ? "bg-[#0F6378]" : frontCard.useTealBg ? "bg-[#A2E6FE]" : "bg-teal-light"}`}
        />
        <div
          className={`absolute left-[48px] top-[92px] h-[471px] w-[1024px] rounded-[24px] ${frontCard.useIterationsBg ? "bg-[#0F6378]" : frontCard.useImplementBg ? "bg-[#031418]" : frontCard.useTealBg ? "bg-[#5EA2B9]" : "bg-teal-mid"}`}
        />
        <div
          className={`absolute left-[32px] top-[60px] h-[487px] w-[1056px] rounded-[24px] ${frontCard.useIterationsBg ? "bg-[#031418]" : frontCard.useImplementBg ? "bg-[#A2E6FE]" : frontCard.useTealBg ? "bg-[#0F6378]" : "bg-teal"}`}
        />
        <div
          className={`absolute left-[16px] top-[30px] h-[501px] w-[1088px] rounded-[24px] ${frontCard.useIterationsBg ? "bg-[#A2E6FE]" : frontCard.useImplementBg ? "bg-[#5EA2B9]" : frontCard.useTealBg ? "bg-[#093B48]" : "bg-teal-dark"}`}
        />

        {/* Main card — scroll-driven cycle; smooth fade + translateY transition */}
        <div
          key={currentCard}
          className="relative z-10 flex h-[515px] w-[1120px] overflow-hidden rounded-[24px] transition-all duration-[450ms] ease-out animate-card-enter"
          style={{
            backgroundColor: frontCard.mainCardBg || (frontCard.useTealBg ? "#093B48" : "#031418"),
          }}
        >
          {frontCard.layout === "imageRight" ? (
            <>
              <div className="flex w-[448px] flex-col gap-5 pl-[80px] pt-[192px] text-white">
                <h3 className="font-geist text-[24px] font-semibold leading-7">
                  {frontCard.title}
                </h3>
                <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  {frontCard.description}
                </p>
              </div>
              <div
                className={`ml-auto mr-2 mt-2 mb-2 flex h-[499px] w-[428px] shrink-0 items-center justify-center overflow-hidden rounded-[24px] p-3 ${frontCard.imageContainerBg === "teal-mid" ? "bg-teal-mid" : "bg-teal"}`}
              >
                <img
                  src={frontCard.image}
                  alt={frontCard.imageAlt}
                  className="size-full rounded-[16px] object-cover"
                />
              </div>
            </>
          ) : (
            <>
              <div
                className={`m-2 flex h-[499px] w-[428px] shrink-0 items-center justify-center overflow-hidden rounded-[24px] ${frontCard.imageContainerBg === "teal" ? "bg-teal p-2" : frontCard.imageContainerBg === "teal-mid" ? "bg-teal-mid p-2" : frontCard.imageContainerBg === "teal-light" ? "bg-teal-light p-2" : "bg-teal-dark"}`}
              >
                <img
                  src={frontCard.image}
                  alt={frontCard.imageAlt}
                  className={frontCard.imageContainerBg === "teal" || frontCard.imageContainerBg === "teal-mid" || frontCard.imageContainerBg === "teal-light" ? "size-full rounded-[16px] object-cover" : "max-h-full max-w-full object-contain"}
                />
              </div>
              <div className="flex w-[413px] flex-col justify-center gap-[21px] pl-[64px] text-white">
                <h3 className="font-geist text-[24px] font-semibold leading-7">
                  {frontCard.title}
                </h3>
                <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  {frontCard.description}
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto mt-[84px] h-px w-[1120px] rounded-[14px] bg-[#a4a5a7] opacity-50" />
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

  const goPrev = () => setCurrentIndex((i) => (i - 1 + n) % n);
  const goNext = () => setCurrentIndex((i) => (i + 1) % n);

  return (
    <section className="w-full pb-12 pt-8">
      {/* Below lg: fluid carousel — no absolute overlap */}
      <div className="flex min-w-0 flex-col items-center gap-6 lg:hidden">
        <h2 className="text-center font-geist text-[28px] font-semibold leading-[36px] tracking-[0.25px] text-dark sm:text-[34px] sm:leading-[44px]">
          Words from Collaborators
        </h2>
        <p className="max-w-[624px] text-center font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-dark">
          Insights from those who&apos;ve worked together to turn complex
          challenges into intuitive digital experiences.
        </p>
        <div className="relative h-[180px] w-[180px] shrink-0 overflow-hidden rounded-full sm:h-[220px] sm:w-[220px]">
          <img
            src={`${base}${t.mainImg}`}
            alt={t.name}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <p className="text-center font-geist text-[20px] font-semibold leading-8 text-dark sm:text-[24px]">
          {t.name}
        </p>
        <p className="max-w-[90vw] text-center font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-caption">
          {t.role}
        </p>
        <p className="max-h-[50vh] w-full max-w-[624px] overflow-y-auto px-1 text-center font-source-sans text-[16px] font-normal leading-7 tracking-[0.5px] text-dark sm:text-[18px] whitespace-pre-line">
          &ldquo;{t.quote.replace(/\n\n/g, "\n")}&rdquo;
        </p>
        <div className="flex w-full max-w-sm items-center justify-between gap-4 px-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-all duration-200 hover:ring-[1px] hover:ring-teal focus:outline-none focus:ring-2 focus:ring-teal active:bg-teal/10 sm:h-[72px] sm:w-[72px]"
          >
            <img src={arrowCircle} alt="" className="absolute inset-0 block h-full w-full rounded-full" />
            <svg className="relative" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="#1c1f24" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-all duration-200 hover:ring-[1px] hover:ring-teal focus:outline-none focus:ring-2 focus:ring-teal active:bg-teal/10 sm:h-[72px] sm:w-[72px]"
          >
            <img src={arrowCircle} alt="" className="absolute inset-0 block h-full w-full rounded-full" />
            <svg className="relative" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 13h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4v2z" fill="#1c1f24" />
            </svg>
          </button>
        </div>
        <div className="h-px w-full max-w-[1120px] rounded-[14px] bg-dark/20 opacity-50" />
      </div>

    <div className="hidden w-full min-w-0 lg:block">
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
      <div className="absolute left-[82px] top-[256px] h-[702px] w-[1118px] bg-teal-light opacity-20" />

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

      {/* Bottom divider */}
      <div className="absolute left-1/2 top-[958px] h-px w-[1120px] -translate-x-1/2 rounded-[14px] bg-dark/20 opacity-50" />
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
        offsetRef.current = Math.max(-maxDrift, Math.min(0, offsetRef.current - e.deltaX));
        el.style.transform = `translateX(${offsetRef.current}px)`;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener('wheel', handleWheel);
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
    <section className="w-full pb-16 pt-8">
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

    <div className="hidden w-full min-w-0 lg:block">
    <ScaledArtboard designWidth={1280} designHeight={960}>
    <section className="relative mx-auto h-[960px] w-[1280px] overflow-hidden">
      {/* Title */}
      <h2 className="absolute left-1/2 top-[85px] w-[464px] -translate-x-1/2 text-center font-geist text-[34px] font-semibold leading-[44px] tracking-[0.25px] text-dark">
        My journey at yellow
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

function CtaSection() {
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
          href="mailto:lathalaav6@gmail.com"
          className="mt-6 w-fit rounded-[14px] bg-teal px-4 py-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-colors duration-200 hover:bg-teal-dark"
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

function Footer() {
  return (
    <footer className="w-full pb-[40px]">
      <div className="mx-auto my-[40px] h-px w-full max-w-[1120px] rounded-[14px] bg-[#a4a5a7] opacity-50" />
      <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-between">
        <img src={logoUrl} alt="Latha" className="h-8 w-8" />
        <p className="flex-1 text-center font-['Inter',sans-serif] text-[14px] font-normal leading-6 tracking-[0.25px] text-dark">
          Latha © 2026
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/latha-s-640073119?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="group"><img src={footerIconLinkedin} alt="LinkedIn" className="h-6 w-6 transition-all duration-200 group-hover:[filter:brightness(0)_saturate(100%)]" /></a>
          <a href="mailto:lathalaav6@gmail.com" className="group"><img src={footerIconEmail} alt="Email" className="h-6 w-6 transition-all duration-200 group-hover:[filter:brightness(0)_saturate(100%)]" /></a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen min-w-0 overflow-x-hidden bg-white">
      {/*
        Hero: 16px inset from viewport (white gap), then rounded cream panel (#F1F1E6 = bg-cream).
        Inner px-[64px] aligns text with below-fold HOME_INSET (80px) = 16 + 64.
      */}
      <div className="w-full bg-white px-4 pb-4 pt-4">
        <div className="w-full min-w-0 overflow-hidden rounded-[24px] bg-cream">
          <div className={`${HOME_COLUMN} relative min-h-[1162px] px-[64px] pb-8 pt-2`}>
            <div className="relative w-full overflow-visible pt-6">
              <Navbar />
            </div>

            <div className="mt-[146px]">
              <AnnouncementBanner />
            </div>

            <div className="mt-6">
              <HeroSection />
            </div>

            <div className="mt-[100px]">
              <GradientCard />
            </div>
          </div>
        </div>
      </div>

      <div className={HOME_INSET}>
        <div className={HOME_COLUMN}>
          <CaseStudiesSection />
          <ProcessSection />
          <TestimonialsSection />
          <JourneySection />
          <CtaSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
