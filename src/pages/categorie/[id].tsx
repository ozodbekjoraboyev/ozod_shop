"use client";
import ProduktCard from "@/companents/ProduktCard";
import { CardsDataType } from "@/type/Types";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function CategorieProduct() {
  const [categoriaPage, setCategoriaPage] = useState<CardsDataType[]>([]);
  const params = useParams();
  if (!params) return null; // yoki loading ko‘rsatish
  const id = params.id;
  useEffect(() => {
    axios
      .get(
        `https://nt.softly.uz/api/front/products?categoryId=${id}&page=1&limit=10`
      )
      .then((res) => {
        console.log(res.data.items);
        setCategoriaPage(res.data.items);
      });
  }, [id]);
  if (categoriaPage.length === 0) {
    return (
      <div className="mx-auto container text-center mt-20 text-4xl ">
        Malumot Yoq
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4 container w-full mx-auto px-6 py-4">
      {categoriaPage.map((item) => {
        return (
          <>
            <ProduktCard item={item} key={item.id} />
          </>
        );
      })}
    </div>
  );
}

export default CategorieProduct;
