
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  CONTACT_MODAL_EVENT,
  requestContactModal,
} from "@/src/lib/contact-modal";

type NavSubItem = {
  name: string;
  href: string;
};

type NavItem = {
  name: string;
  href: string;
  dropdown?: NavSubItem[];
};

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof ContactForm, string>>;

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Explore Jattari",
    href: "/explore-jattari",
    dropdown: [
      { name: "About Jattari", href: "/explore-jattari#about-jattari" },
      { name: "History & Culture", href: "/explore-jattari/history-culture" },
      { name: "Areas & Neighbourhoods", href: "/explore-jattari/areas-neighbourhoods" },
      { name: "Markets & Shopping", href: "/explore-jattari/markets-shopping" },
      { name: "Transport & Connectivity", href: "/explore-jattari/transport-connectivity" },
    ],
  },
  {
    name: "Education",
    href: "/education",
    dropdown: [
      { name: "Schools", href: "/education/schools" },
      { name: "Colleges", href: "/education/colleges" },
      { name: "Coaching Centres", href: "/education/coaching-centres" },
      { name: "Computer Institutes", href: "/education/computer-institutes" },
      { name: "Admission Updates", href: "/education/admission-updates" },
    ],
  },
  {
    name: "Real Estate",
    href: "/real-estate",
    dropdown: [
      { name: "Featured Projects", href: "/real-estate/featured-projects" },
      { name: "Residential Plots", href: "/real-estate/residential-plots" },
      { name: "Houses & Villas", href: "/real-estate/houses-villas" },
      { name: "Commercial Properties", href: "/real-estate/commercial-properties" },
      { name: "Rent & Lease", href: "/real-estate/rent-lease" },
    ],
  },
  {
    name: "Local Businesses",
    href: "/local-businesses",
    dropdown: [
      { name: "Electronics & Appliances", href: "/local-businesses/electronics-appliances" },
      { name: "Grocery & Daily Needs", href: "/local-businesses/grocery-daily-needs" },
      { name: "Clothing & Fashion", href: "/local-businesses/clothing-fashion" },
      { name: "Restaurants & Cafes", href: "/local-businesses/restaurants-cafes" },
      { name: "Hardware & Electrical", href: "/local-businesses/hardware-electrical" },
      { name: "All Businesses", href: "/local-businesses/all-businesses" },
    ],
  },
  {
    name: "Events & News",
    href: "/events-news",
    dropdown: [
      { name: "Latest Local News", href: "/events-news/local-news" },
      { name: "Community Events", href: "/events-news/community-events" },
      { name: "Festivals", href: "/events-news/festivals" },
      { name: "Jobs & Opportunities", href: "/events-news/jobs-opportunities" },
    ],
  },
];

const initialForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchMessage, setSearchMessage] = useState("");

  const [contactOpen, setContactOpen] = useState(false);
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formMessage, setFormMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeContactButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!contactOpen) return;

    const previousOverflow = document.body.style.overflow;
    const mobileMenuButton = mobileMenuButtonRef.current;
    document.body.style.overflow = "hidden";
    closeContactButtonRef.current?.focus();

    function handleDialogKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setContactOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleDialogKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleDialogKeyDown);
      if (previousFocusRef.current?.isConnected) {
        previousFocusRef.current.focus();
      } else {
        mobileMenuButton?.focus();
      }
    };
  }, [contactOpen]);

  useEffect(() => {
    function handleContactRequest(event: Event) {
      const { detail: trigger } = event as CustomEvent<HTMLElement>;
      previousFocusRef.current = trigger;
      setContactOpen(true);
      setForm(initialForm);
      setErrors({});
      setFormMessage(null);
      setSearchOpen(false);
      setSearchMessage("");
      setMenuOpen(false);
      setOpenDropdown(null);
    }

    window.addEventListener(CONTACT_MODAL_EVENT, handleContactRequest);
    return () => {
      window.removeEventListener(CONTACT_MODAL_EVENT, handleContactRequest);
    };
  }, []);

  function closeMobileMenu() {
    setMenuOpen(false);
    setOpenDropdown(null);
  }

  function isActive(href: string) {
    const path = href.split("#")[0];

    if (path === "/") return pathname === "/";

    return pathname === path || pathname.startsWith(`${path}/`);
  }

  function toggleDropdown(name: string) {
    setOpenDropdown((current) => (current === name ? null : name));
  }

  function closeContact() {
    setContactOpen(false);
    setErrors({});
    setFormMessage(null);
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const allPages = [
      ...navItems.flatMap((item) => [
        { name: item.name, href: item.href },
        ...(item.dropdown ?? []),
      ]),
      { name: "Contact", href: "#contact", contact: true },
    ];

    const match =
      allPages.find((page) => page.name.toLowerCase() === query) ??
      allPages.find((page) => page.name.toLowerCase().includes(query)) ??
      allPages.find((page) =>
        query.split(/\s+/).some(
          (word) =>
            word.length > 2 && page.name.toLowerCase().includes(word)
        )
      );

    if (match) {
      if ("contact" in match && match.contact) {
        const trigger =
          document.activeElement instanceof HTMLElement
            ? document.activeElement
            : e.currentTarget;
        requestContactModal(trigger);
        return;
      }

      window.location.href = match.href;
    } else {
        setSearchMessage("Invalid search — No results found.");

      ;
    }
  }

  function updateField(field: keyof ContactForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFormMessage(null);
  }

  function validateForm(): FormErrors {
    const nextErrors: FormErrors = {};

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();

    if (!name) {
      nextErrors.name = "Please enter your full name.";
    } else if (name.length < 2) {
      nextErrors.name = "Name must contain at least 2 characters.";
    } else if (/\d/.test(name)) {
      nextErrors.name = "Name should not contain numbers.";
    }

    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!phone) {
      nextErrors.phone = "Please enter your mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      nextErrors.phone =
        "Enter a valid 10-digit Indian mobile number.";
    }

    if (!message) {
      nextErrors.message = "Please enter your message.";
    } else if (message.length < 10) {
      nextErrors.message = "Message must contain at least 10 characters.";
    }

    return nextErrors;
  }

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setFormMessage({
        type: "error",
        text: "Please correct the highlighted fields.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result: unknown = await response.json();

      if (!response.ok) {
        const message =
          typeof result === "object" &&
          result !== null &&
          "error" in result &&
          typeof result.error === "string"
            ? result.error
            : "Your message could not be sent. Please try again.";
        setFormMessage({ type: "error", text: message });
        return;
      }

      setForm(initialForm);
      setErrors({});
      setFormMessage({
        type: "success",
        text: "Your message was sent successfully. We’ll be in touch soon.",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setFormMessage({
        type: "error",
        text: "Unable to send your message right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "block w-full min-w-0 rounded-xl border border-[#E4D7BE] bg-white px-3 py-2.5 text-base text-[#164E52] outline-none transition placeholder:text-[#8A9A9A] focus:border-[#164E52] focus:ring-2 focus:ring-[#164E52]/10";

  const labelClass =
    "mb-1.5 block text-xs font-semibold text-[#164E52]";

  function fieldError(field: keyof ContactForm) {
    return errors[field] ? (
      <p className="mt-1 text-xs leading-4 text-red-700" role="alert">
        {errors[field]}
      </p>
    ) : null;
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#E8E2D8] bg-[#FFFDF8]/95 shadow-[0_4px_20px_rgba(22,78,82,0.06)] backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-[1800px] items-center gap-2 px-3 py-2 sm:gap-3 sm:px-4 xl:px-6">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex shrink-0 items-center gap-2"
            aria-label="Jattari Luxe Home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9B783] bg-[#164E52] text-xs font-bold text-[#FFFDF8] transition duration-300 group-hover:rotate-6">
              JL
            </span>
            <span className="flex flex-col">
              <span className="whitespace-nowrap text-sm font-bold tracking-wide text-[#164E52]">
                Jattari Luxe
              </span>
              <span className="whitespace-nowrap text-[7px] font-semibold tracking-[2px] text-[#927B58]">
                ELEVATED LIVING
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="ml-auto hidden min-w-0 flex-1 items-center justify-end gap-0.5 xl:flex">
            {navItems.map((item) => (
<div
  key={item.name}
  className="relative shrink-0"
  onMouseEnter={() => {
    if (item.dropdown) setOpenDropdown(item.name);
  }}
  onMouseLeave={() => {
    if (item.dropdown) setOpenDropdown(null);
  }}
>                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={openDropdown === item.name}
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-2 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8EEE5] hover:text-[#164E52] hover:shadow-sm ${
                        isActive(item.href)
                          ? "bg-[#E8EEE5] text-[#164E52] shadow-sm"
                          : "text-[#29443A]"
                      }`}
                    >
                      {item.name}
                      <span className="text-[10px]" aria-hidden="true">
                        {openDropdown === item.name ? "⌃" : "⌄"}
                      </span>
                    </button>

                    {openDropdown === item.name && (
                      <div className="absolute left-0 top-full z-50 mt-2 max-h-[70vh] w-64 overflow-y-auto rounded-xl border border-[#E8E2D8] bg-[#FFFDF8] p-2 shadow-[0_12px_35px_rgba(22,78,82,0.15)]">
                        <Link
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block rounded-lg border-b border-[#E8E2D8] px-3 py-2.5 text-sm font-semibold text-[#164E52] hover:bg-[#E8EEE5]"
                        >
                          View All {item.name}
                        </Link>

                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:translate-x-1 hover:bg-[#E8EEE5] hover:text-[#164E52] ${
                              isActive(subItem.href)
                                ? "bg-[#E8EEE5] text-[#164E52]"
                                : "text-[#344539]"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpenDropdown(null)}
                    className={`whitespace-nowrap rounded-full px-2 py-2 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8EEE5] hover:text-[#164E52] hover:shadow-sm ${
                      isActive(item.href)
                        ? "bg-[#E8EEE5] text-[#164E52] shadow-sm"
                        : "text-[#29443A]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={(event) => requestContactModal(event.currentTarget)}
              className="whitespace-nowrap rounded-full border border-[#D9B783] bg-[#164E52] px-4 py-2 text-xs font-semibold text-[#FFFDF8] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#103F40] hover:shadow-lg"
            >
              Contact
            </button>
          </div>

          {/* Search and mobile controls */}
          <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-2">
            {searchOpen && (
              <form
                onSubmit={handleSearch}
                className="absolute left-3 right-3 top-full z-50 mt-2 flex flex-col gap-2 rounded-xl border border-[#D9B783] bg-[#FFFDF8] p-3 shadow-lg sm:left-auto sm:right-4 sm:w-72 xl:static xl:mt-0 xl:w-52 xl:rounded-full xl:p-2"
              >
                <div className="flex items-center gap-2">
                  <input
                    autoFocus
                    type="search"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSearchMessage("");
                    }}
                    placeholder="Search pages..."
                    aria-label="Search Jattari Luxe"
                    className="min-w-0 flex-1 bg-transparent px-1 text-sm text-[#164E52] outline-none placeholder:text-gray-400"
                  />

                  <button
                    type="submit"
                    aria-label="Submit search"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#164E52] text-white transition hover:bg-[#103F40]"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>

                {searchMessage && (
                  <p className="px-1 text-xs leading-relaxed text-[#927B58]">
                    {searchMessage}
                  </p>
                )}
              </form>
            )}

            <button
              type="button"
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              onClick={() => {
                setSearchOpen((open) => !open);
                setSearchQuery("");
                setSearchMessage("");
                setMenuOpen(false);
                setOpenDropdown(null);
              }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D9B783] bg-white text-[#164E52] shadow-sm transition-all duration-300 hover:border-[#164E52] hover:bg-[#164E52] hover:text-white"
            >
              {searchOpen ? (
                <span className="text-xl leading-none">×</span>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="10.8" cy="10.8" r="6.8" />
                  <path d="m16 16 4.5 4.5" />
                </svg>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              ref={mobileMenuButtonRef}
              onClick={() => {
                setMenuOpen((open) => !open);
                setSearchOpen(false);
                setSearchMessage("");
                setOpenDropdown(null);
              }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D9B783] bg-white text-xl text-[#164E52] transition-colors hover:bg-[#164E52] hover:text-white xl:hidden"
            >
              {menuOpen ? (
                <span aria-hidden="true">×</span>
              ) : (
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile navigation */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="max-h-[75vh] overflow-y-auto border-t border-[#E8E2D8] bg-[#FFFDF8] px-4 py-3 shadow-[0_12px_24px_rgba(22,78,82,0.08)] xl:hidden"
          >
            {navItems.map((item) => (
              <div
                key={item.name}
                className="border-b border-[#E8E2D8]/70 last:border-b-0"
              >
                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={openDropdown === item.name}
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold transition-colors hover:bg-[#E8EEE5] ${
                        isActive(item.href)
                          ? "bg-[#E8EEE5] text-[#164E52]"
                          : "text-[#29443A]"
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className="ml-3 text-base text-[#927B58]">
                        {openDropdown === item.name ? "−" : "+"}
                      </span>
                    </button>

                    {openDropdown === item.name && (
                      <div className="mb-2 ml-3 border-l-2 border-[#D9B783] pl-3">
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block rounded-md px-3 py-2.5 text-sm font-semibold text-[#164E52] hover:bg-[#E8EEE5]"
                        >
                          View All {item.name}
                        </Link>

                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={closeMobileMenu}
                            className={`block rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-[#E8EEE5] hover:text-[#164E52] ${
                              isActive(subItem.href)
                                ? "bg-[#E8EEE5] font-semibold text-[#164E52]"
                                : "text-[#63736D]"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block rounded-lg px-3 py-3 text-sm font-semibold transition-colors hover:bg-[#E8EEE5] hover:text-[#164E52] ${
                      isActive(item.href)
                        ? "bg-[#E8EEE5] text-[#164E52]"
                        : "text-[#29443A]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={(event) => requestContactModal(event.currentTarget)}
              className="my-2 block w-full rounded-lg border border-[#D9B783] bg-[#164E52] px-3 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#103F40]"
            >
              Contact
            </button>
          </div>
        )}
      </header>

      {/* Mobile-style contact popup */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#071F20]/60 p-3 backdrop-blur-md sm:p-4"
          onClick={closeContact}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            aria-describedby="contact-description"
            ref={dialogRef}
            className="relative box-border flex h-[min(680px,calc(100dvh-24px))] w-[min(370px,calc(100vw-24px))] min-h-0 flex-col overflow-hidden rounded-[38px] border-[5px] border-[#101C1D] bg-[#101C1D] p-[5px] shadow-2xl sm:h-[min(720px,calc(100dvh-32px))]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Phone notch */}
            <div className="pointer-events-none absolute left-1/2 top-1 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-[#101C1D]" />

            {/* Screen: no browser scrollbar */}
            <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[29px] bg-[#FFF5E1]">
              {/* Phone header */}
              <div className="flex shrink-0 items-center justify-between px-5 pb-3 pt-8">
                <span className="text-xs font-bold tracking-wider text-[#164E52]">
                  JATTARI LUXE
                </span>

                <button
                  type="button"
                  aria-label="Close contact form"
                  onClick={closeContact}
                  ref={closeContactButtonRef}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D9B783] text-xl text-[#164E52] transition hover:bg-[#164E52] hover:text-white"
                >
                  ×
                </button>
              </div>

              {/* Scrollable content stays inside the phone screen */}
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="pb-2 pt-2">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[3px] text-[#927B58] sm:text-xs">
                    Let&apos;s Connect
                  </p>

                  <h2
                    id="contact-title"
                    className="text-2xl font-bold leading-tight text-[#164E52] sm:text-3xl"
                  >
                    Get in Touch<span className="text-[#B58B4B]">.</span>
                  </h2>

                  <p id="contact-description" className="mt-2 text-sm leading-5 text-[#63736D]">
                    Have a question about Jattari? Send us a message.
                  </p>
                </div>

                <form
                  noValidate
                  onSubmit={handleContactSubmit}
                  className="mt-5 space-y-3.5"
                >
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      maxLength={80}
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Enter your full name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className={`${inputClass} ${errors.name ? "border-red-600 focus:border-red-600 focus:ring-red-600/10" : ""}`}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="mt-1 text-xs leading-4 text-red-700" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className={labelClass}>
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      maxLength={120}
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className={`${inputClass} ${errors.email ? "border-red-600 focus:border-red-600 focus:ring-red-600/10" : ""}`}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1 text-xs leading-4 text-red-700" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className={labelClass}>
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      inputMode="numeric"
                      autoComplete="tel-national"
                      maxLength={10}
                      value={form.phone}
                      onChange={(e) =>
                        updateField("phone", e.target.value.replace(/\D/g, "").slice(0, 10))
                      }
                      placeholder="Enter your 10-digit mobile number"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                      className={`${inputClass} ${errors.phone ? "border-red-600 focus:border-red-600 focus:ring-red-600/10" : ""}`}
                    />
                    {errors.phone && (
                      <p id="contact-phone-error" className="mt-1 text-xs leading-4 text-red-700" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      required
                      maxLength={1000}
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="Write your message here..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className={`${inputClass} min-h-[86px] resize-y ${errors.message ? "border-red-600 focus:border-red-600 focus:ring-red-600/10" : ""}`}
                    />
                    <div className="mt-1 flex justify-between gap-2">
                      {fieldError("message")}
                      <span className="ml-auto shrink-0 text-[10px] text-[#927B58]">
                        {form.message.length}/1000
                      </span>
                    </div>
                  </div>

                  {formMessage && (
                    <p
                      role={formMessage.type === "error" ? "alert" : "status"}
                      className={`rounded-lg border p-3 text-xs leading-5 ${
                        formMessage.type === "error"
                          ? "border-red-300 bg-red-50 text-red-700"
                          : "border-[#D9B783] bg-white/80 text-[#164E52]"
                      }`}
                    >
                      {formMessage.text}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#164E52] px-4 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#103F40] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Submit Message"}
                    {!isSubmitting && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                    )}
                  </button>

                  <p className="pb-1 text-center text-[10px] tracking-wide text-[#927B58]">
                    JATTARI LUXE · ELEVATED LIVING
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
