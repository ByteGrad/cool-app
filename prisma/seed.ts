import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const posts = [
  {
    id: 1,
    title: "Just a random post",
    body: "This is an awesome post, isn't it?",
  },
  {
    id: 2,
    title: "Another cool post",
    body: "Super cool post!",
  },
  {
    id: 3,
    title: "Amazing post",
    body: "This is a great post for sure.",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const post of posts) {
    const result = await prisma.post.upsert({
      where: { id: post.id },
      update: {},
      create: {
        id: post.id,
        title: post.title,
        body: post.body,
      },
    });
    console.log(`Created post with id: ${result.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
