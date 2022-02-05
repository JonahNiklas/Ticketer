import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData = [
    {
        name: "test",
        email: "test@test.com"
    }
]

async function main() {
    console.log("starting seeding");
    for (const u of userData) {
        const user = await prisma.user.create({
            data: u
        });

        console.log(`created user with id: ${user.id}`);
    }

    console.log("seeding finished");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })