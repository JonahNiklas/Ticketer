import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userData = [
  {
    id: 500,
    firstName: 'Herman',
    lastName: 'Seternes',
    userName: 'hermahs',
    email: 'hermahs@stud.ntnu.no',
    password: 'YeetYeet',
  },
  {
    id: 501,
    firstName: 'Johan',
    lastName: 'Bjerkem',
    userName: 'johabjer',
    email: 'johabjer@stud.ntnu.no',
    password: 'GreatestPasswordEver',
  },
  {
    id: 502,
    firstName: 'Jonah',
    lastName: 'Wiecek',
    userName: 'johabjer',
    email: 'jnwiecek@stud.ntnu.no',
    password: 'Password123',
  },
];

const postData = [
  {
    timeOfEvent: new Date(2022, 2, 22),
    city: 'Trondheim',
    venue: 'My home',
    isActive: true,
    forSale: true,
    title: 'My birthday party :)',
    description: 'My amazing birthday party. Mom will make cake :)',
    category: 'birthday',
    price: 500.00,
    authorId: 500,
  },
  {
    timeOfEvent: new Date(2022, 5, 13),
    city: 'Trondheim',
    venue: 'Trondheim Arena',
    isActive: true,
    forSale: true,
    title: 'Broiler Konsert',
    description: 'Konsert med bare sangene fra Broiler Beginning',
    category: 'Consert',
    price: 600.00,
    authorId: 500,
  },
];

async function main() {
  console.log('starting seeding');
  console.log('----------------');
  console.log('seeding users');
  const createManyUsers = await prisma.user.createMany({
    data: userData,
  });

  console.log(`Seeding user result: ${createManyUsers}`);

  console.log('seeding posts');
  const createManyPosts = await prisma.post.createMany({
    data: postData,
  });

  console.log(`Seeding post result: ${createManyPosts}`);

  console.log('seeding finished');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
