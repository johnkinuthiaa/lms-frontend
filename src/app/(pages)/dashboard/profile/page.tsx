"use client"
import Image from "next/image";
import {useState} from "react";

export default function ProfilePage(){
    const[username,setUsername]=useState<string>("johana")
    return(
        <main className={"flex flex-col mt-4 gap-7 w-[80%] justify-center items-center m-[0 auto]"}>
            <div className={"flex flex-col gap-2"}>
                <p className={"font-bold mb-2"}>Profile picture</p>
                <div className={"flex gap-4 items-center"}>
                    <Image
                        src={"https://i.pinimg.com/236x/be/38/78/be3878c34f93d1663a6e5f6af4b78e9c.jpg"}
                        alt={"profile photo"}
                        height={100}
                        width={100}
                        className={"rounded-full h-25 w-25"}
                    ></Image>
                    <div className={"flex gap-3 [&>*]:rounded-xl [&>*]:cursor-pointer" +
                        " [&>*]:w-fit [&>*]:h-fit [&>*]:p-4 [&>*]:font-bold "}>
                        <button className={"bg-blue-500"}>Change Picture</button>
                        <button className={"bg-red-500"}>DeletePicture</button>
                    </div>

                </div>
            </div>
            <form>
                <label>Profile name</label>
                <input
                    type={"text"}
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}/>
            </form>
        </main>
    )
}