"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

export async function addPost(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      body: formData.get("body") as string,
    },
  });

  revalidatePath("/posts");
}
