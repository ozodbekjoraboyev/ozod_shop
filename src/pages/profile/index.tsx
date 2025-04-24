import { RootState } from "@/store/type";
import { MoveLeft, Slash, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const id = useSelector((state: RootState) => state.authSlice.user?.id);
  const name = useSelector((state: RootState) => state.authSlice.user?.name);
  const phone = useSelector((state: RootState) => state.authSlice.user?.id);
  return (
    <div className="pb-32 container m-auto">
      <div className=" flex gap-3 items-center">
        <Link href={"/"}>
          <MoveLeft size={36} />
        </Link>{" "}
        <Link href={"/"}>
          <p className=" p-1 px-12 bg-gray-400 rounded">Bosh sahifa</p>
        </Link>{" "}
        <Slash size={26} />
        <Link href={"/"}>
          <p className=" p-1 px-12 bg-blue-600 text-white rounded">
            {" "}
            Shaxsiy kabinet
          </p>
        </Link>
      </div>
      <div className=" grid grid-cols-3 ">
        <div className=" max-w-[400px]">
          <div className=" flex  items-center gap-3 p-2">
            <div className=" bg-gray-400 rounded-full p-3">
              <User size={36} className="text-white" />
            </div>
            <div className=" flex flex-col">
              <p className="text-xl text-shadow-gray-600">{name}</p>
              <p className=" text-shadow-gray-600">+997 97 056 79 85</p>
            </div>
          </div>
          <hr className=" border-2"/>
        </div>
        <hr className=" border-2 w-1 h-52"/>
        <div></div>
      </div>
    </div>
  );
}

export default Profile;
