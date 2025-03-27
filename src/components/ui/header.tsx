"use client"
import {useRouter} from "next/navigation";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState} from "react"

export default function Header(){
    const router =useRouter()
    const[openMobileMenu,setOpenMobileMenu] =useState<boolean>(false)
    return(
        <div>
            <header className={`flex mt-4 mr-2 justify-between items-center mb-10`}>
                <div className={"font-bold text-xl p-1"}>Nevani Learning</div>
                <div className={"flex gap-4 align-center"}>
                    <div className={"flex gap-2 [&>*]:pt-2 [&>*]:pb-2 [&>*]:pr-4 [&>*]:pl-4 [&>*]:rounded [&>*]:cursor-pointer"}>
                        <button className={"bg-blue-600"}
                                onClick={(e)=>{
                                    e.preventDefault()
                                    router.push("/login")
                                }}
                        >Login</button>
                        <button
                            className={"bg-white text-black"}
                            onClick={(e)=>{
                                e.preventDefault()
                                router.push("/register")
                            }}
                        >Sign up</button>
                    </div>
                    <button
                        className={"cursor-pointer"}
                        onClick={(e)=>{
                            e.preventDefault()
                            setOpenMobileMenu(!openMobileMenu)
                        }}

                    ><MoreVertIcon/></button>
                </div>
            </header>
            {openMobileMenu &&
                <aside className={"absolute -mt-4 bg-black w-[55%] border-r border-r-gray-700 h-full z-999 "}>
                    <nav className={"flex ml-4"}>
                        <ul className={"p-2 flex flex-col [&>li]:mb-4 [&>li]:cursor-pointer"}>
                            <li className={""}>Home</li>
                            <li>Contact</li>
                            <li>About us</li>
                        </ul>
                    </nav>
                </aside>}
        </div>
    )
}