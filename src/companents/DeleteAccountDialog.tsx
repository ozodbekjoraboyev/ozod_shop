"use client";

import user from "../assets/icons/user.svg";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import api from "@/api/api";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "@/store/slice/login";
import { RootState } from "@/store/type";

export default function DeleteAccountDialog() {
  const [open, setOpen] = useState(false); // ✅ modal ochilganmi — shuni kuzatamiz
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dispatch = useDispatch();

  const onSubmit = (values: any) => {
    api.post("/api/auth/login", values).then((res) => {
      console.log(res.data);
      dispatch(userLogin(res.data)); // 🔄 Reduxga foydalanuvchini yozish
      setOpen(false); // ✅ Modalni yopish
    });
  };

  const name = useSelector((state: RootState) => state.authState.users?.name);
  console.log("Reduxdan name:", name);

  return (
    <div className="p-4 select-none">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {name ? (
            <div
              onClick={() => setOpen(true)}
              className="flex flex-col items-center cursor-pointer"
            >
              <Image width={30} height={30} src={user} alt="user" />
              <p>{name || "Kirish"}</p>
            </div>
          ) : (
            <div
              onClick={() => setOpen(true)}
              className="flex flex-col items-center cursor-pointer"
            >
              <Image width={30} height={30} src={user} alt="user" />
              <p>Kirish</p>
            </div>
          )}
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center font-bold text-2xl">
              Kirish yoki ro'yxatdan o'tish
            </DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parol</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Parol" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
