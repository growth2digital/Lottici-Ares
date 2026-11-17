export interface InteriorSpace {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

export const INTERIORS: InteriorSpace[] = [
  {
    id: "living-render",
    title: "Living Integrado & Cozinha",
    subtitle: "Convivência fluida e muita luz natural",
    description:
      "Ambiente social projetado para integrar sala de estar, bancada gourmet e cozinha, conectando-se diretamente à sacada.",
    image: "/images/interiors/living-render.jpg",
    tag: "Perspectiva do Projeto",
  },
  {
    id: "living-estendido-render",
    title: "Living Estendido",
    subtitle: "Amplitude para momentos em família",
    description:
      "A opção flexível do Tipo D oferece mais de 22 m² de área social contínua, permitindo sala de jantar, estar generoso e home office.",
    image: "/images/interiors/living-estendido-render.jpg",
    tag: "Opção Planta Flexível",
  },
  {
    id: "dormitorio-render",
    title: "Dormitório Conforto",
    subtitle: "Privacidade e tranquilidade para o descanso",
    description:
      "Espaço planejado com espera para ar-condicionado split, piso vinílico/laminado e marcenaria inteligente.",
    image: "/images/interiors/dormitorio-render.jpg",
    tag: "Perspectiva do Projeto",
  },
  {
    id: "decorado-living",
    title: "Living Decorado",
    subtitle: "Inspiração real do apartamento decorado",
    description:
      "Fotografia do showroom com iluminação em sancas de gesso, integração harmoniosa e mobiliário contemporâneo.",
    image: "/images/decorado/LIVING-ESTENDIDO.png",
    tag: "Apartamento Decorado",
  },
  {
    id: "decorado-suite",
    title: "Suíte Master Decorada",
    subtitle: "Elegância e conforto acolhedor",
    description:
      "Visão da suíte com armários com portas de vidro bronze iluminadas internamente, cabeceira estofada e painéis em madeira.",
    image: "/images/decorado/SUITE-01.png",
    tag: "Apartamento Decorado",
  },
  {
    id: "decorado-jantar",
    title: "Espaço Jantar",
    subtitle: "Perfeito para receber com requinte",
    description:
      "Mesa de jantar integrada ao living e à bancada gourmet para reunir amigos e família em torno de boas conversas.",
    image: "/images/decorado/JANTAR.png",
    tag: "Apartamento Decorado",
  },
];
