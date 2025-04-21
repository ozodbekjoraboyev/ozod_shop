"use client";

import api from "@/api/api";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "@/store/slice/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Ism kamida 2 ta harfdan iborat bo'lishi kerak" }),
  email: z.string().email({ message: "Email noto‘g‘ri" }),
  password: z.string().min(6, { message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak" }),
});

type RegisterFormType = z.infer<typeof formSchema>;

export default function RegisterForm({ onOpenChange }: { onOpenChange: (open: boolean) => void }) {
  const form = useForm<RegisterFormType>({
    resolver: zodResolver(formSchema),
  });

  const dispatch = useDispatch();

  function onSubmit(values: RegisterFormType) {
    api
      .post("/api/auth/register", values)
      .then((res) => {
        onOpenChange(false);
        dispatch(login(res.data)); // Reduxga user va tokenni yuklash

        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.error("Ro'yxatdan o'tishda xatolik:", err);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ism</FormLabel>
              <FormControl>
                <Input placeholder="Ismingiz" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
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
                <Input type="password" placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Ro'yxatdan o'tish
        </Button>
      </form>
    </Form>
  );
}
