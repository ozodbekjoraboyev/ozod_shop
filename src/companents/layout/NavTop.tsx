import React from "react";
import Image from "next/image";
import lokation from "../../assets/images/lokation.svg";

const NavTop = () => {
  return (
    <div className="bgCloor text-white py-2 text-sm">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex items-center gap-2">
            <Image width={24} height={24} src={lokation} alt="Lokatsiya" />
            <span className="font-semibold">Toshkent</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center">
            <p className="hover:underline cursor-pointer">
              Bizning do'konlarimiz
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 transition px-3 py-1 rounded-md text-white text-sm">
              Yuridik shaxslar uchun
            </button>
            <p className="hover:underline cursor-pointer">To'lov usullari</p>
          </div>

          <div className="text-center md:text-right text-xs md:text-sm">
            <p>
              Aloqa markazi:{" "}
              <a
                href="tel:+998970567985"
                className="underline hover:text-blue-300"
              >
                +998 97 056 79 85
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
