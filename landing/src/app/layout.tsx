import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kona Compass",
  description: "Kona Compass pre-launch landing page.",
  other: {
    "google": "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <body className="antialiased">{children}</body>
    </html>
  );
}
