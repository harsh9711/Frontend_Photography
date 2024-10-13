"use client";

import { Provider } from "react-redux";
import { store } from "./lib/store";
import localFont from "next/font/local";

// Local font imports
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </div>
    </Provider>
  );
}
