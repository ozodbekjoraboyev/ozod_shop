"use client";

import { RootState } from "@/store/type";
import {
  BellRing,
  Briefcase,
  DoorOpen,
  House,
  MoveLeft,
  Slash,
  TicketSlash,
  User,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Buyurtma from "./Buyurtma";

function Profile() {
  const [otish, setOtish] = useState("profil");

  const id = useSelector((state: RootState) => state.authSlice.user?.id);
  const name = useSelector((state: RootState) => state.authSlice.user?.name);

  return (
    <div className="pb-32 container mx-auto px-4">
      <div className="flex items-center gap-2 text-gray-700 text-sm mb-6">
        <Link href="/" className="flex items-center gap-1 hover:underline">
          <MoveLeft size={20} />
          <span>Bosh sahifa</span>
        </Link>
        <Slash size={16} />
        <span className="text-blue-600 font-medium">Shaxsiy kabinet</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="w-full max-w-md p-6 ">
          <div
            onClick={() => {
              setOtish("profil");
            }}
            className="flex  cursor-pointer items-center gap-4 mb-4"
          >
            <div className="bg-blue-600 p-3 rounded-full">
              <User size={36} className="text-white" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">{name}</p>
              <p className="text-sm text-gray-500">+998 97 056 79 85</p>
            </div>
          </div>
          <hr className="border-gray-200 mb-4" />
          <ul className="space-y-2">
            <li className="text-sm text-gray-600">ID: {id}</li>
          </ul>
          <div>
            <div>
              <div className=" flex flex-col gap-5">
                <div className=" hover:shadow-xl flex items-center gap-4 p-5 rounded ">
                  <House />
                  <p className=" text-xl transition  transform  hover:pl-5 duration-200 cursor-pointer ">
                    mening tanlo'vim
                  </p>
                </div>{" "}
                <div className=" hover:shadow-xl flex items-center gap-4 p-5 rounded ">
                  <TicketSlash />
                  <p className=" text-xl transition  transform  hover:pl-5 duration-200 cursor-pointer ">
                    to'lo'v tarihi
                  </p>
                </div>{" "}
                <div
                  onClick={() => {
                    setOtish("buyurtma");
                  }}
                  className=" hover:shadow-xl flex items-center gap-4 p-5 rounded "
                >
                  <Briefcase />
                  <p className=" text-xl transition  transform  hover:pl-5 duration-200 cursor-pointer ">
                    online buyurtma
                  </p>
                </div>{" "}
                <div className=" border hover:border-red-700 flex items-center gap-4 p-5 rounded ">
                  <DoorOpen />
                  <p className=" text-xl text-red-700 transition  transform  hover:pl-5 duration-200 cursor-pointer ">
                    Chiqish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-5">
          {otish === "buyurtma" ? (
            <>
              <Buyurtma />
            </>
          ) : (
            <>
              <div className=" flex w-[1200px]  gap-12">
                <div className=" border pb-25 w-[450px] h-[300px] border-gray-300 rounded-md ">
                  <div className=" h-32">
                    <h2 className=" p-2">{name}</h2>
                    <div className="h-[1px] w-full bg-[lightgrey]"></div>
                    <div className=" p-2">
                      <h2 className="font-bold text-xl ">{name}</h2>
                      <p className=" text-gray-700">Tel: </p>
                    </div>
                  </div>
                </div>{" "}
                <div className=" border pb-25 w-[450px] h-[300px] border-gray-300 rounded-md ">
                  <div>
                 <div className=" items-center flex">
                 <BellRing />
                 <h2 className=" p-2">{name}</h2>
                 </div>
                    <div className="h-[1px] bg-[lightgrey] w-full"></div>
                    <div className=" p-2">
                      <h2 className="font-bold text-xl ">{name}</h2>
                      <p className=" text-gray-700">Tel: </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
