"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  MapPin,
  Sparkles,
  Layers,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { AMENITIES, Amenity } from "@/data/amenities";

const CATEGORIES = [
  { id: "todos", label: "Todos os Espaços" },
  { id: "lazer", label: "Lazer e Diversão" },
  { id: "convivencia", label: "Convivência" },
  { id: "conveniencia", label: "Conveniência" },
  { id: "bem-estar", label: "Bem-estar" },
];

export default function Amenities() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [showDeckPlan, setShowDeckPlan] = useState(false);

  // Filter amenities with images for the primary visual gallery
  const visualAmenities = AMENITIES.filter((a) => a.image);

  const filteredAmenities =
    selectedCategory === "todos"
      ? visualAmenities
      : visualAmenities.filter((a) => a.category === selectedCategory);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Keep index within bounds when category changes
  const activeAmenity: Amenity =
    filteredAmenities[currentIndex] || filteredAmenities[0] || visualAmenities[0];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredAmenities.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === filteredAmenities.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="lazer" className="py-20 lg:py-28 bg-ares-offwhite relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experiência de Lazer"
          title="Mais possibilidades para viver os melhores momentos."
          subtitle="Espaços para relaxar, se divertir, trabalhar e compartilhar experiências sem sair do condomínio."
          align="center"
        />

        {/* View Toggle: Gallery vs. 3º Pavimento Masterplan */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setShowDeckPlan(false)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              !showDeckPlan
                ? "bg-ares-deep text-white shadow-md"
                : "bg-white text-ares-slate hover:bg-ares-mist border border-ares-border"
            }`}
          >
            <Sparkles className="w-4 h-4 text-ares-gold" />
            <span>Galeria Fotográfica de Ambientes</span>
          </button>

          <button
            onClick={() => setShowDeckPlan(true)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              showDeckPlan
                ? "bg-ares-deep text-white shadow-md"
                : "bg-white text-ares-slate hover:bg-ares-mist border border-ares-border"
            }`}
          >
            <Layers className="w-4 h-4 text-ares-gold" />
            <span>Mapa do Lazer (3º Pavimento)</span>
          </button>
        </div>

        {!showDeckPlan ? (
          <>
            {/* Category Filter Tabs */}
            <div className="mt-8 flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setCurrentIndex(0);
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? "bg-ares-architectural text-white shadow-sm"
                      : "bg-white/80 text-ares-muted hover:text-ares-deep hover:bg-white border border-ares-border/60"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Featured Image Viewer */}
            <div className="mt-8 relative bg-white rounded-3xl p-3 sm:p-4 shadow-xl shadow-ares-deep/5 border border-ares-border">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/8] w-full rounded-2xl overflow-hidden bg-ares-dark">
                {activeAmenity?.image && (
                  <Image
                    src={activeAmenity.image}
                    alt={activeAmenity.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 1200px"
                    className="object-cover transition-all duration-500"
                  />
                )}

                {/* Overlaid Badges and Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider bg-black/40 backdrop-blur-md text-white border border-white/20">
                      <MapPin className="w-3 h-3 text-ares-gold" />
                      {activeAmenity?.floor}
                    </span>

                    <button
                      onClick={() => setLightboxOpen(true)}
                      className="p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
                      aria-label="Ampliar imagem em tela cheia"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="max-w-2xl">
                    <span className="text-xs uppercase tracking-widest text-ares-gold font-medium">
                      {activeAmenity?.categoryLabel}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-4xl text-white font-medium mt-1">
                      {activeAmenity?.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-base text-white/80 font-light max-w-xl">
                      {activeAmenity?.description}
                    </p>
                  </div>
                </div>

                {/* Navigation arrows */}
                {filteredAmenities.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-95"
                      aria-label="Imagem anterior"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                      onClick={handleNext}
                      className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-95"
                      aria-label="Próxima imagem"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Strip */}
              <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-2 pt-1 scrollbar-thin">
                {filteredAmenities.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative shrink-0 w-24 sm:w-32 aspect-[16/10] rounded-xl overflow-hidden transition-all duration-200 border-2 ${
                      index === currentIndex
                        ? "border-ares-architectural ring-2 ring-ares-architectural/30 scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="128px"
                        className="object-cover"
                      />
                    )}
                    <span className="sr-only">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Complete Amenity Grid Checklist */}
            <div className="mt-14 pt-10 border-t border-ares-border">
              <h4 className="font-serif text-xl sm:text-2xl text-ares-deep text-center mb-8">
                Infraestrutura Completa de Convivência e Lazer
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {AMENITIES.map((amenity) => (
                  <div
                    key={amenity.id}
                    className="p-4 rounded-xl bg-white border border-ares-border/70 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-ares-architectural font-semibold">
                        {amenity.floor}
                      </span>
                      <h5 className="font-serif text-base text-ares-deep font-medium mt-1">
                        {amenity.name}
                      </h5>
                      <p className="text-xs text-ares-muted font-light mt-1 line-clamp-2">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Deck Plan 3º Pavimento Recreation View */
          <div className="mt-8 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-ares-border">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-ares-architectural font-semibold">
                Implantação 3º Pavimento
              </span>
              <h3 className="font-serif text-3xl text-ares-deep mt-1 font-medium">
                Distribuição das Áreas de Lazer e Convivência
              </h3>
              <p className="text-sm text-ares-muted mt-2 font-light">
                O Residencial Ares conta com um clube de lazer elevado no 3º pavimento, garantindo
                privacidade, sol o dia todo e vista panorâmica para Canoas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Technical Drawing */}
              <div className="lg:col-span-8 relative aspect-[16/9] rounded-2xl overflow-hidden border border-ares-border bg-slate-50">
                <Image
                  src="/images/plans/implantacao-lazer-3-pavimento.jpg"
                  alt="Planta de Implantação do Lazer no 3º Pavimento"
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-contain"
                />
              </div>

              {/* Verified Legend */}
              <div className="lg:col-span-4 bg-ares-offwhite p-6 rounded-2xl border border-ares-border space-y-4">
                <h4 className="font-serif text-lg font-medium text-ares-deep border-b border-ares-border pb-3">
                  Legenda dos Ambientes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 max-h-[420px] overflow-y-auto pr-2 scrollbar-thin text-xs text-ares-slate">
                  {[
                    "1. Piscinas (Adulto e Infantil)",
                    "2. Coworking",
                    "3. Marketplace",
                    "4. Salão de Festas",
                    "5. Cantinho Kids",
                    "6. Brinquedoteca",
                    "7. Sala de Jogos",
                    "8. Espaço Gourmet",
                    "9. Encontro & Encantos",
                    "10. Lounge Happy Hour",
                    "11. É Hora do Chimarrão",
                    "12. Playground Infantil",
                    "13. Meus Temperos (Horta)",
                    "14. Quadra Esportiva Infantil (Térreo)",
                    "15. Academia ao Ar Livre (Térreo)",
                    "16. Pet Place (Térreo)",
                    "17. Bicicletário (Térreo)",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white border border-ares-border/50"
                    >
                      <span className="w-2 h-2 rounded-full bg-ares-architectural" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && activeAmenity?.image && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8 animate-fadeIn">
          <div className="flex items-center justify-between text-white">
            <div>
              <span className="text-xs uppercase tracking-widest text-ares-gold">
                {activeAmenity.categoryLabel} · {activeAmenity.floor}
              </span>
              <h4 className="font-serif text-2xl font-medium">{activeAmenity.name}</h4>
            </div>

            <button
              onClick={() => setLightboxOpen(false)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Fechar ampliação"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative flex-1 w-full my-4">
            <Image
              src={activeAmenity.image}
              alt={activeAmenity.name}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="text-center text-white/70 text-xs sm:text-sm font-light">
            <p>{activeAmenity.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
