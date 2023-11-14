import SubmitBtn from "./submit-btn";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export default function AddPostForm() {
  const addPost = async (formData: FormData) => {
    "use server";

    await new Promise((resolve) => setTimeout(resolve, 2000));

    await prisma.post.create({
      data: {
        title: formData.get("title") as string,
        body: formData.get("body") as string,
      },
    });

    revalidatePath("/posts");
  };

  return (
    <form
      action={addPost}
      className="flex flex-col rounded max-w-[500px] mb-10 mx-auto space-y-2"
    >
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="border rounded h-10 px-3"
        required
      />
      <textarea
        name="body"
        placeholder="Body"
        className="border rounded p-3"
        rows={5}
        required
      />

      <SubmitBtn />
    </form>
  );
}
