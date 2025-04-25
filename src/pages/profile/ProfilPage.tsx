"use client";

import { RootState } from "@/store/type";
import { ProfilType } from "@/type/Types";
import axios from "axios";
import { MoveLeft, Slash, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Profile() {
  const [profil, setProfil] = useState<ProfilType>();
  const accsesTocen = useSelector(
    (state: RootState) => state.authSlice.accessToken
  );
  useEffect(() => {
    axios
      .get(
        `https://nt.softly.uz/api/front/orders?limit=10&page=1&order=ASC&status=pending&customerId

  `,
        {
          headers: {
            Authorization: `Bearer ${accsesTocen}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setProfil(res.data);
      });
  }, []);
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
          <div className="flex items-center gap-4 mb-4">
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
            <div></div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-inner p-6 text-gray-500 text-center">
          <div>
            {profil?.items.map((item) => {
              return (
                <div>
                  {item.items.map((item) => {
                    return (
                      <div>
                        <div className=" flex items-center justify-between">
                          <Image
                            width={50}
                            height={50}
                            src={item.product.imageUrl}
                            alt="wkmfoef;w"
                          />
                          <div className=" flex">
                            <div className="flex gap-3">
                              <p>x{item.product.stock}</p>
                              <p> {item.product.name}</p>
                            </div>{" "}
                            <p>{item.product.price}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
