"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/store/slice/login";

export default function ReduxWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false); // ✅

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");

    if (token && user) {
      dispatch(
        login({
          accessToken: token,
          user: JSON.parse(user),
        })
      );
    }

    setLoaded(true); // 🔑
  }, [dispatch]);

  if (!loaded) return null; // Redux yuklanmagan bo‘lsa, hech narsa render qilmaydi

  return <>{children}</>;
}
