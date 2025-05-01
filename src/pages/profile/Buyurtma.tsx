"use client";

import { RootState } from "@/store/type";
import { ProfilType } from "@/type/Types";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Buyurtma() {
  const [buyurtma, setBuyurtma] = useState<ProfilType>();
  const accsesTocen = useSelector(
    (state: RootState) => state.authSlice.accessToken
  );

  useEffect(() => {
    axios
      .get(
        `https://nt.softly.uz/api/front/orders?limit=10&page=1&order=ASC&status=pending&customerId`,
        {
          headers: {
            Authorization: `Bearer ${accsesTocen}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setBuyurtma(res.data);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="  gap-6 overflow-y-auto w-[650px]  h-[470px]">
        {buyurtma?.items.map((item) => {
          return (
            <div
              key={item.id}
              className="border w-[600px]  p-6 bg-white hover:shadow-lg transition-all duration-300 rounded-lg border-gray-200 shadow-sm"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Order ID: {item.id}
                </h3>
                <p className="text-lg font-medium text-blue-600">
                  {item.items
                    .reduce((total, i) => total + i.price * i.quantity, 0)
                    .toLocaleString("ru")}{" "}
                  so'm
                </p>
              </div>

              <div className="mt-4 ">
                {item.items.map((productItem, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center  gap-4 p-3 bg-gray-50 rounded-md"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          className="object-cover  hover:scale-105 transition-all rounded-md"
                          fill
                          alt={productItem.product.name}
                          src={productItem.product.imageUrl}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">
                          {productItem.product.name}
                        </h4>
                        <div className="text-sm text-gray-600 mt-1">
                          <span>{productItem.quantity} x </span>
                          <span>
                            {productItem.price.toLocaleString("ru")} so'm
                          </span>
                        </div>
                      </div>
                      <div className="font-medium text-gray-900">
                        {(
                          productItem.price * productItem.quantity
                        ).toLocaleString("ru")}{" "}
                        so'm
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Buyurtma;
