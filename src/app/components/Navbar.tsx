import { MAIN_NAV_LINKS } from "@/constants/navLinks";
import { SECTION_IDS, sectionHref } from "../sections";

export function Navbar() {
  return (
    <header className="relative z-10 w-full bg-transparent">
      <nav
        className="relative mx-auto grid grid-cols-[1fr_auto] items-start md:items-center gap-3 py-3 md:py-0 px-3 md:grid-cols-[1fr_auto_1fr] md:px-6"
        aria-label="Primary"
      >
        <a
          href="#"
          className="flex w-fit shrink-0 items-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"
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
        </a>

        <ul className="hidden items-center justify-center gap-6 md:flex">
          {MAIN_NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-manrope text-base font-normal uppercase leading-[100%] tracking-[5%] text-white transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end">
          <a
            href={sectionHref(SECTION_IDS.booking)}
            className="inline-flex font-manrope h-[45px] w-[109px] shrink-0 items-center justify-center rounded-[12px] border border-[#FFFFFF33] bg-[#00000026] text-center text-[14px] font-normal uppercase leading-[150%] tracking-[5%] text-white backdrop-blur-[20px] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:h-[48px] md:w-[152px] md:rounded-[8px] md:text-base md:leading-[100%]"
          >
            Book now
          </a>
        </div>
      </nav>
    </header>
  );
}
