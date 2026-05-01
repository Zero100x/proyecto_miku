import Link from "next/link";
import PageBackground from "./PageBackground";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { routes } from "@/lib/miku-content";

type RouteInfo = (typeof routes)[number];

const accentClasses = {
  cyan: "text-cyan-200 border-cyan-300/40 bg-cyan-300/10",
  pink: "text-pink-200 border-pink-300/40 bg-pink-300/10",
  yellow: "text-yellow-100 border-yellow-300/40 bg-yellow-300/10",
};

const InfoPage = ({ route }: { route: RouteInfo }) => {
  const Icon = route.icon;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#070814] text-white">
      <PageBackground />
      <SiteHeader />

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">{route.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black leading-none md:text-7xl">{route.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{route.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {route.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className={`border px-4 py-2 text-sm font-semibold ${accentClasses[route.accent]}`}
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-white/10 bg-black/35 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur-md">
            <Icon className="h-12 w-12 text-cyan-200" />
            <div className="mt-8 space-y-5">
              {route.sections.map((section) => (
                <article key={section.title} className="border-t border-white/10 pt-5">
                  <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  <p className="mt-2 leading-7 text-white/70">{section.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-2xl font-bold">Explore more</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {routes
              .filter((item) => item.href !== route.href)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-white/10 bg-white/[0.06] p-5 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">{item.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
                </Link>
              ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default InfoPage;
