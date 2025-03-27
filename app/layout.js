import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import StoreProvider from "./StoreProvider";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";

const roboto = Roboto({
  variable: "--roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecommerce Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${roboto.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme="system" attribute="class"> 
        <StoreProvider>
          
            <Banner />
            
            <Header />
            <main>{children}</main>
         
            <Footer />
            <ToastContainer />
         
        </StoreProvider>
        </ThemeProvider>
    
      </body>
    </html>
  );
}
