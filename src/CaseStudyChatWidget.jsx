import { Link } from "react-router-dom";
import logoUrl from "./assets/logo.svg";
import heroLaptopMockup from "./assets/case-study-genai/hero-laptop-mockup-web-widget.png";
import legacyWidgetPreview from "./assets/legacy-widget-preview.png";
import lmVoiceWidget from "./assets/lm-voice-widget.png";
import lmQuickReplyWidget from "./assets/lm-quick-reply-widget.png";
import lmChatGreetingWidget from "./assets/lm-chat-greeting-widget.png";
import lmFormEmailWidget from "./assets/lm-form-email-widget.png";
import lmFormPdfWidget from "./assets/lm-form-pdf-widget.png";
import lmHistoryWidget from "./assets/lm-history-widget.png";
import lmArticlesWidget from "./assets/lm-articles-widget.png";
import lmArticleDetailWidget from "./assets/lm-article-detail-widget.png";
import lmErrorTimeoutWidget from "./assets/lm-error-timeout-widget.png";
import lmErrorConnectionWidget from "./assets/lm-error-connection-widget.png";
import lmErrorValidationWidget from "./assets/lm-error-validation-widget.png";
import lmErrorMaintenanceWidget from "./assets/lm-error-maintenance-widget.png";
import dmChatGreetingWidget from "./assets/dm-chat-greeting-widget.png";
import dmAiResponseWidget from "./assets/dm-ai-response-widget.png";
import dmQuickReplyWidget from "./assets/dm-quick-reply-widget.png";
import dmFormEmailWidget from "./assets/dm-form-email-widget.png";
import dmHistoryWidget from "./assets/dm-history-widget.png";
import dmArticlesWidget from "./assets/dm-articles-widget.png";
import dmVoiceChatWidget from "./assets/dm-voice-chat-widget.png";
import SiteCta from "./components/SiteCta";
import SiteFooter from "./components/SiteFooter";
import SiteNav from "./components/SiteNav";
import { SITE_BELOW_FOLD_COLUMN } from "./components/siteBelowFoldLayout";

/** cw-tablet (768–1023px): proportional cells + contain fit for Light/Dark widget grids. Desktop ≥1024px unchanged. */
const CW_WIDGET_CELL =
  "cw-tablet:relative cw-tablet:h-auto cw-tablet:min-h-0 cw-tablet:min-w-0 cw-tablet:aspect-[209/418]";
const CW_WIDGET_IMG =
  "cw-tablet:!max-h-full cw-tablet:!max-w-full cw-tablet:!object-contain";

/** max-[767px] only (< 768px desktop). Does not alter min-[768px] or cw-tablet. */
const CW_WIDGET_CELL_PHONE =
  "max-[767px]:relative max-[767px]:h-auto max-[767px]:min-h-0 max-[767px]:min-w-0 max-[767px]:aspect-[209/418]";
const CW_WIDGET_IMG_PHONE =
  "max-[767px]:!max-h-full max-[767px]:!max-w-full max-[767px]:!object-contain";

/** Case-study page pill navbar (≥1024px only — unchanged desktop treatment). */
function CaseStudyDesktopNavbar() {
  return (
    <nav className="mx-auto hidden min-h-[60px] w-full max-w-[589px] min-[1024px]:flex flex-wrap items-center justify-center gap-y-2 rounded-[70px] bg-white px-3 py-2 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.2)] lg:flex-nowrap lg:justify-start lg:px-6 lg:py-0">
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
        href="https://drive.google.com/file/d/1uhROOXhPEPmMczltlfSV2KBYO5bgUZOm/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-0 shrink-0 rounded-[14px] border border-teal bg-white px-4 py-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-dark transition-colors duration-200 hover:border-2 hover:border-teal lg:ml-auto"
      >
        Resume
      </a>
    </nav>
  );
}

function OverviewSection() {
  return (
    <section className="layout-shell px-4 pt-[160px] max-[767px]:pt-[100px]">
      <div className="mx-auto flex w-full min-w-0 max-w-[1120px] flex-col items-center">
        <div className="flex w-full min-w-0 max-w-[925px] flex-col gap-5">
          <h2 className="font-geist text-[48px] font-semibold leading-[54px] text-dark">
            Overview
          </h2>
          <div className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            <p>
              The Web Widget is a key interface that allows users to interact
              with support, automation, and AI-powered assistance directly within
              a website. However, the previous widget design lacked visual
              consistency, flexibility, and modern usability patterns.
            </p>
            <p>
              This project focused on upgrading the web widget from an outdated
              interface to a modern, scalable design system with improved
              usability and visual clarity.
            </p>
          </div>
        </div>

        <div className="mt-[80px] flex w-full min-w-0 max-w-[925px] flex-col gap-5">
          <h2 className="font-geist text-[48px] font-semibold leading-[54px] text-dark">
            The Problem
          </h2>
          <div className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            <p>
              The previous widget design presented several usability and visual
              challenges.
            </p>
            <ul className="list-disc pl-[27px]">
              <li>
                Outdated visual design that didn&apos;t align with modern UI
                standards
              </li>
              <li>Limited customization options for brands</li>
              <li>Lack of dark mode support</li>
              <li>Dense layout that reduced readability</li>
              <li>Interaction flows that felt fragmented</li>
            </ul>
            <p>
              These issues affected both user engagement and overall product
              perception.
            </p>
          </div>
        </div>

        <div className="mt-[80px] flex w-full min-w-0 max-w-[925px] flex-col gap-5">
          <h2 className="font-geist text-[48px] font-semibold leading-[54px] text-dark">
            Redesign Goals
          </h2>
          <div className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            <p>
              To improve the widget experience, the redesign focused on:
            </p>
            <ul className="list-disc pl-[27px]">
              <li>Modernizing the UI with a clean visual hierarchy</li>
              <li>Enhancing readability and accessibility</li>
              <li>Supporting both light and dark themes</li>
              <li>
                Creating a scalable design foundation for future capabilities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function LegacyWidgetSection() {
  return (
    <section className="layout-shell px-4 pt-[120px] max-[767px]:pt-[80px]">
      <div className="layout-inner">
        <div className="flex flex-col gap-5">
          <h2 className="font-geist text-[34px] font-semibold leading-[44px] text-dark">
            Legacy Web Widget Interface
          </h2>
          <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            The earlier widget used a standard chat layout similar to many
            existing widgets, offering little innovation while dense spacing
            reduced readability.
          </p>
        </div>
      </div>

      <div
        className="relative mx-auto mt-[40px] h-[879px] w-[1000px] overflow-hidden rounded-[24px] border-[20px] border-white bg-card-mint backdrop-blur-[40px] cw-tablet:h-auto cw-tablet:w-full cw-tablet:max-w-[min(100%,calc(100vw-32px))] cw-tablet:border-[14px] cw-tablet:aspect-[1000/879] max-[767px]:h-auto max-[767px]:w-full max-[767px]:max-w-[min(100%,calc(100vw-32px))] max-[767px]:border-[12px] max-[767px]:aspect-[1000/879]"
        style={{
          boxShadow: "inset 0px 4px 6px 0px rgba(255, 255, 255, 0.5), 0px 4px 8px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          className="absolute h-[315px] w-[315px] rounded-full"
          style={{
            left: "-133px",
            top: "487px",
            background: "radial-gradient(circle, rgba(162,230,254,0.6) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute h-[388px] w-[388px] rounded-full"
          style={{
            left: "780px",
            top: "125px",
            background: "radial-gradient(circle, rgba(162,230,254,0.6) 0%, transparent 70%)",
          }}
        />

        <img
          src={legacyWidgetPreview}
          alt="Legacy web widget interface screenshots"
          className="relative z-10 h-full w-full object-contain p-4"
        />
      </div>
    </section>
  );
}

function WidgetCard({ children, className = "" }) {
  return (
    <div
      className={`flex h-[418px] w-full flex-col overflow-hidden rounded-[8px] bg-[#fcfeff] shadow-[0px_1px_8px_0px_rgba(33,43,54,0.15),0px_0px_0px_0.5px_rgba(33,43,54,0.25)] ${className}`}
    >
      {children}
    </div>
  );
}

function WidgetHeader({ title, showDots = true }) {
  return (
    <div className="flex h-9 shrink-0 items-center justify-between border-b border-black/5 px-2">
      {title ? (
        <span className="text-[10px] font-semibold text-[#384248]">
          {title}
        </span>
      ) : showDots ? (
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#e3d5c7]" />
          <div className="h-3 w-3 rounded-full bg-[#e3d5c7]" />
          <div className="h-3 w-3 rounded-full bg-[#e3d5c7]" />
        </div>
      ) : (
        <div />
      )}
      <div className="h-[18px] w-[18px] rounded bg-[#e3d5c7]" />
    </div>
  );
}

function WidgetFooter({ placeholder = "Type your message" }) {
  return (
    <div className="mt-auto shrink-0 border-t border-black/5 px-3 py-2.5">
      <div className="flex items-center justify-between rounded-md bg-[#f5f5f5] px-2.5 py-2">
        <span className="text-[9px] text-[#888e91]">{placeholder}</span>
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#e3d5c7]" />
          <div className="h-3 w-3 rounded-full bg-[#e3d5c7]" />
        </div>
      </div>
    </div>
  );
}

function ChatVoiceWidget() {
  return (
    <div
      className={`h-[418px] w-full overflow-hidden rounded-[8px] ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}
    >
      <img
        src={lmVoiceWidget}
        alt="Voice chat widget"
        className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
      />
    </div>
  );
}

function QuickReplyWidget() {
  return (
    <div
      className={`h-[418px] w-full overflow-hidden rounded-[8px] ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}
    >
      <img
        src={lmQuickReplyWidget}
        alt="Quick reply widget"
        className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
      />
    </div>
  );
}

function ChatGreetingWidget() {
  return (
    <div
      className={`h-[418px] w-full overflow-hidden rounded-[8px] ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}
    >
      <img
        src={lmChatGreetingWidget}
        alt="Chat greeting widget"
        className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
      />
    </div>
  );
}

function FormEmailWidget() {
  return (
    <div
      className={`h-[418px] w-full overflow-hidden rounded-[8px] ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}
    >
      <img
        src={lmFormEmailWidget}
        alt="Form email widget"
        className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
      />
    </div>
  );
}

function FormPdfWidget() {
  return (
    <div
      className={`h-[418px] w-full overflow-hidden rounded-[8px] ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}
    >
      <img
        src={lmFormPdfWidget}
        alt="Form PDF widget"
        className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
      />
    </div>
  );
}

function HistoryWidget() {
  return (
    <div
      className={`h-[418px] w-full overflow-hidden rounded-[8px] ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}
    >
      <img
        src={lmHistoryWidget}
        alt="History widget"
        className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
      />
    </div>
  );
}

function ArticlesWidget() {
  return (
    <div
      className={`h-[418px] w-full overflow-hidden rounded-[8px] ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}
    >
      <img
        src={lmArticlesWidget}
        alt="Articles widget"
        className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
      />
    </div>
  );
}

function ArticleDetailWidget() {
  return (
    <div
      className={`h-[418px] w-full overflow-hidden rounded-[8px] ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}
    >
      <img
        src={lmArticleDetailWidget}
        alt="Article detail widget"
        className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
      />
    </div>
  );
}

function ErrorStateWidget({ title, description, actionLabel }) {
  return (
    <WidgetCard>
      <WidgetHeader />
      <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6">
        <div className="flex h-16 w-16 items-center justify-center">
          <div className="h-12 w-14 rounded-lg bg-[#f0ebe5]" />
        </div>
        <p className="text-center text-[10px] font-semibold text-[#384248]">
          {title}
        </p>
        <p className="text-center text-[8px] leading-relaxed text-[#888e91]">
          {description}
        </p>
        {actionLabel && (
          <div className="rounded-full border border-[#384248] px-3 py-1">
            <span className="text-[8px] text-[#384248]">{actionLabel}</span>
          </div>
        )}
      </div>
      <div className="h-9 shrink-0" />
    </WidgetCard>
  );
}

function NewWebWidgetSection() {
  return (
    <section className="layout-shell px-4 pt-[120px] max-[767px]:pt-[80px]">
      <div className="layout-inner">
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-center font-geist text-[48px] font-semibold leading-[54px] text-dark">
            The New Web Widget
          </h2>
          <p className="text-center font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            The redesigned widget introduces a more structured and modern
            interface, improving clarity, usability, and adaptability across
            different website environments.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-[80px] w-full max-w-[1120px]">
        <div className="flex flex-col gap-5">
          <h3 className="font-geist text-[34px] font-semibold leading-[44px] text-dark">
            Light Mode
          </h3>
          <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            A clean and balanced interface that enhances readability and supports
            seamless interactions in standard web environments.
          </p>
        </div>
      </div>

      <div
        className="relative mx-auto mt-[40px] w-[1000px] overflow-hidden rounded-[36px] bg-card-tan backdrop-blur-[20px] cw-tablet:w-full cw-tablet:max-w-[min(100%,calc(100vw-32px))] max-[767px]:w-full max-[767px]:max-w-[min(100%,calc(100vw-32px))]"
        style={{
          boxShadow:
            "inset 0 0 0 20px rgba(255, 255, 255, 0.2), 0px 4px 6px 0px rgba(255, 255, 255, 0.5), 0px 4px 8px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          className="absolute h-[315px] w-[315px] rounded-full"
          style={{
            left: "-133px",
            top: "513px",
            background:
              "radial-gradient(circle, rgba(162,230,254,0.6) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute h-[388px] w-[388px] rounded-full"
          style={{
            left: "780px",
            top: "151px",
            background:
              "radial-gradient(circle, rgba(162,230,254,0.6) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 grid min-w-0 grid-cols-4 gap-5 px-[14px] py-5 rounded-[36px] border-[20px] border-solid border-white shadow-[inset_0px_4px_6px_0px_rgba(255,255,255,0.5),0px_4px_8px_0px_rgba(0,0,0,0.25)] backdrop-blur-[40px] cw-tablet:gap-3 cw-tablet:border-[14px] cw-tablet:px-3 cw-tablet:py-4 max-[767px]:grid-cols-4 max-[767px]:gap-2 max-[767px]:border-[14px] max-[767px]:px-2 max-[767px]:py-3">
          <ChatVoiceWidget />
          <QuickReplyWidget />
          <ChatGreetingWidget />
          <FormEmailWidget />
          <FormPdfWidget />
          <HistoryWidget />
          <ArticlesWidget />
          <ArticleDetailWidget />
          <div
            className={`h-[418px] w-full overflow-hidden rounded-[8px] ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}
          >
            <img
              src={lmErrorTimeoutWidget}
              alt="Validation time out"
              className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
            />
          </div>
          <div
            className={`h-[418px] w-full overflow-hidden rounded-[8px] ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}
          >
            <img
              src={lmErrorConnectionWidget}
              alt="Connection error"
              className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
            />
          </div>
          <div
            className={`h-[418px] w-full overflow-hidden rounded-[8px] ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}
          >
            <img
              src={lmErrorValidationWidget}
              alt="Validation failed"
              className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
            />
          </div>
          <div
            className={`h-[418px] w-full overflow-hidden rounded-[8px] ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}
          >
            <img
              src={lmErrorMaintenanceWidget}
              alt="Under maintenance"
              className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DarkWidgetCard({ children }) {
  return (
    <div className="flex h-[418px] w-full flex-col overflow-hidden rounded-[8px] bg-[#1c1f24] shadow-[0px_1px_8px_0px_rgba(33,43,54,0.15),0px_0px_0px_0.5px_rgba(33,43,54,0.25)]">
      {children}
    </div>
  );
}

function DarkModeWidgetSection() {
  return (
    <section className="layout-shell px-4 pt-[120px] max-[767px]:pt-[80px]">
      <div className="layout-inner">
        <div className="flex flex-col gap-5">
          <h3 className="font-geist text-[34px] font-semibold leading-[44px] text-dark">
            Dark Mode
          </h3>
          <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            Dark mode adapts the widget for darker website environments while
            maintaining clarity, contrast, and visual consistency.
          </p>
        </div>
      </div>

      <div
        className="relative mx-auto mt-[40px] w-[1000px] overflow-hidden rounded-[36px] bg-cream backdrop-blur-[20px] cw-tablet:w-full cw-tablet:max-w-[min(100%,calc(100vw-32px))] max-[767px]:w-full max-[767px]:max-w-[min(100%,calc(100vw-32px))]"
        style={{
          boxShadow:
            "inset 0 0 0 20px rgba(255, 255, 255, 0.2), 0px 4px 6px 0px rgba(255, 255, 255, 0.5), 0px 4px 8px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          className="absolute h-[315px] w-[315px] rounded-full"
          style={{
            left: "-133px",
            top: "513px",
            background:
              "radial-gradient(circle, rgba(162,230,254,0.6) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute h-[388px] w-[388px] rounded-full"
          style={{
            left: "780px",
            top: "151px",
            background:
              "radial-gradient(circle, rgba(162,230,254,0.6) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex min-w-0 flex-col gap-5 px-[14px] py-5 rounded-[36px] border-[20px] border-solid border-white shadow-[inset_0px_4px_6px_0px_rgba(255,255,255,0.5),0px_4px_8px_0px_rgba(0,0,0,0.25)] backdrop-blur-[40px] cw-tablet:border-[14px] cw-tablet:px-3 cw-tablet:py-4 max-[767px]:border-[14px] max-[767px]:px-3 max-[767px]:py-4">
          <div className="grid min-w-0 grid-cols-4 gap-5 cw-tablet:gap-3 max-[767px]:grid-cols-4 max-[767px]:gap-2">
            <div className={`h-[418px] w-full overflow-hidden rounded-[8px] ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}>
              <img
                src={dmChatGreetingWidget}
                alt="Dark mode chat greeting"
                className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
              />
            </div>
            <div className={`h-[418px] w-full overflow-hidden rounded-[8px] ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}>
              <img
                src={dmAiResponseWidget}
                alt="Dark mode AI response"
                className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
              />
            </div>
            <div className={`h-[418px] w-full overflow-hidden rounded-[8px] ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}>
              <img
                src={dmQuickReplyWidget}
                alt="Dark mode quick reply"
                className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
              />
            </div>
            <div className={`h-[418px] w-full overflow-hidden rounded-[8px] ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}>
              <img
                src={dmFormEmailWidget}
                alt="Dark mode form email"
                className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
              />
            </div>
          </div>
          <div className="flex min-w-0 w-full flex-wrap justify-center gap-5 cw-tablet:gap-3 max-[767px]:grid max-[767px]:w-full max-[767px]:grid-cols-4 max-[767px]:gap-2 max-[767px]:justify-items-stretch">
            <div
              className={`h-[418px] w-[calc((100%-3.75rem)/4)] shrink-0 overflow-hidden rounded-[8px] cw-tablet:w-[calc((100%-2.25rem)/4)] max-[767px]:h-auto max-[767px]:w-full max-[767px]:min-w-0 ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}
            >
              <img
                src={dmHistoryWidget}
                alt="Dark mode history"
                className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
              />
            </div>
            <div
              className={`h-[418px] w-[calc((100%-3.75rem)/4)] shrink-0 overflow-hidden rounded-[8px] cw-tablet:w-[calc((100%-2.25rem)/4)] max-[767px]:h-auto max-[767px]:w-full max-[767px]:min-w-0 ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}
            >
              <img
                src={dmArticlesWidget}
                alt="Dark mode articles"
                className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
              />
            </div>
            <div
              className={`h-[418px] w-[calc((100%-3.75rem)/4)] shrink-0 overflow-hidden rounded-[8px] cw-tablet:w-[calc((100%-2.25rem)/4)] max-[767px]:h-auto max-[767px]:w-full max-[767px]:min-w-0 ${CW_WIDGET_CELL} ${CW_WIDGET_CELL_PHONE}`}
            >
              <img
                src={dmVoiceChatWidget}
                alt="Dark mode voice chat"
                className={`h-full w-full object-cover ${CW_WIDGET_IMG} ${CW_WIDGET_IMG_PHONE}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const whatsNextItems = [
  {
    title: "Enhanced AI-powered interactions",
    description:
      "Introduce more intelligent responses and contextual suggestions to help users resolve queries faster within the widget.",
  },
  {
    title: "Richer message components",
    description:
      "Expand support for interactive elements such as cards, quick actions, and embedded media to create more engaging conversations.",
  },
  {
    title: "Personalization and customization",
    description:
      "Support for light and dark modes allows the widget to blend naturally with different website environments. This flexibility improves visual consistency and ensures a comfortable experience across various viewing contexts.",
  },
  {
    title: "Performance and analytics insights",
    description:
      "Leverage usage data and interaction patterns to continuously refine the widget experience and identify areas for improvement.",
  },
];

function WhatsNextSection() {
  return (
    <section className="layout-shell px-4 pt-[120px] max-[767px]:pt-[80px]">
      <div className="mx-auto w-full min-w-0 max-w-[1120px]">
        <div className="flex flex-col items-center gap-[13px] px-8 py-8 text-center">
          <h2 className="font-geist text-[48px] font-semibold leading-[54px] text-dark">
            What&apos;s Next
          </h2>
          <p className="font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
            While the redesigned Web Widget improves clarity and usability, there
            are opportunities to further enhance the experience as the product
            evolves.
          </p>
        </div>

        <div className="mt-6 flex w-full min-w-0 flex-col gap-6">
          {whatsNextItems.map((item) => (
            <div
              key={item.title}
              className="relative w-full min-w-0 overflow-hidden rounded-[24px] border border-[#d2d2d3] p-8"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 100% 100%, rgba(15,99,120,0.25) 0%, rgba(75,138,154,0.1) 30%, rgba(255,255,255,0) 60%)",
              }}
            >
              <h3 className="font-geist text-[24px] font-semibold leading-7 text-dark">
                {item.title}
              </h3>
              <p className="mt-4 font-source-sans text-[18px] font-normal leading-7 tracking-[0.5px] text-dark">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CaseStudyChatWidget() {
  return (
    <div className="min-h-screen min-w-0 bg-white cw-tablet:overflow-x-clip max-[767px]:overflow-x-clip">
      <div className="w-full px-4 pt-4">
        <div className="relative w-full rounded-t-[24px] bg-cream max-[767px]:min-h-0 max-[767px]:pb-20 min-[768px]:min-h-[926px]">
            <div className="relative px-4 pt-4">
              <div className="relative w-full overflow-visible pt-0 md:pt-6 min-[1024px]:hidden">
                <SiteNav variant="case-study-chat" />
              </div>
              <div className="hidden min-[1024px]:block pt-6">
                <CaseStudyDesktopNavbar />
              </div>

            <div className="mt-[48px] flex justify-center">
              <div
                className="relative aspect-[1120/682] w-full max-w-[1120px] min-h-[260px] overflow-hidden rounded-[24px]
                max-[767px]:flex max-[767px]:min-h-0 max-[767px]:flex-col max-[767px]:gap-12 max-[767px]:px-2 max-[767px]:py-2 max-[767px]:aspect-auto
                md:aspect-auto md:block md:h-[682px] md:min-h-[682px] md:gap-0 md:px-0 md:py-0"
              >
                <div
                  className="absolute left-1/2 top-[22%] z-0 w-[min(100%,1024px)] max-w-[1024px] -translate-x-1/2 px-2
                  max-[767px]:relative max-[767px]:order-2 max-[767px]:left-0 max-[767px]:top-0 max-[767px]:w-full max-[767px]:max-w-none max-[767px]:translate-x-0 max-[767px]:px-0
                  md:absolute md:left-1/2 md:top-[148px] md:h-[540px] md:-translate-x-1/2 md:px-0"
                >
                  <img
                    src={heroLaptopMockup}
                    alt="Laptop mockup showing web widget interface"
                    className="block h-auto w-full max-w-full object-contain md:h-full md:max-h-full"
                  />
                </div>
                <div className="absolute inset-x-0 top-0 z-10 mx-auto w-full max-w-[min(95vw,568px)] px-3 text-center sm:px-4 max-[767px]:relative max-[767px]:inset-auto max-[767px]:order-1 md:absolute md:inset-x-0 md:top-0 md:px-0">
                  <p className="font-geist text-[20px] font-semibold leading-[28px] text-dark sm:text-[24px] sm:leading-[34px]">
                    Redesigning Web Widget : Improved Usability and Interaction Clarity.
                  </p>
                  <p className="mx-auto mt-[8px] w-full max-w-[560px] font-source-sans text-[15px] font-normal leading-[22px] tracking-[0.5px] text-dark sm:text-[16px] sm:leading-[24px]">
                    Created a more intuitive chat experience that improves feature discoverability and streamlines customer interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OverviewSection />
      <LegacyWidgetSection />
      <NewWebWidgetSection />
      <DarkModeWidgetSection />
      <WhatsNextSection />
      {/* Below fold: same column + horizontal padding as Home (px-4 → md:px-6 → lg:px-[80px]). */}
      <div className="w-full px-4 md:px-6 lg:px-[80px]">
        <div className={SITE_BELOW_FOLD_COLUMN}>
          <div className="pt-[112px] lg:pt-[120px]">
            <SiteCta />
          </div>
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
