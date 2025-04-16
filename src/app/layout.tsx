import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/common/Navigation/navigation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-2">
        <header>
          <Navigation />
        </header>
        {children}
        <footer className="flex justify-center items-center h-16">
          <p>&copy; Made By Prajjwal Singh with ❤️. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
