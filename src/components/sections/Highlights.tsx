"use client";

import React from "react";
import {
  Flame,
  Sun,
  Layers,
  Wind,
  Droplet,
  Gauge,
  Car,
  ArrowUpDown,
  Trees,
  Bath,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { HIGHLIGHTS } from "@/data/property";

const ICON_MAP: Record<string, React.ElementType> = {
  Flame,
  Sun,
  Layers,
  Wind,
  Droplet,
  Gauge,
  Car,
  ArrowUpDown,
  Trees,
  Bath,
};

export default function Highlights() {
  const generalHighlights = HIGHLIGHTS.filter((h) => h.category === "geral");
  const specificHighlights = HIGHLIGHTS.filter((h) => h.category === "especifico");

  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Diferenciais dos Apartamentos"
          title="Detalhes que fazem a diferença todos os dias."
          subtitle="Soluções que combinam conforto, funcionalidade e praticidade em cada ambiente do Residencial Ares."
          align="center"
        />

        {/* General Highlights Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {generalHighlights.map((item) => {
            const Icon = ICON_MAP[item.iconName] || Sparkles;
            return (
              <div
                key={item.id}
                className="group p-6 sm:p-7 rounded-2xl bg-ares-offwhite/70 hover:bg-ares-mist/60 border border-ares-border/60 hover:border-ares-architectural/30 transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:shadow-ares-deep/5"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-ares-architectural shadow-sm border border-ares-border/50 group-hover:scale-110 group-hover:bg-ares-architectural group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-medium text-ares-deep mt-5 mb-2 group-hover:text-ares-architectural transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-ares-muted font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-ares-border/40 flex items-center text-xs text-ares-slate/60 font-medium uppercase tracking-wider">
                  <span>Diferencial Padrão</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Specific / Unit-Exclusive Highlights Banner */}
        <div className="mt-12 pt-10 border-t border-ares-border/80">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-ares-architectural font-semibold">
              Personalização & Exclusividade
            </span>
            <h3 className="font-serif text-2xl text-ares-deep mt-1">
              Diferenciais em Unidades Selecionadas
            </h3>
            <p className="text-xs text-ares-muted font-light mt-2">
              Características exclusivas para configurações específicas do empreendimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specificHighlights.map((item) => {
              const Icon = ICON_MAP[item.iconName] || Sparkles;
              return (
                <div
                  key={item.id}
                  className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-ares-deep to-ares-dark text-white shadow-xl overflow-hidden border border-white/10"
                >
                  {/* Subtle background glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-ares-gold/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-ares-gold">
                      <Icon className="w-6 h-6" />
                    </div>
                    {item.badge && (
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-ares-gold/20 text-ares-gold border border-ares-gold/30">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-2xl font-medium mt-5 mb-2 text-white">
                    {item.title}
                  </h4>

                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/60 font-light italic">
                    {item.id === "apartamentos-garden"
                      ? "*Disponível em unidades exclusivas no 3º pavimento com amplos terraços."
                      : "*Infraestrutura pronta exclusiva para instalação de ofurô nas unidades 302, 309 e 310."}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
