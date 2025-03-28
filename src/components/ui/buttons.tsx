import {useRouter} from "next/navigation";

export default function Buttons(){
    const router =useRouter()
    return(
        <>
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
        </>
    )
}