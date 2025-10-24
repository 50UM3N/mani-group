// src/app/layout.tsx
import type { Metadata } from "next";
import "../../styles/globals.css"; // Import global styles

export const metadata: Metadata = {
  title: "Mani Group",
  description: "Shaping Bengal's Skyline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}