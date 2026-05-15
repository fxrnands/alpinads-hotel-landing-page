import { Mail, Phone } from "lucide-react";

import {
  FOOTER_BRAND,
  FOOTER_CONTACT,
  FOOTER_COPYRIGHT_YEAR,
  FOOTER_CREDIT,
  FOOTER_LEGAL_LINKS,
  FOOTER_LINKS,
  type FooterNavLink,
} from "@/constants/footer";
import { resolveSectionScrollTarget } from "@/lib/sections/resolveScrollTarget";
import {
  FOOTER_ADDRESS_CLASS,
  FOOTER_BG,
  FOOTER_BOTTOM_CLASS,
  FOOTER_BRAND_COLUMN_CLASS,
  FOOTER_COPYRIGHT_CLASS,
  FOOTER_CONTACT_COLUMN_CLASS,
  FOOTER_CONTACT_FIELDS_CLASS,
  FOOTER_CONTACT_FIELD_CLASS,
  FOOTER_CREDIT_CLASS,
  FOOTER_CREDIT_LOGO_CLASS,
  FOOTER_CREDIT_TEXT_CLASS,
  FOOTER_DIVIDER_CLASS,
  FOOTER_GRID_CLASS,
  FOOTER_HEADING_CLASS,
  FOOTER_LINKS_LEGALS_GROUP_CLASS,
  FOOTER_LOGO_CLASS,
  FOOTER_NAV_COLUMN_CLASS,
  FOOTER_NAV_COLUMNS_CLASS,
  FOOTER_NAV_HEADING_CLASS,
  FOOTER_NAV_LIST_CLASS,
  FOOTER_NAV_LINK_CLASS,
  FOOTER_PADDING_CLASS,
  FOOTER_MOBILE_ADDRESS_CLASS,
  FOOTER_MOBILE_BOTTOM_CLASS,
  FOOTER_MOBILE_BRAND_COLUMN_CLASS,
  FOOTER_MOBILE_CONTACT_COLUMN_CLASS,
  FOOTER_MOBILE_CONTACT_HEADING_CLASS,
  FOOTER_MOBILE_CONTACT_FIELD_CLASS,
  FOOTER_MOBILE_CONTACT_FIELDS_CLASS,
  FOOTER_MOBILE_CREDIT_CLASS,
  FOOTER_MOBILE_DIVIDER_CLASS,
  FOOTER_MOBILE_GRID_CLASS,
  FOOTER_MOBILE_LINKS_LEGALS_GROUP_CLASS,
  FOOTER_MOBILE_LOGO_CLASS,
  FOOTER_MOBILE_MAIN_CLASS,
  FOOTER_MOBILE_NAV_COLUMN_CLASS,
  FOOTER_MOBILE_PADDING_CLASS,
} from "@/lib/footer";
import { scrollToElementId, scrollToTop } from "@/utils/smoothScroll";

import { Button } from "./ui/button";
import { FooterContactField } from "./footer/FooterContactField";
import { FooterSocialLinks } from "./footer/FooterSocialLinks";
import { cn } from "./ui/utils";

function handleFooterNav(link: FooterNavLink): void {
  if (link.type === "scroll-top") {
    scrollToTop();
    return;
  }

  scrollToElementId(resolveSectionScrollTarget(link.sectionId));
}

export function Footer() {
  return (
    <footer className="w-full" style={{ backgroundColor: FOOTER_BG }}>
      <div
        className={cn(
          "mx-auto max-w-[1920px]",
          FOOTER_MOBILE_PADDING_CLASS,
          FOOTER_PADDING_CLASS,
        )}
      >
        <div className={cn(FOOTER_MOBILE_GRID_CLASS, FOOTER_GRID_CLASS)}>
          <div className={cn(FOOTER_MOBILE_BRAND_COLUMN_CLASS, FOOTER_BRAND_COLUMN_CLASS)}>
            <Button
              type="button"
              onClick={() => scrollToTop()}
              className="h-auto rounded-sm bg-transparent p-0 hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2B2B2B]"
            >
              <img
                src={FOOTER_BRAND.logoSrc}
                alt={FOOTER_BRAND.logoAlt}
                width={FOOTER_BRAND.logoWidth}
                height={FOOTER_BRAND.logoHeight}
                className={cn(FOOTER_LOGO_CLASS, FOOTER_MOBILE_LOGO_CLASS)}
              />
            </Button>
            <address
              className={cn(
                FOOTER_ADDRESS_CLASS,
                FOOTER_MOBILE_ADDRESS_CLASS,
                "not-italic",
              )}
            >
              {FOOTER_BRAND.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div className={cn(FOOTER_MOBILE_MAIN_CLASS, FOOTER_NAV_COLUMNS_CLASS)}>
            <div
              className={cn(
                FOOTER_MOBILE_LINKS_LEGALS_GROUP_CLASS,
                FOOTER_LINKS_LEGALS_GROUP_CLASS,
              )}
            >
              <div className={cn(FOOTER_MOBILE_NAV_COLUMN_CLASS, FOOTER_NAV_COLUMN_CLASS)}>
                <h2 className={FOOTER_NAV_HEADING_CLASS}>Links</h2>
                <ul className={FOOTER_NAV_LIST_CLASS}>
                  {FOOTER_LINKS.map((link) => (
                    <li key={link.label}>
                      <Button
                        type="button"
                        onClick={() => handleFooterNav(link)}
                        className={cn(
                          FOOTER_NAV_LINK_CLASS,
                          "h-auto bg-transparent p-0 text-left hover:bg-transparent",
                        )}
                      >
                        {link.label}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={cn(FOOTER_MOBILE_NAV_COLUMN_CLASS, FOOTER_NAV_COLUMN_CLASS)}>
                <h2 className={FOOTER_NAV_HEADING_CLASS}>
                  <span className="lg:hidden">Legal</span>
                  <span className="hidden lg:inline">Legals</span>
                </h2>
                <ul className={FOOTER_NAV_LIST_CLASS}>
                  {FOOTER_LEGAL_LINKS.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} className={FOOTER_NAV_LINK_CLASS}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={cn(FOOTER_MOBILE_CONTACT_COLUMN_CLASS, FOOTER_CONTACT_COLUMN_CLASS)}>
              <h2 className={cn(FOOTER_HEADING_CLASS, FOOTER_MOBILE_CONTACT_HEADING_CLASS)}>
                Contact
              </h2>
              <div
                className={cn(
                  "mt-4",
                  FOOTER_MOBILE_CONTACT_FIELDS_CLASS,
                  FOOTER_CONTACT_FIELDS_CLASS,
                )}
              >
                <FooterContactField
                  icon={Phone}
                  value={FOOTER_CONTACT.phone}
                  copyLabel="phone number"
                  fieldClassName={cn(
                    FOOTER_MOBILE_CONTACT_FIELD_CLASS,
                    FOOTER_CONTACT_FIELD_CLASS,
                  )}
                />
                <FooterContactField
                  icon={Mail}
                  value={FOOTER_CONTACT.email}
                  copyLabel="email address"
                  fieldClassName={cn(
                    FOOTER_MOBILE_CONTACT_FIELD_CLASS,
                    FOOTER_CONTACT_FIELD_CLASS,
                  )}
                />
              </div>
              <FooterSocialLinks />
            </div>
          </div>
        </div>

        <hr className={cn(FOOTER_MOBILE_DIVIDER_CLASS, FOOTER_DIVIDER_CLASS)} />

        <div className={cn(FOOTER_MOBILE_BOTTOM_CLASS, FOOTER_BOTTOM_CLASS)}>
          <p className={FOOTER_COPYRIGHT_CLASS}>
            © {FOOTER_COPYRIGHT_YEAR} {FOOTER_BRAND.name}
          </p>
          <a
            href={FOOTER_CREDIT.href}
            className={cn(FOOTER_MOBILE_CREDIT_CLASS, FOOTER_CREDIT_CLASS)}
            aria-label={`${FOOTER_CREDIT.text} ${FOOTER_CREDIT.brand}`}
          >
            <span className={cn("whitespace-nowrap", FOOTER_CREDIT_TEXT_CLASS)}>
              {FOOTER_CREDIT.text}
            </span>
            <img
              src={FOOTER_CREDIT.iconSrc}
              alt={FOOTER_CREDIT.brand}
              width={FOOTER_CREDIT.iconWidth}
              height={FOOTER_CREDIT.iconHeight}
              className={FOOTER_CREDIT_LOGO_CLASS}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
