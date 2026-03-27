import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home.jsx";
import CaseStudyApi from "./CaseStudyApi.jsx";
import CaseStudyChatWidget from "./CaseStudyChatWidget.jsx";
import CaseStudyGenAI from "./CaseStudyGenAI.jsx";
import AboutMe from "./AboutMe.jsx";
import Loader from "./Loader.jsx";
import UnsupportedScreen from "./UnsupportedScreen.jsx";

const NARROW_MEDIA = "(max-width: 999px)";

function useViewportBelow1000px() {
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
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const { pathname } = useLocation();
  const isLandingPage = pathname === "/";
  const isNarrowViewport = useViewportBelow1000px();

  if (isNarrowViewport) {
    return (
      <>
        <ScrollToTop />
        <UnsupportedScreen />
      </>
    );
  }

  return (
    <>
      <ScrollToTop />
      {showLoader && isLandingPage && (
        <Loader onComplete={() => setShowLoader(false)} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/api-configuration" element={<CaseStudyApi />} />
        <Route path="/case-study/chat-widget" element={<CaseStudyChatWidget />} />
        <Route path="/case-studies/gen-ai" element={<CaseStudyGenAI />} />
        <Route path="/case-studies/Gen AI" element={<CaseStudyGenAI />} />
        <Route path="/case-studies/about-me" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
