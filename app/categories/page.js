"use client"
import { useContext, useState } from "react";
import CategoriesProp from "../components/CategoriesProp";
import HeadlinePage from "../components/HeadlinePage";
import TokenContext from "../contexts/TokenContext";
import { RxDotsHorizontal } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const getCategories = async (token) => {

    const result = await fetch(
        "https://api.spotify.com/v1/browse/categories", {
        // method: "GET",
        headers: {
            //  Accept: "application/json",
            //  "Content-Type": "application/json",
            Authorization: "Bearer " + token.access_token,
            //if you remove .access_token, the 403 error changes into 400 - bad request
        }
    })
    // console.log(await result)
    if (!result.ok) { throw new Error("Failed to fetch albums") }
    return await result.json()

}

const bgColor = ["bg-[#FF1168]", "bg-[#E54028]", "bg-[#F18D05]", "bg-[#F2BC06]", "bg-[#5EB11C]", "bg-[#3A7634]", "bg-[#0ABEBE]", "bg-[#00A1CB]", "bg-[#115793]"]

const Categories = async () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => setIsOpen(!isOpen);

    const [token] = useContext(TokenContext)

    const categories = await getCategories(token);
    // console.log(categories)

    return (
        <main className="grid gap-y-4 pb-20">
            <HeadlinePage headline={"Categories"} />
            {categories.categories.items.map((category, index) => (
                //                                                         modulus - division remainder - modulus efterlader altid noget tilbage  
                // <CategoriesProp key={category.id} headline={category.name} bgprimary={bgColor[index % bgColor.length]} category={category.name} />
                <>
                    <div className={`w-[22rem] h-auto ${bgColor[index % bgColor.length]} place-self-center rounded-2xl cursor-pointer`} onClick={handleIsOpen}>
                        <div className="flex text-white justify-between mx-4 my-4">
                            <h2 className="flex font-semibold capitalize">{category.name}</h2>
                            <RxDotsHorizontal className="text-3xl" />
                        </div>
                    </div>
                    <div className="place-self-center">
                        <ul className={`${isOpen ? "block " : "hidden"} w-[20rem] h-auto bg-white border py-2 px-4`}>
                            <li className="flex justify-between">
                                <Link href={`/categories/${category.id}`} className="pt-1">{category.name}</Link>
                                <IoIosArrowForward className="my-2" />
                            </li>
                        </ul>
                    </div>
                </>
            ))}
        </main>
    );
}

export default Categories;