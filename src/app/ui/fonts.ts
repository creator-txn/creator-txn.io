/* NEXT GOOGLE FONTS | Optimized Fonts 
- next/font includes built-in automatic self-hosting for any font file
- optimally load web fonts with zero layout shift, thanks to the underlying CSS size-adjust property used 
*/
import { Roboto, Nunito } from "next/font/google";

// variable: Specifies the CSS variable name to be used for the font.
// weight: Specifies the font weights to be included (in this case, only the weight '300').
// subsets: Specifies the character subsets to include (in this case, only 'latin').

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