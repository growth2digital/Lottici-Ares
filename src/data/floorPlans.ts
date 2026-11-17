export interface FloorPlan {
  id: string;
  typeLetter: string;
  name: string;
  badge?: string;
  area: string;
  areaNumber: number;
  bedrooms: string;
  bedroomsCount: number;
  suitesCount: number;
  position: string;
  units: string;
  image: string;
  description: string;
  highlights: string[];
  roomDetails?: { name: string; size: string }[];
}

export const FLOOR_PLANS: FloorPlan[] = [
  {
    id: "tipo-a",
    typeLetter: "A",
    name: "Planta Tipo A",
    area: "54,39 m²",
    areaNumber: 54.39,
    bedrooms: "2 dormitórios",
    bedroomsCount: 2,
    suitesCount: 0,
    position: "Meio",
    units: "Apartamentos 03, 04, 07 e 08",
    image: "/images/plans/planta-tipo-a-54m2.png",
    description:
      "Planta funcional e bem distribuída, com living integrado, sacada privativa com churrasqueira e 2 dormitórios com ótima iluminação natural.",
    highlights: [
      "2 dormitórios confortáveis",
      "Living integrado de 15,36 m²",
      "Sacada com churrasqueira a carvão (3,55 m²)",
      "Cozinha e área de serviço integradas",
      "Rebaixo de gesso e espera para split",
    ],
    roomDetails: [
      { name: "Living Integrado", size: "15,36 m²" },
      { name: "Dormitório 01 (Casal)", size: "10,51 m²" },
      { name: "Dormitório 02", size: "6,55 m²" },
      { name: "Cozinha / Área de Serviço", size: "6,35 m²" },
      { name: "Sacada com Churrasqueira", size: "3,55 m²" },
      { name: "Banheiro Social", size: "2,87 m²" },
      { name: "Circulação", size: "1,02 m²" },
    ],
  },
  {
    id: "tipo-b",
    typeLetter: "B",
    name: "Planta Tipo B",
    area: "57,76 m²",
    areaNumber: 57.76,
    bedrooms: "2 dormitórios (1 suíte)",
    bedroomsCount: 2,
    suitesCount: 1,
    position: "Meio",
    units: "Apartamentos 05 e 06",
    image: "/images/plans/planta-tipo-b-57m2.png",
    description:
      "Configuração inteligente de 2 dormitórios com suíte privativa, 2 banheiros completos, living integrado à sacada e churrasqueira.",
    highlights: [
      "Suíte privativa completa",
      "2 banheiros (suíte + social)",
      "Living espaçoso com sacada",
      "Churrasqueira privativa a carvão",
      "Excelente ventilação cruzada",
    ],
    roomDetails: [
      { name: "Living Integrado", size: "14,76 m²" },
      { name: "Suíte do Casal", size: "10,51 m²" },
      { name: "Banheiro da Suíte", size: "2,81 m²" },
      { name: "Dormitório 02", size: "6,55 m²" },
      { name: "Cozinha / Área de Serviço", size: "6,35 m²" },
      { name: "Sacada com Churrasqueira", size: "3,55 m²" },
      { name: "Banheiro Social", size: "2,51 m²" },
      { name: "Circulação", size: "1,26 m²" },
    ],
  },
  {
    id: "tipo-c",
    typeLetter: "C",
    name: "Planta Tipo C",
    area: "60,73 m²",
    areaNumber: 60.73,
    bedrooms: "2 dormitórios (1 suíte)",
    bedroomsCount: 2,
    suitesCount: 1,
    position: "Pontas Fundo",
    units: "Apartamentos 02 e 10",
    image: "/images/plans/planta-tipo-c-60m2.png",
    description:
      "Apartamento de ponta com duas sacadas privativas: uma social integrada ao living e outra exclusiva no segundo dormitório, além de suíte ampla de 11,53 m².",
    highlights: [
      "2 sacadas exclusivas (social e dormitório)",
      "Suíte master ampla de 11,53 m²",
      "2 banheiros completos com ventilação",
      "Churrasqueira privativa",
      "Posição de ponta com maior privacidade",
    ],
    roomDetails: [
      { name: "Living Integrado", size: "15,01 m²" },
      { name: "Suíte Master", size: "11,53 m²" },
      { name: "Banheiro da Suíte", size: "2,51 m²" },
      { name: "Dormitório 02", size: "7,31 m²" },
      { name: "Sacada do Dormitório", size: "2,45 m²" },
      { name: "Sacada Social com Churrasqueira", size: "3,55 m²" },
      { name: "Cozinha / Área de Serviço", size: "6,35 m²" },
      { name: "Banheiro Social", size: "2,51 m²" },
      { name: "Circulação", size: "2,64 m²" },
    ],
  },
  {
    id: "tipo-d",
    typeLetter: "D",
    name: "Planta Tipo D",
    badge: "Maior Metragem",
    area: "68,54 m²",
    areaNumber: 68.54,
    bedrooms: "3 dormitórios (1 suíte)",
    bedroomsCount: 3,
    suitesCount: 1,
    position: "Pontas Frente",
    units: "Apartamentos 01 e 09",
    image: "/images/plans/planta-tipo-d-68m2.png",
    description:
      "A configuração mais generosa do Ares, com 3 dormitórios (1 suíte), posicionada na frente do empreendimento, living iluminado, sacada e churrasqueira.",
    highlights: [
      "3 dormitórios com 1 suíte",
      "Posição nobre: pontas de frente",
      "2 banheiros completos",
      "Living aconchegante e sacada gourmet",
      "Possibilidade de living estendido",
    ],
    roomDetails: [
      { name: "Living Integrado", size: "15,29 m²" },
      { name: "Suíte do Casal", size: "9,63 m²" },
      { name: "Banheiro da Suíte", size: "2,52 m²" },
      { name: "Dormitório 01", size: "7,69 m²" },
      { name: "Dormitório 02", size: "6,84 m²" },
      { name: "Sacada com Churrasqueira", size: "3,55 m²" },
      { name: "Cozinha / Área de Serviço", size: "6,35 m²" },
      { name: "Banheiro Social", size: "2,87 m²" },
      { name: "Circulação", size: "3,67 m²" },
    ],
  },
  {
    id: "tipo-d-living-estendido",
    typeLetter: "D*",
    name: "Tipo D — Living Estendido",
    badge: "Opção Flexível",
    area: "68,54 m²",
    areaNumber: 68.54,
    bedrooms: "2 dormitórios (1 suíte + Living Ampliado)",
    bedroomsCount: 2,
    suitesCount: 1,
    position: "Pontas Frente",
    units: "Apartamentos 01 e 09 (Personalização)",
    image: "/images/plans/planta-tipo-d-living-estendido-68m2.png",
    description:
      "Versão personalizada com o 3º dormitório transformado em extensão do living e espaço home office, criando uma área social de mais de 22 m².",
    highlights: [
      "Living gigante de 22,40 m² integrado",
      "Espaço dedicado para Home Office",
      "Suíte master privativa",
      "Sacada com churrasqueira",
      "Ambiente social contínuo e iluminado",
    ],
    roomDetails: [
      { name: "Living Estendido + Home Office", size: "22,40 m²" },
      { name: "Suíte do Casal", size: "9,63 m²" },
      { name: "Banheiro da Suíte", size: "2,52 m²" },
      { name: "Dormitório 01", size: "7,69 m²" },
      { name: "Sacada com Churrasqueira", size: "3,55 m²" },
      { name: "Cozinha / Área de Serviço", size: "6,35 m²" },
      { name: "Banheiro Social", size: "2,87 m²" },
      { name: "Circulação", size: "3,67 m²" },
    ],
  },
  {
    id: "garden",
    typeLetter: "G",
    name: "Apartamentos Garden (3º Pav.)",
    badge: "Exclusividade Ares",
    area: "54 a 68 m² + Terraço",
    areaNumber: 68.54,
    bedrooms: "2 e 3 dormitórios",
    bedroomsCount: 2,
    suitesCount: 1,
    position: "3º Pavimento",
    units: "Apartamentos 301 a 310",
    image: "/images/plans/implantacao-3-pavimento-garden.png",
    description:
      "Unidades exclusivas no 3º pavimento com terraços privativos ao ar livre. Unidades selecionadas 302, 309 e 310 com espera para ofurô.",
    highlights: [
      "Terraços privativos ao ar livre",
      "Espera para ofurô nas unidades 302, 309 e 310",
      "Acesso direto no mesmo pavimento do lazer",
      "Opções de 2 ou 3 dormitórios",
      "Sensação de viver em uma casa suspensa",
    ],
  },
];
