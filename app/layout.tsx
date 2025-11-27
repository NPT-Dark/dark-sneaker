import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Hy2Db5gK2TF-_zOk9N1soRttJfmAwE-FX4mqYKMtX6E" />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
