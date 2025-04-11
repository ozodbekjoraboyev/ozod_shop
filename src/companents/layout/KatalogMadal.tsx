import { ShoppingBag } from "lucide-react";
import React, { useEffect, useState } from "react";

function Katalogkatkatalog({
  katalog,
  setKatalog,
}: {
  katalog: boolean;
  setKatalog: any;
}) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (katalog) {
      setShowModal(true);
    } else {
      setTimeout(() => setShowModal(false));
    }
  }, [katalog]);

  return (
    <>
      {showModal && <div onClick={() => setKatalog(true)}></div>}

      <div
        className={`${
          showModal ? "opacity-100 " : "opacity-0 "
        } bg-slate-300 m-auto fixed inset-0 h-[70vh] w-[1500px] rounded-2xl p-4 z-50  mt-60 `}
      >
        <div className=" flex items-center  border-2 border-red-700 p-3 rounded-xl w-64 gap-3">
          <div className="flex items-center gap-2 ">
            <ShoppingBag className="w-6 h-6 text-blue-800" />
            <h1 className="text-blue-800 text-3xl font-bold">
              Ozod<span className="text-yellow-400">_shop</span>
            </h1>
          </div>
          <p className=" text-2xl  text-red-700 ">Olcha Market</p>
        </div>
        <div className="flex ">
          <div className="w-80 h-[400px] pt-5 font-medium flex flex-col gap-3  cursor-pointer overflow-auto">
            <p className="hover:text-red-700">
              televizory-audio-i-videotekhnika
            </p>
            <p className="hover:text-red-700">noutbuki-planshety-kompyutery</p>
            <p className="hover:text-red-700">telefony-gadzhety-aksessuary</p>
            <p className="hover:text-red-700">Mayishi tehnika</p>
            <p className="hover:text-red-700">Barcha oshxona uchun</p>
            <p className="hover:text-red-700">sport anjomlari</p>
            <p className="hover:text-red-700">Go'zalik va saromjonlik</p>
            <p className="hover:text-red-700">Chet eldan tavarlar</p>
            <p className="hover:text-red-700">Auto jihozlar</p>
            <p className="hover:text-red-700">Barcha ofis uchun va bog'uchun</p>
            <p className="hover:text-red-700">Bolalar uchun va mahsulotlar</p>
            <p className="hover:text-red-700">Kiyimlar va Poyabzalar</p>
            <p className="hover:text-red-700">Kitoblar</p>
            <p className="hover:text-red-700">Mebel</p>
            <p className="hover:text-red-700">
              Barcha tamirlash va qurilish uchun
            </p>
            <p className="hover:text-red-700">Kantselyariy tovarlar</p>
            <p className="hover:text-red-700">Elektrotransprt</p>
            <p className="hover:text-red-700">Sovgalar va suvinerlar</p>
            <p className="hover:text-red-700">Aqili uy</p>
            <p className="hover:text-red-700">Qulay taklif</p>
            <p className="hover:text-red-700">Oziq ovqat mahsulotlari</p>
            <p className="hover:text-red-700">Aftamabillar</p>
          </div>
          <div className=" w-full h-[300px]  grid grid-cols-4  pl-4  text-2xl overflow-auto ">
            <div>
              <p className="font-semibold pt-5">Televizorlar</p>
              <p>Toshiba</p>
              <p>Artel</p>
              <p>Shivaki</p>
              <p>Vesta</p>
              <p>Sony</p>
              <p>Premier</p>
              <p>Samsung</p>
              <p>LG</p>
              <p>Hisense</p>
              <p>Immer</p>
              <p>Ziffler</p>
              <p>TCL</p>
              <p>Xiaomi</p>
              <p>Skyworth</p>
              <p>Avalon</p>
              <p>Rulls</p>
              <p>Moonx</p>
              <p className="font-semibold pt-5">Audio</p>
              <p>Musiqa sistemalari</p>
              <p>Akustika</p>
              <p>Mikrofonlar</p>
            </div>{" "}
            <div>
              <p className="font-semibold pt-5">Televizorlar</p>
              <p>Toshiba</p>
              <p>Artel</p>
              <p>Shivaki</p>
              <p>Vesta</p>
              <p>Sony</p>
              <p>Premier</p>
              <p>Samsung</p>
              <p>LG</p>
              <p>Hisense</p>
              <p>Immer</p>
              <p>Ziffler</p>
              <p>TCL</p>
              <p>Xiaomi</p>
              <p>Skyworth</p>
              <p>Avalon</p>
              <p>Rulls</p>
              <p>Moonx</p>
              <p className="font-semibold pt-5">Audio</p>
              <p>Musiqa sistemalari</p>
              <p>Akustika</p>
              <p>Mikrofonlar</p>
            </div>{" "}
            <div>
              <p className="font-semibold pt-5">Televizorlar</p>
              <p>Toshiba</p>
              <p>Artel</p>
              <p>Shivaki</p>
              <p>Vesta</p>
              <p>Sony</p>
              <p>Premier</p>
              <p>Samsung</p>
              <p>LG</p>
              <p>Hisense</p>
              <p>Immer</p>
              <p>Ziffler</p>
              <p>TCL</p>
              <p>Xiaomi</p>
              <p>Skyworth</p>
              <p>Avalon</p>
              <p>Rulls</p>
              <p>Moonx</p>
              <p className="font-semibold pt-5">Audio</p>
              <p>Musiqa sistemalari</p>
              <p>Akustika</p>
              <p>Mikrofonlar</p>
            </div>
            <div>
              <p className="font-semibold pt-5">Televizorlar</p>
              <p>Toshiba</p>
              <p>Artel</p>
              <p>Shivaki</p>
              <p>Vesta</p>
              <p>Sony</p>
              <p>Premier</p>
              <p>Samsung</p>
              <p>LG</p>
              <p>Hisense</p>
              <p>Immer</p>
              <p>Ziffler</p>
              <p>TCL</p>
              <p>Xiaomi</p>
              <p>Skyworth</p>
              <p>Avalon</p>
              <p>Rulls</p>
              <p>Moonx</p>
              <p className="font-semibold pt-5">Audio</p>
              <p>Musiqa sistemalari</p>
              <p>Akustika</p>
              <p>Mikrofonlar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Katalogkatkatalog;
