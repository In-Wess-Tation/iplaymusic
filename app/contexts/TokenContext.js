"use client";
// import { createContext, useState, useEffect } from "react";
import { createContext } from "react";


 const TokenContext = createContext();
 export default TokenContext;



// const AuthProvider = (props) => {
    
//     const [token, setToken] = useState();
// //  const [clientId, setClientId] = useState(process.env.CLIENT_ID);
// //  const [clientSecret, setClientSecret] = useState(process.env.CLIENT_SECRET);

// const id = process.env.NEXT_PUBLIC_CLIENT_ID; 
// const secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

// // const [data, setData] = useState();

//     // useEffect(() => {
//     //     fetch("https://accounts.spotify.com/api/token", {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/x-www-form-urlencoded",
//     //       "Authorization": "Basic " + btoa(id + ":" + secret)
//     //     },
//     //     body: "grant_type=client_credentials",
//     // })
//     //   .then(response => response.json())
//     //   .then(result => setToken(`${result.token_type} ${result.access_token}`))

//     // }, []);

//     useEffect(() => {
//         fetch("https://accounts.spotify.com/api/token", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded",
//                 "Authorization": "Basic " + btoa(id + ":" + secret)
//             },
//             body: "grant_typw=client_credentials",
//         })
//         .then(respone => respone.json())
//         .then(result => setToken(result.access_token));

//     }, []);

//     token && console.log(token)
    
//     return ( 
//         <AuthContext.Provider value={{ token }}>
//             {props.children}
//         </AuthContext.Provider>
//      );
     
//     };

//      export default AuthProvider;
     