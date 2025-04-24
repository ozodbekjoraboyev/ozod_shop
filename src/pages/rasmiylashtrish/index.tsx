import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { minusCount, plusCount, removeCart } from "@/store/slice/card.slice";
import { RootState } from "@/store/type";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Rasmiylashtrish() {
  const [selected, setSelected] = useState<"delivery" | "pickup" | null>(null);
  const [faolik, setfaolik] = useState<"delivery" | "pickup" | null>(null);
  const cartItem = useSelector((state: RootState) => state.cart.items);
  const acctocen = useSelector(
    (state: RootState) => state.authSlice.accessToken
  );

  const dispatch = useDispatch();
  const remove = (id: number) => {
    dispatch(removeCart(id));
  };

  useEffect(() => {
    axios
      .post(
        `https://nt.softly.uz/api/front/orders`,
        {
          acctocen: acctocen,
          items: [
            {
              productId: cartItem.map((item) => {
                return item.id;
              }),
              puattity: cartItem.map((item2) => {
                return item2.count;
              }),
            },
          ],
        },
        { headers: { Authorization: `Bearer ${acctocen}` }
    }
      )
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return (
    <div className="container mx-auto pb-32 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3 items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-full"
        >
          <h1 className="text-2xl font-bold mb-6">Xaridni rasmiylashtirish</h1>

          <div className="mb-12">
            <h2 className="p-2 pb-3">
              <span className="bg-green-500 text-white text-xl p-2 px-4 py-2 rounded-full">
                1
              </span>{" "}
              Sizning ma'lumotlaringiz
            </h2>

            <div className="flex flex-col gap-4">
              <Input
                name="phone"
                required
                type="tel"
                className="border border-b-gray-200 h-12"
                placeholder="Telefon raqamingiz"
              />

              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  name="firstName"
                  required
                  className="border border-b-gray-200 h-12"
                  placeholder="Ism"
                />
                <Input
                  name="lastName"
                  required
                  className="border border-b-gray-200 h-12"
                  placeholder="Familya"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="p-2 pb-3">
              <span className="bg-green-500 text-white text-xl p-2 px-4 py-2 rounded-full">
                2
              </span>{" "}
              Qabul qilish usuli
            </h2>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div
                  onClick={() => setSelected("delivery")}
                  className={`cursor-pointer w-full border rounded-xl h-12 flex items-center justify-between px-4 transition ${
                    selected === "delivery"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                >
                  Yetkazib berish
                  {selected === "delivery" && (
                    <span className="text-blue-500">✔</span>
                  )}
                </div>

                <div
                  onClick={() => setSelected("pickup")}
                  className={`cursor-pointer w-full border rounded-xl h-12 flex items-center justify-between px-4 transition ${
                    selected === "pickup"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                >
                  Do'kondan olib ketish
                  {selected === "pickup" && (
                    <span className="text-blue-500">✔</span>
                  )}
                </div>
              </div>

              {selected === "delivery" && (
                <div className="flex flex-col gap-3">
                  <h2 className="p-2 pb-3 font-bold text-xl">
                    Yetkazib berish manzilini kiriting
                  </h2>
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col md:flex-row gap-4 items-center w-full">
                      <Input
                        name="city"
                        required
                        className="border border-b-gray-200 h-12 w-full"
                        placeholder="Toshkent shahar"
                      />
                      <Input
                        name="district"
                        required
                        className="border border-b-gray-200 h-12 w-full"
                        placeholder="Tuman / hudud"
                      />
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-center w-full">
                      <Input
                        name="address"
                        required
                        className="border border-b-gray-200 h-12 w-full"
                        placeholder="Manzil (masalan: Yunusobod 13-kvartal)"
                      />
                      <Input
                        name="additional"
                        className="border border-b-gray-200 h-12 w-full"
                        placeholder="Qo‘shimcha ma’lumot (agar bo‘lsa)"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-8">
                <h2 className="p-2 pb-3 font-semibold">
                  Yetkazib berish shartlari
                </h2>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <div
                    onClick={() => setfaolik("delivery")}
                    className={`cursor-pointer w-full border rounded-xl h-12 flex items-center justify-between px-4 transition ${
                      faolik === "delivery"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                  >
                    Yetkazib berish
                    {faolik === "delivery" && <span></span>}
                  </div>

                  <div
                    onClick={() => setfaolik("pickup")}
                    className={`cursor-pointer w-full border rounded-xl h-12 flex items-center justify-between px-4 transition ${
                      faolik === "pickup"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                  >
                    Do'kondan olib ketish
                    {faolik === "pickup" && <span></span>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition"
            >
              Keyingisi
            </button>
          </div>
        </form>

        <div className="w-full md:max-w-[700px] border border-green-600 p-4 overflow-x-auto rounded-md">
          <h2 className=" text-2xl font-black">Buyurtmadagi mahsulotlar</h2>

          <div>
            <div className="col-span-2 p-2 max-h-[600px] overflow-x-auto border-r">
              {cartItem.length > 0 ? (
                <div className="space-y-6">
                  {cartItem.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 border border-gray-200 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center gap-4 w-full md:w-auto flex-1 min-w-0">
                        <div className="flex-shrink-0 w-15 h-15">
                          <Image
                            src={item.imageUrl}
                            width={60}
                            height={60}
                            alt={item.name}
                            className="rounded-lg object-cover w-full h-full"
                          />
                        </div>
                        <p className="font-medium text-gray-800 truncate">
                          {item.name}
                        </p>
                      </div>

                      <p className="text-lg font-semibold text-gray-700 whitespace-nowrap px-2 md:px-0">
                        {(item.count * item.price).toLocaleString("ru")} so'm
                      </p>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => dispatch(minusCount(item.id))}
                          className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={item.count <= 1}
                        >
                          -
                        </button>
                        <span className="w-6 text-center font-medium text-gray-900">
                          {item.count}
                        </span>
                        <button
                          onClick={() => dispatch(plusCount(item.id))}
                          className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => remove(item.id)}
                        className="text-red-500 font-medium border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors whitespace-nowrap"
                      >
                        O'chirish
                      </button>
                    </div>
                  ))}
                  <div>
                    <Button>yuborish</Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <h2 className="text-2xl font-bold">
                    Savatchada hech nima yo‘q
                  </h2>
                  <Link href="/">
                    <button className="mt-6 px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">
                      Xarid qilish
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rasmiylashtrish;
