"use client";

import ProduktCard from "@/companents/ProduktCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ButtonType, CatgoriData } from "@/type/Types";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useState } from "react";
type CategoryType = {
  items: CatgoriData[];
  totalItems: number;
  limit: number;
  page: number;
};
export async function getServerSideProps(args: GetServerSidePropsContext) {
  console.log(args);
  const res = await axios.get(`https://nt.softly.uz/api/front/products`, {
    params: {
      page: args.query.page,
      limit: args.query.limit,
    },
  });
  return {
    props: {
      data: res.data,
    },
  };
}

function CategorieProduct({ data }: { data: CategoryType }) {
  const [totalItems, setTotalItems] = useState<ButtonType | null>(null);

  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 4;

  const totalPages = Math.ceil((data?.totalItems || 0) / (data?.limit || 1));

  const changePage = (newPage: number) => {
    router.push(`/categorie/${params.id}?page=${newPage}&limit=${limit}`);
  };
  return (
    <div className="container mx-auto px-6 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.items.map((item) => (
          <ProduktCard item={item} key={item.id} />
        ))}
      </div>

      {totalPages > 5 && (
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
// "use client";

// import ProduktCard from "@/companents/ProduktCard";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationPrevious,
//   PaginationNext,
// } from "@/components/ui/pagination";
// import { ButtonType, CatgoriData } from "@/type/Types";
// import axios from "axios";
// import { GetServerSidePropsContext } from "next";
// import { useRouter } from "next/router";
// import React, { useState } from "react";

// type CategoryType = {
//   items: CatgoriData[];
//   totalItems: number;
//   limit: number;
//   page: number;
// };

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const page = Number(context.query.page) || 1;
//   const limit = Number(context.query.limit) || 4;

//   const res = await axios.get(`https://nt.softly.uz/api/front/products`, {
//     params: { page, limit },
//   });

//   return {
//     props: {
//       data: res.data,
//     },
//   };
// }

// function CategorieProduct({ data }: { data: CategoryType }) {
//   const router = useRouter();
//   const page = Number(router.query.page) || 1;
//   const limit = Number(router.query.limit) || 4;
//   const id = router.query.id;

//   const totalPages = Math.ceil((data?.totalItems || 0) / (data?.limit || 1));

//   const changePage = (newPage: number) => {
//     router.push(`/categorie/${id}?page=${newPage}&limit=${limit}`);
//   };

//   return (
//     <div className="container mx-auto px-6 py-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {data.items.map((item) => (
//           <ProduktCard item={item} key={item.id} />
//         ))}
//       </div>

//       {totalPages > 1 && (
//         <Pagination className="mt-6 justify-center">
//           <PaginationContent>
//             {page > 1 && (
//               <PaginationItem>
//                 <PaginationPrevious
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     changePage(page - 1);
//                   }}
//                 />
//               </PaginationItem>
//             )}

//             {[...Array(totalPages)].map((_, index) => (
//               <PaginationItem key={index}>
//                 <PaginationLink
//                   href="#"
//                   isActive={page === index + 1}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     changePage(index + 1);
//                   }}
//                 >
//                   {index + 1}
//                 </PaginationLink>
//               </PaginationItem>
//             ))}

//             {page < totalPages && (
//               <PaginationItem>
//                 <PaginationNext
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     changePage(page + 1);
//                   }}
//                 />
//               </PaginationItem>
//             )}
//           </PaginationContent>
//         </Pagination>
//       )}
//     </div>
//   );
// }

// export default CategorieProduct;
