"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Callback = () => {

    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    console.log(code)

    useEffect(() => {
        fetch("http://localhost:3000/api/auth", {
            method: "POST",
            body: JSON.stringify({ code })
        })
    }, []);

    return null;
}
 
export default Callback;