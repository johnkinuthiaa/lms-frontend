"use client"
import {useRouter} from "next/navigation";

export default function Home() {
    const router =useRouter()
  return (
    <main>
      <div className={"flex gap-2 [&>*]:cursor-pointer"}>
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
    </main>
  );
}
