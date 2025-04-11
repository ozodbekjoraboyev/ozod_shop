import Image from "next/image";
import { Geist, Geist_Mono, Abhaya_Libre } from "next/font/google";
import Banner from "./_companents/Banner";
import Cards from "./_companents/Cards";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
 <>
    {/* // <div className={`${geistSans.className} ${geistMono.className} `}> */}
      <Banner />
      <Cards />
    {/* // </div> */}
    </>
  );
}
