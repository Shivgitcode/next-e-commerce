import prisma from "@/PrismaInitialize";
import { categories } from ".";

const productsData = async (name: string) => {
    const products = await prisma.product.findMany({
        include: {
            category: true
        },
        where: {
            category: {
                name: name
            }
        }
    });
    return products;
}



export default productsData;