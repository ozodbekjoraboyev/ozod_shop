import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "../_companents/Loading";
import Cards from "../_companents/Cards";
import { useParams } from "next/navigation";
import { ProduktIdType } from "@/type/Types";
import { Map, Placemark, YMaps } from "@iminside/react-yandex-maps";
import { GetServerSidePropsContext } from "next";



export const getServerSideProps = async ({
  params
}:GetServerSidePropsContext) => {
  const res = await fetch(
    `https://nt.softly.uz/api/front/products/${params?.id}`
  );
  const produktId = await res.json();
  return { props: { produktId } };
};


function Product({produktId}:any) {

  const [lokation, setLokation] = useState<{
    latitude: number;
    longitude: number;
  }>();
  const [address, setAddress] = useState<string | null>(null);

  const [loading, setloading] = useState<boolean>(false);





  if (!produktId) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <Loading />
      </div>
    );
  }

  const getAddressFromCoords = async (lat: number, lon: number) => {
    try {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
      );
      const address = res.data.display_name;
      console.log("Manzil:", address);
      return address;
    } catch (err) {
      console.error("Reverse geocoding xatosi:", err);
      return null;
    }
  };

  return (
    <div>
      <div className="container mx-auto py-10 px-4 ">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              width={400}
              height={400}
              src={produktId.imageUrl}
              alt={produktId.name}
              className="rounded-2xl shadow-lg object-cover max-w-full"
            />
          </div>

          {/* Mahsulot haqida ma'lumot */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {produktId.name}
            </h1>
            <p className="text-gray-700 mb-4 text-base leading-relaxed">
              {produktId.description}
            </p>

            <p className="text-2xl font-semibold text-green-600 mb-2">
              ${produktId.price}
            </p>

            <p
              className={`font-medium ${
                produktId.stock > 0 ? "text-blue-600" : "text-red-600"
              }`}
            >
              {produktId.stock > 0 ? "Sotuvda mavjud" : "Sotuvda yo‘q"}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-2 bg-amber-500 text-white rounded-2xl hover:bg-amber-600 transition shadow">
                Xarid qilish
              </button>
              <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-2xl hover:bg-gray-300 transition shadow">
                Savatga qo‘shish
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Cards />
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            setloading(true);
            navigator.geolocation.getCurrentPosition(
              async (data) => {
                const coords = {
                  latitude: data.coords.latitude,
                  longitude: data.coords.longitude,
                };
                setLokation(coords);

                const address = await getAddressFromCoords(
                  coords.latitude,
                  coords.longitude
                );
                setAddress(address);

                setloading(false);
              },
              (error) => {
                console.log(error);
                setloading(false);
              }
            );
          }}
          className=" bg-blue-700 rounded text-center p-2 text-white font-bold text-2xl"
        >
          Meni top
        </button>
        {address && (
          <p className="text-lg font-medium text-gray-700 mt-4">
            Sizning manzilingiz: {address}
          </p>
        )}

        <YMaps>
          <Map
            className="max-w-[900px] h-[500px] p-2 m-auto bg-green-600"
            state={{
              center: lokation
                ? [lokation?.latitude, lokation?.longitude]
                : [41.2995, 69.2401],
              zoom: 15,
            }}
          >
            {lokation && (
              <Placemark geometry={[lokation?.latitude, lokation?.longitude]} />
            )}
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default Product;
