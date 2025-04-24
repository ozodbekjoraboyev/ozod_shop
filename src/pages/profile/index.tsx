import { RootState } from "@/store/type";
import { MoveLeft, Slash, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const id = useSelector((state: RootState) => state.authSlice.user?.id);
  const name = useSelector((state: RootState) => state.authSlice.user?.name);
  // const phone = useSelector((state: RootState) => state.authSlice.user?.phone);

  return (
    <div className="pb-32 container mx-auto px-4">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-gray-700 text-sm mb-6">
        <Link href="/" className="flex items-center gap-1 hover:underline">
          <MoveLeft size={20} />
          <span>Bosh sahifa</span>
        </Link>
        <Slash size={16} />
        <span className="text-blue-600 font-medium">Shaxsiy kabinet</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* User Info */}
        <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <User size={36} className="text-white" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">{name}</p>
              <p className="text-sm text-gray-500">+998 97 056 79 85</p>
            </div>
          </div>
          <hr className="border-gray-200 mb-4" />
          <ul className="space-y-2">
            <li className="text-sm text-gray-600">ID: {id}</li>
          </ul>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-1 h-full bg-gray-200 rounded-full" />
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-inner p-6 text-gray-500 text-center">
          Bu yerga keyinchalik boshqa ma’lumotlar, buyurtmalar tarixi yoki sozlamalar chiqishi mumkin.
        </div>
      </div>
    </div>
  );
}

export default Profile;
