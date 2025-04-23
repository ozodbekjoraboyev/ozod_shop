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
import { ButtonType, CatgoriData } from "@/type/Types";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function CategorieProduct() {
  const [categoriaPage, setCategoriaPage] = useState<CatgoriData[]>([]);
  const [totalItems, setTotalItems] = useState<ButtonType | null>(null);

  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 4;

  const id = params?.id;

  useEffect(() => {
    axios
      .get(
        `https://nt.softly.uz/api/front/products?categoryId=${id}&page=${page}&limit=${limit}`
      )
      .then((res) => {
        setCategoriaPage(res.data.items);
        setTotalItems(res.data);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
      });
  }, [id, page, limit]);

  const totalPages = Math.ceil(
    (totalItems?.totalItems || 0) / (totalItems?.limit || 1)
  );

  if (!totalItems) {
    return <div className="text-center mt-20 text-2xl">Yuklanmoqda...</div>;
  }

  if (categoriaPage.length === 0) {
    return <div className="text-center mt-20 text-2xl">Mahsulot topilmadi</div>;
  }

  const changePage = (newPage: number) => {
    router.push(`/categorie/${id}?page=${newPage}&limit=${limit}`);
  };
  return (
    <div className="container mx-auto px-6 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoriaPage.map((item) => (
          <ProduktCard item={item} key={item.id} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-6 justify-center">
          <PaginationContent>
            {page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    changePage(page - 1);
                  }}
                />
              </PaginationItem>
            )}
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={page === index + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    changePage(index + 1);
                  }}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            {page < totalPages && (
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    changePage(page + 1);
                  }}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}

export default CategorieProduct;
