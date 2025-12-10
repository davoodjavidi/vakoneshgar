"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const result = await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      author: {
        connect: {
          email: "javidi@gmail.com",
        },
      },
    },
  });

  revalidatePath("/dashboard/posts");
  redirect(`/dashboard/posts`); // Navigate to the new post page
}

export async function loginAction(formData: FormData) {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  // Test it out:
  console.log(rawFormData);
}

export async function createUser(formData: FormData) {
  await prisma.user.create({
    data: {
      name: formData.get("name") as string,
      email: (formData.get("email") as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
      nationalId: Number(formData.get("nationalId")),
      placeOfBirth: formData.get("placeOfBirth") as string,
    },
  });

  console.log(formData);

  revalidatePath("/sign-up");
}

export async function UpdateProfile(formData: FormData) {
  const id = Number(formData.get("id"));
  await prisma.user.update({
    where: { id },
    data: {
      name: formData.get("name") as string,
      placeOfBirth: formData.get("placeOfBirth") as string,
    },
  });

  revalidatePath("/dashboard/account");
}

export async function deletePostAction(id: number) {
  await prisma.post.delete({ where: { id } });
  revalidatePath("/dashboard/posts");
}
