"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { minusCount, plusCount, removeCart } from "@/store/slice/card.slice";
import { RootState } from "@/store/type";

type Props = {
  savatModal: boolean;
  setSavatModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShopModal: React.FC<Props> = ({ setSavatModal, savatModal }) => {
  const cartItem = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  if (!savatModal) return null;

  const remove = (id: number) => {
    dispatch(removeCart(id));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setSavatModal(false)}
      />

      <div className="relative bg-white w-full max-w-6xl h-[90vh] overflow-hidden text-black shadow-2xl rounded-2xl z-50 grid grid-cols-3">
        <button
          className="absolute top-4 right-4 bg-gray-100 text-black text-2xl px-3 py-1 rounded-full hover:bg-gray-200 z-50"
          onClick={() => setSavatModal(false)}
        >
          &times;
        </button>

        <div className="col-span-2 p-8 overflow-y-auto border-r">
          <h2 className="text-3xl font-bold mb-6">Savatchangiz</h2>

          {cartItem.length > 0 ? (
            <div className="space-y-6">
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-6 border p-4 rounded-xl shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.imageUrl}
                      width={70}
                      height={70}
                      alt={item.name}
                      className="rounded-lg"
                    />
                    <p className="text-lg font-medium">{item.name}</p>
                  </div>

                  <p className="text-lg font-semibold whitespace-nowrap">
                    {(item.count * item.price).toLocaleString("ru")} so‘m
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => dispatch(minusCount(item.id))}
                      className="w-10 h-10 border rounded-lg text-lg hover:bg-gray-100"
                    >
                      -
                    </button>
                    <p className="w-6 text-center">{item.count}</p>
                    <button
                      onClick={() => dispatch(plusCount(item.id))}
                      className="w-10 h-10 border rounded-lg text-lg hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => remove(item.id)}
                    className="text-red-500 border px-3 py-1 rounded-lg hover:bg-red-50"
                  >
                    O‘chirish
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h2 className="text-2xl font-bold">Savatchada hech nima yo‘q</h2>
              <Link href="/">
                <button className="mt-6 px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">
                  Xarid qilish
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* RIGHT: Summary / Info */}
        <div className="col-span-1 p-8 bg-gray-50 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Buyurtma xulosasi</h3>
            <p className="text-gray-600 mb-2">Jami mahsulotlar: {cartItem.length} ta</p>
            <p className="text-gray-600 mb-2">
              Umumiy summa:{" "}
              <span className="font-semibold text-black">
                {cartItem
                  .reduce((acc, item) => acc + item.count * item.price, 0)
                  .toLocaleString("ru")}{" "}
                so‘m
              </span>
            </p>
          </div>

          <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
            Buyurtmani rasmiylashtirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopModal;







