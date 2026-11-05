"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ContactButton from "./ContactButton";

export default function CommonCTA() {
  const pathname = usePathname();
  const isTargetPage =
    pathname === "/real-estate" ||
    pathname.startsWith("/real-estate/") ||
    pathname === "/local-businesses" ||
    pathname.startsWith("/local-businesses/");

  useEffect(() => {
    if (!isTargetPage || window.location.hash !== "#contact-cta") return;

    const timeout = window.setTimeout(() => {
      document
        .getElementById("contact-cta")
        ?.scrollIntoView({ block: "start" });
    }, 100);

    return () => window.clearTimeout(timeout);
  }, [isTargetPage, pathname]);

  return (
    <section
      id={isTargetPage ? "contact-cta" : undefined}
      className={`jl-common-cta${isTargetPage ? " scroll-mt-24" : ""}`}
      data-page-cta={isTargetPage ? "" : undefined}
      aria-labelledby="jl-common-cta-title"
    >
      <div className="jl-common-cta__panel">
        <div className="jl-common-cta__copy">
          <h2 className="jl-common-cta__title" id="jl-common-cta-title">
            Discover more of Jattari with Jattari Luxe.
          </h2>
          <p className="jl-common-cta__description">
            Find local businesses, education, property opportunities, events
            and useful information to help you explore Jattari.
          </p>
        </div>
        <ContactButton className="jl-common-cta__button">
          Contact our team <span aria-hidden="true">↗</span>
        </ContactButton>
      </div>
    </section>
  );
}
