import { Button } from "@/app/components/ui/button";
import { MAIN_NAV_LINKS } from "@/constants/navLinks";
import { resolveSectionScrollTarget } from "@/lib/sections/resolveScrollTarget";
import { scrollToElementId, scrollToTop } from "@/utils/smoothScroll";

import { SECTION_IDS, type SectionId } from "../sections";
import { cn } from "./ui/utils";

const NAV_LINK_CLASS =
  "rounded-sm text-base font-normal uppercase leading-[100%] tracking-[5%] text-white transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

function scrollToSection(sectionId: SectionId): void {
  scrollToElementId(resolveSectionScrollTarget(sectionId));
}

export function Navbar() {
  return (
    <header className="relative z-10 w-full bg-transparent">
      <nav
        className="relative mx-auto grid grid-cols-[1fr_auto] items-start gap-3 px-3 py-3 md:grid-cols-[1fr_auto_1fr] md:items-center md:px-6 md:py-0"
        aria-label="Primary"
      >
        <Button
          type="button"
          onClick={() => scrollToTop()}
          className="flex h-auto w-fit shrink-0 items-center rounded-sm bg-transparent p-0 text-white hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <img
            src="/assets/logo-ipsum-mobile.svg"
            alt="Logoipsum"
            width={140}
            height={36}
            className="h-9 w-[140px] shrink-0 object-contain md:hidden"
          />
          <img
            src="/assets/logo-ipsum.svg"
            alt="Logoipsum"
            width={224}
            height={100}
            className="hidden h-[100px] w-[224px] shrink-0 object-contain md:block"
          />
        </Button>

        <ul className="hidden items-center justify-center gap-6 md:flex">
          {MAIN_NAV_LINKS.map(({ label, sectionId }) => (
            <li key={sectionId}>
              <Button
                type="button"
                onClick={() => scrollToSection(sectionId)}
                className={cn(
                  NAV_LINK_CLASS,
                  "h-auto bg-transparent p-0 hover:bg-transparent",
                )}
              >
                {label}
              </Button>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end">
          <Button
            type="button"
            onClick={() => scrollToSection(SECTION_IDS.personalQuote)}
            className="inline-flex h-[45px] w-[109px] shrink-0 items-center justify-center rounded-[12px] border border-[#FFFFFF33] bg-[#00000026] text-center text-[14px] font-normal uppercase leading-[150%] tracking-[5%] text-white backdrop-blur-[20px] transition-opacity hover:bg-[#00000026] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:h-[48px] md:w-[152px] md:rounded-[8px] md:text-base md:leading-[100%]"
          >
            Book now
          </Button>
        </div>
      </nav>
    </header>
  );
}
