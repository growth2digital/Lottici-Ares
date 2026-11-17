"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ExternalLink, RotateCw, Sparkles, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";

export default function VirtualTour() {
  const [isLoaded, setIsLoaded] = useState(false);
  const tourUrl = SITE_CONFIG.referenceUrl;

  return (
    <section id="tour" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Passeio Virtual 360°"
          title="Explore o Ares de uma nova perspectiva."
          subtitle="Conheça mais detalhes do empreendimento por meio de uma experiência imersiva e interativa."
          align="center"
        />

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-ares-deep/15 bg-ares-dark">
            {!isLoaded ? (
              // Teaser / On-Demand Preview Cover
              <div className="relative w-full h-full">
                <Image
                  src="/images/decorado/LIVING-ESTENDIDO.png"
                  alt="Prévia do Passeio Virtual do Residencial Ares"
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  className="object-cover"
                />

                {/* Dark overlay with CTA */}
                <div className="absolute inset-0 bg-gradient-to-t from-ares-deep/95 via-ares-deep/70 to-black/40 flex flex-col items-center justify-center p-6 text-center text-white">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-ares-gold/90 text-ares-deep flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform duration-300 mb-6 cursor-pointer group">
                    <Play
                      onClick={() => setIsLoaded(true)}
                      className="w-7 h-7 sm:w-8 sm:h-8 fill-ares-deep translate-x-0.5 group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <span className="text-xs uppercase tracking-widest text-ares-gold font-medium mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Experiência 360° Interativa
                  </span>

                  <h3 className="font-serif text-2xl sm:text-4xl font-medium max-w-xl">
                    Tour Virtual pelo Apartamento e Áreas Comuns
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-white/80 max-w-md font-light">
                    Navegue pelos ambientes planejados do Residencial Ares no conforto da sua tela.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => setIsLoaded(true)}
                      className="px-6 py-3 rounded-full bg-ares-architectural hover:bg-ares-deep text-white font-medium text-xs sm:text-sm uppercase tracking-wider border border-white/20 shadow-md transition-all flex items-center gap-2"
                    >
                      <RotateCw className="w-4 h-4 text-ares-gold" />
                      <span>Iniciar passeio virtual</span>
                    </button>

                    <a
                      href={tourUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm tracking-wide border border-white/15 transition-all flex items-center gap-2"
                    >
                      <span>Abrir na página oficial</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              // Embedded Frame (Loaded On Demand to ensure high performance and no CLS)
              <div className="relative w-full h-full flex flex-col bg-slate-900">
                <iframe
                  src={tourUrl}
                  title="Passeio Virtual Oficial Residencial Ares"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />

                {/* External fallback banner at bottom */}
                <div className="absolute bottom-3 right-3 z-10 bg-ares-deep/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs text-white flex items-center gap-2">
                  <span>Visualização externa:</span>
                  <a
                    href={tourUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ares-gold hover:underline flex items-center gap-1"
                  >
                    <span>Abrir em nova aba</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-ares-muted text-center font-light">
            <AlertCircle className="w-3.5 h-3.5 shrink-0 text-ares-architectural" />
            <span>
              O tour virtual oficial é fornecido pela plataforma institucional da Lottici Construtora.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
