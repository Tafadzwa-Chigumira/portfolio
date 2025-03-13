import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Tafadzwa Chigumira - Full-stack Developer",
  description: "Tafadzwa Chigumira - Full-stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
