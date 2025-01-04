"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { HiOutlinePlus } from "react-icons/hi2";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const groupFormSchema = z.object({
  name: z.string().min(1),
});

function GroupForm() {
  const form = useForm<z.infer<typeof groupFormSchema>>({
    resolver: zodResolver(groupFormSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof groupFormSchema>) => {
    // Save to database...
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Group Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your group name..." {...field} />
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

export function NewGroup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="flex justify-center items-center cursor-pointer">
          <div className="flex flex-col justify-center items-center">
            <HiOutlinePlus className="text-3xl" />
            <p>Add New Group</p>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new group.</DialogTitle>
          <GroupForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
