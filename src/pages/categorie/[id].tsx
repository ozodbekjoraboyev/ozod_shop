"use client";

import ProduktCard from "@/companents/ProduktCard";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { CatgoriData } from "@/type/Types";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

type CategoryType = {
  items: CatgoriData[];
  totalItems: number;
  limit: number;
  page: number;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log(context);

  const res = await axios.get(`https://nt.softly.uz/api/front/products`, {
    params: {
      page: context.query.page,
      limit: context.query.limit,
      categoryId: context.params?.id,
    },
  });

  return {
    props: {
      data: res.data,
    },
  };
}

function CategorieProduct({ data }: { data: CategoryType }) {
  const { id } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  const limit = Number(searchParams.get("limit") || 5);
  // const limit = Number(router.query.limit) || 4;
  // const id = router.query.id;

  const totalPages = Math.ceil((data?.totalItems || 0) / (data?.limit || 1));

  return (
    <div className="container mx-auto px-6 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.items.map((item) => (
          <ProduktCard item={item} key={item.id} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-6 justify-center">
          <PaginationContent>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <Link
                  href={`/categorie/${id}?page=${index + 1}&limit=${limit}`}
                >
                  <Button
                    variant={index + 1 === Number(page) ? "outline" : "ghost"}
                  >
                    {index + 1}
                  </Button>
                </Link>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}

export default CategorieProduct;
