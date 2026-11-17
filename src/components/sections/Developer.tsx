"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Award, ShieldCheck, Clock } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";

export default function Developer() {
  return (
    <section id="construtora" className="py-20 lg:py-28 bg-ares-offwhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-ares-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Brand Identity & Badge */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
              <div className="relative h-14 w-44 sm:h-16 sm:w-52">
                <Image
                  src="/images/branding/logo-lottici.svg"
                  alt="Lottici Incorporação e Construção"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ares-mist text-ares-architectural text-xs font-semibold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                Mais de 4 décadas de história
              </div>

              <p className="text-sm sm:text-base text-ares-muted font-light leading-relaxed">
                Tradição, responsabilidade construtiva e respeito em cada projeto desenvolvido em
                Canoas e no Rio Grande do Sul.
              </p>

              <div className="pt-2">
                <a
                  href={SITE_CONFIG.lotticiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ares-deep hover:bg-ares-architectural text-white text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-ares-deep/30"
                >
                  <span>Conheça a Lottici</span>
                  <ExternalLink className="w-4 h-4 text-ares-gold" />
                </a>
              </div>
            </div>

            {/* Right: Institutional Story */}
            <div className="lg:col-span-7 space-y-6 border-t lg:border-t-0 lg:border-l border-ares-border pt-8 lg:pt-0 lg:pl-12">
              <span className="text-xs uppercase tracking-widest text-ares-gold font-semibold">
                Sobre a Construtora
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-ares-deep font-medium leading-snug">
                Experiência para construir o seu próximo capítulo.
              </h3>

              <p className="text-base text-ares-slate font-light leading-relaxed">
                A Lottici é uma construtora e incorporadora sediada em Canoas, com mais de quatro
                décadas de atuação divulgadas em seu site institucional.
              </p>

              <p className="text-sm text-ares-muted font-light leading-relaxed">
                Sua sólida trajetória reúne empreendimentos residenciais e soluções voltadas ao
                conforto, à funcionalidade e à qualidade de vida dos seus moradores, valorizando a
                arquitetura e o crescimento consciente da região.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-ares-offwhite border border-ares-border/60">
                  <Award className="w-5 h-5 text-ares-architectural mb-2" />
                  <h4 className="font-serif text-base font-medium text-ares-deep">
                    Solidez Construtiva
                  </h4>
                  <p className="text-xs text-ares-muted mt-1 font-light">
                    Obras estruturadas com materiais de alta durabilidade e padrão técnico rigoroso.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-ares-offwhite border border-ares-border/60">
                  <ShieldCheck className="w-5 h-5 text-ares-architectural mb-2" />
                  <h4 className="font-serif text-base font-medium text-ares-deep">
                    Compromisso Legal
                  </h4>
                  <p className="text-xs text-ares-muted mt-1 font-light">
                    Incorporações registradas e respeito absoluto aos prazos e memoriais descritivos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
