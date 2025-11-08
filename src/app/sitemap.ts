import http from "@/lib/http";
import { MenuType } from "@/types/api/menu.type";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemap: MenuType = await http(`/menus/11`);
  const sitemapItems: MetadataRoute.Sitemap = [];

  const menuFlat = (menu: MenuType) => {
    for (const item of menu) {
      if (item.children) {
        menuFlat(item.children);
      } else {
        sitemapItems.push({
          url: item.url,
          lastModified: new Date(),
          changeFrequency: "monthly",
        });
      }
    }
  };

  menuFlat(sitemap);

  return sitemapItems;
}
