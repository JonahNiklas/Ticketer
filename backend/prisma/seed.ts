import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userData = [
  {
    id: 500,
    firstName: 'Herman',
    lastName: 'Seternes',
    email: 'hermahs@stud.ntnu.no',
    password: 'YeetYeet',
  },
  {
    id: 501,
    firstName: 'Johan',
    lastName: 'Bjerkem',
    email: 'johabjer@stud.ntnu.no',
    password: 'GreatestPasswordEver',
  },
  {
    id: 502,
    firstName: 'Jonah',
    lastName: 'Wiecek',
    email: 'jnwiecek@stud.ntnu.no',
    password: 'Password123',
  },
  {
    id: 503,
    firstName: 'Bawan',
    lastName: 'Nuri',
    email: 'bawanfn@stud.ntnu.no',
    password: 'Trondheim',
  },
  {
    id: 504,
    firstName: 'Turid',
    lastName: 'Grasrot',
    email: 'turid@grasrot.no',
    password: '321drossaP',
  },
  {
    id: 505,
    firstName: 'Tale',
    lastName: 'Stormark',
    email: 'tmstorma@stud.ntnu.no',
    password: 'Test123',
  },
  {
    id: 506,
    firstName: 'Kristine',
    lastName: 'Johannessen',
    email: 'kristineJo@gmail.com',
    password: 'Kristinekristine123',
  },
  {
    id: 507,
    firstName: 'Kir',
    lastName: 'truhacev',
    email: 'kirt@stud.ntnu.no',
    password: 'Kir12345',
  },
  {
    id: 508,
    firstName: 'Jørgen',
    lastName: 'Wiik',
    email: 'jorgerw@stud.ntnu.no',
    password: 'Jørg1234',
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
    category: 'Concert',
    price: 600.00,
    authorId: 500,
  },
  {
    timeOfEvent: new Date(2022, 4, 12),
    city: 'Trondheim',
    venue: 'Samfundet',
    isActive: true,
    forSale: true,
    title: 'Brenn Konsert',
    description: 'Brenn spiller sitt nyeste album "Vandrer på Solskinn"',
    category: 'Concert',
    price: 240.00,
    authorId: 501,
  },
  {
    timeOfEvent: new Date(2022, 4, 29),
    city: 'Trondheim',
    venue: 'Samfundet',
    isActive: true,
    forSale: true,
    title: 'Kvelertak Konsert',
    description: 'Kvelertak kommer endelig til Trondheim!',
    category: 'Concert',
    price: 399.00,
    authorId: 501,
  },
  {
    timeOfEvent: new Date(2022, 3, 14),
    city: 'Trondheim',
    venue: 'Trondheim',
    isActive: true,
    forSale: true,
    title: 'Pie Day',
    description: 'Happy Pie Day!',
    category: 'Other',
    price: 1.00,
    authorId: 501,
  },
  {
    timeOfEvent: new Date(2022, 5, 4),
    city: 'Trondheim',
    venue: 'Spektrum',
    isActive: true,
    forSale: true,
    title: 'Utdanningsmesse',
    description: 'Det største utdanningmesse i Trøndelag',
    category: 'Other',
    price: 100.00,
    authorId: 507,
  },
  {
    timeOfEvent: new Date(2022, 20, 7),
    city: 'Trondheim',
    venue: 'Arena',
    isActive: true,
    forSale: true,
    title: 'Lady Gaga konsert i Trondheom',
    description: 'Lady Gaga kommer til Trondheim!',
    category: 'Concert',
    price: 700.00,
    authorId: 507,
  },
  {
    timeOfEvent: new Date(2022, 7, 4),
    city: 'Trondheim',
    venue: 'Samfundet',
    isActive: true,
    forSale: true,
    title: 'Ka2',
    description: 'Selger Ka2 billetter til fullpris, inkludert backstage-tilgang! Dette vil du ikke gå glipp av!!',
    category: 'Concert',
    price: 500.00,
    authorId: 505,
  },
  {
    timeOfEvent: new Date(2022, 11, 6),
    city: 'Oslo',
    venue: 'Oslo spectrum',
    isActive: true,
    forSale: true,
    title: 'Dua Lipa',
    description: 'Dua Lipa er på turné og kommer til Oslo! Jeg selger en billett til konserten. Dette blir bra:DD',
    category: 'Concert',
    price: 800.00,
    authorId: 505,
  },
  {
    timeOfEvent: new Date(2022, 9, 22),
    city: 'Stavanger',
    venue: 'Folken',
    isActive: true,
    forSale: true,
    title: 'Kaizers Orchestra',
    description: 'Comeback konsert av Kaizers Orchestra på Folken!! De har ikke spilt sammen på mange år, så dette vil du få med deg!',
    category: 'Concert',
    price: 350.00,
    authorId: 506,
  },
  {
    timeOfEvent: new Date(2022, 9, 22),
    city: 'London',
    venue: 'Londons venue',
    isActive: true,
    forSale: true,
    title: 'Adele',
    description: 'Jeg selger en billett til Adele sin største konsert i London. Løp og kjøp!',
    category: 'Concert',
    price: 350.00,
    authorId: 506,
  },
  {
    timeOfEvent: new Date(2022, 10, 8),
    city: 'Oslo',
    venue: 'Oslo spectrum',
    isActive: true,
    forSale: true,
    title: '40 år med vondt brennvin',
    description: 'Avskjedskonsert med Vazelina Bilopphøggers',
    category: 'Concert',
    price: 450.00,
    authorId: 508,
  },
  {
    timeOfEvent: new Date(2022, 12, 1),
    city: 'Trondheim',
    venue: 'Torget',
    isActive: true,
    forSale: true,
    title: 'Den store kakedagen',
    description: 'Opplev kaker fra hele verden',
    category: 'Other',
    price: 100.00,
    authorId: 508,
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
