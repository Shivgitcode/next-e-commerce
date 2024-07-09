import { categories } from "@/utils"
// import { products } from "@/utils"
import productsData from "@/utils/data"
import ItemCard2 from "@/components/ItemCard2"

export default async function Categories({ params }: { params: string[] }) {
    console.log(params)
    const products = await productsData(params.slugs[0])


    return (
        <div className="w-full flex flex-wrap gap-20 justify-between">
            {products.map(el => (
                <ItemCard2 el={el} key={el.id}></ItemCard2>
            ))}
        </div>
    )
}
