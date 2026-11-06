import { site } from "@/config/site";
import { navigation } from "@/data/navigation";
import { copy } from "@/data/copy";
import { getTelHref } from "@/lib/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-xl font-semibold text-primary neon-text">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm text-muted">{site.description}</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
            Navigate
          </p>
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </p>
          <a
            href={getTelHref()}
            className="block text-sm text-muted transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {site.phone}
          </a>
          <p className="mt-2 text-sm text-muted">{site.address}</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {site.name}. {copy.footer.rights}
          </p>
          <p>{site.city}, {site.country}</p>
        </div>
      </div>
    </footer>
  );
}
