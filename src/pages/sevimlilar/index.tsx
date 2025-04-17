import { addToCart } from "@/store/slice/card.slice";
import { Like } from "@/store/slice/like.slice";
import { RootState } from "@/store/type";
import { ProduktIdType } from "@/type/Types";
import savat from "../../assets/icons/shop.svg";
import Image from "next/image";
import Link from "next/link";
import heart from "../../assets/icons/heart.svg";
import heartred from "../../assets/icons/heardRed.svg";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Sevimlilar() {
  const dispatch = useDispatch();
  const addCart = (product: ProduktIdType) => {
    dispatch(addToCart(product));
  };
  const likeDispatch = (product: ProduktIdType) => {
    dispatch(Like(product));
  };

  const likeItems = useSelector((state: RootState) => state.FavoriteCard.items);

  return (
    <div className="container mx-auto px-6 py-10">
      <div className=" container m-auto flex items-center flex-col p-32">
        <h1 className="text-3xl font-bold mb-6 text-center  ">
          Yoqtirgan mahsulotlaringiz
        </h1>
        <Link href={"/"}>
          {" "}
          <button className=" cursor-pointer border-green-500 border-2 rounded-md p-2 m-auto">
            {" "}
            Asosi minyuga qaytish
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {likeItems.map((item) => {
          const islayked = likeItems.some((liked) => liked.id === item.id);

          return (
            <div className="mb-12 relative bg-white mt-12 shadow-md rounded-lg p-4 max-w-[250px] flex flex-col justify-between">
              <div>
                <button onClick={() => likeDispatch(item)}>
                  <Image
                    width={30}
                    height={30}
                    src={islayked ? heartred : heart}
                    alt="heart"
                    className="right-5 absolute cursor-pointer"
                  />
                </button>
                <Link href={`/pradakt/${item.id}`}>
                  {item.imageUrl ? (
                    <Image
                      width={230}
                      height={260}
                      src={item.imageUrl}
                      alt={item.name || "Mahsulot"}
                      className="mx-auto rounded-lg object-cover h-70 w-full"
                    />
                  ) : (
                    <div className="bg-gray-200 w-full h-40 flex items-center justify-center rounded-lg">
                      <p className="text-gray-500">Rasm yo‘q</p>
                    </div>
                  )}
                  <p className="text-gray-700 text-sm line-clamp-2">
                    {item.description || "Tavsif mavjud emas"}
                  </p>
                </Link>
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center mt-3">
                  <p className="text-lg font-semibold text-gray-900">
                    {item.price ? `$${item.price}` : "Narx noma’lum"}
                  </p>
                  <button
                    onClick={() => addCart(item)}
                    className="p-2 rounded-md border-2 border-blue-500 hover:bg-blue-800 hover:text-white transition cursor-pointer"
                  >
                    <Image
                      width={30}
                      height={30}
                      src={savat}
                      alt="savat"
                      className="pointer-events-none"
                    />
                  </button>
                </div>
              </div>
            </div>
          );
          
        })}
      </div>
    </div>
  );
}

export default Sevimlilar;
                                                                                                                                                                                                                                                                                                                