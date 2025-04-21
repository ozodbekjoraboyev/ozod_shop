"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/type";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";
import userIcon from "../assets/icons/user.svg";
import RegisterForm from "./LoginForm";

export default function LoginDialog() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const user = useSelector((state: RootState) => state.authSlice.user);
  const name = user?.name;

  if (!mounted) return null; // ❗ Hydration muammosini yechadi

  return (
    <>
      {name ? (
        <Link href="/profile">
          <div className="flex flex-col items-center cursor-pointer">
            <Image width={30} height={30} src={userIcon} alt="user" />
            <p>{name}</p>
          </div>
        </Link>
      ) : (
        <div onClick={() => setOpen(true)} className="flex flex-col items-center cursor-pointer">
          <Image width={30} height={30} src={userIcon} alt="user" />
          <p>Kirish</p>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Kirish</DialogTitle>
          </DialogHeader>
          <RegisterForm onOpenChange={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
}
