'use client'

import ProduktCard from "@/companents/ProduktCard";
import Loading from "@/pages/_companents/Loading";
import { CatigoriesProductIdTYpe } from "@/type/Types";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function NavbarPage() {
  const [catigoriaId, setCatigoriaId] =
    useState<CatigoriesProductIdTYpe | null>(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://nt.softly.uz/api/front/products?page=${id}&limit=10`)
      .then((res) => {
        console.log(res.data);
        setCatigoriaId(res.data);
      })
      .catch((error) => {
        console.error("API dan xatolik:", error);
      });
  }, [id]);
  if (!catigoriaId) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!catigoriaId.items || catigoriaId.items.length === 0) {
    return <div className="text-center text-4xl mt-10">Ma’lumot yo‘q</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-32 mt-3">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {catigoriaId.items.map((item) => (
          <ProduktCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default NavbarPage;
