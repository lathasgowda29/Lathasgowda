import { useState } from "react";
import { Link } from "react-router-dom";
import logoUrl from "./assets/logo.svg";
import brainstorming1 from "./assets/case-study-genai/brainstorming-1.jpg";
import brainstorming2 from "./assets/case-study-genai/brainstorming-2.jpg";
import mvpInterface from "./assets/case-study-genai/mvp-interface.png";
import research1 from "./assets/case-study-genai/research-1.jpg";
import research2 from "./assets/case-study-genai/research-2.png";
import research3Top from "./assets/case-study-genai/research-3-top.jpg";
import research3Bottom from "./assets/case-study-genai/research-3-bottom.png";
import research4 from "./assets/case-study-genai/research-4.jpg";
import research5 from "./assets/case-study-genai/research-5.jpg";
import iteration2Interface from "./assets/case-study-genai/iteration2-interface.png";
import flipImage from "./assets/case-study-genai/flip-image.png";
import frameIcon from "./assets/case-study-genai/frame-icon.svg";
import usabilityFeedback from "./assets/case-study-genai/usability-feedback.png";
import solution1Flowbuilder from "./assets/case-study-genai/solution-1-flowbuilder.png";
import solution2Freeform from "./assets/case-study-genai/solution-2-freeform.png";
import finalDesignStructuredBuilder from "./assets/case-study-genai/final-design-structured-builder.png";
import usabilityTestingStructuredWorkflow from "./assets/case-study-genai/usability-testing-structured-workflow.png";
import aiAssistedPrompt from "./assets/case-study-genai/ai-assisted-prompt.png";
import promptAnalysis from "./assets/case-study-genai/prompt-analysis.png";
import helpExamples from "./assets/case-study-genai/help-examples.png";
import preProcessingWorkflows from "./assets/case-study-genai/pre-processing-workflows.png";
import interview1 from "./assets/case-study-genai/interview-1.jpg";
import interview2 from "./assets/case-study-genai/interview-2.jpg";
import interview3 from "./assets/case-study-genai/interview-3.jpg";
import hotjar1 from "./assets/case-study-genai/hotjar-1.png";
import hotjar2 from "./assets/case-study-genai/hotjar-2.png";
import hotjar3 from "./assets/case-study-genai/hotjar-3.png";
import card1Illustration from "./assets/case-study-genai/card1-illustration.png";
import card2Illustration from "./assets/case-study-genai/card2-illustration.png";
import card3Illustration from "./assets/case-study-genai/card3-illustration.png";
import arrow1 from "./assets/case-study-genai/arrow-1.svg";
import arrow2 from "./assets/case-study-genai/arrow-2.svg";
import arrow3 from "./assets/case-study-genai/arrow-3.svg";
import arrow4 from "./assets/case-study-genai/arrow-4.svg";
import footerLogo from "./assets/case-study-genai/footer-logo.svg";
// Footer icons from Figma (assets expire in 7 days — replace with local assets if needed)
const footerIconEmail = "https://www.figma.com/api/mcp/asset/efc137be-4607-440a-a0c4-a5de537c5aa0";
const footerIconLinkedin = "https://www.figma.com/api/mcp/asset/8f0085f2-dfa1-45dd-90ed-bf8f61b2ec45";
import heroLaptopMockup from "./assets/case-study-genai/hero-laptop-mockup.png";


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
        <span className="px-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-teal">
          Case studies
        </span>
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

      <a
        href="https://drive.google.com/file/d/1DA3bWyLAUIbS1uXnKu466CxsajH9Engd/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-0 shrink-0 rounded-[14px] border border-teal bg-white px-4 py-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-dark transition-colors duration-200 hover:border-2 hover:border-teal lg:ml-auto"
      >
        Resume
      </a>
    </nav>
  );
}

const CARD_STACK_TEXTS = [
  "Make prompt writing simple and structured. Eliminate tab switching and cognitive overload.",
  "Support workflows, preprocessing, versioning, and analysis for enterprise use.",
  "Provide inline suggestions, validation, and feedback while building.",
];

const CARD_POSITIONS = [
  { left: "38px", top: "14px", rotate: "3deg", zIndex: 30 },
  { left: "31px", top: "0px", rotate: "0.24deg", zIndex: 20 },
  { left: "0px", top: "4px", rotate: "-3deg", zIndex: 10 },
];

export default function CaseStudyGenAI() {
  const [isFrameFlipped, setIsFrameFlipped] = useState(false);
  const [frontCardIndex, setFrontCardIndex] = useState(0);

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
                    alt="Laptop mockup showing Gen AI interface"
                    className="block h-full w-full max-w-full object-contain"
                  />
                </div>
                <div className="absolute inset-x-0 top-0 z-10 mx-auto w-full max-w-[min(95vw,568px)] px-3 text-center sm:px-4 md:px-0">
                  <p className="font-geist text-[20px] font-semibold leading-[28px] text-dark sm:text-[24px] sm:leading-[34px]">
                    From Long Prompts to Structured AI Workflows : Boosted Adoption by 61%
                  </p>
                  <p className="mx-auto mt-[8px] w-full max-w-[560px] font-source-sans text-[15px] font-normal leading-[22px] tracking-[0.5px] text-dark sm:text-[16px] sm:leading-[24px]">
                    Redesigned prompt-heavy interactions into structured AI steps, enabling users to build dynamic conversations faster and with fewer errors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="layout-shell flex flex-col gap-[70px] px-4 pt-[120px] pb-[80px]">
        <div className="layout-inner mx-auto flex h-auto min-h-fit w-full max-w-[1120px] flex-col items-center rounded-[24px] bg-card-tan px-[24px] py-[64px]">
          <div className="flex w-full min-w-0 max-w-[925px] flex-col gap-[20px]">
            <h2 className="font-geist text-[28px] font-semibold leading-[36px] text-dark md:text-[48px] md:leading-[54px]">
              Overview
            </h2>
            <p className="w-full font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
              Our journey to build smarter bot creation tools began with a
              node-based interface. While it allowed users to visually design
              conversation flows, the experience quickly became limiting. Prompt
              inputs were constrained, key configurations like variables and
              workflows were scattered across tabs, and even simple tasks
              required technical understanding. As conversations grew more
              complex, so did user frustration revealing the need for a more
              intuitive and scalable approach.
            </p>
          </div>
        </div>

        <div className="layout-inner mx-auto flex h-auto min-h-fit w-full max-w-[1120px] flex-col items-center rounded-[24px] bg-card-mint px-[24px] py-[64px]">
          <div className="flex w-full min-w-0 max-w-[925px] flex-col gap-[20px]">
            <h2 className="font-geist text-[28px] font-semibold leading-[36px] text-dark md:text-[48px] md:leading-[54px]">
              Why We Reimagined the Bot Creation Experience
            </h2>
            <p className="w-full font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
              With the rise of generative AI, the expectations around what
              chatbots should do changed significantly. Users wanted flexibility,
              adaptability, and human-like responses, but our existing node based
              builder wasn&apos;t designed to support that level of
              sophistication. To address this, we introduced a dedicated AI bot
              builder page. It gave users more control, space, and the ability to
              create richer prompt logic. But while it expanded capabilities, it
              also introduced new usability challenges like fragmented workflows,
              hidden features, and increased cognitive load.
            </p>
          </div>
        </div>
      </section>

      <section className="relative layout-shell px-4">
        {/* What we wanted: stacked cards lg–1279; absolute deck xl+ to avoid overlap at 1024 */}
        <div className="relative mx-auto w-full max-w-[1120px] min-w-0 pb-[20px] pt-[60px] xl:min-h-[min(520px,90vh)]">
          <div className="relative z-10 flex w-full min-w-0 max-w-full flex-col gap-[20px] text-dark xl:max-w-[570px]">
            <p className="font-geist text-[24px] font-normal leading-[28px]">
              High-level requirements
            </p>
            <h2 className="font-geist text-[28px] font-semibold leading-[36px] md:text-[48px] md:leading-[54px]">
              What We Wanted to Achieve?
            </h2>
            <div className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
              <p>
                It became clear that unlocking the full potential of AI in bot
                creation required more than advanced features it required a
                fundamentally better experience.
              </p>
              <p>
                We needed a builder that aligned with how users think.
                structured, step-by-step, and goal-oriented. Through iterative
                design and in-depth user research, we reimagined the platform to
                be intuitive, consolidated, and deeply supportive of AI-driven
                workflows.
              </p>
              <p>
                This case study outlines that evolution across three key design
                phases driven by user needs and focused on making AI-powered
                conversation design more accessible, scalable, and intelligent.
              </p>
            </div>
          </div>

          {/* Stacked cards: default + lg–xl; hidden xl+ when absolute deck shows */}
          <div className="mt-10 flex flex-col gap-4 xl:hidden">
            {[
              { bg: "bg-card-mint", text: CARD_STACK_TEXTS[2] },
              { bg: "bg-card-blue", text: CARD_STACK_TEXTS[1] },
              { bg: "bg-cream", text: CARD_STACK_TEXTS[0] },
            ].map((card, d) => (
              <div
                key={d}
                className={`rounded-[24px] p-5 font-hand text-[22px] leading-8 text-black shadow-sm sm:text-[26px] ${card.bg}`}
              >
                &ldquo;{card.text}&rdquo;
              </div>
            ))}
          </div>

          <div
            className="absolute right-0 top-[128px] hidden h-[433px] w-[min(100%,515px)] max-w-[515px] cursor-pointer xl:block xl:right-[-12px] min-[1400px]:right-[-31px]"
            onClick={() =>
              setFrontCardIndex((prev) => (prev + 1) % 3)
            }
          >
            {[
              { bg: "bg-card-mint", text: CARD_STACK_TEXTS[2] },
              { bg: "bg-card-blue", text: CARD_STACK_TEXTS[1] },
              { bg: "bg-cream", text: CARD_STACK_TEXTS[0] },
            ].map((card, d) => {
              const frontCardDomIndex = (2 - frontCardIndex + 3) % 3;
              const positionIndex = (d - frontCardDomIndex + 3) % 3;
              const pos = CARD_POSITIONS[positionIndex];
              const isFront = positionIndex === 0;
              return (
                <div
                  key={d}
                  className={`absolute h-[408px] w-[min(494px,100%)] max-w-[494px] rounded-[24px] transition-all duration-500 ease-in-out ${card.bg}`}
                  style={{
                    left: pos.left,
                    top: pos.top,
                    transform: `rotate(${pos.rotate})`,
                    zIndex: pos.zIndex,
                  }}
                >
                  {isFront && (
                    <>
                      <p className="absolute left-[24px] top-[24px] font-geist text-[14px] font-normal leading-[20px] text-dark">
                        {frontCardIndex + 1}/3
                      </p>
                      <p className="absolute left-1/2 top-[116px] w-[359px] -translate-x-1/2 -rotate-1 text-center font-hand text-[32px] leading-[40px] text-black">
                      &ldquo;{d === 2 ? (
                        <>Make prompt writing simple and structured.<br />Eliminate tab switching and cognitive overload.</>
                      ) : (
                        card.text
                      )}&rdquo;
                    </p>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative layout-shell px-4">
        {/* Competitive Analysis — column to xl so copy is not masked at 1024 */}
        <div className="mx-auto flex w-full min-w-0 max-w-[1120px] flex-col items-stretch justify-center gap-10 pb-[60px] pt-[80px] xl:flex-row xl:items-start xl:justify-start xl:gap-[80px]">
          <div className="relative flex min-w-0 shrink-0 flex-col gap-4 sm:flex-row sm:justify-center sm:gap-[16px]">
            <div
              className="relative h-[min(400px,70vh)] w-full min-w-0 max-w-[302px] shrink-0 overflow-hidden rounded-[30px] text-white sm:h-[400px] sm:w-[265px]"
              style={{
                background:
                  "linear-gradient(-45deg, #E3D5C7 0%, #E40066 100%)",
              }}
            >
              <p
                className="absolute left-[24px] top-[32px] text-[22px] font-bold leading-[38px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Market today
              </p>
              <ul className="absolute left-[24px] top-[86px] w-[233px] list-disc pl-[27px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                <li>Large unstructured prompt fields</li>
                <li>Disconnected workflows</li>
                <li>Minimal real-time guidance</li>
                <li>Hidden advanced features</li>
                <li>Weak debugging visibility</li>
              </ul>
            </div>

            <div
              className="relative h-[min(400px,70vh)] w-full min-w-0 max-w-[302px] shrink-0 overflow-hidden rounded-[30px] text-white sm:h-[400px] sm:w-[265px]"
              style={{
                background:
                  "linear-gradient(-41deg, #D9F4ED 0%, #256EFF 100%)",
              }}
            >
              <p
                className="absolute left-[24px] top-[32px] text-[22px] font-bold leading-[38px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Our Opportunity
              </p>
              <ul className="absolute left-[24px] top-[86px] w-[243px] list-disc pl-[27px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                <li>Step-based structured prompts</li>
                <li>Inline workflow integration</li>
                <li>Real-time best practice suggestions</li>
                <li>Clear feature discoverability</li>
                <li>Built-in analysis &amp; validation</li>
              </ul>
            </div>
          </div>

          <div className="relative flex w-full min-w-0 max-w-[420px] flex-col gap-[20px] text-dark xl:max-w-[min(420px,100%)] xl:min-w-0 xl:shrink">
            <p className="font-geist text-[24px] font-normal leading-[28px]">
              Identifying gaps in the market
            </p>
            <h3 className="font-geist text-[28px] font-semibold leading-[36px] sm:text-[34px] sm:leading-[44px]">
              Competitive Analysis
            </h3>
            <p className="font-geist text-[18px] font-normal leading-7">
              To validate our direction, we conducted a competitive analysis of
              leading conversational AI and chatbot platforms. We evaluated them
              across usability, AI integration depth, workflow flexibility, and
              guidance mechanisms.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: MVP Launch */}
      <section className="layout-shell px-4 pb-[60px]">
        <div className="mx-auto w-full min-w-0 max-w-[1120px] pt-[74px]">
          <div className="flex flex-col gap-[12px]">
            <p className="font-geist text-[24px] font-normal leading-[28px] text-dark">
              MVP launch
            </p>
            <h2 className="font-geist text-[48px] font-semibold leading-[54px] text-dark">
              Embedding AI in the Node
            </h2>
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
              Early AI integration proved the demand was real, but the design
              constrained its impact. Users were excited about generative AI, yet
              the small prompt space, scattered configurations, and constant
              context switching made complex conversation building harder than it
              needed to be.
            </p>
          </div>

          <div className="mt-[46px] flex min-w-0 flex-col gap-[15px] xl:flex-row">
            {/* Left column */}
            <div className="flex w-full min-w-0 shrink-0 flex-col gap-[11px] xl:w-[287px]">
              <div className="rounded-[24px] bg-card-tan px-[24px] pb-[24px] pt-[40px]">
                <div className="flex w-full min-w-0 max-w-[239px] flex-col gap-[12px]">
                  <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
                    MVP idea
                  </p>
                  <h3 className="font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px] text-dark">
                    AI Prompting Inside a Node
                  </h3>
                  <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
                    We first introduced AI within the Dynamic Chat Node,
                    allowing users to add prompts directly into existing
                    conversation flows. While this enabled early experimentation
                    with AI responses, the prompt field was limited and lacked
                    support for complex logic. As flows grew, the constraints
                    quickly surfaced.
                  </p>
                </div>
              </div>

              <div className="relative min-h-[204px] rounded-[24px] bg-card-tan px-[24px] pt-[31px]">
                <div className="flex w-full min-w-0 max-w-[231px] flex-col gap-[8px]">
                  <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
                    Launched MVP in
                  </p>
                  <p className="font-geist text-[48px] font-semibold leading-[54px] text-dark">
                    2 Weeks
                  </p>
                </div>
                <p className="mt-[7px] w-full max-w-[247px] font-source-sans text-[14px] font-normal leading-[18px] tracking-[0.1px] text-[#494c50]">
                  Fast experimentation to validate the concept.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="flex min-w-0 flex-1 flex-col gap-[15px]">
              <div className="min-w-0 rounded-[24px] bg-card-tan p-[24px]">
                <h3 className="mb-[16px] font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px] text-dark">
                  Brainstorming
                </h3>
                <div className="flex min-w-0 flex-col gap-[18px] sm:flex-row sm:flex-wrap">
                  <img
                    src={brainstorming1}
                    alt="Team brainstorming session"
                    className="h-auto max-h-[274px] w-full min-w-0 max-w-[374px] rounded-[16px] object-cover"
                  />
                  <img
                    src={brainstorming2}
                    alt="Whiteboard ideation"
                    className="h-auto max-h-[274px] w-full min-w-0 max-w-[374px] rounded-[16px] object-cover"
                  />
                </div>
              </div>

              <div className="min-w-0 rounded-[24px] bg-card-tan p-[24px]">
                <h3 className="mb-[20px] font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px] text-dark">
                  Pain Points Identified
                </h3>
                <ul className="w-full min-w-0 max-w-none list-disc pl-[24px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
                  <li>
                    <strong>Cramped writing space</strong> : Longer prompts
                    became hard to manage inside a small text field.
                  </li>
                  <li>
                    <strong>Disconnected configuration</strong> : Inputs,
                    variables, and workflows lived in separate tabs—forcing users
                    to jump back and forth.
                  </li>
                  <li>
                    <strong>Cognitive overload</strong> : Constant switching
                    between nodes to add settings and configurations made it
                    difficult for users to track logic and maintain conversation
                    context.
                  </li>
                  <li>
                    <strong>Low discoverability</strong> : Many users
                    didn&apos;t realize the node supported AI, as the prompt
                    feature wasn&apos;t visually differentiated.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* MVP Interface */}
          <div className="mt-[11px] overflow-hidden rounded-[24px] bg-card-tan p-[24px]">
            <h3 className="mb-[16px] font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px] text-dark">
              MVP Interface
            </h3>
            <img
              src={mvpInterface}
              alt="MVP Interface showing Dynamic Chat node configuration"
              className="w-full rounded-[12px] object-cover"
            />
          </div>
        </div>
      </section>
      {/* Phase 1: From Node to Dedicated Authoring Page */}
      <section className="layout-shell px-4">
        <div className="mx-auto w-full min-w-0 max-w-[1120px] pt-[80px]">
          <div className="flex flex-col items-center gap-[20px] text-center text-dark">
            <p className="font-geist text-[24px] font-normal leading-[32px]">
              Phase 1
            </p>
            <h2 className="w-full max-w-[941px] font-geist text-[48px] font-semibold leading-[54px]">
              From Node to Dedicated Authoring Page
            </h2>
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
              We expanded AI prompt creation into a full-screen, structured
              workspace, giving users more space, flexibility, and access to
              advanced configurations to build richer, more dynamic
              conversations
            </p>
          </div>

          <div className="mt-[48px] h-px w-full bg-[#a4a5a7]" />

          <div className="mt-[49px] flex items-start gap-[80px]">
            {/* Left: User research quotes */}
            <div className="flex w-[530px] shrink-0 flex-col gap-[28px]">
              <div className="ml-[58px] w-fit overflow-hidden rounded-[24px] border border-[#a4a5a7] bg-[#0f6378] px-[16px] py-[20px]">
                <p className="w-[461px] font-hand text-[20px] leading-[26px] text-white">
                  &ldquo;The prompt box is too small. I can&apos;t even see what
                  I&apos;ve written once it gets long.&rdquo;
                </p>
              </div>
              <div className="ml-[101px] w-fit overflow-hidden rounded-[24px] border border-[#a4a5a7] bg-[#0f6378] px-[16px] py-[20px]">
                <p className="w-[280px] font-hand text-[20px] leading-[26px] text-white">
                  &ldquo;I didn&apos;t even realize this node could do AI at
                  first.&rdquo;
                </p>
              </div>
              <div className="w-fit overflow-hidden rounded-[24px] border border-[#a4a5a7] bg-[#0f6378] px-[16px] py-[20px]">
                <p className="w-[426px] font-hand text-[20px] leading-[26px] text-white">
                  &ldquo;I&apos;m not sure when this AI node actually gets
                  triggered in the conversation.&rdquo;
                </p>
              </div>
              <div className="ml-[85px] w-fit overflow-hidden rounded-[24px] border border-[#a4a5a7] bg-[#0f6378] px-[16px] py-[20px]">
                <p className="w-[425px] font-hand text-[20px] leading-[26px] text-white">
                  &ldquo;If something goes wrong, I don&apos;t know where to
                  debug—inside the node or somewhere else?&rdquo;
                </p>
              </div>
              <div className="ml-[16px] w-fit overflow-hidden rounded-[24px] border border-[#a4a5a7] bg-[#0f6378] px-[16px] py-[20px]">
                <p className="w-[463px] font-hand text-[20px] leading-[26px] text-white">
                  &ldquo;It feels powerful, but I don&apos;t fully understand
                  how to use it properly. I&apos;m afraid I&apos;ll break
                  something.&rdquo;
                </p>
              </div>
              <div className="ml-[36px] w-fit overflow-hidden rounded-[24px] border border-[#a4a5a7] bg-[#0f6378] px-[16px] py-[20px]">
                <p className="w-[485px] font-hand text-[20px] leading-[26px] text-white">
                  &ldquo;I have to keep switching tabs to check variables and
                  then come back here—it breaks my flow.&rdquo;
                </p>
              </div>
            </div>

            {/* Right: Research description */}
            <div className="flex flex-1 flex-col gap-[24px] text-dark">
              <p className="font-geist text-[24px] font-normal leading-[28px]">
                Research , brainstorming
              </p>
              <h3 className="font-geist text-[34px] font-semibold leading-[44px]">
                Understanding
                <br />
                Real Problem and Users
              </h3>
              <div className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                <p>
                  During Iteration 2, we conducted user interviews, observed
                  live workflows, and analyzed session recordings to uncover
                  deeper usability gaps. Users struggled with scattered
                  configurations, unclear trigger logic, and uncertainty around
                  structuring effective prompts.
                </p>
                <br />
                <p>
                  We defined three key personas to guide our decisions,{" "}
                  <strong>Technical Builders</strong>, who valued efficiency and
                  control, <strong>Business Users</strong>, who were goal-driven
                  but overwhelmed by complexity, and{" "}
                  <strong>AI Experimenters</strong>, who were curious about AI
                  but unsure how to structure prompts effectively. These personas
                  helped us balance power with simplicity.
                </p>
                <br />
                <p>
                  Through card sorting exercises, we discovered that users
                  mentally grouped variables, workflows, and inputs as part of
                  the writing process not as separate settings. This insight
                  revealed that the core issue wasn&apos;t missing features, but
                  fragmented information architecture and cognitive overload.
                </p>
              </div>
            </div>
          </div>

          {/* Research photo collage */}
          <div className="mt-[60px] flex gap-[5px]">
            <div className="flex w-[550px] shrink-0 flex-col gap-[5px]">
              <img
                src={research1}
                alt="Research session with sticky notes"
                className="h-[400px] w-full rounded-[24px] border-2 border-[#d2d2d3] object-cover"
              />
              <img
                src={research2}
                alt="Whiteboard mapping user flows"
                className="h-[335px] w-full rounded-[24px] border-2 border-[#d2d2d3] object-cover"
              />
              <div className="flex flex-col gap-[5px]">
                <div className="relative h-[324px] w-full overflow-hidden rounded-[24px] border-2 border-[#d2d2d3]">
                  <img
                    src={research3Top}
                    alt="Research whiteboard with sticky notes"
                    className="absolute left-0 top-[-94.39%] h-[304.53%] w-[100.91%] max-w-none object-cover object-left-top"
                  />
                </div>
                <div className="relative h-[337px] w-full overflow-hidden rounded-[24px] border-2 border-[#d2d2d3]">
                  <img
                    src={research3Bottom}
                    alt="Team collaboration and AI agent configuration"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
              <img
                src={research4}
                alt="Detailed research board"
                className="h-[980px] w-full rounded-[24px] border-2 border-[#d2d2d3] object-cover"
              />
              <img
                src={research5}
                alt="User interview notes"
                className="h-[427px] w-full rounded-[24px] border-2 border-[#d2d2d3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Worked and What Didn't */}
      <section className="layout-shell px-4 pb-[80px]">
        <div className="mx-auto w-full min-w-0 max-w-[1120px] pt-[80px]">
          <div className="flex flex-col gap-[20px] text-dark">
            <p className="font-geist text-[24px] font-normal leading-[28px]">
              High-level requirements
            </p>
            <h2 className="font-geist text-[34px] font-semibold leading-[44px]">
              What Worked and What didnt
            </h2>
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
              Iteration 2 unlocked flexibility and control, enabling deeper AI
              integration. However, scattered configurations and minimal
              onboarding guidance meant users still felt overwhelmed when
              building complex conversations.
            </p>
          </div>

          {/* Issue cards - staggered grid */}
          <div className="mt-[60px] flex flex-col items-center gap-[24px]">
            <div className="flex min-w-0 flex-wrap justify-center gap-[24px]">
              <div className="flex h-[256px] w-full min-w-0 max-w-[269px] flex-col gap-[16px] rounded-[24px] bg-cream p-[24px] text-dark">
                <h4 className="font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px]">
                  Overwhelmed by Options
                </h4>
                <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  The expanded interface felt powerful but intimidating.
                </p>
              </div>
              <div className="flex h-[256px] w-full min-w-0 max-w-[269px] flex-col gap-[16px] rounded-[24px] bg-card-tan p-[24px] text-dark">
                <h4 className="font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px]">
                  Blank Page Anxiety
                </h4>
                <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  Users struggled to structure prompts without guidance.
                </p>
              </div>
              <div className="flex h-[256px] w-full min-w-0 max-w-[269px] flex-col gap-[16px] rounded-[24px] bg-card-blue p-[24px] text-dark">
                <h4 className="font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px]">
                  Disconnected Workflow
                </h4>
                <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  Variables, inputs, and workflows still required context
                  switching.
                </p>
              </div>
            </div>
            <div className="flex min-w-0 flex-wrap justify-center gap-[24px]">
              <div className="flex h-[256px] w-full min-w-0 max-w-[269px] flex-col gap-[16px] rounded-[24px] bg-card-mint p-[24px] text-dark">
                <h4 className="font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px]">
                  Low Feature Utilization
                </h4>
                <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  Advanced capabilities existed, but many users didn&apos;t
                  fully leverage them.
                </p>
              </div>
              <div className="flex h-[256px] w-full min-w-0 max-w-[269px] flex-col gap-[16px] rounded-[24px] bg-cream p-[24px] text-dark">
                <h4 className="font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px]">
                  Debugging Was Difficult
                </h4>
                <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  When outputs were incorrect, users weren&apos;t sure which
                  part of the prompt or configuration caused the issue.
                </p>
              </div>
            </div>
          </div>

          {/* Defining features + MoSCoW priorities */}
          <div className="mt-[64px] flex min-w-0 flex-col items-start gap-[36px] xl:flex-row">
            <div className="flex w-full min-w-0 max-w-[570px] shrink-0 flex-col gap-[20px] text-dark">
              <p className="font-geist text-[24px] font-normal leading-[28px]">
                Possible solution
              </p>
              <h3 className="font-geist text-[34px] font-semibold leading-[44px]">
                Defining Features
              </h3>
              <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                This iteration confirmed that while a larger space helped, it
                wasn&apos;t enough. To truly support users, we needed to design
                not just a place to write prompts but a system that guided them
                through writing better ones
              </p>
            </div>

            <div className="flex min-w-0 flex-1 flex-col text-dark">
              <div className="flex flex-col gap-[12px] pb-[24px]">
                <h4 className="font-geist text-[24px] font-semibold leading-[28px]">
                  Must-Have
                </h4>
                <ul className="list-disc pl-[27px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  <li>Larger prompt editor</li>
                  <li>Clear structure for writing prompts</li>
                  <li>Better discoverability of variables and workflows</li>
                </ul>
              </div>
              <div className="h-px w-full bg-[#a4a5a7]" />
              <div className="flex flex-col gap-[12px] py-[24px]">
                <h4 className="font-geist text-[24px] font-semibold leading-[28px]">
                  Should-Have
                </h4>
                <ul className="list-disc pl-[27px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  <li>Real-time suggestions</li>
                  <li>Clear validation for prompt structure</li>
                </ul>
              </div>
              <div className="h-px w-full bg-[#a4a5a7]" />
              <div className="flex flex-col gap-[12px] py-[24px]">
                <h4 className="font-geist text-[24px] font-semibold leading-[28px]">
                  Could-Have
                </h4>
                <ul className="list-disc pl-[27px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  <li>Prompt templates</li>
                  <li>Testing and preview capabilities</li>
                </ul>
              </div>
              <div className="h-px w-full bg-[#a4a5a7]" />
              <div className="flex flex-col gap-[12px] pt-[24px]">
                <h4 className="font-geist text-[24px] font-semibold leading-[28px]">
                  Wont-Have
                </h4>
                <ul className="list-disc pl-[27px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  <li>Frequent tab switching</li>
                  <li>Overloaded settings panels</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Iteration 2 Interface */}
          <div
            className="relative mt-[60px] cursor-pointer overflow-hidden rounded-[24px] border-[20px] border-white bg-cream p-[12px] backdrop-blur-[40px]"
            style={{
              boxShadow:
                "inset 0px 0px 6px 0px rgba(255, 255, 255, 0.5), 0px 4px 8px 0px rgba(0, 0, 0, 0.25)",
            }}
            onClick={() => setIsFrameFlipped((prev) => !prev)}
          >
            <div
              className="relative h-[739px] w-full"
              style={{ perspective: "1000px" }}
            >
              <div
                className="h-full w-full transition-transform duration-500 ease-in-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFrameFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                <div
                  className="absolute inset-0 rounded-[16px]"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={iteration2Interface}
                    alt="Iteration 2 interface showing the dedicated AI bot builder page"
                    className="h-[739px] w-full rounded-[16px] object-cover object-top"
                  />
                </div>
                <div
                  className="absolute inset-0 rounded-[16px]"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <img
                    src={flipImage}
                    alt="Conversations builder interface"
                    className="h-[739px] w-full rounded-[16px] object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute right-[16px] top-[16px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white transition-colors duration-200 hover:bg-[#A2E6FE]/80"
              style={{
                boxShadow:
                  "0px 6px 25px 0px rgba(0, 0, 0, 0.08), 0px 0px 2px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              <img src={frameIcon} alt="" className="h-[32px] w-[32px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Refining the Experience Through User Feedback */}
      <section className="layout-shell px-4 pb-[80px]">
        <div className="mx-auto w-full min-w-0 max-w-[1120px] pt-[80px]">
          <h2 className="mx-auto text-center font-geist text-[48px] font-semibold leading-[54px] text-dark">
            Refining the Experience Through User
            <br />
            Feedback
          </h2>

          <div className="mt-[60px] flex flex-wrap justify-center gap-[20px]">
            {[
              {
                title: "Step-Based Prompting",
                body: "Users could break complex prompts into smaller, structured steps, making it easier to write, debug, and manage conversation logic without getting lost in large text blocks.",
              },
              {
                title: "Inline Editing & Unified Configuration",
                body: "Inputs, variables, and workflows could now be created and managed directly within the authoring interface, eliminating context switching and improving visibility.",
              },
              {
                title: "Real-Time Feedback & Smart Guidance",
                body: "The Best Practice Analyzer provided instant suggestions by detecting overloaded steps, duplicate logic, and structural issues helping users write cleaner, more reliable prompts with confidence.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex min-h-[298px] w-full min-w-0 max-w-[328px] items-center rounded-[12px] border border-white p-[32px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 100%), #d2d2d3",
                }}
              >
                <div className="flex flex-col gap-[12px] text-dark">
                  <h4 className="font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px]">
                    {card.title}
                  </h4>
                  <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[80px] flex min-w-0 flex-col items-start gap-[40px] xl:flex-row">
            <div className="flex w-full min-w-0 max-w-[505px] shrink-0 flex-col gap-[20px] text-dark">
              <h3 className="font-geist text-[34px] font-semibold leading-[44px]">
                Understanding the Problem Through Usability Testing
              </h3>
              <div className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                <p>
                  Before moving into Phase 2 design solutions, we conducted user
                  research and usability testing on the Phase 1 experience to
                  better understand how users interacted with prompt writing in
                  real automation workflows.
                </p>
                <br />
                <p>
                  We began with user interviews involving 10 participants — 5
                  new users and 5 existing users — to learn how different user
                  groups approached prompt creation and automation setup. These
                  conversations helped us understand how users think about
                  structuring prompts and how they navigate the current interface
                  while building workflows.
                </p>
              </div>
            </div>

            <div
              className="min-h-[400px] w-full min-w-0 flex-1 overflow-hidden rounded-[36px] xl:h-[612px] xl:min-h-0"
              style={{
                border: "20px solid rgba(255,255,255,1)",
                backgroundColor: "#e3d5c7",
                backdropFilter: "blur(20px)",
                boxShadow:
                  "inset 0px 0px 6px 0px rgba(255,255,255,0.5), 0px 4px 8px 0px rgba(0,0,0,0.25)",
              }}
            >
              <div className="h-full min-h-[360px] p-[16px] xl:min-h-0">
                <img
                  src={usabilityFeedback}
                  alt="Usability feedback from testing sessions"
                  className="h-full w-full rounded-[16px] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exploring Possible Solutions */}
      <section className="layout-shell px-4 pb-[80px]">
        <div className="mx-auto w-full min-w-0 max-w-[1120px] pt-[80px]">
          <div className="flex flex-col gap-[20px] text-dark">
            <h2 className="font-geist text-[34px] font-semibold leading-[44px]">
              Exploring Possible Solutions
            </h2>
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
              Before finalizing the design, we explored multiple interaction
              models to understand how users naturally structure prompts. We
              tested three different approaches to see which aligned best with
              user workflows and mental models.
            </p>
          </div>

          {/* Solution #1 */}
          <div className="mt-[80px] flex min-w-0 flex-col items-start gap-[40px] xl:flex-row">
            <div className="flex w-full min-w-0 max-w-[502px] shrink-0 flex-col gap-[20px] text-dark">
              <p className="font-geist text-[24px] font-normal leading-[28px]">
                Solution #1
              </p>
              <h3 className="font-geist text-[34px] font-semibold leading-[44px]">
                Flow-Based Prompt Builder (Visual logic)
              </h3>
              <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                Inspired by traditional chatbot builders, this concept allowed
                users to break prompts into visual steps connected like a
                flowchart. Each block represented an instruction or logic step,
                helping users visualize the conversational sequence.
              </p>
            </div>

            <div
              className="h-auto min-h-[280px] w-full min-w-0 max-w-[494px] shrink-0 overflow-hidden rounded-[36px] p-[16px] xl:h-[408px]"
              style={{
                border: "20px solid rgba(255,255,255,1)",
                backgroundColor: "#e3d5c7",
                backdropFilter: "blur(20px)",
                boxShadow:
                  "inset 0px 0px 6px 0px rgba(255,255,255,0.5), 0px 4px 8px 0px rgba(0,0,0,0.25)",
              }}
            >
              <img
                src={solution1Flowbuilder}
                alt="Flow-based prompt builder interface with visual steps and conditions"
                className="h-full w-full max-h-[368px] rounded-[16px] object-contain xl:max-h-none"
              />
            </div>
          </div>

          {/* Solution #2 */}
          <div className="mt-[80px] flex min-w-0 flex-col items-start gap-[40px] xl:flex-row">
            <div className="flex w-full min-w-0 max-w-[502px] shrink-0 flex-col gap-[20px] text-dark">
              <p className="font-geist text-[24px] font-normal leading-[28px]">
                Solution #2
              </p>
              <h3 className="font-geist text-[34px] font-semibold leading-[44px]">
                Freeform Prompt Workspace (Open writing)
              </h3>
              <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                The second concept was a freeform editor—similar to writing a
                document or article. Users could freely type prompts in a large
                canvas without structural constraints.
              </p>
            </div>

            <div
              className="h-auto min-h-[280px] w-full min-w-0 max-w-[494px] shrink-0 overflow-hidden rounded-[36px] p-[16px] xl:h-[408px]"
              style={{
                border: "20px solid rgba(255,255,255,1)",
                backgroundColor: "#E3D5C7",
                backdropFilter: "blur(20px)",
                boxShadow:
                  "inset 0px 0px 6px 0px rgba(255,255,255,0.5), 0px 4px 8px 0px rgba(0,0,0,0.25)",
              }}
            >
              <img
                src={solution2Freeform}
                alt="Freeform prompt workspace with open writing interface"
                className="h-full w-full max-h-[368px] rounded-[16px] object-contain xl:max-h-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final Designs */}
      <section className="layout-shell px-4 pb-[80px]">
        <div className="mx-auto w-full min-w-0 max-w-[1120px] pt-[80px]">
          <div className="flex flex-col gap-[20px] text-dark">
            <p className="font-geist text-[24px] font-normal leading-[28px]">
              Final designs
            </p>
            <h2 className="font-geist text-[34px] font-semibold leading-[44px]">
              Structured Prompt Builder (Step-Based)
            </h2>
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
              We explored three layouts and tested them using real client use
              cases during user interviews. Participants tried completing common
              tasks across each concept to see how easily prompts, variables,
              and logic could be managed. The step-based structured builder
              proved the most intuitive, so we finalized this approach.
            </p>
          </div>

          <div
            className="mt-[40px] overflow-hidden rounded-[36px]"
            style={{
              border: "20px solid rgba(255,255,255,1)",
              backgroundColor: "#f1f1e6",
              backdropFilter: "blur(20px)",
              boxShadow:
                "inset 0px 0px 6px 0px rgba(255,255,255,0.5), 0px 4px 8px 0px rgba(0,0,0,0.25)",
            }}
          >
            <div className="p-[16px]">
              <img
                src={finalDesignStructuredBuilder}
                alt="Final design of the Structured Prompt Builder interface"
                className="w-full rounded-[16px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Validating the Structured Workflow Through Usability Testing */}
      <section className="layout-shell px-4 pb-[80px]">
        <div className="mx-auto w-full min-w-0 max-w-[1120px] pt-[80px]">
          <div className="flex min-w-0 flex-col items-start gap-[40px] xl:flex-row">
            <div className="flex w-full min-w-0 max-w-[491px] shrink-0 flex-col gap-[20px] text-dark">
              <h3 className="font-geist text-[34px] font-semibold leading-[44px]">
                Validating the Structured Workflow Through Usability
                Testing
              </h3>
              <div className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                <p>
                  After designing the Phase 2 solution, we conducted another
                  round of usability testing to evaluate the redesigned
                  step-based prompt workflow.
                </p>
                <br />
                <p>
                  Users were given automation tasks and asked to create and
                  configure prompts using the new structured interface. The
                  sessions focused on observing how easily users could
                  understand the workflow, configure steps, and complete
                  tasks using the updated design.
                </p>
              </div>
            </div>

            <div
              className="min-h-[400px] w-full min-w-0 flex-1 overflow-hidden rounded-[36px] xl:h-[611px] xl:min-h-0"
              style={{
                border: "20px solid rgba(255,255,255,1)",
                backgroundColor: "#e3d5c7",
                backdropFilter: "blur(20px)",
                boxShadow:
                  "inset 0px 0px 6px 0px rgba(255,255,255,0.5), 0px 4px 8px 0px rgba(0,0,0,0.25)",
              }}
            >
              <div className="h-full min-h-[360px] p-[16px] xl:min-h-0">
                <img
                  src={usabilityTestingStructuredWorkflow}
                  alt="Usability testing results for the structured workflow"
                  className="h-full w-full rounded-[16px] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution of the AI Builder */}
      <section className="layout-shell px-4 pb-[80px]">
        <div className="mx-auto w-full min-w-0 max-w-[1120px] pt-[80px]">
          <h2 className="text-center font-geist text-[34px] font-semibold leading-[44px] text-dark">
            Evolution of the AI Builder - Learning, Iterating,
            <br />
            Improving
          </h2>

          {/* Timeline chevrons */}
          <div className="mt-[60px] flex min-w-0 flex-wrap items-center justify-center gap-y-6 xl:flex-nowrap xl:gap-y-0">
            {/* Chevron 1: AI Within the Flow */}
            <div className="relative h-[min(345px,50vw)] w-full max-w-[400px] shrink-0 overflow-hidden xl:mr-[-40px]">
              <svg
                viewBox="0 0 398.565 200"
                className="absolute"
                style={{ inset: "20.21% 0.06% 21.82% 0.3%" }}
                preserveAspectRatio="none"
              >
                <defs>
                  <clipPath id="chevron1-clip">
                    <path d="M348.467 0C349.23 0 349.926 0.434306 350.263 1.11914L398.36 99.1191C398.633 99.6748 398.633 100.325 398.36 100.881L350.263 198.881C349.926 199.566 349.23 200 348.467 200H2.00282C0.522622 200 -0.444995 198.448 0.206925 197.119L47.4403 100.881C47.7129 100.325 47.7129 99.6748 47.4403 99.1191L0.206925 2.88086C-0.444995 1.55204 0.522622 0 2.00282 0H348.467Z" />
                  </clipPath>
                </defs>
                <g clipPath="url(#chevron1-clip)">
                  <rect width="398.565" height="200" fill="#80C4DB" />
                  <ellipse cx="124" cy="100" rx="91" ry="91" fill="white" fillOpacity="0.1" />
                  <ellipse cx="124" cy="100" rx="70" ry="70" fill="white" fillOpacity="0.1" />
                </g>
              </svg>
              <div className="absolute left-[190px] top-1/2 flex w-[175px] -translate-y-1/2 flex-col gap-[6px]">
                <p className="font-geist text-[20px] font-semibold uppercase leading-[22px] tracking-[0.8px] text-black">
                  AI Within the Flow
                </p>
                <p className="font-source-sans text-[18px] leading-[18px] tracking-[0.8px] text-black/80">
                  Experimental. Promising. Constrained.
                </p>
              </div>
            </div>

            {/* Chevron 2: Expanding the Canvas */}
            <div className="relative h-[min(345px,50vw)] w-full max-w-[400px] shrink-0 overflow-hidden xl:mr-[-40px]">
              <svg
                viewBox="0 0 398.565 200"
                className="absolute"
                style={{ inset: "20.21% 0.06% 21.82% 0.3%" }}
                preserveAspectRatio="none"
              >
                <defs>
                  <clipPath id="chevron2-clip">
                    <path d="M348.467 0C349.23 0 349.926 0.434306 350.263 1.11914L398.36 99.1191C398.633 99.6748 398.633 100.325 398.36 100.881L350.263 198.881C349.926 199.566 349.23 200 348.467 200H2.00282C0.522622 200 -0.444995 198.448 0.206925 197.119L47.4403 100.881C47.7129 100.325 47.7129 99.6748 47.4403 99.1191L0.206925 2.88086C-0.444995 1.55204 0.522622 0 2.00282 0H348.467Z" />
                  </clipPath>
                </defs>
                <g clipPath="url(#chevron2-clip)">
                  <rect width="398.565" height="200" fill="#0F6378" />
                  <ellipse cx="124" cy="100" rx="91" ry="91" fill="white" fillOpacity="0.1" />
                  <ellipse cx="124" cy="100" rx="70" ry="70" fill="white" fillOpacity="0.1" />
                </g>
              </svg>
              <div className="absolute left-[190px] top-1/2 flex w-[175px] -translate-y-1/2 flex-col gap-[6px]">
                <p className="font-geist text-[20px] font-semibold uppercase leading-[22px] tracking-[0.8px] text-white">
                  Expanding the Canvas
                </p>
                <p className="font-source-sans text-[18px] leading-[18px] tracking-[0.8px] text-white">
                  More Power. More Space. More Confusion
                </p>
              </div>
            </div>

            {/* Chevron 3: User-Aligned AI Builder */}
            <div className="relative h-[min(345px,50vw)] w-full max-w-[400px] shrink-0 overflow-hidden">
              <svg
                viewBox="0 0 398.565 200"
                className="absolute"
                style={{ inset: "20.21% 0.06% 21.82% 0.3%" }}
                preserveAspectRatio="none"
              >
                <defs>
                  <clipPath id="chevron3-clip">
                    <path d="M348.467 0C349.23 0 349.926 0.434306 350.263 1.11914L398.36 99.1191C398.633 99.6748 398.633 100.325 398.36 100.881L350.263 198.881C349.926 199.566 349.23 200 348.467 200H2.00282C0.522622 200 -0.444995 198.448 0.206925 197.119L47.4403 100.881C47.7129 100.325 47.7129 99.6748 47.4403 99.1191L0.206925 2.88086C-0.444995 1.55204 0.522622 0 2.00282 0H348.467Z" />
                  </clipPath>
                </defs>
                <g clipPath="url(#chevron3-clip)">
                  <rect width="398.565" height="200" fill="#062830" />
                  <ellipse cx="124" cy="100" rx="91" ry="91" fill="white" fillOpacity="0.1" />
                  <ellipse cx="124" cy="100" rx="70" ry="70" fill="white" fillOpacity="0.1" />
                </g>
              </svg>
              <div className="absolute left-[190px] top-1/2 flex w-[175px] -translate-y-1/2 flex-col gap-[6px]">
                <p className="font-geist text-[20px] font-semibold uppercase leading-[22px] tracking-[0.8px] text-white">
                  User-Aligned AI Builder
                </p>
                <p className="font-source-sans text-[18px] leading-[18px] tracking-[0.8px] text-white/90">
                  Structured. Guided. Reliable.
                </p>
              </div>
            </div>
          </div>

          {/* Three-column comparison */}
          <div className="flex gap-[20px]">
            {/* Column 1: AI Within the Flow */}
            <div className="flex flex-1 flex-col gap-[24px] text-dark">
              <div className="flex flex-col gap-[16px]">
                <h4 className="font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px]">
                  Issues:
                </h4>
                <ul className="list-disc pl-[27px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  <li>The prompt box was too small for long instructions</li>
                  <li>
                    Frequent tab switching to manage variables and workflows
                  </li>
                  <li>Many users didn&apos;t notice the AI feature</li>
                  <li>Debugging was confusing</li>
                  <li>Building complex flows felt overwhelming</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h4 className="font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px]">
                  What Worked Well:
                </h4>
                <ul className="list-disc pl-[27px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  <li>Users liked the idea of AI inside the flow</li>
                  <li>It fit naturally into the existing node system</li>
                  <li>
                    It proved there was strong interest in AI-powered bots
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h4 className="font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px]">
                  Conclusion
                </h4>
                <p className="font-hand text-[24px] leading-[28px]">
                  &ldquo;Good intention, high friction&rdquo;
                </p>
              </div>
            </div>

            {/* Column 2: Expanding the Canvas */}
            <div className="flex flex-1 flex-col gap-[24px] text-dark">
              <div className="flex flex-col gap-[16px]">
                <h4 className="font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px]">
                  Issues:
                </h4>
                <ul className="list-disc pl-[27px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  <li>
                    Too many options made the page feel overwhelming
                  </li>
                  <li>
                    Users didn&apos;t know how to start writing prompts
                  </li>
                  <li>Settings and logic remained disconnected</li>
                  <li>Debugging long prompts was difficult</li>
                  <li>Some features were still underused</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h4 className="font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px]">
                  What Worked Well:
                </h4>
                <ul className="list-disc pl-[27px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  <li>More space to write detailed prompts</li>
                  <li>Support for variables and advanced logic</li>
                  <li>Better visibility of AI features</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h4 className="font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px]">
                  Conclusion
                </h4>
                <p className="font-hand text-[24px] leading-[28px]">
                  &ldquo;Better Canvas, But the Same Confusion&rdquo;
                </p>
              </div>
            </div>

            {/* Column 3: User-Aligned AI Builder */}
            <div className="flex flex-1 flex-col gap-[24px] text-dark">
              <div className="flex flex-col gap-[16px]">
                <h4 className="font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px]">
                  Issues:
                </h4>
                <ul className="list-disc pl-[27px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  <li>Users wrote long, overloaded steps</li>
                  <li>Duplicate instructions caused errors</li>
                  <li>Users still needed clearer guidance</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h4 className="font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px]">
                  What Worked Well:
                </h4>
                <ul className="list-disc pl-[27px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
                  <li>Step-based prompt writing</li>
                  <li>Inline editing of inputs and workflows</li>
                  <li>Real-time tips and Best Practice Analyzer</li>
                  <li>
                    Better visibility through the Component Manager
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h4 className="font-geist text-[20px] font-semibold leading-[28px] tracking-[0.15px]">
                  Conclusion
                </h4>
                <p className="font-hand text-[24px] leading-[28px]">
                  &ldquo;We listened, and redesigned around how users
                  actually think&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3: Scaling Intelligence Beyond the Prompt */}
      <section className="layout-shell px-4 pb-[80px]">
        <div className="mx-auto w-full min-w-0 max-w-[1120px] pt-[80px]">
          <div className="flex flex-col gap-[12px] text-dark">
            <p className="font-geist text-[24px] font-normal leading-[28px]">
              Phase 3: Final iteration
            </p>
            <h2 className="font-geist text-[48px] font-semibold leading-[54px]">
              Scaling Intelligence Beyond the Prompt
            </h2>
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
              Beyond usability, this phase focused on control and
              optimization. enabling teams to preprocess data, track changes,
              learn through examples, and continuously analyze AI performance
              ultimately making bot creation simpler, more reliable, and
              easier
            </p>
          </div>

          <div className="mt-[60px] flex flex-col gap-[20px] text-dark">
            <h3 className="font-geist text-[34px] font-semibold leading-[44px]">
              AI-Assisted Prompt Writing
            </h3>
            <div className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
              <p>
                Users can describe what they want the bot to do, and AI
                suggests a structured prompt that can be inserted directly
                into the step
              </p>
              <ul className="list-disc pl-[27px]">
                <li>Start writing prompts faster</li>
                <li>Overcome blank-page confusion</li>
                <li>Generate clearer instructions</li>
                <li>Improve prompt quality with AI assistance</li>
              </ul>
              <p>
                The feature acted as a co-writing assistant, guiding users to
                create better prompts with less effort.
              </p>
            </div>
          </div>

          <div
            className="mx-auto mt-[60px] aspect-[5/3] w-full min-h-[240px] max-w-[1000px] overflow-hidden rounded-[36px]"
            style={{
              border: "20px solid rgba(255,255,255,1)",
              backgroundColor: "rgba(217,244,237,1)",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0px 4px 8px 0px rgba(0,0,0,0.25), 0px 4px 6px 0px rgba(255,255,255,0.5)",
            }}
          >
            <div className="h-full">
              <img
                src={aiAssistedPrompt}
                alt="AI-Assisted Prompt Writing interface showing suggested content and prompt generation"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="mt-[200px] flex flex-col gap-[20px] text-dark">
            <h3 className="font-geist text-[34px] font-semibold leading-[44px]">
              Prompt Analysis
            </h3>
            <div className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
              <p>We added analysis capabilities to evaluate:</p>
              <ul className="list-disc pl-[27px]">
                <li>Prompt structure quality</li>
                <li>Redundancies or inefficiencies</li>
                <li>Potential risks leading to hallucination</li>
                <li>AI performance trends</li>
              </ul>
              <p>
                This transformed the builder from a creation tool into a
                continuous optimization system.
              </p>
            </div>
          </div>

          <div
            className="mx-auto mt-[60px] aspect-[5/3] w-full min-h-[240px] max-w-[1000px] overflow-hidden rounded-[36px]"
            style={{
              border: "20px solid rgba(255,255,255,1)",
              backgroundColor: "#E3D5C7",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0px 4px 8px 0px rgba(0,0,0,0.25), 0px 4px 6px 0px rgba(255,255,255,0.5)",
            }}
          >
            <div className="h-full">
              <img
                src={promptAnalysis}
                alt="Prompt Analysis interface showing goal configuration settings with temperature, maximum length, and top P controls"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="mt-[200px] flex flex-col gap-[20px] text-dark">
            <h3 className="font-geist text-[34px] font-semibold leading-[44px]">
              Help, Examples &amp; Contextual Learning
            </h3>
            <div className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
              <p>To reduce learning barriers, we embedded:</p>
              <ul className="list-disc pl-[27px]">
                <li>Inline help documentation</li>
                <li>Real-world prompt examples</li>
                <li>Best-practice suggestions based on use case</li>
              </ul>
              <p>
                This helped both new and experienced users build with greater
                clarity and speed.
              </p>
            </div>
          </div>

          <div
            className="mx-auto mt-[60px] aspect-[5/3] w-full min-h-[240px] max-w-[1000px] overflow-hidden rounded-[36px]"
            style={{
              border: "20px solid rgba(255,255,255,1)",
              backgroundColor: "#97AFB9",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0px 4px 8px 0px rgba(0,0,0,0.25), 0px 4px 6px 0px rgba(255,255,255,0.5)",
            }}
          >
            <div className="h-full">
              <img
                src={helpExamples}
                alt="Help, Examples and Contextual Learning interface showing example prompts with inline variables and workflows"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="mt-[200px] flex flex-col gap-[20px] text-dark">
            <h3 className="font-geist text-[34px] font-semibold leading-[44px]">
              Pre-processing Workflows
            </h3>
            <div className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
              <p>
                Users could now attach a preprocessing workflow before the
                prompt executed. This allowed them to:
              </p>
              <ul className="list-disc pl-[27px]">
                <li>Clean or transform inputs</li>
                <li>Validate data</li>
                <li>Fetch contextual information</li>
                <li>Apply logic before AI response generation</li>
              </ul>
            </div>
          </div>

          <div
            className="mx-auto mt-[60px] aspect-[5/3] w-full min-h-[240px] max-w-[1000px] overflow-hidden rounded-[36px]"
            style={{
              border: "20px solid rgba(255,255,255,1)",
              backgroundColor: "#F1F1E6",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0px 4px 8px 0px rgba(0,0,0,0.25), 0px 4px 6px 0px rgba(255,255,255,0.5)",
            }}
          >
            <div className="h-full">
              <img
                src={preProcessingWorkflows}
                alt="Pre-processing Workflows interface showing workflow configuration, input mapping, and step options"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Post-Launch Performance Tracking */}
      <section className="layout-shell px-4 pb-[80px]">
        <div className="mx-auto w-full min-w-0 max-w-[1120px] pt-[80px]">
          <h2 className="font-geist text-[48px] font-semibold leading-[54px] text-dark">
            Post-Launch Performance Tracking
          </h2>
          <p className="mt-[20px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            After launching the redesigned AI Bot Builder, we closely monitored
            both qualitative and quantitative signals to validate real-world
            impact and identify further improvement opportunities.
          </p>

          <div className="mt-[60px] flex flex-col gap-[12px] text-dark">
            <h3 className="font-geist text-[34px] font-semibold leading-[44px]">
              1. User Interviews
            </h3>
            <div className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
              <p>
                We conducted post-launch interviews with active users across
                different roles to understand how the new experience performed
                in live environments. These conversations helped us assess:
              </p>
              <ul className="list-disc pl-[27px]">
                <li>Confidence levels while building prompts</li>
                <li>Ease of debugging and workflow management</li>
                <li>
                  Perceived improvements compared to earlier versions
                </li>
                <li>Remaining friction points</li>
              </ul>
            </div>
          </div>

          <div className="mt-[40px] flex gap-[8px]">
            <img
              src={interview1}
              alt="User interview session 1"
              className="h-[276px] w-[368px] rounded-[24px] object-cover"
            />
            <img
              src={interview2}
              alt="User interview session 2"
              className="h-[276px] w-[368px] rounded-[24px] object-cover"
            />
            <img
              src={interview3}
              alt="User interview session 3"
              className="h-[276px] w-[368px] rounded-[24px] object-cover"
            />
          </div>

          <div className="mt-[120px] flex flex-col gap-[12px] text-dark">
            <h3 className="font-geist text-[34px] font-semibold leading-[44px]">
              2. Hotjar Recordings &amp; Heatmaps
            </h3>
            <div className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
              <p>
                Using Hotjar session recordings and heatmaps, we analyzed:
              </p>
              <ul className="list-disc pl-[27px]">
                <li>Navigation patterns and drop-off points</li>
                <li>
                  Scroll depth and engagement within the authoring page
                </li>
                <li>
                  Areas where users hesitated or repeatedly clicked
                </li>
                <li>Feature discoverability</li>
              </ul>
              <p>
                These recordings helped us validate whether users were moving
                more fluidly through the workflow compared to earlier
                iterations.
              </p>
            </div>
          </div>

          <div className="mt-[40px] flex gap-[8px]">
            <div className="relative h-[276px] w-[368px] shrink-0 overflow-hidden rounded-[24px] border border-[#d2d2d3]">
              <img
                src={hotjar1}
                alt="Hotjar heatmap recording 1"
                className="absolute left-0 top-0 h-[104.92%] w-full max-w-none object-cover object-left-top"
              />
            </div>
            <div className="relative h-[276px] w-[368px] shrink-0 overflow-hidden rounded-[24px] border border-[#d2d2d3]">
              <img
                src={hotjar2}
                alt="Hotjar heatmap recording 2"
                className="absolute left-[-2.79%] top-[-0.75%] h-[110.11%] w-[102.79%] max-w-none object-cover object-left-top"
              />
            </div>
            <img
              src={hotjar3}
              alt="Hotjar heatmap recording 3"
              className="h-[276px] w-[368px] rounded-[24px] border border-[#d2d2d3] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Outcome and Impact */}
      <section className="layout-shell px-4 pb-[80px]">
        <div className="mx-auto w-full min-w-0 max-w-[1120px] pt-[80px]">
          <h2 className="text-center font-geist text-[48px] font-semibold leading-[54px] text-dark">
            Outcome and Impact - What Changed?
            <br />
            Efficiency, Accuracy, Adoption
          </h2>

          <div className="mt-[60px] flex flex-wrap justify-center gap-[24px]">
            {/* Card 1: Faster Prompt Creation */}
            <div className="relative h-[430px] w-[383px] overflow-hidden rounded-[15px] bg-[#d5dfe3]">
              <div className="absolute left-[25px] top-[25px] flex w-[333px] flex-col gap-[12px]">
                <h4 className="text-center font-geist text-[22px] font-bold leading-[28px] text-dark">
                  Faster Prompt Creation
                </h4>
                <p className="text-center font-geist text-[15px] font-normal leading-[24px] tracking-[0.16px] text-[#494c50]">
                  Users spent significantly less time navigating tabs and
                  configuring prompts.
                </p>
              </div>
              <div className="absolute left-[25px] top-[148px] h-[247px] w-[333px] overflow-hidden rounded-[24px] bg-white">
                <img
                  src={card1Illustration}
                  alt="Faster Prompt Creation - 40% reduction in time for bot creation"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Card 2: Higher Prompt Accuracy */}
            <div className="relative h-[430px] w-[383px] overflow-hidden rounded-[15px] bg-[#d5dfe3]">
              <div className="absolute left-[25px] top-[25px] flex w-[333px] flex-col gap-[12px]">
                <h4 className="pl-[37px] font-geist text-[22px] font-bold leading-[38px] tracking-[0.21px] text-dark">
                  Higher Prompt Accuracy
                </h4>
                <p className="text-center font-geist text-[15px] font-normal leading-[24px] tracking-[0.16px] text-[#494c50]">
                  Step-based structure and real-time suggestion
                  <br />
                  improved prompt clarity
                </p>
              </div>
              <div className="absolute left-[25px] top-[148px] h-[257px] w-[333px] overflow-hidden rounded-[24px] bg-white">
                <img
                  src={card2Illustration}
                  alt="Higher Prompt Accuracy - 2x better accuracy in bot responses"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Card 3: Fewer Support Issues */}
            <div className="relative h-[430px] w-[383px] overflow-hidden rounded-[15px] bg-[#d5dfe3]">
              <div className="absolute left-[25px] top-[25px] flex w-[333px] flex-col gap-[12px]">
                <h4 className="text-center font-geist text-[22px] font-bold leading-[28px] text-dark">
                  Fewer Support Issues
                </h4>
                <p className="text-center font-geist text-[15px] font-normal leading-[24px] tracking-[0.16px] text-[#494c50]">
                  Prompt-related support tickets reduced, showing improved
                  usability &amp; fewer AI errors
                </p>
              </div>
              <div className="absolute left-[25px] top-[148px] h-[256px] w-[333px] overflow-hidden rounded-[24px] bg-white">
                <img
                  src={card3Illustration}
                  alt="Fewer Support Issues - 30% reduction in support tickets"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Wins */}
      <section className="layout-shell px-4 pb-[80px]">
        <div className="mx-auto w-full min-w-0 max-w-[1120px] pt-[80px]">
          <div className="flex flex-col gap-[20px] text-dark">
            <h3 className="font-geist text-[34px] font-semibold leading-[44px]">
              Business wins
            </h3>
            <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px]">
              From a business standpoint, the redesign delivered strong results.
              These metrics showed that when users are given intuitive,
              intelligent tools, both productivity and business outcomes
              accelerate.
            </p>
          </div>

          <div className="mt-[60px] grid grid-cols-4 gap-[20px]">
            {/* Metric 1: 93% - from Figma 657:40954 */}
            <div className="relative flex w-[265px] flex-col">
              <p className="text-center font-geist text-[80px] font-semibold leading-[70px] text-teal">
                93%
              </p>
              <p className="mt-[12px] w-[169px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
                reduction in time to
                <br />
                launch bots
              </p>
              <img
                src={arrow1}
                alt=""
                className="ml-[80px] mt-[-12px] h-[73px] w-[63px] shrink-0 rotate-[176deg] self-start"
              />
              <p className="mt-[4px] w-[216px] self-center text-center font-hand text-[20px] leading-[18px] tracking-[0.1px] text-dark">
                This accelerated customer onboarding and allowed teams to move
                from idea to live deployment in less than 2 days instead of 30
              </p>
            </div>

            {/* Metric 2: 60% */}
            <div className="flex flex-col">
              <p className="font-geist text-[80px] font-semibold leading-[70px] text-teal">
                60%
              </p>
              <p className="mt-[12px] w-[169px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
                increase in adoption of advanced features
              </p>
              <img
                src={arrow2}
                alt=""
                className="ml-[80px] mt-[4px] h-[47px] w-[62px] rotate-[60deg] self-center"
              />
              <p className="mt-[12px] w-[216px] text-center font-hand text-[20px] leading-[18px] tracking-[0.1px] text-dark">
                Inline editing and better visibility encouraged users to
                actively use variables, workflows, and structured steps.
              </p>
            </div>

            {/* Metric 3: 30% */}
            <div className="flex flex-col">
              <p className="font-geist text-[80px] font-semibold leading-[70px] text-teal">
                30%
              </p>
              <p className="mt-[12px] w-[169px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
                increase in Daily Active Users
              </p>
              <img
                src={arrow3}
                alt=""
                className="mt-[-12px] h-[56px] w-[96px] rotate-[84deg] self-center"
              />
              <p className="mt-[20px] w-[216px] text-center font-hand text-[20px] leading-[18px] tracking-[0.1px] text-dark">
                A smoother, more intuitive builder experience led to higher
                engagement and repeat usage across teams.
              </p>
            </div>

            {/* Metric 4: 25% */}
            <div className="flex flex-col">
              <p className="font-geist text-[80px] font-semibold leading-[70px] text-teal">
                25%
              </p>
              <p className="mt-[12px] w-[169px] font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
                improvement in user stickiness
              </p>
              <img
                src={arrow4}
                alt=""
                className="mt-[-4px] h-[67px] w-[72px] rotate-[127deg] self-center"
              />
              <p className="mt-[12px] w-[216px] text-center font-hand text-[20px] leading-[18px] tracking-[0.1px] text-dark">
                Users spent more time building and optimizing conversations,
                showing deeper product dependency and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="layout-shell px-4 pb-[80px]">
        <div className="mx-auto flex h-auto min-h-[276px] w-full min-w-0 max-w-[1120px] flex-col justify-center rounded-[24px] bg-teal-dark px-6 py-10 lg:h-[276px] lg:px-10 lg:py-0">
          <h3 className="font-geist text-[34px] font-semibold leading-[44px] tracking-[0.25px] text-white">
            Let&apos;s Build Better, Together.
          </h3>
          <p className="mt-[16px] w-[368px] font-source-sans text-[16px] font-normal leading-[24px] tracking-[0.5px] text-white">
            Every product is unique. That&apos;s why I design tailored
            solutions that align with your goals and deliver real results.
          </p>
          <a
            href="mailto:lathalaav6@gmail.com"
            className="mt-[24px] w-fit rounded-[14px] bg-teal pl-[16px] pr-[16px] py-[8px] font-source-sans text-[14px] font-semibold leading-[24px] tracking-[0.25px] text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]"
          >
            Contact me
          </a>
        </div>
      </section>

      {/* Footer */}
    <footer className="layout-shell px-4 pb-[40px]">
      <div className="mx-auto w-full min-w-0 max-w-[1120px]">
          <div className="h-px w-full rounded-[14px] bg-[#a4a5a7] opacity-50" />
          <div className="mt-[40px] flex items-center justify-between">
            <img src={footerLogo} alt="Logo" className="h-[32px] w-[32px]" />
            <p className="font-inter text-[14px] font-normal leading-[24px] tracking-[0.25px] text-dark">
              Latha © 2026
            </p>
            <div className="flex items-center gap-[16px]">
              <a href="https://www.linkedin.com/in/latha-s-640073119?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="group"><img src={footerIconLinkedin} alt="LinkedIn" className="h-[24px] w-[24px] transition-all duration-200 group-hover:[filter:brightness(0)_saturate(100%)]" /></a>
              <a href="mailto:lathalaav6@gmail.com" className="group"><img src={footerIconEmail} alt="Email" className="h-[24px] w-[24px] transition-all duration-200 group-hover:[filter:brightness(0)_saturate(100%)]" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
