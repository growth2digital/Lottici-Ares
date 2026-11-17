"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { INTERIORS, InteriorSpace } from "@/data/interiors";

export default function Interiors() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeSpace: InteriorSpace = INTERIORS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? INTERIORS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === INTERIORS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="interiores" className="py-20 lg:py-28 bg-ares-deep text-white relative overflow-hidden">
      {/* Background Architectural Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(56,86,117,0.4),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Ambientes Internos"
          title="Um lar para todos os seus momentos."
          subtitle="Ambientes planejados para valorizar a convivência, o descanso e os pequenos momentos que tornam a vida especial."
          align="center"
          theme="dark"
        />

        {/* Big Editorial Presentation */}
        <div className="mt-14 lg:mt-18 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Visual Display (8 Cols) */}
          <div className="lg:col-span-8 relative">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-white/15 bg-black/40 shadow-2xl">
              <Image
                src={activeSpace.image}
                alt={activeSpace.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 850px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Tag and Zoom overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 p-5 sm:p-7 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-white/15 backdrop-blur-md text-white border border-white/20">
                    <Sparkles className="w-3 h-3 text-ares-gold" />
                    {activeSpace.tag}
                  </span>

                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
                    aria-label="Ampliar imagem do ambiente"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="lg:hidden">
                  <h3 className="font-serif text-2xl font-medium text-white">{activeSpace.title}</h3>
                  <p className="text-xs text-white/80 font-light mt-1">{activeSpace.subtitle}</p>
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-95"
                aria-label="Ambiente anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-95"
                aria-label="Próximo ambiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Editorial Details & Room Switcher (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="hidden lg:block space-y-3">
              <span className="text-xs uppercase tracking-widest text-ares-gold font-medium">
                {activeSpace.tag}
              </span>
              <h3 className="font-serif text-3xl font-medium text-white">
                {activeSpace.title}
              </h3>
              <p className="text-sm text-ares-gold/90 font-normal">
                {activeSpace.subtitle}
              </p>
              <p className="text-sm text-white/80 font-light leading-relaxed pt-2">
                {activeSpace.description}
              </p>
            </div>

            {/* Thumbnails Selection */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-white/50 font-medium">
                Selecione o Ambiente
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-2 gap-2.5">
                {INTERIORS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`p-2 rounded-xl text-left transition-all duration-200 border flex items-center gap-2.5 ${
                      idx === activeIndex
                        ? "bg-white/15 border-ares-gold shadow-md"
                        : "bg-white/5 border-white/10 hover:bg-white/10 text-white/70"
                    }`}
                  >
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-white/10">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-medium text-white truncate">{item.title}</p>
                      <p className="text-[10px] text-white/60 truncate">{item.tag}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8 animate-fadeIn">
          <div className="flex items-center justify-between text-white">
            <div>
              <span className="text-xs uppercase tracking-widest text-ares-gold">
                {activeSpace.tag}
              </span>
              <h4 className="font-serif text-2xl font-medium">{activeSpace.title}</h4>
            </div>

            <button
              onClick={() => setLightboxOpen(false)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Fechar visualização"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative flex-1 w-full my-4">
            <Image
              src={activeSpace.image}
              alt={activeSpace.title}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="text-center text-white/80 text-xs sm:text-sm font-light max-w-xl mx-auto">
            <p>{activeSpace.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
