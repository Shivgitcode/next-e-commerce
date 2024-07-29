"use client";
import {
    CiHeart
} from "react-icons/ci"
import { addToCart } from "@/utils/data"
import { toast } from "sonner"
export default function AddtoCart({ id }: { id: string }) {
    const addProduct = async () => {
        // "use server";
        await addToCart(id)
        toast.success("successfully Added to cart", { position: "top-center", richColors: true })

    }
    return (
        <div className="flex w-full justify-between my-[20px]">
            <button className="p-[20px] w-full bg-black text-white text-[16px] font-bold rounded-[16px] hover:text-black hover:bg-white transition-all duration-100 border-2 border-black" onClick={addProduct}>Add To Cart</button><div className="ml-[20px] py-[10px] px-[15px] rounded-md    border-2 flex justify-center items-center"><CiHeart fontSize={"30"}></CiHeart></div>
        </div>

    )
}
