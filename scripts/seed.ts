import { PrismaClient } from "@prisma/client";
import { categories } from "./data";

const database = new PrismaClient();

async function main() {
    try {
        await database.category.deleteMany();
        console.log('Deleted records in category table');
    
        await database.$queryRaw`ALTER TABLE Category AUTO_INCREMENT = 1`;
        console.log('reset category auto increment to 1');
    
        await database.category.createMany({
          data: categories,
        });
        console.log('Added category data');
    
        console.log("Success");
    } catch (error) {
        console.log("error seeding the db categories", error);
    } finally {
        await database.$disconnect();
    }
}

main();