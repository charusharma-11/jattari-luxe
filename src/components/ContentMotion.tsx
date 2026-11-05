"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./ContentMotion.module.css";

const contentSections =
  'main.jl-explore-content > section:not(:first-child):not(.jl-common-cta):not([data-hero]):not([class*="hero" i])';

export default function ContentMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.startsWith("/explore-jattari")) {
      return;
    }

    const main = document.querySelector("main.jl-explore-content");
    if (!main) {
      return;
    }

    const sections = main.querySelectorAll<HTMLElement>(contentSections);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                entry.target.classList.toggle(
                  styles.inView,
                  entry.isIntersecting,
                );
              }
            },
            {
              threshold: 0.08,
              rootMargin: "0px 0px -8% 0px",
            },
          )
        : null;

    const observe = (elements: NodeListOf<HTMLElement>, className: string) => {
      elements.forEach((element, index) => {
        element.classList.add(className);
        element.style.setProperty(
          "--jl-explore-stagger",
          `${(index % 4) * 65}ms`,
        );
        if (observer) {
          observer.observe(element);
        } else {
          element.classList.add(styles.inView);
        }
      });
    };

    sections.forEach((section) => {
      section.classList.add(styles.observeSection);
      if (observer) {
        observer.observe(section);
      } else {
        section.classList.add(styles.inView);
      }
    });

    observe(
      main.querySelectorAll<HTMLElement>(
        `${contentSections} :is(h1, h2, h3, h4, h5, h6, p, li)`,
      ),
      styles.observeText,
    );
    observe(
      main.querySelectorAll<HTMLElement>(
        `${contentSections} :is(article, figure, a[class*="rounded-2xl"], div[class*="rounded-2xl"])`,
      ),
      styles.observeCard,
    );
    observe(
      main.querySelectorAll<HTMLElement>(`${contentSections} :is(img, svg)`),
      styles.observeVisual,
    );

    return () => observer?.disconnect();
  }, [pathname]);

  return null;
}
