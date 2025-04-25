"use client";

import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import menu from "../../assets/images/menu.svg";
import menu_x from "../../assets/icons/katalog_x.svg";
import search from "../../assets/icons/search.svg";
import yurak from "../../assets/icons/yurak.svg";
import shop from "../../assets/icons/shop.svg";
import KatalogMadal from "./KatalogMadal";
import ShopModal from "@/pages/_companents/ShopModal";
import dynamic from "next/dynamic";
// import LoginDialog from "../LoginDialog";
const LoginDialog = dynamic(()=>import("../LoginDialog"),{
  ssr: false
})

function NavCentr() {
  const [katalog, setKatalog] = useState(false);
  const [savatModal, setSavatModal] = useState(false);

  return (
    <div>
      <div className="container m-auto pt-6 flex justify-between px-12">
        <Link href={"/"}>
          <div className="flex items-center gap-2 ">
            <ShoppingBag className="w-6 h-6 text-blue-800" />
            <h1 className="text-blue-800 text-3xl font-bold">
              Ozod<span className="text-yellow-400">_shop</span>
            </h1>
          </div>
        </Link>

        <div>
          <button
            onClick={() => setKatalog(!katalog)}
            className="bg-blue-600 text-white p-2 px-6 rounded flex gap-2"
          >
            <span>
              <Image
                width={25}
                height={25}
                src={katalog ? menu_x : menu}
                alt="katalog"
              />
            </span>
            Katalog
          </button>
        </div>

        <div className="flex items-center w-full max-w-lg border-2 border-blue-600 rounded-lg bg-white overflow-hidden">
          <input
            className="flex-1 min-w-0 px-4 py-2.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
            type="text"
            placeholder="Qidirish..."
          />
          <button className="bg-blue-600 hover:bg-blue-700 p-3.5 text-white transition-colors duration-200">
            <Image width={24} height={24} src={search} alt="Qidirish" />
          </button>
        </div>

        <div className="flex gap-10">
            {" "}
       
       <LoginDialog/>
          <Link href={"/sevimlilar"}>
            <div className="flex flex-col items-center">
              <Image width={30} height={30} src={yurak} alt="user" />
              <p>Sevimlilar</p>
            </div>
          </Link>
          <div
            className="flex flex-col items-center cursor-pointer hover:opacity-80"
            onClick={() => setSavatModal(true)}
          >
            <Image width={30} height={30} src={shop} alt="shop" />
            <p className="text-sm">Savatcha</p>
            <span className=" bg-blue-700 px-2 text-white absolute right-56 top-15 rounded-full "></span>
          </div>
        </div>
      </div>

      <KatalogMadal katalog={katalog} setKatalog={setKatalog} />

      <ShopModal savatModal={savatModal} setSavatModal={setSavatModal} />
    </div>
  );
}

export default NavCentr;
