"use client";

import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { site } from "@/config/site";
import { navigation } from "@/data/navigation";
import { copy } from "@/data/copy";
import { getTelHref } from "@/lib/whatsapp";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-border/80 bg-background/80 backdrop-blur-md"
            : "border-transparent bg-background/40 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
          <a
            href="#home"
            className="truncate text-lg font-semibold tracking-tight text-primary neon-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-xl"
            aria-label={`${site.name} home`}
          >
            {site.name}
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navigation.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    isActive
                      ? "text-primary"
                      : "text-muted hover:text-white"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              as="a"
              href={getTelHref()}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              aria-label={copy.nav.callNow}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {copy.nav.callNow}
            </Button>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-border p-2 text-white hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
              aria-label={copy.nav.openMenu}
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} activeId={activeId} />
    </>
  );
}
