
import Link from "next/link";
import ContactButton from "./ContactButton";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Jattari", href: "/explore-jattari" },
  { label: "Education", href: "/education" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Local Businesses", href: "/local-businesses" },
  { label: "Events & News", href: "/events-news" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="jl-footer">
      <div className="jl-footer-main">
        {/* Brand */}
        <div className="jl-footer-brand">
          <Link href="/" className="jl-footer-logo">
            <span className="jl-footer-logo-mark">JL</span>

            <span className="jl-footer-logo-text">
              <strong>Jattari Luxe</strong>
              <small>ELEVATED LIVING</small>
            </span>
          </Link>

          <p>
            Your local guide to discovering Jattari, Uttar Pradesh —
            explore local information, businesses, essential services
            and property opportunities in one place.
          </p>
        </div>

        {/* All navbar pages */}
        <div className="jl-footer-explore">
          <h3>Explore Jattari</h3>

          <nav aria-label="Footer navigation">
            {footerLinks.map((link) => (
              link.label === "Contact" ? (
                <ContactButton
                  className="jl-footer-contact-button"
                  key={link.href}
                >
                  {link.label}
                </ContactButton>
              ) : (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              )
            ))}
          </nav>
        </div>

        {/* Information */}
        <div className="jl-footer-information">
          <h3>Information</h3>

          <p>
            Discover local places, community information and property
            opportunities around Jattari. Verify important details
            through reliable sources before making decisions.
          </p>

          <Link href="/contact">Contact Us ↗</Link>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="jl-footer-bottom">
       <p>
  © 2026 Jattari Luxe. All rights reserved.
</p>

        <span>ROOTED IN JATTARI, UTTAR PRADESH</span>
      </div>
    </footer>
  );
}
