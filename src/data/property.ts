export interface Highlight {
  id: string;
  title: string;
  description: string;
  category: "geral" | "especifico";
  badge?: string;
  iconName: string;
}

export const HIGHLIGHTS: Highlight[] = [
  {
    id: "churrasqueira",
    title: "Churrasqueira a carvão",
    description: "Espaço gourmet integrado em todos os apartamentos para celebrar momentos especiais.",
    category: "geral",
    iconName: "Flame",
  },
  {
    id: "sacada",
    title: "Sacada privativa",
    description: "Mais ventilação, iluminação natural e vista privilegiada para o seu dia a dia.",
    category: "geral",
    iconName: "Sun",
  },
  {
    id: "rebaixo-gesso",
    title: "Rebaixo de gesso",
    description: "Acabamento em gesso nos banheiros e cozinha, permitindo projetos luminotécnicos refinados.",
    category: "geral",
    iconName: "Layers",
  },
  {
    id: "espera-split",
    title: "Espera seca para split",
    description: "Infraestrutura pronta para instalação de ar-condicionado com comodidade e praticidade.",
    category: "geral",
    iconName: "Wind",
  },
  {
    id: "agua-quente",
    title: "Água quente em todos os pontos",
    description: "Conforto térmico planejado na cozinha e banheiros conforme especificação do projeto.",
    category: "geral",
    iconName: "Droplet",
  },
  {
    id: "medidores-individuais",
    title: "Medidores individuais",
    description: "Consumo individualizado de água, energia elétrica e gás com autonomia e economia.",
    category: "geral",
    iconName: "Gauge",
  },
  {
    id: "box-coberto",
    title: "Box privativo coberto",
    description: "Estacionamento seguro com opções de vagas simples, duplas e estendidas.",
    category: "geral",
    iconName: "Car",
  },
  {
    id: "elevadores",
    title: "Dois elevadores modernos",
    description: "Agilidade, conforto e acessibilidade vertical para todas as torres e pavimentos.",
    category: "geral",
    iconName: "ArrowUpDown",
  },
  {
    id: "apartamentos-garden",
    title: "Apartamentos Garden",
    description: "Terraços exclusivos ao ar livre para quem valoriza espaço externo. Unidades selecionadas no 3º pavimento.",
    category: "especifico",
    badge: "Exclusivo 3º Pavimento",
    iconName: "Trees",
  },
  {
    id: "espera-ofuro",
    title: "Espera para ofurô",
    description: "Infraestrutura para instalação de ofurô privativo nas unidades selecionadas 302, 309 e 310.",
    category: "especifico",
    badge: "Unidades 302, 309 e 310",
    iconName: "Bath",
  },
];

export const SECURITY_FEATURES = [
  {
    title: "Reconhecimento Facial",
    description: "Acesso de pedestres com tecnologia de ponta para entrada rápida e controlada.",
    icon: "ScanFace",
  },
  {
    title: "Monitoramento por Câmeras",
    description: "Sete câmeras distribuídas estrategicamente nas áreas do térreo para vigilância contínua.",
    icon: "Video",
  },
  {
    title: "Guarita de Acesso",
    description: "Portaria com visibilidade estratégica no acesso principal de pedestres e moradores.",
    icon: "ShieldCheck",
  },
  {
    title: "Controle de Vagas Cobertas",
    description: "Garagens protegidas no subsolo, térreo e 2º pavimento com portões automatizados.",
    icon: "Lock",
  },
];

export const FAQS = [
  {
    question: "Onde fica o Residencial Ares?",
    answer:
      "O empreendimento fica no Centro de Canoas/RS, em localização privilegiada na Rua Brasil esquina com a Rua Carlos Drummond de Andrade, com fácil acesso a todos os serviços da cidade.",
  },
  {
    question: "Quais são as metragens dos apartamentos?",
    answer:
      "As metragens privativas divulgadas pela construtora são 54,39 m² (Tipo A), 57,76 m² (Tipo B), 60,73 m² (Tipo C) e 68,54 m² (Tipo D).",
  },
  {
    question: "Quantos dormitórios possuem os apartamentos?",
    answer:
      "O Ares oferece opções inteligentes de 2 dormitórios (com ou sem suíte) e 3 dormitórios com suíte (com opção exclusiva de living estendido).",
  },
  {
    question: "Os apartamentos possuem churrasqueira?",
    answer:
      "Sim. A churrasqueira a carvão e a sacada privativa estão entre os diferenciais informados oficialmente pela construtora para todas as unidades.",
  },
  {
    question: "O condomínio possui piscina?",
    answer:
      "Sim. O complexo de piscinas (adulto e infantil) faz parte da infraestrutura de lazer divulgada, localizado no 3º pavimento do empreendimento.",
  },
  {
    question: "Existem apartamentos garden?",
    answer:
      "Sim. Há opções exclusivas de apartamentos garden com amplos terraços privativos em unidades específicas localizadas no 3º pavimento.",
  },
  {
    question: "O Ares possui coworking?",
    answer:
      "Sim. Um coworking moderno e equipado faz parte da infraestrutura do 3º pavimento para você trabalhar com foco e conforto sem sair de casa.",
  },
  {
    question: "Existem apartamentos com espera para ofurô?",
    answer:
      "Sim. Conforme divulgado pela construtora, a espera para ofurô é um diferencial exclusivo das unidades específicas 302, 309 e 310.",
  },
  {
    question: "Como consultar preços e disponibilidade?",
    answer:
      "Entre em contato direto com a equipe comercial da Lottici pelo WhatsApp ou telefone para receber a tabela atualizada de valores e unidades disponíveis.",
  },
];
