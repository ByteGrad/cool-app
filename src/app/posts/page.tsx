import PostsList from "@/components/posts-list";

export default async function PostsPage() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const response = await fetch(
    `https://dummyjson.com/posts?limit=${randomNumber}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  const data = await response.json();

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-5xl font-semibold mb-7">All posts</h1>

      <PostsList posts={data.posts} />
    </main>
  );
}
