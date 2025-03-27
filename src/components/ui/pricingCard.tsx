"use client"
import {useRouter} from "next/navigation"
import {Done} from "@mui/icons-material";
export default function PricingCard(){
    const router =useRouter()
    return(
        <div className={"flex flex-col mt-8 lg:w-80 w-[90%] p-2 border outline-none border-gray-600 rounded-xl"}>
            <div className={"text-center text-xl font-bold mb-5"}>Starter</div>
            <p>Start learning today with free courses forever</p>
            <div className={"font-bold text-xl mb-5 mt-5"}>Free</div>
            <button
                className={"w-full font-bold p-2 hover:bg-[rgb(255,255,255,0.8)] bg-white text-black flex justify-center items-center rounded cursor-pointer"}
                onClick={(e)=>{
                e.preventDefault()
                router.push("/register")
            }}>Get Started</button>
            <ul className={"mt-4 flex flex-col gap-2 [&>*>span]:mr-2"}>
                <li><span><Done/></span>Unlimited course access</li>
                <li><span><Done/></span>Interactive projects & Quizzes</li>
                <li><span><Done/></span>Community Support</li>
                <li><span><Done/></span>Mobile and desktop access</li>
                <li><span><Done/></span>Mentorship programs</li>
                <li><span><Done/></span>Career guidance and support</li>
                <li><span><Done/></span>Exclusive master classes</li>
                <li><span><Done/></span>Resume building support</li>
            </ul>
        </div>
    )
}