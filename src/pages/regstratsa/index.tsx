import Link from "next/link";
import React from "react";

function index() {
  return (
    <div className="pb-32 container m-auto">
      <div className=" flex gap-5">
        <Link href={"/"}>
          <p className=" p-2 px-12 bg-gray-400 rounded">Bosh sahifa</p>
        </Link>{" "}
        <Link href={"/"}>
          <p className=" p-2 px-12 bg-blue-600 text-white rounded">
            {" "}
            Shaxsiy kabinet
          </p>
        </Link>
      </div>
      <div></div>
    </div>
  );
}

export default index;
