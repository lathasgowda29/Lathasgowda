import { Link } from "react-router-dom";
import logoUrl from "./assets/logo.svg";

const heroLaptopMockup =
  "https://www.figma.com/api/mcp/asset/2777c8ab-6072-44c0-9ec0-b451d62d43cc";

function Navbar() {
  return (
    <nav className="mx-auto flex h-[60px] w-[589px] items-center rounded-[70px] bg-white px-6 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.2)]">
      <Link to="/">
        <img src={logoUrl} alt="Logo" className="h-8 w-8 shrink-0" />
      </Link>

      <div className="ml-[97px] flex items-center gap-0">
        <Link
          to="/"
          className="px-2 font-source-sans text-sm font-normal leading-6 tracking-[0.25px] text-dark"
        >
          Home
        </Link>
        <a
          href="#"
          className="px-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-teal"
        >
          Case studies
        </a>
        <Link
          to="/case-studies/about-me"
          className="px-2 font-source-sans text-sm font-normal leading-6 tracking-[0.25px] text-dark"
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

      <a href="https://drive.google.com/file/d/13bVlCKwriHreFawiUT0a_gE4Jfl8Hnw6/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="ml-auto rounded-[14px] border border-teal bg-white px-4 py-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-dark">
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
    <section className="mx-auto w-[1280px] overflow-hidden pt-[55px]">
      <h2 className="mx-auto w-[803px] text-center font-geist text-[48px] font-semibold leading-[54px] text-dark">
        UX approach - What we did
      </h2>
      <p className="mx-auto mt-[22px] w-[1120px] text-center font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
        I tackled key user challenges and refined the automation experience
        through a structured UX approach, grounded in real user feedback,
        behavioral insights, and continuous iteration.
      </p>

      <div className="mx-auto mt-[66px] flex w-[1120px] flex-col gap-5">
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

      <div className="relative mx-auto mt-[50px] flex h-[484px] w-[1280px] items-stretch gap-[24px]">
        <div className="-ml-[80px] h-[484px] w-[380px] shrink-0 overflow-hidden rounded-r-[24px]">
          <img
            src={researchLeft}
            alt="Research session"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[484px] w-[626px] shrink-0 overflow-hidden rounded-[24px]">
          <img
            src={researchCenter}
            alt="Team collaboration"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative -mr-[80px] h-[484px] w-[380px] shrink-0 overflow-hidden rounded-l-[24px]">
          <img
            src={researchRight}
            alt="User research"
            className="absolute top-0 h-full max-w-none"
            style={{ width: "147.76%", left: "-47.76%" }}
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
    <section className="mx-auto w-[1280px] pt-[117px]">
      <div className="mx-auto flex w-[1120px] flex-col gap-5">
        <h3 className="font-geist text-[34px] font-semibold leading-[44px] text-dark">
          DEFINITION &amp; IDEATION
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

      <div className="mx-auto mt-[40px] w-[1120px] rounded-[24px] bg-white pb-[40px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15),0px_0px_1px_0px_rgba(0,0,0,0.5)]">
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

      <div className="mx-auto mt-[24px] w-[1120px] rounded-[24px] bg-white pb-[40px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15),0px_0px_1px_0px_rgba(0,0,0,0.5)]">
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
    <div className="flex items-start justify-between">
      <div className="flex w-[502px] flex-col gap-5 pt-[32px]">
        <p className="font-geist text-[24px] font-normal leading-7 text-dark">
          {number}
        </p>
        <h4 className="font-geist text-[34px] font-semibold leading-[44px] text-dark">
          {title}
        </h4>
        <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          {description}
        </p>
        <p className="w-[430px] font-hand text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          {quote}
        </p>
      </div>
      <div
        className="h-[408px] w-[494px] shrink-0 overflow-hidden rounded-[36px]"
        style={{ backgroundColor: bgColor }}
      >
        {children}
      </div>
    </div>
  );
}

function WhatWeLearnedSection() {
  return (
    <section className="mx-auto w-[1280px] pt-[117px]">
      <div className="mx-auto w-[1120px]">
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

      <div className="mx-auto mt-[112px] flex w-[1120px] flex-col gap-[120px]">
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
    <section className="mx-auto w-[1280px] pt-[117px]">
      <div className="text-center">
        <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          The plan
        </p>
        <h2 className="mx-auto mt-2 w-[1065px] font-geist text-[48px] font-semibold leading-[54px] text-dark">
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

      <div className="mx-auto mt-[80px] w-[1120px]">
        <h3 className="font-geist text-[34px] font-semibold leading-[44px] text-dark">
          Wireframe
        </h3>
        <p className="mt-4 font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          Our early design iterations focused on creating a more structured and
          intuitive user experience. We explored different UI layouts, and user
          flows using hand drawn sketches.
        </p>
      </div>

      <div className="mx-auto mt-[40px] flex h-[794px] w-[1079px] items-center justify-center overflow-hidden rounded-[36px] bg-cream shadow-[0px_0px_6px_0px_rgba(255,255,255,0.5),0px_4px_8px_0px_rgba(0,0,0,0.25)] backdrop-blur-[40px] border-[20px] border-white">
        <img
          src={wireframeImg}
          alt="Wireframe explorations"
          className="m-4 max-h-[calc(100%-32px)] max-w-[calc(100%-32px)] rounded-[36px] object-contain"
        />
      </div>

      <div className="mx-auto mt-[80px] w-[1120px]">
        <h3 className="font-geist text-[34px] font-semibold leading-[44px] text-dark">
          Solution &amp; Implementation
        </h3>
        <p className="mt-4 font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          After multiple brainstorming sessions, workflow mapping, and
          wireframing explorations, we identified two potential solutions to
          address API workflow fragmentation.
        </p>
      </div>

      <div className="mx-auto mt-[40px] w-[1120px]">
        <h4 className="font-geist text-[24px] font-semibold leading-7 text-dark">
          Proposed Plan A
        </h4>
        <p className="mt-4 font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          Adding API configuration as a dedicated tab within the same module to
          reduce external navigation while maintaining separation of concerns.
        </p>
      </div>

      <div className="mx-auto mt-[40px] flex h-[794px] w-[1079px] items-center justify-center overflow-hidden rounded-[36px] bg-cream shadow-[0px_0px_6px_0px_rgba(255,255,255,0.5),0px_4px_8px_0px_rgba(0,0,0,0.25)] backdrop-blur-[40px] border-[20px] border-white">
        <img
          src={planAImg}
          alt="Proposed Plan A"
          className="m-4 max-h-[calc(100%-32px)] max-w-[calc(100%-32px)] rounded-[36px] object-contain"
        />
      </div>

      <div className="mx-auto mt-[80px] w-[1120px]">
        <h4 className="font-geist text-[24px] font-semibold leading-7 text-dark">
          Proposed Plan B
        </h4>
        <p className="mt-4 font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
          Embedding API setup directly inside the node, enabling inline
          configuration, testing, and response mapping without leaving the
          conversation flow.
        </p>
      </div>

      <div className="mx-auto mt-[40px] flex h-[794px] w-[1079px] items-center justify-center overflow-hidden rounded-[36px] bg-cream shadow-[inset_0px_0px_6px_0px_rgba(255,255,255,0.5),0px_4px_8px_0px_rgba(0,0,0,0.25)] backdrop-blur-[40px] border-[20px] border-white">
        <img
          src={planBImg}
          alt="Proposed Plan B"
          className="m-4 max-h-[calc(100%-32px)] max-w-[calc(100%-32px)] rounded-[36px] object-contain"
        />
      </div>
    </section>
  );
}

function ABTestingSection() {
  const braceImg = new URL("./assets/case-study-api/ab-testing-brace.svg", import.meta.url).href;

  return (
    <section className="mx-auto w-[1280px] pt-[117px]">
      <h3 className="mx-auto w-[1065px] text-center font-geist text-[34px] font-semibold leading-[44px] text-dark">
        A/B Testing
      </h3>
      <p className="mx-auto mt-[20px] w-[1120px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
        Conducted structured A/B testing to compare Plan A (tab-based API setup)
        and Plan B (in-node API configuration). Measured task completion time,
        error rate, navigation clicks, and user satisfaction through usability
        sessions and behavioral analytics.
      </p>

      <div className="mx-auto mt-[48px] flex w-[1120px] items-start gap-4">
        <img
          src={braceImg}
          alt=""
          className="h-[50px] w-[48px] -rotate-[41deg]"
        />
        <p className="font-hand text-[18px] leading-7 tracking-[0.5px] text-dark">
          Tested with 12 developers over 2 weeks.
        </p>
      </div>

      <div className="mx-auto mt-[32px] flex w-[1120px] flex-wrap items-start pr-px">
        {/* Metric column */}
        <div className="mr-[-1px] flex w-[391px] shrink-0 flex-col pb-px">
          <div className="mb-[-1px] flex h-[61px] items-center rounded-tl-[15px] border border-solid border-dark bg-teal px-[18px] py-[24px]">
            <p className="font-source-sans text-[16px] font-semibold leading-6 tracking-[0.5px] text-white">
              Metric
            </p>
          </div>
          <div className="mb-[-1px] flex h-[70px] items-center border border-solid border-dark bg-white/90 px-[18px] py-[24px]">
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
              Task Completion Time
            </p>
          </div>
          <div className="mb-[-1px] flex h-[70px] items-center border border-solid border-dark bg-white px-[18px] py-[24px]">
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
              Error rate
            </p>
          </div>
          <div className="mb-[-1px] flex h-[70px] items-center border border-solid border-dark bg-white/90 px-[18px] py-[24px]">
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
              Navigation Clicks
            </p>
          </div>
          <div className="mb-[-1px] flex h-[70px] items-center border border-solid border-dark bg-white px-[18px] py-[24px]">
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
              User satisfaction
            </p>
          </div>
          <div className="mb-[-1px] flex h-[70px] items-center rounded-bl-[15px] border border-solid border-dark bg-white/90 px-[18px] py-[24px]">
            <p className="font-geist text-[20px] font-semibold leading-7 tracking-[0.15px] text-dark">
              Selected solution
            </p>
          </div>
        </div>

        {/* Plan A column */}
        <div className="mr-[-1px] flex w-[345px] shrink-0 flex-col pb-px">
          <div className="mb-[-1px] flex h-[61px] items-center border border-solid border-dark bg-teal px-[18px] py-[24px]">
            <p className="font-source-sans text-[16px] font-semibold leading-6 tracking-[0.5px] text-white">
              Plan A(Tab-based)
            </p>
          </div>
          <div className="mb-[-1px] flex h-[70px] items-center border border-solid border-dark bg-white/90 px-[18px] py-[24px]">
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
              1.8x slower
            </p>
          </div>
          <div className="mb-[-1px] flex h-[70px] items-center border border-solid border-dark bg-white px-[18px] py-[24px]">
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
              Higher due to manual configuration
            </p>
          </div>
          <div className="mb-[-1px] flex h-[70px] items-center border border-solid border-dark bg-white/90 px-[18px] py-[24px]">
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
              Frequent tab switching required
            </p>
          </div>
          <div className="mb-[-1px] flex h-[70px] items-center border border-solid border-dark bg-white px-[18px] py-[24px]">
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
              Lower due to fragmented workflow
            </p>
          </div>
          <div className="mb-[-1px] h-[70px] border border-solid border-dark bg-white/90" />
        </div>

        {/* Plan B column */}
        <div className="mr-[-1px] flex w-[386px] shrink-0 flex-col pb-px">
          <div className="mb-[-1px] flex h-[61px] items-center rounded-tr-[15px] border border-solid border-dark bg-teal px-[18px] py-[24px]">
            <p className="font-source-sans text-[16px] font-semibold leading-6 tracking-[0.5px] text-white">
              Plan B (In-node)
            </p>
          </div>
          <div className="mb-[-1px] flex h-[70px] items-center border border-solid border-dark bg-white/90 px-[18px] py-[24px]">
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
              70% Lower than Plan A
            </p>
          </div>
          <div className="mb-[-1px] flex h-[70px] items-center border border-solid border-dark bg-white px-[18px] py-[24px]">
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
              35% Reduction in Configuration Errors
            </p>
          </div>
          <div className="mb-[-1px] flex h-[70px] items-center border border-solid border-dark bg-white/90 px-[18px] py-[24px]">
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
              40% Fewer Navigation Actions
            </p>
          </div>
          <div className="mb-[-1px] flex h-[70px] items-center border border-solid border-dark bg-white px-[18px] py-[24px]">
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
              Higher
            </p>
          </div>
          <div className="mb-[-1px] flex h-[70px] items-center rounded-br-[15px] border border-solid border-dark bg-teal/10 px-[18px] py-[24px]">
            <p className="font-geist text-[20px] font-semibold leading-7 tracking-[0.15px] text-dark">
              Plan B
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[60px] flex w-[1120px] flex-col gap-5">
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
    <section className="mx-auto w-[1280px] pt-[117px]">
      <div className="mx-auto w-[1120px]">
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

      <div className="mx-auto mt-[80px] flex w-[1120px] justify-center gap-[64px]">
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
    <section className="mx-auto w-[1280px] pt-[117px]">
      <div className="mx-auto w-[1120px]">
        <h3 className="font-geist text-[48px] font-semibold leading-[54px] text-dark">
          Design process
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

      <div className="mx-auto mt-[60px] w-[1120px]">
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
    <section className="mx-auto w-[1280px] pt-[117px]">
      <div className="mx-auto flex w-[1120px] flex-col gap-5">
        <h3 className="font-geist text-[34px] font-semibold leading-[44px] text-dark">
          DEPLOYMENT &amp; ITERATION
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

      <div className="mx-auto mt-[40px] flex w-[1120px] gap-5">
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
    <section className="mx-auto w-[1280px] pt-[117px]">
      <h3 className="text-center font-geist text-[48px] font-semibold leading-[54px] text-dark">
        Future roadmap
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

function CTABanner() {
  return (
    <section className="mx-auto w-[1280px] pt-[117px]">
      <div className="mx-auto flex w-[1120px] flex-col items-start gap-4 rounded-[24px] bg-teal-dark px-[40px] py-[40px]">
        <h3 className="font-geist text-[34px] font-semibold leading-[44px] tracking-[0.25px] text-white">
          Let&rsquo;s Build Better, Together.
        </h3>
        <p className="w-[368px] font-source-sans text-[16px] font-normal leading-6 tracking-[0.5px] text-white">
          Every product is unique. That&rsquo;s why I design tailored solutions
          that align with your goals and deliver real results.
        </p>
        <a
          href="mailto:lathalaav6@gmail.com"
          className="mt-4 rounded-[14px] bg-teal px-4 py-2 font-source-sans text-[14px] font-semibold leading-6 tracking-[0.25px] text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]"
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
    <footer className="mx-auto w-[1280px] pb-[40px] pt-[40px]">
      <div className="mx-auto h-px w-[1120px] rounded-[14px] bg-[#a4a5a7] opacity-50" />
      <div className="mx-auto mt-[40px] flex w-[1120px] items-center">
        <Link to="/">
          <img src={logoUrl} alt="Logo" className="h-8 w-8 shrink-0" />
        </Link>
        <p className="flex-1 text-center font-[Inter,sans-serif] text-[14px] font-normal leading-6 tracking-[0.25px] text-dark">
          Latha &copy; 2026
        </p>
        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/in/latha-s-640073119?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group">
            <img src={footerIconLinkedin} alt="" className="h-6 w-6 transition-all duration-200 group-hover:[filter:brightness(0)_saturate(100%)]" />
          </a>
          <a href="mailto:lathalaav6@gmail.com" aria-label="Email" className="group">
            <img src={footerIconEmail} alt="" className="h-6 w-6 transition-all duration-200 group-hover:[filter:brightness(0)_saturate(100%)]" />
          </a>
        </div>
      </div>
    </footer>
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
    <div className="min-h-screen bg-white">
      <div className="w-full px-4 pt-4">
        <div className="relative w-full min-h-[926px] rounded-t-[24px] bg-cream">
          <div className="relative px-4 pt-4">
            <div className="pt-6">
              <Navbar />
            </div>

              <div className="mt-[48px]">
              <div className="relative mx-auto h-[682px] w-[1120px] overflow-hidden rounded-[24px]">
                <div className="absolute left-1/2 top-[148px] h-[540px] w-[1024px] -translate-x-1/2">
                  <img
                    src={heroLaptopMockup}
                    alt="Laptop mockup showing Gen AI interface"
                    className="block h-full w-full max-w-none object-contain"
                  />
                </div>
                <div className="absolute left-1/2 top-0 w-[568px] -translate-x-1/2 text-center">
                  <p className="font-geist text-[24px] font-semibold leading-[34px] text-dark">
                    Simplifying API Configuration: Reduced Setup Errors by 40%
                  </p>
                  <p className="mx-auto mt-[8px] w-[560px] font-source-sans text-[16px] font-normal leading-[24px] tracking-[0.5px] text-dark">
                    Redesigned API selection and configuration to surface endpoint context clearly, helping users integrate faster and avoid configuration mistakes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto flex w-[1280px] flex-col items-center pb-[80px] pt-[120px]">
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
      <CTABanner />
      <Footer />
    </div>
  );
}
