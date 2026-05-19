import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home.jsx";
import CaseStudyApi from "./CaseStudyApi.jsx";
import CaseStudyChatWidget from "./CaseStudyChatWidget.jsx";
import CaseStudyGenAI from "./CaseStudyGenAI.jsx";
import AboutMe from "./AboutMe.jsx";
import Loader from "./Loader.jsx";
import UnsupportedScreen from "./UnsupportedScreen.jsx";

/** Narrow viewports: unsupported for most routes; About Me, Gen AI, chat-widget & API case study render below 1024px. */
const NARROW_MEDIA = "(max-width: 1023px)";
const ABOUT_ME_PATH = "/case-studies/about-me";
const CHAT_WIDGET_PATH = "/case-study/chat-widget";
const API_CASE_PATH = "/case-study/api-configuration";

function normalizePath(pathname) {
  return pathname.replace(/\/$/, "") || "/";
}

/**
 * Narrow viewport bypass for Gen AI case study. Compares a hyphen/space-stripped form:
 * `/case-studies/gen-ai` → `/casestudies/genai` (must match this string, not `/case-studies/genai`).
 */
function isGenAiCaseStudyPath(pathname) {
  try {
    const raw = decodeURIComponent(pathname).replace(/\/$/, "") || "/";
    const compact = raw.toLowerCase().replace(/\s+/g, "").replace(/-/g, "");
    return compact === "/casestudies/genai";
  } catch {
    return false;
  }
}

function useViewportGate() {
  const [isNarrow, setIsNarrow] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(NARROW_MEDIA).matches
      : false
  );

  useEffect(() => {
    const mq = window.matchMedia(NARROW_MEDIA);
    const onChange = () => setIsNarrow(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isNarrow;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (pathname === "/" && hash === "#case-studies") {
      const el = document.getElementById("case-studies");
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth" });
        });
      }
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const { pathname } = useLocation();
  const isLandingPage = pathname === "/";
  const normalized = normalizePath(pathname);
  const isAboutMePage = normalized === ABOUT_ME_PATH;
  const isChatWidgetPage = normalized === CHAT_WIDGET_PATH;
  const isApiCasePage = normalized === API_CASE_PATH;
  const isGenAiCasePage = isGenAiCaseStudyPath(normalized);
  const isNarrowViewport = useViewportGate();

  const showUnsupported =
    isNarrowViewport &&
    !isLandingPage &&
    !isAboutMePage &&
    !isChatWidgetPage &&
    !isApiCasePage &&
    !isGenAiCasePage;

  return (
    <>
      <ScrollToTop />
      {showLoader && isLandingPage && (
        <Loader onComplete={() => setShowLoader(false)} />
      )}
      {showUnsupported ? (
        <UnsupportedScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/api-configuration" element={<CaseStudyApi />} />
          <Route path="/case-study/chat-widget" element={<CaseStudyChatWidget />} />
          <Route path="/case-studies/gen-ai" element={<CaseStudyGenAI />} />
          <Route path="/case-studies/Gen AI" element={<CaseStudyGenAI />} />
          <Route path="/case-studies/about-me" element={<AboutMe />} />
        </Routes>
      )}
    </>
  );
}

export default App;
