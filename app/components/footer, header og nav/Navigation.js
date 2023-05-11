"use client"
import Link from "next/link";
import { IoSettingsSharp } from "react-icons/io5"
import { IoIosMicrophone } from "react-icons/io"
import { CgDarkMode } from "react-icons/cg"
import { TbRadar2, TbWaveSawTool } from "react-icons/tb"
import { useState } from "react";


const Navigation = () => {
   const [rotateIcon, setRotateIcon] = useState(false);

   const handleRotateNinety = () => {
      setRotateIcon(!rotateIcon)
   }

    return ( 
        <nav className="flex text-[#ee0979] justify-between items-center my-4 mx-2">
           <Link href={"/"} className="text-4xl"><TbWaveSawTool /></Link>            
           <Link href={"/playlists"} className="text-4xl"><IoIosMicrophone className=""/></Link> 
           <Link href={"/player"} className="text-5xl bg-gradient-to-t from-[#ee0979] to-[#ff6a00] rounded-full p-2"><TbRadar2 className="text-white"/></Link> 
           <button className={"text-4xl rotate-0" + rotateIcon ? "rotate-90 text-4xl" : null} onClick={handleRotateNinety}><CgDarkMode /></button>
           <Link href={"/settings"} className="text-3xl"><IoSettingsSharp /></Link> 
        </nav>
     );
}
 
export default Navigation;