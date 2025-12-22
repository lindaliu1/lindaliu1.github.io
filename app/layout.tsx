import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>linda liu</h1>
          <h2>
            <Link href="/">home</Link>  .  <Link href="/projects">projects</Link>  .  <Link href="/resume">resume</Link>  .  <Link href="/blog">blog</Link>
          </h2>
        </header>
        {children}
      </body>
    </html>
  );
}
