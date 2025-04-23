import ProduktCard from "@/companents/ProduktCard";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProduktType } from "@/type/Types";


function Cards() {

  const [products, setProducts] = useState<ProduktType[]>()
  useEffect(()=>{
    axios.get(  "https://nt.softly.uz/api/front/products?page=1&limit=10").then(res=>{
      setProducts(res.data.items)
    })
  },[])

  if (!products) {
    return <Loading />;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {products.map((item: any) => (
        <ProduktCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Cards;
