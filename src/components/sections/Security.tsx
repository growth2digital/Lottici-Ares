"use client";

import React from "react";
import Image from "next/image";
import {
  Video,
  ScanFace,
  Gauge,
  Car,
  ArrowUpDown,
  ShieldCheck,
  Info,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Security() {
  const features = [
    {
      icon: Video,
      title: "Sete câmeras no térreo",
      description: "Circuito de vigilância com 7 câmeras distribuídas estrategicamente nas áreas térreas.",
    },
    {
      icon: ScanFace,
      title: "Reconhecimento facial",
      description: "Equipamentos modernos para identificação biométrica facial no acesso de pedestres.",
    },
    {
      icon: Gauge,
      title: "Medidores individuais",
      description: "Controle individualizado de consumo de água, gás e energia elétrica.",
    },
    {
      icon: Car,
      title: "Box privativo coberto",
      description: "Garagens protegidas com opções de vagas simples, duplas e estendidas.",
    },
    {
      icon: ArrowUpDown,
      title: "Dois elevadores",
      description: "Mobilidade e circulação vertical prática e ágil em todos os pavimentos.",
    },
    {
      icon: ShieldCheck,
      title: "Guarita com visibilidade",
      description: "Controle visual de entrada e saída de moradores, prestadores e encomendas.",
    },
  ];

  return (
    <section id="seguranca" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Segurança e Conveniência"
          title="Mais praticidade para sua rotina."
          subtitle="Recursos tecnológicos e soluções construtivas para tornar o seu dia a dia mais tranquilo e organizado."
          align="center"
        />

        {/* Feature Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-ares-offwhite/80 border border-ares-border/70 hover:border-ares-architectural/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-ares-border flex items-center justify-center text-ares-architectural shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-medium text-ares-deep mt-4 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-ares-muted font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Legal & Contractual Note */}
        <div className="mt-12 max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-ares-mist/60 border border-ares-architectural/20 flex items-start gap-4">
          <Info className="w-5 h-5 text-ares-architectural shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-ares-slate font-light leading-relaxed">
            <span className="font-medium text-ares-deep block mb-1">
              Informação sobre os equipamentos de segurança:
            </span>
            A construtora informa que os equipamentos de monitoramento e controle de acesso são
            disponibilizados em comodato, sem custo para o condomínio, pelo prazo de dois anos a
            partir da entrega.
          </div>
        </div>
      </div>
    </section>
  );
}
