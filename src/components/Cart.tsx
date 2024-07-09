import { products } from "@/utils";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function Cart() {
    return (
        <div className="w-[50%]">
            <h1 className=" text-[32px] font-bold text-center">Your Cart</h1>
            <div className="w-full ">
                <ul className="flex flex-col items-start gap-3 pb-5 border-b">
                    {
                        products.map((product) => (
                            <li className="flex justify-between items-center w-full py-[10px] px-[20px]">
                                <div className="flex items-center ">
                                    <div className="relative w-[100px] h-[100px]">
                                        <Image src={product.img} alt="hello" fill objectFit="contain"></Image>
                                    </div>
                                    <div>
                                        <h2>{product.name}</h2>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center mr-[40px]">
                                        <p className="font-bold">{product.sale} $</p>
                                    </div>
                                    <div className="flex items-center gap-3 ">
                                        <span className=" rounded-xl border bg-[#f6f6f6] px-[15px] py-[5px] cursor-pointer">1</span>
                                        <RiDeleteBin6Line className=" hover:fill-red-500 transition-all "></RiDeleteBin6Line>
                                    </div>
                                </div>

                            </li>
                        ))

                    }

                </ul>
                <div className="flex flex-col items-end mr-[125px] pb-5">
                    <div className="flex justify-end pt-5 text-[16px] font-bold gap-12 mb-[20px]">
                        <p>Total:</p>
                        <p className="font-medium">700 $</p>
                    </div>
                    <button className="bg-[#374151] text-white px-[15px] py-[10px] rounded-lg">Checkout</button>
                </div>
            </div>

        </div>
    )
}