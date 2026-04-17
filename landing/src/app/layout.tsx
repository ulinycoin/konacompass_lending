import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kona Compass",
  description: "Kona Compass pre-launch landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
