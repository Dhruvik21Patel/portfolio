import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dhruviksportfolio.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://dhruviksportfolio.vercel.app/projects",
      lastModified: new Date(),
    },
  ];
}
