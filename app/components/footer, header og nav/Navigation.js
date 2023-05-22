"use client"
import Link from "next/link";
import { IoSettingsSharp } from "react-icons/io5"
import { IoIosMicrophone } from "react-icons/io"
import { TbRadar2, TbWaveSawTool } from "react-icons/tb"
import { useState } from "react";
import DarkMode from "../DarkMode";
import { usePathname } from "next/navigation"


const Navigation = () => {

   const pathname = usePathname()

   // const [rotateIcon, setRotateIcon] = useState(false);

   // const handleRotateNinety = () => {
   //    setRotateIcon(!rotateIcon)
   // }

    return ( 
        <nav className="flex justify-between items-center my-4 mx-2">
         <Link href={"/"} className={`text-4xl text-pink-yyyy ${pathname == "/" ? "text-black dark:text-white" : ""}`}><TbWaveSawTool /></Link>
         <Link href={"/playlists"} className={`text-4xl text-pink-yyyy ${pathname == "/playlists" ? "text-black dark:text-white" : ""}`}><IoIosMicrophone /></Link>
         <Link href={"/player"} className={`text-5xl text-white bg-gradient-to-t from-pink-yyyy to-orange p-2 rounded-full ${pathname == "/player" ? "bg-gradient-to-t from-kinda-black to-kinda-black dark:from-white dark:to-white text-pink-600" : ""}`}><TbRadar2 /></Link>
         <DarkMode />
         <Link href={"/settings"} className={`text-3xl text-pink-yyyy ${pathname == "/settings" ? "text-black dark:text-white" : ""}`}><IoSettingsSharp /></Link>
        </nav>
     );
}
 
export default Navigation;

// <Link href={"/"} className={`text-4xl text-pink ${pathname == "/" ? "text-kinda-black dark:text-white" : ""}`}><TbWaveSawTool /></Link>            
// <Link href={"/playlists"} className={`text-4xl text-pink ${pathname == "/playlists" ? "text-kinda-black dark:text-white" : ""}`}><IoIosMicrophone className=""/></Link> 
// <Link href={"/player"} className={`text-5xl bg-gradient-to-t from-pink to-orange rounded-full p-2 ${pathname == "/player" ? "bg-gradient-to-t from-black to-black dark:bg-gradient-to-t dark:from-white dark:to-white text-pink" : ""}`}><TbRadar2 className=""/></Link> 
// <Link href={"/settings"} className={`text-3xl text-pink ${pathname == "/settings" ? "text-kinda-black dark:text-white" : ""}`}><IoSettingsSharp /></Link> 
