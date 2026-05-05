import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.syandanjiki.co.za";
  const routes = ["", "/about", "/services", "/portfolio", "/contact", "/blog"];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
}
