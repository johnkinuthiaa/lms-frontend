"use client"
import {useState} from "react"
import {useRouter} from "next/navigation"

export default function Signup(){
    const[username,setUsername] =useState<string>("")
    const[email,setEmail] =useState<string>("")
    const[password,setPassword] =useState<string>("")
    const[message,setMessage] =useState<string>("")
    const [loading,setLoading] =useState(false)
    const router =useRouter()

    const createNewAccount =(async ()=>{
        const myHeaders =new Headers()
        myHeaders.append("Content-Type","application/json")
        try{
            const response =await fetch("http://localhost:8080/api/v1/users/register",{
                method:"POST",
                body:JSON.stringify({
                    password: password,
                    email: email,
                    username: username,
                    role: "STUDENT"
                }),
                headers:myHeaders
            })
            const data =await response.json()
            if(response.ok){

                if(data.statusCode ==201){
                    setMessage(data?.message)
                    router.push("/login")
                    setLoading(true)
                }else{
                    setMessage(data?.message)
                    setLoading(true)
                }
            }else{
                setMessage(data?.message)
                setLoading(true)
            }
        }catch (e) {
            throw new Error(">>>"+e)
        }

    })

    const passValidation =()=>{
        // add password validation
        createNewAccount()
    }
    return(
        <main className={"flex flex-col items-center justify-center lg:w-[90%] mt-20"}>
            <div className={"p-2 border rounded border-gray-500 animate-bounce"}>{message}</div>
            <div className={"p-4 rounded-xl border border-gray-500 m-[0 auto] flex flex-col items-center justify-center "}>
                <div className={"flex flex-col gap-2"}>
                    <h1 className={"font-bold text-xl"}>SignUp</h1>
                    <p className={"text-gray-300"}>Enter your details below to create your account</p>
                </div>
                <form className={"w-full flex gap-3 flex-col mt-5 [&>button]:rounded-xl" +
                    " [&>button]:cursor:pointer [&>button]:p-2" +
                    "[&>input] [&>input]:active:outline  [&>input]:active:outline-white [&>input]:border [&>input]:border-gray-700 " +
                    " [&>input]:rounded [&>input]:p-2 "}
                      onSubmit={(e)=>{
                          e.preventDefault()
                          passValidation()

                }}>
                    <label className={"font-bold"}>Username</label>
                    <input type={"text"} min={6} max={20} placeholder={"john doe"} required={true}
                           onChange={(e)=>{
                               setUsername(e.target.value)
                           }}
                    />
                    <label className={"font-bold"}>Email</label>
                    <input type={"email"} placeholder={"m@example.com"} min={6} max={20} required={true}
                           onChange={(e)=>{
                               setEmail(e.target.value)
                           }}
                    />
                    <label className={"font-bold mt-1 mb-1"}>New Password</label>
                    <input type={"password"} placeholder={"******"} min={6} max={20} required={true}
                           onChange={(e)=>{
                               setPassword(e.target.value)
                           }}
                    />
                    <div className={" mt-2 [&>*]:cursor-pointer [&>*]:rounded flex flex-col [&>*]:p-2 gap-3"}>
                        <button className={"bg-white text-black flex justify-center items-center"} type={"submit"}>
                            {loading?
                                <div className={"rounded-full  border-b border-b-black animate-spin p-2 w-fit"}></div>:"Login"}
                        </button>
                        <button className={"border border-gray-600"}>Login with Google</button>
                    </div>
                    <div>Already have an account? <span className={"underline"}><a href={"/login"}>Log in</a></span></div>
                </form>
            </div>
        </main>
    )
}