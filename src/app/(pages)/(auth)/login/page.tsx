"use client"
import {useState,useContext} from "react";
import {useRouter} from "next/navigation";


export default function Login(){
    const[email,setEmail] =useState<string>("")
    const[password,setPassword] =useState<string>("")
    const[message,setMessage] =useState<string>("")
    const router =useRouter()
    const [loading,setLoading] =useState(false)



    const Login =(async ()=>{
        setLoading(true)
        const myHeaders =new Headers()
        myHeaders.append("Content-Type","application/json")
        try{
            const response =await fetch("http://localhost:8080/api/v1/users/login",{
                method:"PUT",
                body:JSON.stringify({
                    password: password,
                    email: email
                }),
                headers:myHeaders
            })
            const data =await response.json()
            if(response.ok){
                if(data.statusCode ==200){
                    setEmail("")
                    setPassword("")

                    setMessage(data?.message)
                    sessionStorage.setItem("user",JSON.stringify(data?.user))
                    router.push("/dashboard")
                    setLoading(false)
                }else{
                    setLoading(false)
                    setMessage(data?.message)
                }
            }else{
                setLoading(false)
                setMessage(data?.message)
            }
        }catch (e) {
            setLoading(false)
            throw new Error(">>>"+e)
        }

    })
    return(
        <main className={"flex flex-col items-center justify-center lg:w-[90%] mt-20"}>
            {message&&<div className={"p-2 border rounded border-gray-500 animate-bounce"}>{message}</div>}
            <div className={"p-4 rounded-xl border border-gray-800 m-[0 auto] flex flex-col items-center justify-center "}>
                <div className={"flex flex-col gap-2"}>
                    <h1 className={"font-bold text-xl"}>Login</h1>
                    <p className={"text-gray-300"}>Enter your email below to login to your account</p>
                </div>
                <form className={"w-full flex gap-3 flex-col mt-5 [&>button]:rounded-xl" +
                    " [&>button]:cursor:pointer [&>button]:p-2" +
                    "[&>input] [&>input]:active:outline  [&>input]:active:outline-white [&>input]:border [&>input]:border-gray-700 " +
                    " [&>input]:rounded [&>input]:p-2 "}
                      onSubmit={(e)=>{
                          e.preventDefault()
                          Login()
                      }}
                >
                    <label className={"font-bold"}>Email</label>
                    <input type={"email"}
                           placeholder={"m@example.com"}
                           value={email}
                           autoComplete={"off"}
                           required={true}
                           onChange={(e)=>{
                        setEmail(e.target.value)

                    }}/>
                    <div className={"flex justify-between items-center mt-1 mb-1"}>
                        <label className={"font-bold"}>Password</label>
                        <p className={"underline cursor-pointer"}><span><a href={"/forgot"}>Forgot your password?</a></span></p>
                    </div>
                    <input type={"password"}
                           placeholder={"******"}
                           required={true}
                           value={password}
                           onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <div className={" mt-2 [&>*]:cursor-pointer [&>*]:rounded flex flex-col [&>*]:p-2 gap-3"}>
                        <button className={"bg-white text-black flex justify-center items-center"} type={"submit"}>
                            {loading?
                                <div className={"rounded-full  border-b border-b-black animate-spin p-2 w-fit"}></div>:"Login"}
                        </button>
                        <button className={"border border-gray-600"}>Login with Google</button>
                    </div>
                    <div>Dont have an account? <span className={"underline"}><a href={"/register"}>Sign up</a></span></div>
                </form>
            </div>
        </main>
    )
}