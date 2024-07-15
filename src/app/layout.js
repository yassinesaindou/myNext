import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import { Josefin_Sans } from "@next/font/google";
const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  description: "This is the wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${josefin.className}`}>
      <body
        className={`bg-primary-900 text-primary-50 min-h-screen flex flex-col antialiased`}>
        <Header />

        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto ">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
