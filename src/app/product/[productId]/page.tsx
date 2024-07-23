import { products } from "@/utils";
import { addToCart, oneProduct } from "@/utils/data";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { toast } from "sonner";

export default async function Product({ params }: { params: { productId: string } }) {

    const size = ["S", "M", "L", "XL"]
    const id = params.productId

    const product = await oneProduct(id)
    const addProduct = async () => {
        "use server";
        await addToCart(id)
        toast.success("successfully Added to cart", { position: "top-center", richColors: true })

    }




    return (
        <div className="flex w-full justify-between">
            <div className="min-w-[600px] h-[800px] relative mr-[20px]"><Image src={`${product?.img}`} alt="nothing" fill objectFit="cover"></Image></div>
            <div className="flex flex-col items-start ">
                <div className="mb-[30px]">
                    <h1 className="text-[28px] font-bold">{product?.desc}</h1>
                    <h2 className="text-[20px] text-[#376ed7] font-normal">{product?.name}</h2>
                </div>
                <div>
                    <div className="text-[24px] text-[#808080]">{product?.mrp}$</div>
                    <div className="text-[30px] font-bold">{product?.sale}$ <span className="text-[16px] text-[#008000] font-normal">{`(You will Save ${product?.mrp as number - (product?.sale as number)}$)`}</span></div>
                </div>
                <div className="w-full">
                    <div className="h-[1px] w-full my-[10px] bg-black"></div>
                    <div>
                        <h3 className="mb-[10px] text-[16px] font-bold">Sizes</h3>
                        <div className="flex">
                            {size.map(el => (
                                <button className=" border-2 rounded-[4px] py-[10px] px-[15px] mr-[10px] text-[13px]">{el}</button>
                            ))}

                        </div>

                    </div>
                    <div className="h-[1px] w-full my-[10px] bg-black"></div>
                </div>
                <div className="flex w-full justify-between my-[20px]">
                    <button className="p-[20px] w-full bg-black text-white text-[16px] font-bold rounded-[16px] hover:text-black hover:bg-white transition-all duration-100 border-2 border-black" onClick={addProduct}>Add To Cart</button><div className="ml-[20px] py-[10px] px-[15px] rounded-md    border-2 flex justify-center items-center"><CiHeart fontSize={"30"}></CiHeart></div>
                </div>
                <div className="h-[1px] w-full my-[10px] bg-black"></div>
                <div>
                    <h3 className="mt-[10px] font-bold">Product Information</h3>
                    <p className="text-[16px] w-[90%] my-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptas hic aspernatur vitae officiis accusantium praesentium numquam nesciunt, iusto aliquid incidunt autem nisi rem odit aliquam esse reiciendis! Quaerat, labore?</p>
                </div>
            </div>

        </div>
    )
}
