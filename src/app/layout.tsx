/* METADATA | [S.E.O] Search Engine Optimization */
import type { Metadata } from "next";
/* NEXT FEATURE | Scripts */
import Script from "next/script";
/* GOOGLE FONTS | Optimized Fonts */
import { roboto, nunito } from "./ui/fonts";
/* STYLESHEET | Global/Root */
import "@/styles/globals.scss";
/* USER INTERFACE | React Components */
import NavigationBar from "./ui/navigation-bar";

/* METADATA TAGS | [S.E.O] */
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "CREATOR TXN",
    template: "%s | CREATOR TXN",
  },
  description: "Creator, Developer & Artist",
  openGraph: {
    title: "CREATOR TXN",
    description: "Creator, Developer & Artist",
    url: "https://creator-txn-io.vercel.app/",
    siteName: "CREATOR TXN",
    locale: "en_UK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${nunito.variable}`}>
        <NavigationBar />
        {children}
      </body>
      {/* BOOTSTRAP JS | Production */}
      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
        // onLoad={() => {console.log("Bootstrap JS Loaded")}} 
      />
    </html>
  );
}
