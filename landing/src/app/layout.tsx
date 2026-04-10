import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.konacompas.com"),
  title: "Kona Compass | Precision control for live sonar",
  description:
    "Kona Compass is a smart live sonar rotator for Garmin, Lowrance, and Humminbird systems, built for precise, intuitive transducer control on the water.",
  openGraph: {
    title: "Kona Compass | Precision control for live sonar",
    description:
      "Smart live sonar rotator with compass-guided positioning, remote control, and foot pedal operation.",
    type: "website",
    images: [
      {
        url: "/product/boat-wide.jpg",
        width: 1200,
        height: 630,
        alt: "Kona Compass installed on a boat with live sonar displays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kona Compass | Precision control for live sonar",
    description:
      "Smart live sonar rotator with compass-guided positioning, remote control, and foot pedal operation.",
    images: ["/product/boat-wide.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
