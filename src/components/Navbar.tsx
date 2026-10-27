
"use client";

import { useState } from "react";

type NavSubItem = {
  name: string;
  href: string;
};

type NavItem = {
  name: string;
  href: string;
  dropdown?: NavSubItem[];
};

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Explore Jattari",
    href: "/explore-jattari",
    dropdown: [
      { name: "About Jattari", href: "/explore-jattari#about-jattari" },
      { name: "History & Culture", href: "/explore-jattari/history-culture" },
      {
        name: "Areas & Neighbourhoods",
        href: "/explore-jattari/areas-neighbourhoods",
      },
      {
        name: "Markets & Shopping",
        href: "/explore-jattari/markets-shopping",
      },
      {
        name: "Transport & Connectivity",
        href: "/explore-jattari/transport-connectivity",
      },
    ],
  },
  {
    name: "Education",
    href: "/education",
    dropdown: [
      { name: "Schools", href: "/education/schools" },
      { name: "Colleges", href: "/education/colleges" },
      {
        name: "Coaching Centres",
        href: "/education/coaching-centres",
      },
      {
        name: "Computer Institutes",
        href: "/education/computer-institutes",
      },
      {
        name: "Admission Updates",
        href: "/education/admission-updates",
      },
    ],
  },
  {
    name: "Real Estate",
    href: "/real-estate",
    dropdown: [
      {
        name: "Featured Projects",
        href: "/real-estate/featured-projects",
      },
      {
        name: "Residential Plots",
        href: "/real-estate/residential-plots",
      },
      {
        name: "Houses & Villas",
        href: "/real-estate/houses-villas",
      },
      {
        name: "Commercial Properties",
        href: "/real-estate/commercial-properties",
      },
      {
        name: "Rent & Lease",
        href: "/real-estate/rent-lease",
      },
    ],
  },
  {
    name: "Local Businesses",
    // Parent link opens the main Local Businesses page
    href: "/local-businesses",
    dropdown: [
      {
        name: "Electronics & Appliances",
        href: "/local-businesses/electronics-appliances",
      },
      {
        name: "Grocery & Daily Needs",
        href: "/local-businesses/grocery-daily-needs",
      },
      {
        name: "Clothing & Fashion",
        href: "/local-businesses/clothing-fashion",
      },
      {
        name: "Restaurants & Cafes",
        href: "/local-businesses/restaurants-cafes",
      },
      {
        name: "Hardware & Electrical",
        href: "/local-businesses/hardware-electrical",
      },
      {
        name: "All Businesses",
        // This opens the separate All Businesses subpage
        href: "/local-businesses/all-businesses",
      },
    ],
  },
  {
    name: "Healthcare",
    href: "/healthcare",
    dropdown: [
      { name: "Hospitals", href: "/healthcare/hospitals" },
      { name: "Doctors & Clinics", href: "/healthcare/doctors-clinics" },
      { name: "Dental Clinics", href: "/healthcare/dental-clinics" },
      { name: "Pathology Labs", href: "/healthcare/pathology-labs" },
      { name: "Pharmacies", href: "/healthcare/pharmacies" },
    ],
  },
  {
    name: "Events & News",
    href: "/events-news",
    dropdown: [
      { name: "Latest Local News", href: "/events-news/local-news" },
      { name: "Community Events", href: "/events-news/community-events" },
      { name: "Festivals", href: "/events-news/festivals" },
      {
        name: "Jobs & Opportunities",
        href: "/events-news/jobs-opportunities",
      },
    ],
  },
  {
    name: "List Your Business",
    href: "/list-your-business",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function closeMobileMenu() {
    setMenuOpen(false);
    setOpenDropdown(null);
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const query = searchQuery.trim();
    if (!query) return;

    window.location.href = `/?q=${encodeURIComponent(query)}`;
  }

  function toggleDropdown(name: string) {
    setOpenDropdown((current) => (current === name ? null : name));
  }

  return (
    <header className="relative z-50 border-b border-[#E8E2D8] bg-[#FFFDF8]/95 shadow-[0_4px_20px_rgba(22,78,82,0.06)] backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-[1800px] items-center gap-2 px-3 py-3 sm:gap-3 sm:px-4 xl:px-6">
        {/* Logo */}
        <a
          href="/"
          onClick={closeMobileMenu}
          className="group flex min-w-0 shrink-0 items-center gap-2"
          aria-label="Jattari Luxe Home"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D9B783] bg-[#164E52] text-sm font-bold text-[#FFFDF8] transition duration-300 group-hover:rotate-6">
            JL
          </div>

          <div className="min-w-0">
            <h1 className="whitespace-nowrap text-base font-bold tracking-wide text-[#164E52]">
              Jattari Luxe
            </h1>
            <p className="whitespace-nowrap text-[8px] font-semibold tracking-[2px] text-[#927B58]">
              ELEVATED LIVING
            </p>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="ml-auto hidden min-w-0 flex-1 items-center justify-end gap-0.5 xl:flex">
          {navItems.map((item) => (
            <div key={item.name} className="relative shrink-0">
              {item.dropdown ? (
                <>
                  <button
                    type="button"
                    aria-expanded={openDropdown === item.name}
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-2 text-xs font-semibold text-[#29443A] transition-all duration-300 hover:bg-[#E8EEE5] hover:text-[#164E52] hover:shadow-sm"
                  >
                    {item.name}
                    <span className="text-[10px]" aria-hidden="true">
                      {openDropdown === item.name ? "⌃" : "⌄"}
                    </span>
                  </button>

                  {openDropdown === item.name && (
                    <div className="absolute left-0 top-full z-50 mt-2 max-h-[70vh] w-64 overflow-y-auto rounded-xl border border-[#E8E2D8] bg-[#FFFDF8] p-2 shadow-[0_12px_35px_rgba(22,78,82,0.15)]">
                      <a
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block rounded-lg border-b border-[#E8E2D8] px-3 py-2.5 text-sm font-semibold text-[#164E52] hover:bg-[#E8EEE5]"
                      >
                        View All {item.name}
                      </a>

                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#344539] transition-all duration-200 hover:translate-x-1 hover:bg-[#E8EEE5] hover:text-[#164E52]"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setOpenDropdown(null)}
                  className="whitespace-nowrap rounded-full px-2 py-2 text-xs font-semibold text-[#29443A] transition-all duration-300 hover:bg-[#E8EEE5] hover:text-[#164E52] hover:shadow-sm"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Search and mobile controls */}
        <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-2">
          {searchOpen && (
            <form
              onSubmit={handleSearch}
              className="absolute left-3 right-3 top-full z-50 mt-2 flex items-center gap-2 rounded-xl border border-[#D9B783] bg-[#FFFDF8] p-3 shadow-lg sm:left-auto sm:right-4 sm:w-72 xl:static xl:mt-0 xl:w-52 xl:rounded-full xl:p-2"
            >
              <input
                autoFocus
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anything..."
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
            </form>
          )}

          {/* Search button */}
          <button
            type="button"
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            onClick={() => {
              setSearchOpen((open) => !open);
              setSearchQuery("");
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
            onClick={() => {
              setMenuOpen((open) => !open);
              setSearchOpen(false);
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
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold text-[#29443A] transition-colors hover:bg-[#E8EEE5]"
                  >
                    <span>{item.name}</span>
                    <span className="ml-3 text-base text-[#927B58]">
                      {openDropdown === item.name ? "−" : "+"}
                    </span>
                  </button>

                  {openDropdown === item.name && (
                    <div className="mb-2 ml-3 border-l-2 border-[#D9B783] pl-3">
                      <a
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block rounded-md px-3 py-2.5 text-sm font-semibold text-[#164E52] hover:bg-[#E8EEE5]"
                      >
                        View All {item.name}
                      </a>

                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={closeMobileMenu}
                          className="block rounded-md px-3 py-2.5 text-sm text-[#63736D] transition-colors hover:bg-[#E8EEE5] hover:text-[#164E52]"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-3 text-sm font-semibold text-[#29443A] transition-colors hover:bg-[#E8EEE5] hover:text-[#164E52]"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
