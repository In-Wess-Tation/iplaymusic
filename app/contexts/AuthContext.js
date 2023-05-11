"use client";
import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext();

const AuthProvider = (props) => {

//  const [clientId, setClientId] = useState(process.env.CLIENT_ID);
//  const [clientSecret, setClientSecret] = useState(process.env.CLIENT_SECRET);

const id = process.env.NEXT_PUBLIC_CLIENT_ID; 
const secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

const [data, setData] = useState();

    useEffect(() => {

    
    
        fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Basic " + btoa(id + ":" + secret)
        },
        body: "grant_type=client_credentials",
      })
      .then(response => response.json())
      .then(result => setData(`${result.token_type} ${result.access_token}`))
    


    }, []);

    return ( 
        <AuthContext.Provider value={{data}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;
