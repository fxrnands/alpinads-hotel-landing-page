import {
  FOOTER_SOCIAL_ICON_SIZE,
  FOOTER_SOCIAL_LINKS,
} from "@/constants/footer";
import {
  FOOTER_SOCIAL_BUTTON_CLASS,
  FOOTER_SOCIAL_ICON_CLASS,
  FOOTER_SOCIAL_LINKS_CLASS,
} from "@/lib/footer";

export function FooterSocialLinks() {
  return (
    <div className={FOOTER_SOCIAL_LINKS_CLASS}>
      {FOOTER_SOCIAL_LINKS.map(({ label, href, iconSrc }) => (
        <a
          key={label}
          href={href}
          className={FOOTER_SOCIAL_BUTTON_CLASS}
          aria-label={label}
        >
          <img
            src={iconSrc}
            alt=""
            width={FOOTER_SOCIAL_ICON_SIZE}
            height={FOOTER_SOCIAL_ICON_SIZE}
            className={FOOTER_SOCIAL_ICON_CLASS}
          />
        </a>
      ))}
    </div>
  );
}
