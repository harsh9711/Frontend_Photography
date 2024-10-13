import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "./Provider";

export const metadata: Metadata = {
  title: "Frontend Assignment",
  description: "Frontend Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
