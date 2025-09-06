import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Călătorii cu suflet în Turcia",
  description: "Blog și site spiritual despre călătorii în Turcia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
