import { Link } from "react-router-dom";
import logoUrl from "./assets/logo.svg";
import heroLaptopMockup from "./assets/case-study-api/hero-laptop-mockup.png";
import SiteCta from "./components/SiteCta";
import SiteFooter from "./components/SiteFooter";
import {
  SITE_BELOW_FOLD_COLUMN,
  SITE_BELOW_FOLD_INSET,
} from "./components/siteBelowFoldLayout";

function Navbar() {
  return (
    <nav className="mx-auto flex min-h-[60px] w-full max-w-[589px] flex-wrap items-center justify-center gap-y-2 rounded-[70px] bg-white px-3 py-2 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.2)] lg:flex-nowrap lg:justify-start lg:px-6 lg:py-0">
      <Link to="/">
        <img src={logoUrl} alt="Logo" className="h-8 w-8 shrink-0" />
      </Link>

      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-0 lg:ml-[97px] lg:flex-none lg:justify-start">
        <Link
          to="/"
          className="px-2 font-source-sans text-sm font-normal leading-6 tracking-[0.25px] text-dark transition-opacity duration-200 hover:opacity-80"
        >
          Home
        </Link>
        <Link
          to="/case-studies/gen-ai"
          className="px-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-teal"
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
          href="mailto:lathasgowda29@gmail.com"
          className="px-2 font-source-sans text-sm font-normal leading-6 tracking-[0.25px] text-dark transition-opacity duration-200 hover:opacity-80"
        >
          Contact
        </a>
      </div>

      <a
        href="https://drive.google.com/file/d/1L2ZGZBn7_6yacnqIOsvGNcfyzIT0khTx/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-0 shrink-0 rounded-[14px] border border-teal bg-white px-4 py-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-dark transition-colors duration-200 hover:border-2 hover:border-teal lg:ml-auto"
      >
        Resume
      </a>
    </nav>
  );
}

function CaseStudyResearchSection() {
  const researchLeft = new URL("./assets/case-study-api/research-left.jpg", import.meta.url).href;
  const researchCenter = new URL("./assets/case-study-api/research-center.jpg", import.meta.url).href;
  const researchRight = new URL("./assets/case-study-api/research-right.jpg", import.meta.url).href;

  return (
    <section className="layout-shell px-4 pt-[55px]">
      <h2 className="mx-auto w-full max-w-[803px] text-center font-geist text-[48px] font-semibold leading-[54px] text-dark">
        UX approach - What we did
      </h2>
      <p className="mx-auto mt-[22px] w-full max-w-[1120px] text-center font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
        I tackled key user challenges and refined the automation experience
        through a structured UX approach, grounded in real user feedback,
        behavioral insights, and continuous iteration.
      </p>

      <div className="mx-auto mt-[66px] flex w-full max-w-[1120px] flex-col gap-5">
        <h3 className="font-geist text-[34px] font-semibold leading-[44px] text-dark">
          Research and Discovery
        </h3>
        <ul className="list-disc pl-[27px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          <li>
            Qualitative research with developers to understand API setup pain
            points and workflow fragmentation within the builder.
          </li>
          <li>
            Analyzed behavioral data and user frictions using Mixpanel analytics
            and Hotjar recordings to identify drop-offs, rage clicks, and task
            delays.
          </li>
          <li>
            Researched competing platforms to evaluate best practices in API
            configuration, testing, and monitoring experiences.
          </li>
          <li>
            Mapped potential API use cases and integration scenarios in
            collaborative workshops, translating technical constraints into
            actionable UX improvements.
          </li>
        </ul>
      </div>

      <div
        className="relative mt-[50px] flex min-h-0 w-full min-w-0 flex-col gap-4 max-[1023px]:h-auto [@media(min-width:1024px)_and_(max-width:1199px)]:flex-row [@media(min-width:1024px)_and_(max-width:1199px)]:flex-nowrap [@media(min-width:1024px)_and_(max-width:1199px)]:gap-6 [@media(min-width:1024px)_and_(max-width:1199px)]:overflow-x-auto [@media(min-width:1024px)_and_(max-width:1199px)]:overflow-y-visible [@media(min-width:1024px)_and_(max-width:1199px)]:pb-2 [@media(min-width:1024px)_and_(max-width:1199px)]:snap-x [@media(min-width:1024px)_and_(max-width:1199px)]:snap-mandatory min-[1200px]:layout-shell min-[1200px]:h-[484px] min-[1200px]:flex-row min-[1200px]:flex-nowrap min-[1200px]:items-stretch min-[1200px]:gap-6 min-[1200px]:overflow-visible min-[1200px]:px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
        role="region"
        aria-label="Research session photos"
        tabIndex={0}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="h-[280px] w-full shrink-0 overflow-hidden rounded-[24px] min-[1024px]:h-[484px] min-[1024px]:w-[380px] [@media(min-width:1024px)_and_(max-width:1199px)]:snap-start min-[1200px]:-ml-[80px] min-[1200px]:rounded-r-[24px] min-[1200px]:rounded-l-none">
          <img
            src={researchLeft}
            alt="Research session"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[280px] w-full shrink-0 overflow-hidden rounded-[24px] min-[1024px]:h-[484px] min-[1024px]:w-[626px] [@media(min-width:1024px)_and_(max-width:1199px)]:snap-start">
          <img
            src={researchCenter}
            alt="Team collaboration"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-[24px] min-[1024px]:h-[484px] min-[1024px]:w-[380px] [@media(min-width:1024px)_and_(max-width:1199px)]:snap-start min-[1200px]:-mr-[80px] min-[1200px]:rounded-l-[24px] min-[1200px]:rounded-r-none">
          <img
            src={researchRight}
            alt="User research"
            className="h-full w-full object-cover max-[1199px]:relative max-[1199px]:left-0 max-[1199px]:w-full min-[1200px]:absolute min-[1200px]:left-[-47.76%] min-[1200px]:top-0 min-[1200px]:h-full min-[1200px]:w-[147.76%] min-[1200px]:max-w-none min-[1200px]:object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function DefinitionIdeationSection() {
  const iteration1Flow = new URL("./assets/case-study-api/iteration-1-flow.png", import.meta.url).href;
  const iteration2Flow = new URL("./assets/case-study-api/iteration-2-flow.png", import.meta.url).href;
  return (
    <section className="layout-shell px-4 pt-[117px]">
      <div className="layout-inner flex flex-col gap-5">
        <h3 className="font-geist text-[34px] font-semibold leading-[44px] text-dark">
          Definition and Ideation
        </h3>
        <ul className="list-disc pl-[27px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          <li>
            Mapped out API integration journeys to highlight major friction
            points caused by tab switching and context loss.
          </li>
          <li>
            Applied progressive disclosure principles to simplify complex API
            configurations like headers, authentication, and response mapping.
          </li>
          <li>
            Redesigned the API Node interface to enable inline setup, testing,
            and validation directly within the builder.
          </li>
          <li>
            Designed a comprehensive response mapping and debugging system to
            centralize control, validation, and error visibility.
          </li>
        </ul>
      </div>

      <div className="mx-auto mt-[40px] w-full max-w-[1120px] rounded-[24px] bg-white pb-[40px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15),0px_0px_1px_0px_rgba(0,0,0,0.5)]">
        <h4 className="px-[32px] pt-[32px] font-geist text-[20px] font-semibold leading-7 tracking-[0.15px] text-dark">
          Iteration 1
        </h4>
        <div className="px-[32px] pt-[16px]">
          <img
            src={iteration1Flow}
            alt="Iteration 1 — API node user flow diagram"
            className="w-full"
          />
        </div>
      </div>

      <div className="mx-auto mt-[24px] w-full max-w-[1120px] rounded-[24px] bg-white pb-[40px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15),0px_0px_1px_0px_rgba(0,0,0,0.5)]">
        <h4 className="px-[32px] pt-[32px] font-geist text-[20px] font-semibold leading-7 tracking-[0.15px] text-dark">
          Iteration 2
        </h4>
        <div className="px-[32px] pt-[16px]">
          <img
            src={iteration2Flow}
            alt="Iteration 2 — API node user flow diagram"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ number, title, description, quote, bgColor, children }) {
  return (
    <div className="flex min-w-0 flex-col items-stretch gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
      <div className="flex w-full min-w-0 max-w-[502px] flex-col gap-5 pt-0 lg:pt-[32px]">
        <p className="font-geist text-[24px] font-normal leading-7 text-dark">
          {number}
        </p>
        <h4 className="font-geist text-[26px] font-semibold leading-[34px] text-dark md:text-[34px] md:leading-[44px]">
          {title}
        </h4>
        <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          {description}
        </p>
        <p className="w-full max-w-[430px] font-hand text-[20px] font-normal leading-8 tracking-[0.5px] text-dark md:text-[24px]">
          {quote}
        </p>
      </div>
      <div
        className="mx-auto h-[min(320px,65vh)] w-full min-w-0 max-w-[494px] shrink-0 overflow-hidden rounded-[36px] sm:h-[min(380px,70vh)] lg:mx-0 lg:h-[408px] lg:w-[494px]"
        style={{ backgroundColor: bgColor }}
      >
        {children}
      </div>
    </div>
  );
}

function WhatWeLearnedSection() {
  return (
    <section className="layout-shell px-4 pt-[117px]">
      <div className="layout-inner">
        <h3 className="font-geist text-[48px] font-semibold leading-[54px] text-dark">
          What we learned from users
        </h3>
        <p className="mt-[20px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          A striking pattern quickly emerged: the act of switching between tabs
          was not just a minor annoyance&mdash;it was the central obstacle
          derailing users&rsquo; progress. This workflow fragmentation created a
          cascade of issues:
        </p>
      </div>

      <div className="mx-auto mt-[112px] flex w-full max-w-[1120px] flex-col gap-16 md:gap-[120px]">
        <ProblemCard
          number="Problem #1"
          title="Context Loss"
          description="Users lost track of where they were, leading to repeated steps or forgotten details."
          quote={
            "\u201CI get confused about which step I\u2019m on after switching tabs a few times.\u201D"
          }
          bgColor="transparent"
        >
          <img
            src={new URL("./assets/case-study-api/problem-1.png", import.meta.url).href}
            alt="Context loss — workflow builder screenshot"
            className="h-full w-full object-contain"
          />
        </ProblemCard>

        <ProblemCard
          number="Problem #2"
          title="Cognitive Overload"
          description="Remembering which parameters or headers to copy, and where to paste them, proved mentally taxing."
          quote={
            "\u201CIt feels like juggling too many things at once, one mistake and I have to go back and check everything.\u201D"
          }
          bgColor="transparent"
        >
          <img
            src={new URL("./assets/case-study-api/problem-2.png", import.meta.url).href}
            alt="Cognitive overload — tab switching screenshot"
            className="h-full w-full object-contain"
          />
        </ProblemCard>

        <ProblemCard
          number="Problem #3"
          title="Interrupted Focus"
          description="Each tab switch broke the user\u2019s concentration, forcing them to reconstruct their mental model of the task."
          quote={
            "\u201CTab switching totally breaks my concentration.\u201D"
          }
          bgColor="transparent"
        >
          <img
            src={new URL("./assets/case-study-api/problem-3.png", import.meta.url).href}
            alt="Interrupted focus — automation sidebar screenshot"
            className="h-full w-full object-contain"
          />
        </ProblemCard>

        <ProblemCard
          number="Problem #4"
          title="Frequent Errors & Frustration"
          description="Mistakes became common, and frustration was visible both in user comments and in behavioral data"
          quote={
            "\u201CI keep making small mistakes because I can\u2019t see api content together.\u201D"
          }
          bgColor="transparent"
        >
          <img
            src={new URL("./assets/case-study-api/problem-4.png", import.meta.url).href}
            alt="Frequent errors — API configuration screenshot"
            className="h-full w-full object-contain"
          />
        </ProblemCard>
      </div>
    </section>
  );
}

function RefiningExperienceSection() {
  const wireframeImg = new URL("./assets/case-study-api/wireframe.png", import.meta.url).href;
  const planAImg = new URL("./assets/case-study-api/plan-a.png", import.meta.url).href;
  const planBImg = new URL("./assets/case-study-api/plan-b.png", import.meta.url).href;
  return (
    <section className="layout-shell px-4 pt-[117px]">
      <div className="text-center">
        <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          The plan
        </p>
        <h2 className="mx-auto mt-2 w-full max-w-[1065px] font-geist text-[48px] font-semibold leading-[54px] text-dark">
          Refining the Experience Through User Feedback
        </h2>
        <div className="mx-auto mt-8 flex items-center justify-center gap-4">
          <span className="font-geist text-[34px] font-semibold leading-[44px] text-teal">
            Wireframe
          </span>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            className="text-teal"
          >
            <path
              d="M30 18L40 28L30 38"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 28H40"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-geist text-[34px] font-semibold leading-[44px] text-teal">
            Solution
          </span>
        </div>
      </div>

      <div className="mx-auto mt-[80px] w-full max-w-[1120px]">
        <h3 className="font-geist text-[34px] font-semibold leading-[44px] text-dark">
          Wireframe
        </h3>
        <p className="mt-4 font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          Our early design iterations focused on creating a more structured and
          intuitive user experience. We explored different UI layouts and user
          flows using hand drawn sketches.
        </p>
      </div>

      <div className="mx-auto mt-[40px] flex w-full min-w-0 max-w-[1120px] aspect-[1079/794] items-center justify-center rounded-[36px] bg-cream p-4 shadow-[0px_0px_6px_0px_rgba(255,255,255,0.5),0px_4px_8px_0px_rgba(0,0,0,0.25)] backdrop-blur-[40px] border-[20px] border-white">
        <img
          src={wireframeImg}
          alt="Wireframe explorations"
          className="max-h-full max-w-full rounded-[36px] object-contain"
        />
      </div>

      <div className="mx-auto mt-[80px] w-full max-w-[1120px]">
        <h3 className="font-geist text-[34px] font-semibold leading-[44px] text-dark">
          Solution and Implementation
        </h3>
        <p className="mt-4 font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          After multiple brainstorming sessions, workflow mapping, and
          wireframing explorations, we identified two potential solutions to
          address API workflow fragmentation.
        </p>
      </div>

      <div className="mx-auto mt-[40px] w-full max-w-[1120px]">
        <h4 className="font-geist text-[24px] font-semibold leading-7 text-dark">
          Proposed Plan A
        </h4>
        <p className="mt-4 font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          Adding API configuration as a dedicated tab within the same module to
          reduce external navigation while maintaining separation of concerns.
        </p>
      </div>

      <div className="mx-auto mt-[40px] flex w-full min-w-0 max-w-[1120px] aspect-[1079/794] items-center justify-center rounded-[36px] bg-cream p-4 shadow-[0px_0px_6px_0px_rgba(255,255,255,0.5),0px_4px_8px_0px_rgba(0,0,0,0.25)] backdrop-blur-[40px] border-[20px] border-white">
        <img
          src={planAImg}
          alt="Proposed Plan A"
          className="max-h-full max-w-full rounded-[36px] object-contain"
        />
      </div>

      <div className="mx-auto mt-[80px] w-full max-w-[1120px]">
        <h4 className="font-geist text-[24px] font-semibold leading-7 text-dark">
          Proposed Plan B
        </h4>
        <p className="mt-4 font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          Embedding API setup directly inside the node, enabling inline
          configuration, testing and response mapping without leaving the
          conversation flow.
        </p>
      </div>

      <div className="mx-auto mt-[40px] flex w-full min-w-0 max-w-[1120px] aspect-[1079/794] items-center justify-center rounded-[36px] bg-cream p-4 shadow-[inset_0px_0px_6px_0px_rgba(255,255,255,0.5),0px_4px_8px_0px_rgba(0,0,0,0.25)] backdrop-blur-[40px] border-[20px] border-white">
        <img
          src={planBImg}
          alt="Proposed Plan B"
          className="max-h-full max-w-full rounded-[36px] object-contain"
        />
      </div>
    </section>
  );
}

function ABTestingSection() {
  const braceImg = new URL("./assets/case-study-api/ab-testing-brace.svg", import.meta.url).href;

  return (
    <section className="layout-shell px-4 pt-[117px]">
      <h3 className="mx-auto w-full max-w-[1065px] text-center font-geist text-[34px] font-semibold leading-[44px] text-dark">
        A/B Testing
      </h3>
      <p className="mx-auto mt-[20px] w-full max-w-[1120px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
        Conducted structured A/B testing to compare Plan A (tab-based API setup)
        and Plan B (in-node API configuration). Measured task completion time,
        error rate, navigation clicks, user satisfaction through usability
        sessions and behavioral analytics.
      </p>

      <div className="mx-auto mt-[48px] flex w-full max-w-[1120px] items-start gap-4">
        <img
          src={braceImg}
          alt=""
          className="h-[50px] w-[48px] -rotate-[41deg]"
        />
        <p className="font-hand text-[18px] leading-7 tracking-[0.5px] text-dark">
          Tested with 12 developers over 2 weeks.
        </p>
      </div>

      <div
        className="mx-auto mt-[32px] grid min-h-0 w-full max-w-[1120px] grid-cols-[minmax(0,391fr)_minmax(0,345fr)_minmax(0,386fr)] grid-rows-6 pr-px max-[1150px]:[&_p]:text-[clamp(11px,1.35vw,18px)] max-[1150px]:[&_p]:leading-snug"
        role="table"
        aria-label="A/B testing comparison"
      >
        {/* Row 1 — headers */}
        <div className="mb-[-1px] mr-[-1px] flex min-h-[61px] min-w-0 items-center rounded-tl-[15px] border border-solid border-dark bg-teal px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="break-words font-source-sans text-[16px] font-semibold leading-6 tracking-[0.5px] text-white max-[1150px]:text-[clamp(11px,1.35vw,16px)]">
            Metric
          </p>
        </div>
        <div className="mb-[-1px] mr-[-1px] flex min-h-[61px] min-w-0 items-center border border-solid border-dark bg-teal px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="break-words font-source-sans text-[16px] font-semibold leading-6 tracking-[0.5px] text-white max-[1150px]:text-[clamp(11px,1.35vw,16px)]">
            Plan A (Tab-based)
          </p>
        </div>
        <div className="mb-[-1px] flex min-h-[61px] min-w-0 items-center rounded-tr-[15px] border border-solid border-dark bg-teal px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="break-words font-source-sans text-[16px] font-semibold leading-6 tracking-[0.5px] text-white max-[1150px]:text-[clamp(11px,1.35vw,16px)]">
            Plan B (In-node)
          </p>
        </div>

        {/* Row 2 */}
        <div className="mb-[-1px] mr-[-1px] flex min-h-[70px] min-w-0 items-center border border-solid border-dark bg-white/90 px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="break-words font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            Task Completion Time
          </p>
        </div>
        <div className="mb-[-1px] mr-[-1px] flex min-h-[70px] min-w-0 items-center border border-solid border-dark bg-white/90 px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="break-words font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            1.8x slower
          </p>
        </div>
        <div className="mb-[-1px] flex min-h-[70px] min-w-0 items-center border border-solid border-dark bg-white/90 px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="break-words font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            70% Lower than Plan A
          </p>
        </div>

        {/* Row 3 */}
        <div className="mb-[-1px] mr-[-1px] flex min-h-[70px] min-w-0 items-center border border-solid border-dark bg-white px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="break-words font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            Error rate
          </p>
        </div>
        <div className="mb-[-1px] mr-[-1px] flex min-h-[70px] min-w-0 items-center border border-solid border-dark bg-white px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="break-words font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            Higher due to manual configuration
          </p>
        </div>
        <div className="mb-[-1px] flex min-h-[70px] min-w-0 items-center border border-solid border-dark bg-white px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="break-words font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            35% Reduction in configuration errors.
          </p>
        </div>

        {/* Row 4 */}
        <div className="mb-[-1px] mr-[-1px] flex min-h-[70px] min-w-0 items-center border border-solid border-dark bg-white/90 px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="break-words font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            Navigation Clicks
          </p>
        </div>
        <div className="mb-[-1px] mr-[-1px] flex min-h-[70px] min-w-0 items-center border border-solid border-dark bg-white/90 px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="break-words font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            Frequent tab switching required
          </p>
        </div>
        <div className="mb-[-1px] flex min-h-[70px] min-w-0 items-center border border-solid border-dark bg-white/90 px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="break-words font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            Fewer navigation actions
          </p>
        </div>

        {/* Row 5 */}
        <div className="mb-[-1px] mr-[-1px] flex min-h-[70px] min-w-0 items-center border border-solid border-dark bg-white px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="break-words font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            User satisfaction
          </p>
        </div>
        <div className="mb-[-1px] mr-[-1px] flex min-h-[70px] min-w-0 items-center border border-solid border-dark bg-white px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="break-words font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            Lower due to fragmented workflow
          </p>
        </div>
        <div className="mb-[-1px] flex min-h-[70px] min-w-0 items-center border border-solid border-dark bg-white px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="break-words font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            Higher
          </p>
        </div>

        {/* Row 6 — last row: single-line labels; Plan A cell matches padding */}
        <div className="mr-[-1px] flex min-h-[70px] min-w-0 items-center rounded-bl-[15px] border border-solid border-dark bg-white/90 px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="whitespace-nowrap font-geist text-[20px] font-semibold leading-7 tracking-[0.15px] text-dark max-[1150px]:text-[clamp(12px,1.4vw,20px)]">
            Selected solution
          </p>
        </div>
        <div className="mr-[-1px] flex min-h-[70px] min-w-0 items-center border border-solid border-dark bg-white/90 px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <span className="sr-only">Plan A not selected</span>
          <span aria-hidden="true">{'\u00A0'}</span>
        </div>
        <div className="flex min-h-[70px] min-w-0 items-center rounded-br-[15px] border border-solid border-dark bg-teal/10 px-[clamp(8px,1.2vw,18px)] py-[clamp(10px,1.5vw,24px)]">
          <p className="whitespace-nowrap font-geist text-[20px] font-semibold leading-7 tracking-[0.15px] text-dark max-[1150px]:text-[clamp(12px,1.4vw,20px)]">
            Plan B
          </p>
        </div>
      </div>

      <div className="mx-auto mt-[60px] flex w-full max-w-[1120px] flex-col gap-5">
        <h4 className="font-geist text-[24px] font-semibold leading-7 text-dark">
          Key Insights from A/B Testing
        </h4>
        <ul className="list-disc pl-[27px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          <li>
            <span className="font-semibold">Lower task completion time</span>
            {" "}with Plan B, as users no longer needed to switch tabs to configure
            APIs.
          </li>
          <li>
            <span className="font-semibold">Reduced error rates</span>, since
            inline validation helped users identify and fix issues instantly.
          </li>
          <li>
            <span className="font-semibold">Improved workflow continuity</span>,
            with users reporting less context loss during API setup.
          </li>
          <li>
            <span className="font-semibold">
              Higher user satisfaction scores
            </span>
            , as Plan B felt more seamless and aligned with the natural
            conversation-building process.
          </li>
          <li>
            <span className="font-semibold">
              Fewer navigation clicks and rage clicks
            </span>
            , validating that embedding API inside the node minimized friction
            points.
          </li>
        </ul>
      </div>
    </section>
  );
}

function FromInsightToImpactSection() {
  const chartA = new URL("./assets/case-study-api/output-chart-a.png", import.meta.url).href;
  const chartB = new URL("./assets/case-study-api/output-chart-b.png", import.meta.url).href;

  return (
    <section className="layout-shell px-4 pt-[117px]">
      <div className="layout-inner">
        <h3 className="font-geist text-[48px] font-semibold leading-[54px] text-dark">
          From Insight to Impact
        </h3>
        <p className="mt-3 font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          The unified in-node API experience reduced setup time, minimized
          errors, and streamlined workflow continuity. Post-release Mixpanel
          tracking revealed a strong behavioral shift&mdash;users increasingly
          adopted the in-node API setup over legacy management, validating
          improved usability and workflow efficiency
        </p>
      </div>

      <div className="mx-auto mt-[80px] flex w-full max-w-[1120px] justify-center gap-[64px]">
        <div className="flex w-[361px] shrink-0 flex-col gap-[20px]">
          <div className="h-[340px] w-full overflow-hidden rounded-[24px]">
            <img
              src={chartA}
              alt="Existing users migration behavior — 5875 API actions recorded"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="font-geist text-[20px] leading-7 tracking-[0.15px] text-dark">
            <span className="font-semibold">
              A. Existing Users Migration Behavior :{" "}
            </span>
            <span className="font-normal">5875 API actions recorded</span>
          </p>
        </div>

        <div className="flex w-[360px] shrink-0 flex-col gap-[20px]">
          <div className="h-[340px] w-full overflow-hidden rounded-[24px]">
            <img
              src={chartB}
              alt="New users adoption pattern — 7200 API actions recorded"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="font-geist text-[20px] leading-7 tracking-[0.15px] text-dark">
            <span className="font-semibold">
              B. New Users Adoption Pattern :{" "}
            </span>
            <span className="font-normal">7200 API actions recorded</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function DesignProcessSection() {
  const timelineImg = new URL("./assets/case-study-api/design-process-timeline.png", import.meta.url).href;

  return (
    <section className="layout-shell px-4 pt-[117px]">
      <div className="layout-inner">
        <h3 className="font-geist text-[48px] font-semibold leading-[54px] text-dark">
          Design Process
        </h3>
        <div className="mt-3 font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          <p>
            We conducted focused design sprints using an agile methodology,
            enabling close collaboration between Product Designers, Product
            Managers, and Engineers to solve API workflow challenges.
            Cross-functional brainstorming sessions encouraged diverse
            perspectives, helping us explore and validate multiple structural
            solutions (Plan A vs Plan B).
          </p>
          <p className="mt-0">
            By integrating research, design, and development sprints, we ensured
            an iterative approach&mdash;continuously testing, validating through
            A/B experiments, and refining the in-node API experience to reduce
            friction, improve efficiency, and enhance overall developer
            productivity.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-[60px] w-full max-w-[1120px]">
        <img
          src={timelineImg}
          alt="Design process timeline — October to November milestones"
          className="w-full"
        />
      </div>
    </section>
  );
}

function MetricCard({ stat, description }) {
  return (
    <div className="flex w-[360px] flex-col gap-8 overflow-hidden rounded-[24px] bg-dark-bg px-6 py-8">
      <div className="flex h-[177px] items-center rounded-[24px] bg-[#80C4DB] px-[25px]">
        <h4 className="w-[251px] font-geist text-[34px] font-semibold leading-[44px] text-black">
          {stat}
        </h4>
      </div>
      <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-white">
        {description}
      </p>
    </div>
  );
}

function DeploymentIterationSection() {
  return (
    <section className="layout-shell px-4 pt-[117px]">
      <div className="layout-inner flex flex-col gap-5">
        <h3 className="font-geist text-[34px] font-semibold leading-[44px] text-dark">
          Deployment and Iteration
        </h3>
        <ul className="list-disc pl-[27px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          <li>
            Refined the unified API experience to align with the platform&apos;s
            design system, ensuring consistency and scalability.
          </li>
          <li>
            Introduced real-time validation and smart error handling, with clear
            alerts and suggested fixes for faster troubleshooting.
          </li>
          <li>
            Optimized workflow efficiency by reducing dependency on external tabs
            and extra function nodes.
          </li>
          <li>
            Refined through iterative testing with developers, ensuring
            improvements directly addressed real-world API integration challenges
          </li>
        </ul>
      </div>

      <div className="mx-auto mt-[40px] flex w-full max-w-[1120px] gap-5">
        <MetricCard
          stat="70% Reduction in API Setup Time"
          description="Eliminated tab switching and enabled inline configuration within the builder."
        />
        <MetricCard
          stat="40% Increase in In-Node API Adoption"
          description="Users moved from legacy API management to in-node configuration."
        />
        <MetricCard
          stat="35% reduction in errors"
          description="Inline validation and unified configuration reduced API setup errors."
        />
      </div>
    </section>
  );
}

function FutureRoadmapSection() {
  const items = [
    {
      title: "Targeted User Research",
      description:
        "Conduct focused interviews to understand why some users still prefer the legacy API Management experience. Identify specific friction points that prevent full adoption of the in-node API setup. Use these insights to refine usability and address remaining gaps.",
    },
    {
      title: "Simplify Response Handling",
      description:
        'Redesign the "Store Response" feature with clearer visuals and inline guidance. Improve discoverability to encourage better response mapping. Reduce confusion and increase engagement with response configuration.',
    },
    {
      title: "On-Demand Support",
      description:
        "Add contextual tooltips and quick guides within the builder. Provide real-time assistance during API configuration. Reduce dependency on documentation and support teams.",
    },
    {
      title: "Continuous Monitoring",
      description:
        "Track adoption, error rates, and workflow behavior post-release. Monitor user drop-offs and feature engagement patterns. Use ongoing data insights to continuously iterate and optimize the experience.",
    },
  ];

  return (
    <section className="layout-shell px-4 pt-[117px]">
      <h3 className="text-center font-geist text-[48px] font-semibold leading-[54px] text-dark">
        Future Roadmap
      </h3>

      <div className="mx-auto mt-[80px] flex w-[740px] flex-col gap-[56px]">
        {items.map((item, i) => (
          <div key={item.title} className="flex flex-col gap-3">
            <h4 className="font-geist text-[24px] font-semibold leading-7 text-dark">
              {i + 1}. {item.title}
            </h4>
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function InfoRow({ label, children }) {
  return (
    <div className="flex items-start">
      <h3 className="w-[209px] shrink-0 font-geist text-[24px] font-semibold leading-7 text-dark">
        {label}
      </h3>
      <p className="w-[527px] font-source-sans text-base font-normal leading-6 tracking-[0.5px] text-dark">
        {children}
      </p>
    </div>
  );
}

export default function CaseStudyApi() {
  return (
    <div className="min-h-screen min-w-0 bg-white">
      <div className="w-full px-4 pt-4">
        <div className="relative w-full min-h-[min(100dvh,926px)] rounded-t-[24px] bg-cream md:min-h-[926px]">
          <div className="relative px-4 pt-4">
            <div className="pt-6">
              <Navbar />
            </div>

              <div className="mt-[48px] flex justify-center">
              <div className="relative aspect-[1120/682] w-full max-w-[1120px] min-h-[260px] overflow-hidden rounded-[24px] md:aspect-auto md:h-[682px] md:min-h-[682px]">
                <div className="absolute left-1/2 top-[22%] w-[min(100%,1024px)] max-w-[1024px] -translate-x-1/2 px-2 md:top-[148px] md:h-[540px] md:px-0">
                  <img
                    src={heroLaptopMockup}
                    alt="Laptop mockup showing API configuration interface"
                    className="block h-full w-full max-w-full object-contain"
                  />
                </div>
                <div className="absolute inset-x-0 top-0 z-10 mx-auto w-full max-w-[min(95vw,568px)] px-3 text-center sm:px-4 md:px-0">
                  <p className="font-geist text-[20px] font-semibold leading-[28px] text-dark sm:text-[24px] sm:leading-[34px]">
                    Simplifying API Configuration: Reduced Setup Errors by 40%
                  </p>
                  <p className="mx-auto mt-[8px] w-full max-w-[560px] font-source-sans text-[15px] font-normal leading-[22px] tracking-[0.5px] text-dark sm:text-[16px] sm:leading-[24px]">
                    Redesigned API selection and configuration to surface endpoint context clearly, helping users integrate faster and avoid configuration mistakes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="layout-shell flex px-4 flex-col items-center pb-[80px] pt-[120px]">
        <h1 className="w-[803px] text-center font-geist text-[48px] font-semibold leading-[54px] text-dark">
          Simplified API Node Experience: &ldquo;3x Faster Integrations&rdquo;
          and &ldquo;70% Less Setup Time&rdquo;
        </h1>

        <div className="mt-[56px] flex w-[736px] flex-col gap-[40px]">
          <InfoRow label="Context">
            API node allows you to integrate APIs from third-party systems and
            use them within conversational flows. It acts as a gateway for
            triggering HTTP-based APIs (GET, POST, PUT, DELETE, CREATE) and
            enables sending data from your workflow to external systems, and
            receiving data from external systems. You can then process data and
            use in subsequent steps or store in the database.
          </InfoRow>

          <InfoRow label="Problem">
            As part of our broader Builder UX enhancement initiative, we
            uncovered a recurring user frustration, constant tab switching
            between the Conversation Builder and the API Management interface.
            This friction was not just an inconvenience it was breaking user flow
            during a critical part of building conversations.
          </InfoRow>

          <InfoRow label="My role">
            Led the end-to-end redesign of the API Node experience, conducting
            research, analyzing behavioral data, facilitating solution ideation,
            and validating the final in-node implementation through A/B testing.
          </InfoRow>
        </div>
      </section>

      <CaseStudyResearchSection />
      <DefinitionIdeationSection />
      <DeploymentIterationSection />
      <WhatWeLearnedSection />
      <DesignProcessSection />
      <RefiningExperienceSection />
      <ABTestingSection />
      <FromInsightToImpactSection />
      <FutureRoadmapSection />
      <div className={`w-full ${SITE_BELOW_FOLD_INSET}`}>
        <div className={SITE_BELOW_FOLD_COLUMN}>
          <div className="pt-[117px]">
            <SiteCta />
          </div>
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
