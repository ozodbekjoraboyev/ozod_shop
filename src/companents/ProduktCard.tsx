"use client";

import Image from "next/image";
import savat from "../assets/icons/shop.svg";
import Link from "next/link";
import { CardsDataType, ProduktIdType } from "@/type/Types";
import { addToCart } from "@/store/slice/card.slice";
import heart from "../assets/icons/heart.svg";
import { useDispatch, useSelector } from "react-redux";
import { Like } from "@/store/slice/like.slice";
import { RootState } from "@/store/type";
import heartred from "../assets/icons/heardRed.svg";

function ProduktCard({ item }: { item?: CardsDataType }) {
  if (!item) {
    return (
      <div className="text-red-500">Mahsulot ma'lumotlari mavjud emas.</div>
    );
  }
  const dispatch = useDispatch();
  const addCart = (product: ProduktIdType) => {
    dispatch(addToCart(product));
  };
  const likeDispatch = (product: ProduktIdType) => {
    dispatch(Like(product));
  };

  const likeItems = useSelector((state: RootState) => state.FavoriteCard.items);

  const islayked = likeItems.some((liked) => liked.id === item.id);

  return (
    <div className=" mb-12 relative bg-white mt-12 shadow-md rounded-lg p-4 max-w-[250px]  flex flex-col justify-between">
      <div>
        <button onClick={() => likeDispatch(item)}>
          <Image
            width={30}
            height={30}
            src={islayked ? heartred : heart}
            alt="heart "
            className=" right-5 absolute cursor-pointer"
          />
        </button>{" "}
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
        <div className="flex justify-between items-center mt-3 ">
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
}

export default ProduktCard;
