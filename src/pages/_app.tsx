import Futr from "@/companents/layout/Futr";
import NavarHome from "@/companents/layout/NavarHome";
import { store } from "@/store/Store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Provider store={store}>
 < NavarHome />
    
  <Component {...pageProps} />
  <Futr />

    </Provider>
  </>
}
