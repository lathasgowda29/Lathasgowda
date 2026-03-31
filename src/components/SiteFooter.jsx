import logoUrl from "../assets/logo.svg";
import footerIconLinkedin from "../assets/footer/social-3.svg";
import footerIconEmail from "../assets/footer/social-2.svg";

export default function SiteFooter() {
  return (
    <footer className="w-full pb-[40px]">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="my-[40px] h-px w-full rounded-[14px] bg-[#a4a5a7] opacity-50" />
        <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-between">
          <img src={logoUrl} alt="Latha" className="h-8 w-8" />
          <p className="flex-1 text-center font-['Inter',sans-serif] text-[14px] font-normal leading-6 tracking-[0.25px] text-dark">
            Latha © 2026
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/latha-s-640073119?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src={footerIconLinkedin}
                alt="LinkedIn"
                className="h-6 w-6 transition-all duration-200 group-hover:[filter:brightness(0)_saturate(100%)]"
              />
            </a>
            <a href="mailto:lathasgowda29@gmail.com" className="group">
              <img
                src={footerIconEmail}
                alt="Email"
                className="h-6 w-6 transition-all duration-200 group-hover:[filter:brightness(0)_saturate(100%)]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
