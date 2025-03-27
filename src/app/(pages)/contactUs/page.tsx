"use client"
import {useRouter} from "next/navigation"
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
export default function ContactUs(){
    const router =useRouter()
    return(
        <>
            <Header></Header>
            <div className={"flex flex-col text-center lg:w-[90%] md:w-[90%] items-center justify-center"}>
                <p>Contact us</p>
                <div>Need help? We&#39;re here for you 24/7</div>
                <p>Our dedicated team of experts is ready to help you around the clock</p>
                <p>Access 24/7 support through our network </p>
                <div className={"flex gap-3 "}>
                    <button
                        className={"w-full gap-2  font-bold p-2 hover:bg-[rgb(255,255,255,0.8)] bg-white text-black flex justify-center items-center rounded cursor-pointer"}
                    >Book a call
                    </button>
                    <button
                        onClick={(e)=>{
                            e.preventDefault()
                            router.push("/register")
                        }}
                        className={"w-full gap-2  font-bold p-1 hover:bg-[rgb(255,255,255,0.8)] bg-white text-black flex justify-center items-center rounded cursor-pointer"}
                    >Create Account</button>
                </div>
                <section>
                    <div>Contact our sales team</div>
                    <form>
                        <div className={"flex gap-5 [&>*]:flex [&>*]:flex-col [&>*]:gap-2 "}>
                            <div>
                                <label htmlFor={"firstName"}>FirstName <sup className={"text-red-500"}>*</sup></label>
                                <input name={"firstName"} id={"firstName"} required={true}/>
                            </div>
                            <div>
                                <label htmlFor={"lastName"}>LastName <sup className={"text-red-500"}>*</sup></label>
                                <input name={"lastName"} id={"lastName"} required={true}/>
                            </div>
                        </div>
                        <label htmlFor={"email"}>Email <sup className={"text-red-500"}>*</sup></label>
                        <input name={"email"} id={"email"} required={true}/>
                        <textarea className={"resize-none rounded p-2"}>

                    </textarea>
                        <button>Send message</button>

                    </form>
                </section>
            </div>
            <Footer></Footer>
        </>

    )
}