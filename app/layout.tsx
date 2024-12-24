import type { Metadata } from "next";
import Header from "@/components/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Teste ",
  description: "Teste Teste Teste",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
