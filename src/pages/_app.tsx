import Futr from "@/companents/layout/Futr";
import NavarHome from "@/companents/layout/NavarHome";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <>
 < NavarHome />
    
  <Component {...pageProps} />
  <Futr />
  </>
}
