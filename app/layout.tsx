import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "./store/provider";

export const metadata: Metadata = {
  title: "Lexania",
  description: "Lexania legal assistant",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
