"use client";

import { useContext, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios"
import TokenContext from "../contexts/TokenContext";
import { useRouter } from "next/navigation";
import { setCookie } from 'cookies-next';

const Callback = () => {

    const [token, setToken] = useContext(TokenContext);
    const router = useRouter();


    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    console.log(code)

    useEffect(() => {
        axios.post(
            "/api/auth",
            JSON.stringify({ code })
        )
            .then(response => {
                console.log(response)
                setToken(response.data)
                router.push("/featured")
                // setCookie('token', data.access_token)
            })
            .catch(err => console.log(err))

    }, []);

    return null;
}

export default Callback;


