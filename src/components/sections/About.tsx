"use client";

import React from "react";
import Image from "next/image";
import { BedDouble, Maximize2, Flame, Sun, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

export default function About() {
  const highlights = [
    {
      icon: BedDouble,
      title: "2 e 3 dormitórios",
      desc: "Opções planejadas para solteiros, casais e famílias em crescimento.",
    },
    {
      icon: Maximize2,
      title: "Quatro metragens privativas",
      desc: "Plantas de 54,39 m², 57,76 m², 60,73 m² e 68,54 m².",
    },
    {
      icon: Sun,
      title: "Sacada privativa",
      desc: "Iluminação natural, ventilação e amplitude em todas as unidades.",
    },
    {
      icon: Flame,
      title: "Churrasqueira a carvão",
      desc: "Tradição e aconchego garantidos no seu próprio apartamento.",
    },
    {
      icon: MapPin,
      title: "Centro de Canoas",
      desc: "Mobilidade, comércio e conveniência a poucos passos de você.",
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-ares-offwhite relative overflow-hidden">
      {/* Decorative architectural background element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-ares-mist/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="O Residencial Ares"
          title="Um novo significado para viver bem."
          subtitle="O encontro perfeito entre sofisticação contemporânea, localização estratégica e espaços planejados para cada momento da sua vida."
          align="center"
        />

        {/* Main Editorial Grid: Image + Story */}
        <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Render */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-ares-deep/10">
              <Image
                src="/images/amenities/encanto-e-encontros.jpg"
                alt="Espaço Encanto e Encontros no Residencial Ares"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs uppercase tracking-widest text-ares-gold font-medium">
                  Área Comum Exclusiva
                </span>
                <p className="font-serif text-lg">Espaço Encanto & Encontros · 3º Pavimento</p>
              </div>
            </div>

            {/* Overlapping small badge card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-ares-deep text-white p-5 rounded-2xl shadow-xl border border-white/10 max-w-[240px] flex-col gap-1">
              <span className="text-ares-gold font-serif text-2xl font-semibold leading-none">
                4+ Décadas
              </span>
              <p className="text-xs text-white/80 font-light mt-1">
                De tradição e solidez construtiva da Lottici em Canoas.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text & Values */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="font-serif text-2xl sm:text-3xl text-ares-deep font-normal leading-snug">
              Conforto de estar em casa e a liberdade de viver uma estrutura completa.
            </h3>

            <p className="text-base sm:text-lg text-ares-slate font-light leading-relaxed">
              O Residencial Ares foi pensado para reunir o conforto de estar em casa e a
              liberdade de aproveitar uma estrutura de lazer e convivência planejada para
              diferentes momentos da vida.
            </p>

            <p className="text-sm sm:text-base text-ares-muted font-light leading-relaxed">
              Com opções de apartamentos de 2 ou 3 dormitórios, o empreendimento oferece soluções
              funcionais e ambientes que valorizam o cotidiano. Cada detalhe arquitetônico foi
              desenhado para valorizar a convivência e o descanso na melhor região de Canoas.
            </p>

            <div className="pt-4 space-y-3">
              {[
                "Apartamentos com 54,39 m², 57,76 m², 60,73 m² e 68,54 m²",
                "Opções com suíte e living integrado com ventilação natural",
                "Infraestrutura de lazer completa suspensa no 3º pavimento",
                "Exclusividade de apartamentos Garden com terraços privativos",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ares-architectural shrink-0" />
                  <span className="text-sm text-ares-slate font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Ribbon Bar */}
        <div className="mt-16 sm:mt-20 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-ares-deep/5 border border-ares-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-start gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-ares-mist flex items-center justify-center text-ares-architectural">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-medium text-ares-deep">
                    {item.title}
                  </h4>
                  <p className="text-xs text-ares-muted font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
