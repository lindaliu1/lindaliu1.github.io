// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        <h1>linda liu</h1>
      </header>
      <body>
        {children}
      </body>
    </html>
  );
}
