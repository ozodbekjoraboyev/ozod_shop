import ProduktCard from "@/companents/ProduktCard";
import Loading from "./Loading";
import { useState } from "react";


function Cards() {

  const [products, setProducts] = useState<any>()

  const getServerSideProps = async () => {
    const res = await fetch(
      "https://nt.softly.uz/api/front/products?page=1&limit=10"
    );
    const products = await res.json();
    setProducts(products);
  };

  getServerSideProps();

  if (!products || !products.items) {
    return <Loading />;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {products.items?.map((item: any) => (
        <ProduktCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Cards;
