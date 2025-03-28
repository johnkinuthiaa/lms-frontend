"use client"
import {useRouter} from "next/navigation";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState} from "react"
import {Home, Info, Phone} from "@mui/icons-material";
import Buttons from "./buttons";

export default function Header(){
    const router =useRouter()
    const[openMobileMenu,setOpenMobileMenu] =useState<boolean>(false)
    return(
        <div>
            <header className={`flex mt-4 mr-2 justify-between items-center mb-10`}>
                <div className={"font-bold text-xl p-1"}>Nevani Learning</div>
                <div className={"header__nav"}>
                    <nav className={"flex ml-4"}>
                        <ul className={"p-2 flex gap-3 [&>li]:mb-4 [&>li]:gap-2 [&>li]:font-bold [&>li]:cursor-pointer"}>
                            <li onClick={()=>router.push("/")}>Home</li>
                            <li onClick={()=>router.push("/contactUs")}>Contact</li>
                            <li>About us</li>
                        </ul>
                    </nav>
                </div>
                <div className={"flex gap-4 align-center"}>
                    <div className={" flex gap-2"}>
                        <div className={"buttons flex gap-2 [&>*]:pt-2 [&>*]:pb-2 [&>*]:pr-3 [&>*]:pl-3 [&>*]:rounded [&>*]:cursor-pointer"}>
                            <Buttons/>
                        </div>
                    </div>
                    <button
                        className={"cursor-pointer lg:hidden md:hidden"}
                        onClick={(e)=>{
                            e.preventDefault()
                            setOpenMobileMenu(!openMobileMenu)
                        }}

                    ><MoreVertIcon/></button>
                </div>
            </header>
            {openMobileMenu &&
                <aside className={"absolute -mt-4 lg:hidden md:hidden bg-black w-[55%] border-r border-r-gray-600 h-full z-999 "}>
                    <nav className={"flex ml-4 flex-col"}>
                        <ul className={"p-2 flex flex-col [&>li]:mb-6 [&>li]:flex [&>li]:gap-2 [&>li]:items-center [&>li]:cursor-pointer"}>
                            <li onClick={()=>router.push("/")}><Home/>Home</li>
                            <li onClick={()=>router.push("/contactUs")}><Phone/>Contact</li>
                            <li><Info/>About us</li>
                        </ul>
                        <div className={"mt-7 flex gap-2 w-full [&>*]:pt-2 [&>*]:pb-2" +
                            " [&>*]:pr-3 [&>*]:pl-3 [&>*]:rounded [&>*]:w-6/12 p-2 [&>*]:font-bold [&>*]:cursor-pointer"}>
                            <Buttons/>
                        </div>
                    </nav>
                </aside>}
        </div>
    )
}