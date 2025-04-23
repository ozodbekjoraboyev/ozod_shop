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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { login } from "@/store/slice/login";

const formSchema = z.object({
  email: z
    .string()
    .min(2, { message: "Email must be at least 2 characters." })
    .email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

type LoginFormType = z.infer<typeof formSchema>;

export function LoginForm({
  onOpenChange,
}: {
  onOpenChange: (open: boolean) => void;
}) {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(formSchema),
  });

  const dispatch = useDispatch();

  // function onSubmit(values: LoginFormType) {
  //   api
  //     .post("/auth/login", values)
  //     .then((res) => {
  //       onOpenChange(false);
  //       dispatch(login(res.data));

  //       localStorage.setItem("accessToken", res.data.accessToken);
  //       localStorage.setItem("user", JSON.stringify(res.data.user));
  //     })
  //     .catch((err) => {
  //       console.error("Login error:", err);
  //     });
  // }
  const onSubmit = (values: LoginFormType) => {
    api
      .post("/auth/login", values)
      .then((res) => {
        const payload = {
          accessToken: res.data.accessToken,
          user: {
            id: res.data.user.id,
            name: res.data.user.name,
          },
        };

        dispatch(login(payload));
        localStorage.setItem("user", JSON.stringify(payload.user));
        localStorage.setItem("accessToken", payload.accessToken);
        onOpenChange(false);
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage  />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
