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
        <nav className="flex text-[#ee0979] justify-between items-center my-4 mx-2">
           <Link href={"/"} className={`text-4xl ${pathname == "/" ? "text-[#111625] dark:text-white" : ""}`}><TbWaveSawTool /></Link>            
           <Link href={"/playlists"} className={`text-4xl ${pathname == "/playlists" ? "text-[#111625] dark:text-white" : ""}`}><IoIosMicrophone className=""/></Link> 
           <Link href={"/player"} className={`text-5xl bg-gradient-to-t from-[#ee0979] to-[#ff6a00] rounded-full p-2 ${pathname == "/player" ? "bg-[#111625] dark:bg-white" : ""}`}><TbRadar2 className={`text-white dark:text-[#111625] ${pathname == "/" ? "" : ""}`}/></Link> 
           <DarkMode />
           <Link href={"/settings"} className={`text-3xl ${pathname == "/settings" ? "text-[#111625] dark:text-white" : ""}`}><IoSettingsSharp /></Link> 
        </nav>
     );
}
 
export default Navigation;