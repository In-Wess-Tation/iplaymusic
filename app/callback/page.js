"use client";

import { useContext, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios"
import TokenContext from "../contexts/TokenContext";
import { useRouter } from "next/navigation";


const Callback = () => {

    const [token, setToken] = useContext(TokenContext);
    const router = useRouter();

    console.log(setToken)

    const seachParams = useSearchParams();
    const code = seachParams.get("code");
    console.log(code)

    useEffect(() => {
        axios.post(
            "/api/auth",
            JSON.stringify({code})
        )
        .then(response => {
            console.log(response)
            setToken(response.data)
            router.push("/featured")
        })
        .catch(err => console.log(err))
        /* fetch("http://localhost:3000/api/auth", {
            method: "POST",
            body: JSON.stringify({ code })
        })
        .then(response => {
            if (response.status === 201) {
                return response.json()
            }
            if (response.status === 500) {
                return response.text()
            }
        })
        .then(result => {
            console.log(result)
            // localStorage.setItem("access", JSON.stringify(result))
            // cookies().set("token", response.data.access_token)
        }) */
    }, []);

    return null;
}
 
export default Callback;



// import { useSearchParams } from "next/navigation";
// import { useEffect } from "react";

// const Callback = () => {

//     const searchParams = useSearchParams();
//     const code = searchParams.get("code");
//     console.log(code)

//     useEffect(() => {
//         fetch("http://localhost:3000/api/auth", {
//             method: "POST",
//             body: JSON.stringify({ code })
//         })
//         .then(response => response.json())
//         .then(result => console.log(result))
//     }, []);

//     return null;
// }
 
// export default Callback;