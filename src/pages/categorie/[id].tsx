"use client";
import ProduktCard from "@/companents/ProduktCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { CardsDataType } from "@/type/Types";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function CategorieProduct() {
  const [categoriaPage, setCategoriaPage] = useState<CardsDataType[]>([]);
  const [page, setPage] = useState<number>(1);

  const params = useParams(); // ✅ doim tepada turishi kerak
  const router = useRouter(); // ✅ hamisha hooklar yuqorida

  const { id } = router.query;

  useEffect(() => {
    if (!id) return; // ❗️Hook tashqarisida emas, ichida shart qil
    axios
      .get(
        `https://nt.softly.uz/api/front/products?categoryId=${id}&page=${page}&limit=10`
      )
      .then((res) => {
        console.log(res.data.items);
        setCategoriaPage(res.data.items);
      });
  }, [id, page]);

  if (!params || !id) {
    return <div className="text-center mt-20 text-2xl">Yuklanmoqda...</div>;
  }

  if (categoriaPage.length === 0) {
    return (
      <div className="mx-auto container text-center mt-20 text-4xl ">
        Ma'lumot yo‘q
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 container w-full mx-auto px-6 py-4">
      {categoriaPage.map((item) => (
        <ProduktCard item={item} key={item.id} />
      ))}
      <Pagination>
        <PaginationContent>
          <PaginationItem onClick={() => setPage(page - 1)}>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{page}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem onClick={() => setPage(page + 1)}>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default CategorieProduct;
