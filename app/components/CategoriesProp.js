"use client"
import { useState } from "react";
import { RxDotsHorizontal } from "react-icons/rx"
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const CategoriesProp = ({ headline, category, bgprimary, id }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => setIsOpen(!isOpen);

    return (
        <>
            <div className={`w-[22rem] h-auto ${bgprimary} place-self-center rounded-2xl cursor-pointer`} onClick={handleIsOpen}>
                <div className="flex text-white justify-between mx-4 my-4">
                    <h2 className="flex font-semibold capitalize">{headline}</h2>
                    <RxDotsHorizontal className="text-3xl" />
                </div>
            </div>
            <div className="place-self-center">
                <ul className={`${isOpen ? "block " : "hidden"} w-[20rem] h-auto bg-white border py-2 px-4`}>
                    <li className="flex justify-between">
                        <Link href={`/categories/${id}`} className="pt-1 text-black">{category}</Link>
                        <IoIosArrowForward className="my-2" />
                    </li>
                </ul>
            </div>
        </>
    );
}

export default CategoriesProp;