import Image from "next/image";
import { Geist, Geist_Mono, Abhaya_Libre } from "next/font/google";
import Banner from "./_companents/Banner";
import Cards from "./_companents/Cards";

export default function Home() {
  return (
    <>
      <Banner />
      <Cards />
    </>
  );
}
