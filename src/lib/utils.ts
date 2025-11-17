import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// import mockImage from "@/app/_assets/images/mock/mock.png";
import { ImageMeta } from "@/types/index.type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DateFormatter = {
  format1: (date: Date | string) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    }).format(new Date(date));
  },
  format2: (date: Date | string) => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(date));
  },
};

export const getMockImage = (img?: ImageMeta | null) => {
  return img?.meta ;
};


export const VERTICAL = [
  { label: "All", value: "" },
  { label: "Corporate", value: "corporate" },
  { label: "CSR", value: "csr" },
  { label: "Commercial", value: "commercial" },
  { label: "Retail", value: "retail" },
  { label: "EduHealth", value: "eduhealth" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Affor", value: "affor" },
]