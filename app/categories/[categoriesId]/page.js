"use client"
import TokenContext from "@/app/contexts/TokenContext"
import { useContext } from "react"


const getCategoriesDetail = async (token, categoriesId) => {

    const result = await fetch(
        `https://api.spotify.com/v1/browse/categories/${categoriesId}`, {
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

const CategoriesDetail = async ({ params: { categoriesId } }) => {

    const [token] = useContext(TokenContext)

    const categoriesDetails = await getCategoriesDetail(token, categoriesId);
    console.log(categoriesDetails)

    return (
        <main className="grid">
            {categoriesDetails && (
                <>
                    <div className="w-full h-[25rem] relative bg-black">
                        <img src={categoriesDetails.icons[0].url} alt={categoriesDetails.name} className="w-full h-full absolute object-cover opacity-75" />
                    </div>
                    <div className="absolute pt-7 px-7">
                        <h1 className=" text-2xl font-medium text-white drop-shadow">{categoriesDetails.name}</h1>
                    </div>
                </>
            )}
        </main>
    );
}

export default CategoriesDetail;