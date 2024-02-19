import { Roboto, Nunito } from "next/font/google";

export const roboto = Roboto({
  variable: '--font-roboto', 
  weight: ['300'],
  subsets: ['latin'],
});

export const nunito = Nunito({ 
  variable: '--font-nunito',
  weight: ['400', '700'],
  subsets: ['latin'],
});