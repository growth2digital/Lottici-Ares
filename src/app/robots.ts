import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://lottici.com.br/empreendimentos-residencial-ares/sitemap.xml",
  };
}
