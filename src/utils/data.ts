import prisma from "@/PrismaInitialize";
import { getServerSession } from "next-auth";

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

const oneProduct = async (id: string) => {
    const product = await prisma.product.findFirst({
        where: {
            id
        }
    })
    return product
}

const addToCart = async (id: string) => {
    console.log(id)
    const session = await getServerSession();
    if (!session?.user?.email) {
        throw new Error("User not authenticated");
    }

    const findUser = await prisma.user.findFirst({
        where: {
            email: session.user.email
        }
    });

    if (!findUser) {
        throw new Error("User not found");
    }

    await prisma.cartItem.create({
        data: {
            quantity: 1,
            productId: id,
            userId: findUser.id
        }
    });
}



export { productsData, oneProduct, addToCart };