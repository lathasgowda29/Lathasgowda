import { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import logoUrl from "../assets/logo.svg";

/** Shared with Home; `case-study-chat` uses case-study routes + active "Case studies". `about` highlights About me + same links as home. */
export default function SiteNav({ variant = "home" }) {
  return (
    <>
      <MobileNavbar variant={variant} />
      <Navbar variant={variant} />
    </>
  );
}

function Navbar({ variant }) {
  const isCaseStudy = variant === "case-study-chat";
  const isAbout = variant === "about";

  const homeClass = (active) =>
    active
      ? "px-2 font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-teal transition-opacity duration-200 hover:opacity-80"
      : "px-2 font-source-sans text-sm font-normal leading-6 tracking-[0.25px] text-dark transition-opacity duration-200 hover:opacity-80";

  return (
    <nav className="mx-auto hidden min-h-[60px] w-full max-w-[589px] flex-wrap items-center justify-center gap-y-2 rounded-[70px] bg-white px-3 py-2 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.2)] md:flex lg:flex-nowrap lg:justify-start lg:px-6 lg:py-0">
      <Link to="/">
        <img src={logoUrl} alt="Logo" className="h-8 w-8 shrink-0" />
      </Link>

      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-0 lg:ml-[97px] lg:flex-none lg:justify-start">
        {isCaseStudy ? (
          <>
            <Link to="/" className={homeClass(false)}>
              Home
            </Link>
            <Link
              to="/case-studies/gen-ai"
              className={homeClass(true)}
            >
              Case studies
            </Link>
            <Link
              to="/case-studies/about-me"
              className={homeClass(false)}
            >
              About me
            </Link>
            <a
              href="mailto:lathasgowda29@gmail.com"
              className={homeClass(false)}
            >
              Contact
            </a>
          </>
        ) : isAbout ? (
          <>
            <Link to="/" className={homeClass(false)}>
              Home
            </Link>
            <Link to="/#case-studies" className={homeClass(false)}>
              Case studies
            </Link>
            <Link to="/case-studies/about-me" className={homeClass(true)}>
              About me
            </Link>
            <a href="mailto:lathasgowda29@gmail.com" className={homeClass(false)}>
              Contact
            </a>
          </>
        ) : (
          <>
            <a href="#" className={homeClass(true)}>
              Home
            </a>
            <a
              href="#case-studies"
              className={homeClass(false)}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
                window.history.replaceState(null, "", "/#case-studies");
              }}
            >
              Case studies
            </a>
            <Link to="/case-studies/about-me" className={homeClass(false)}>
              About me
            </Link>
            <a href="mailto:lathasgowda29@gmail.com" className={homeClass(false)}>
              Contact
            </a>
          </>
        )}
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

function MobileNavbar({ variant }) {
  const isCaseStudy = variant === "case-study-chat";
  const isAbout = variant === "about";
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  const openMenu = useCallback(() => setIsOpen(true), []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeMenu]);

  const navItemClass =
    "block border-b border-white/[0.08] py-4 font-geist text-xl font-medium leading-7 tracking-[0.25px] text-white transition-colors first:pt-2 last:border-b-0 hover:text-teal-light";

  return (
    <>
      <div className="relative z-20 md:hidden">
        <div className="flex items-center justify-between py-3">
          <Link to="/" onClick={closeMenu} className="shrink-0">
            <img src={logoUrl} alt="Logo" className="h-8 w-8 shrink-0" />
          </Link>
          <button
            type="button"
            onClick={() => (isOpen ? closeMenu() : openMenu())}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-6 w-6 items-center justify-center"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M18 6L6 18" stroke="#77797C" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 6L18 18" stroke="#77797C" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect y="4" width="24" height="2" rx="1" fill="#77797C" />
                <rect y="11" width="24" height="2" rx="1" fill="#77797C" />
                <rect y="18" width="24" height="2" rx="1" fill="#77797C" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <aside
        className={`fixed inset-0 z-[101] flex max-h-[100dvh] flex-col overflow-hidden bg-dark-bg px-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] transition-[transform] duration-300 ease-out motion-reduce:transition-none md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 py-4">
          <Link to="/" onClick={closeMenu} className="flex min-w-0 items-center gap-3">
            <img src={logoUrl} alt="Logo" className="h-9 w-9 shrink-0" />
          </Link>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-teal-mid hover:bg-white/10"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pt-4 pb-6">
          <p className="mb-1 font-source-sans text-xs font-semibold uppercase tracking-[0.12em] text-caption">
            Menu
          </p>

          {isCaseStudy ? (
            <>
              <Link to="/" onClick={closeMenu} className={navItemClass}>
                Home
              </Link>
              <Link
                to="/case-studies/gen-ai"
                onClick={closeMenu}
                className={`${navItemClass} text-teal-light`}
              >
                Case studies
              </Link>
              <Link to="/case-studies/about-me" onClick={closeMenu} className={navItemClass}>
                About me
              </Link>
              <a href="mailto:lathasgowda29@gmail.com" onClick={closeMenu} className={navItemClass}>
                Contact
              </a>
            </>
          ) : isAbout ? (
            <>
              <Link to="/" onClick={closeMenu} className={navItemClass}>
                Home
              </Link>
              <Link to="/#case-studies" onClick={closeMenu} className={navItemClass}>
                Case studies
              </Link>
              <Link
                to="/case-studies/about-me"
                onClick={closeMenu}
                className={`${navItemClass} text-teal-light`}
              >
                About me
              </Link>
              <a href="mailto:lathasgowda29@gmail.com" onClick={closeMenu} className={navItemClass}>
                Contact
              </a>
            </>
          ) : (
            <>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`${navItemClass} text-teal-light`}
              >
                Home
              </a>
              <a
                href="#case-studies"
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                  document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
                  window.history.replaceState(null, "", "/#case-studies");
                }}
                className={navItemClass}
              >
                Case studies
              </a>
              <Link to="/case-studies/about-me" onClick={closeMenu} className={navItemClass}>
                About me
              </Link>
              <a href="mailto:lathasgowda29@gmail.com" onClick={closeMenu} className={navItemClass}>
                Contact
              </a>
            </>
          )}
        </div>

        <div className="shrink-0 border-t border-white/10 py-4">
          <a
            href="https://drive.google.com/file/d/1uhROOXhPEPmMczltlfSV2KBYO5bgUZOm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-teal px-5 py-3.5 text-center font-source-sans text-sm font-semibold leading-6 tracking-[0.25px] text-white shadow-[0_4px_14px_rgba(15,99,120,0.4)] transition-colors hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
          >
            Resume
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20" aria-hidden>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 4v12m0 0 4-4m-4 4-4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </aside>
    </>
  );
}
