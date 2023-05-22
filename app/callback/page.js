"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";


const Callback = () => {

    const seachParams = useSearchParams();
    const code = seachParams.get("code");
    console.log(code)

    useEffect(() => {
        fetch("http://localhost:3000/api/auth", {
            method: "POST",
            body: JSON.stringify({ code })
        })
        .then(response => response.json())
        .then(result => {
            localStorage.setItem("access", JSON.stringify(result))
        })
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