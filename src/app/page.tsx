import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import EventDetails from "../components/EventDetails";
import News from "../components/News";
import PageBackground from "../components/PageBackground";
import PickUp from "../components/PickUp";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { routes, stats, timeline } from "@/lib/miku-content";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#070814] text-white">
      <PageBackground />
      <SiteHeader />

      <main className="relative z-10">
        <section className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-200">Hatsune Miku archive</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-none md:text-7xl">
              Magical Mirai and the world around Miku
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Explore Hatsune Miku, the Magical Mirai event, and the wider Vocaloid culture through a small fan-made guide built for the web.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/hatsune-miku"
                className="inline-flex items-center gap-2 bg-cyan-300 px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-[#06111d] transition hover:bg-cyan-200"
              >
                Start exploring <ArrowRight size={17} />
              </Link>
              <Link
                href="/magical-mirai"
                className="inline-flex items-center gap-2 border border-pink-300/50 px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-pink-100 transition hover:bg-pink-300/10"
              >
                Event info
              </Link>
            </div>
          </div>

          <div className="border border-white/10 bg-black/35 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-md">
            <div className="border border-cyan-300/25 bg-cyan-300/10 p-5">
              <CalendarDays className="h-10 w-10 text-cyan-200" />
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-pink-200">Featured event</p>
              <h2 className="mt-3 text-4xl font-black">Magical Mirai 2019</h2>
              <p className="mt-4 leading-7 text-white/72">
                A concert and exhibition atmosphere focused on music, visuals, community, and the creative spark around Hatsune Miku.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div key={stat.label} className="border border-white/10 bg-white/[0.06] p-3">
                    <Icon className="h-5 w-5 text-cyan-200" />
                    <p className="mt-3 text-[0.68rem] uppercase tracking-[0.18em] text-white/45">{stat.label}</p>
                    <p className="mt-1 text-sm font-bold">{stat.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">Three paths</p>
              <h2 className="mt-3 text-4xl font-black">Choose what to explore</h2>
            </div>
            <p className="max-w-xl leading-7 text-white/62">
              Each path is a separate page with context, highlights, and related information so the site feels like more than a single poster.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {routes.map((route) => {
              const Icon = route.icon;

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className="group border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
                >
                  <Icon className="h-10 w-10 text-cyan-200" />
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.28em] text-pink-200">{route.eyebrow}</p>
                  <h3 className="mt-3 text-3xl font-black">{route.title}</h3>
                  <p className="mt-4 min-h-28 leading-7 text-white/68">{route.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                    Open path <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">Timeline</p>
            <h2 className="mt-3 text-4xl font-black">From software to stage culture</h2>
          </div>
          <div className="space-y-4">
            {timeline.map((item) => (
              <article key={item.year} className="grid gap-4 border border-white/10 bg-black/30 p-5 backdrop-blur-sm md:grid-cols-[120px_1fr]">
                <p className="text-2xl font-black text-cyan-200">{item.year}</p>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-white/67">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <EventDetails />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <PickUp />
            <News />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
