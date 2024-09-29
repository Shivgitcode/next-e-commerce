"use server"
import prisma from "@/PrismaInitialize";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth/next";

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
    const session = await getServerSession(authOptions as NextAuthOptions);
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

const cartItems = async () => {
    const session = await getServerSession(authOptions);
    const findUser = await prisma.user.findFirst({
        include: {
            CartItem: true
        },
        where: {
            email: session?.user?.email
        }
    });

    if (!findUser) {
        return;
    }

    const items = await prisma.cartItem.findMany({
        include: {
            product: true
        },
        where: {
            userId: findUser?.id

        }
    })

    return items;





}


const deleteCartItems = async (id: string) => {

    await prisma.cartItem.delete({
        where: {
            id: id
        }
    })

}



export { productsData, oneProduct, addToCart, cartItems, deleteCartItems };