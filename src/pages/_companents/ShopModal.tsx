"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { minusCount, plusCount, removeCart } from "@/store/slice/card.slice";
import { RootState } from "@/store/type";

type Props = {
  savatModal: boolean;
  setSavatModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShopModal: React.FC<Props> = ({ setSavatModal, savatModal }) => {
  const cartItem = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (savatModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [savatModal]);

  const remove = (id: number) => {
    dispatch(removeCart(id));
  };

  const totalAmount = cartItem.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  );

  return (
    <AnimatePresence>
      {savatModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={() => setSavatModal(false)}
          />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative bg-white w-full max-w-6xl h-[90vh] overflow-hidden text-black shadow-2xl rounded-2xl z-50 grid grid-cols-3"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 bg-gray-100 text-black text-2xl px-3 py-1 rounded-full hover:bg-gray-200 z-50"
              onClick={() => setSavatModal(false)}
            >
              &times;
            </motion.button>

            <div className="col-span-2 p-8 overflow-y-auto border-r">
              <h2 className="text-3xl font-bold mb-6">Savatchangiz</h2>

              {cartItem.length > 0 ? (
                <div className="space-y-6">
                  <AnimatePresence>
                    {cartItem.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-between gap-6 border p-4 rounded-xl shadow-sm"
                      >
                        <div className="flex items-center gap-4">
                          <motion.div whileHover={{ scale: 1.05 }}>
                            <Image
                              src={item.imageUrl}
                              width={70}
                              height={70}
                              alt={item.name}
                              className="rounded-lg"
                            />
                          </motion.div>
                          <p className="text-lg font-medium">{item.name}</p>
                        </div>

                        <p className="text-lg font-semibold whitespace-nowrap">
                          {(item.count * item.price).toLocaleString("ru")} so‘m
                        </p>

                        <div className="flex items-center gap-2">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => dispatch(minusCount(item.id))}
                            className="w-10 h-10 border rounded-lg text-lg hover:bg-gray-100"
                          >
                            -
                          </motion.button>
                          <p className="w-6 text-center">{item.count}</p>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => dispatch(plusCount(item.id))}
                            className="w-10 h-10 border rounded-lg text-lg hover:bg-gray-100"
                          >
                            +
                          </motion.button>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => remove(item.id)}
                          className="text-red-500 border px-3 py-1 rounded-lg hover:bg-red-50"
                        >
                          O‘chirish
                        </motion.button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <h2 className="text-2xl font-bold">
                    Savatchada hech nima yo‘q
                  </h2>
                  <Link href="/">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50"
                    >
                      Xarid qilish
                    </motion.button>
                  </Link>
                </motion.div>
              )}
            </div>

            <div className="col-span-1 p-8 bg-gray-50 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-4">Buyurtma xulosasi</h3>
                <p className="text-gray-600 mb-2">
                  Jami mahsulotlar: {cartItem.length} ta
                </p>
                <motion.p
                  key={totalAmount}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-gray-600 mb-2"
                >
                  Umumiy summa:{" "}
                  <span className="font-semibold text-black">
                    {totalAmount.toLocaleString("ru")} so‘m
                  </span>
                </motion.p>
              </div>
              <Link href={"/rasmiylashtrish"}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSavatModal(false)}
                  className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                >
                  Buyurtmani rasmiylashtirish
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShopModal;