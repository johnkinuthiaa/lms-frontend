import {useRouter} from "next/navigation";

export default function Header(){
    const router =useRouter()
    return(
        <header className={"flex mt-4 justify-between items-center mb-10"}>
            <div className={"font-bold text-xl p-1"}>Nevani Learning</div>
            <div className={"flex gap-2 [&>*]:p-2 [&>*]:font-bold [&>*]:rounded [&>*]:cursor-pointer"}>
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
        </header>
    )
}