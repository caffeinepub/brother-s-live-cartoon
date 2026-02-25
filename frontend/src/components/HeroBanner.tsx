import { Sparkles } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl shadow-2xl">
      <img
        src="/assets/generated/hero-banner.dim_1200x400.png"
        alt="Live Cartoon Characters at Birthday Party"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
        <div className="p-6 md:p-8 w-full">
          <div className="flex items-center justify-center gap-3 text-white">
            <Sparkles className="w-8 h-8 text-accent animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-center drop-shadow-lg">
              Live Cartoon Characters
            </h2>
            <Sparkles className="w-8 h-8 text-accent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
