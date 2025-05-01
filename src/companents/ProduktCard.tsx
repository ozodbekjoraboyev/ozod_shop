"use client";

import Image from "next/image";
import savat from "../assets/icons/shop.svg";
import Link from "next/link";
import { CatgoriData, ProduktType } from "@/type/Types";
import heart from "../assets/icons/heart.svg";
import heartred from "../assets/icons/heardRed.svg";
import { useDispatch, useSelector } from "react-redux";
import { Like } from "@/store/slice/like.slice";
import { RootState } from "@/store/type";
import { addToCart } from "@/store/slice/card.slice";
import { toast } from "sonner";

function ProduktCard({ item }: { item?: CatgoriData }) {
  const dispatch = useDispatch();

  if (!item) {
    return <div className="text-red-500">Mahsulot ma'lumotlari mavjud emas.</div>;
  }

  const addCart = (product: ProduktType) => {
    dispatch(addToCart(product));
    toast.success("Savatga qo‘shildi");
  };

  const likeDispatch = (product: ProduktType) => {
    dispatch(Like(product));
  };

  const likeItems = useSelector((state: RootState) => state.FavoriteCard.items);
  const isLiked = likeItems.some((liked) => liked.id === item.id);

  return (
    <div className="relative bg-white shadow-lg rounded-2xl p-4 w-full max-w-[250px] flex flex-col  justify-between  mb-8">
      <div className="relative">
        <Link href={`/pradakt/${item.id}`}>
          {item.imageUrl ? (
            <Image
              width={230}
              height={260}
              src={item.imageUrl}
              alt={item.name || "Mahsulot"}
              className="w-full h-[260px] object-cover rounded-xl transition-transform hover:scale-[1.02] duration-200"
            />
          ) : (
            <div className="bg-gray-200 w-full h-[260px] flex items-center justify-center rounded-xl">
              <p className="text-gray-500">Rasm yo‘q</p>
            </div>
          )}
          <p className="mt-2 text-sm text-gray-700 line-clamp-2">
            {item.description || "Tavsif mavjud emas"}
          </p>
        </Link>

        <button
          onClick={() => likeDispatch(item)}
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:scale-110 transition"
        >
          <Image
            width={24}
            height={24}
            src={isLiked ? heartred : heart}
            alt="like"
          />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-lg font-semibold text-gray-900">
          {item.price ? `$${item.price}` : "Narx noma’lum"}
        </p>

        <button
          onClick={() => addCart(item)}
          className="p-2 rounded-md border border-blue-500 hover:bg-blue-600 hover:text-white transition-colors"
        >
          <Image
            width={24}
            height={24}
            src={savat}
            alt="savat"
          />
        </button>
      </div>
    </div>
  );
}

export default ProduktCard;
