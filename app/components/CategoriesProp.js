"use client"
import { useState } from "react";
import { RxDotsHorizontal } from "react-icons/rx"
import { IoIosArrowForward } from "react-icons/io";

const CategoriesProp = ({headline, categorie }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => setIsOpen(!isOpen);

    return ( 
        <div className="w-[22rem] h-14 bg-pink-600 place-self-center rounded-2xl cursor-pointer" onClick={handleIsOpen}>
            <div className="flex text-white justify-center gap-x-52 my-4">
            <h2 className="flex font-semibold">{headline}</h2>
            <RxDotsHorizontal  className="text-3xl"/>
            </div>
                <ul className={`${isOpen ? "grid" : "hidden"} w-[20rem] h-auto border mx-4 gap-y-2 py-2 px-4`}>
                    <li className="flex justify-between">
                        <p>{categorie}</p>
                        <IoIosArrowForward className="mt-1"/>
                    </li>
                </ul>
            </div>
     );
}
 
export default CategoriesProp;