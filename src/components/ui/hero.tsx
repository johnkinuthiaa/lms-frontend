"use client"
import {Person, Star} from "@mui/icons-material";
import {BsArrowUpRight} from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero(){
    const router =useRouter()
    return(
        <section className={"flex mt-20 md:items-center lg:items-center lg:p-5 gap-5 md:p-3 p-2 flex-col md:flex-row lg:flex-row"}>
            <div className={"flex flex-col md:w-[45%] lg:w-[45%] w-full "}>
                <h1 className={"lg:text-6xl md:text-6xl text-4xl font-light"}>Track Your <span className={"font-bold"}>Learning Progress</span> </h1>
                <p className={"mt-10"}>Stay on top of your game with realtime learning tools,insights and interactive quizzes and exercises</p>
                <div className={"flex gap-2 lg:w-80 md:w-80 w-96 mt-10 mb-5"}>
                    <button
                        onClick={(e)=>{
                            e.preventDefault()
                            router.push("/register")
                        }}
                        className={"w-full gap-2  font-bold p-2 hover:bg-[rgb(255,255,255,0.8)] bg-white text-black flex justify-center items-center rounded cursor-pointer"}
                    >Get Started <BsArrowUpRight/></button>
                    <button
                        className={"w-full font-bold p-2 hover:bg-[rgb(255,255,255,0.8)] bg-white text-black flex justify-center items-center rounded cursor-pointer"}
                    >Learn More</button>
                </div>
                <div className={"flex gap-2 items-center"}>
                    <p>4.9 <span className={"text-yellow-500"}><Star/></span></p>
                    <p>10k+ <span>reviews</span></p>
                    <div className={"[&>*]:rounded-full  ml-2 [&>*]:-ml-4"}>
                        <Person/>
                        <Person/>
                        <Person/>
                    </div>
                </div>
            </div>
            <div>
                <Image src={"https://i.pinimg.com/236x/a4/36/64/a436649e52e64d291c4c4173e388b503.jpg"}
                       alt={"lms image"}
                       height={1800}
                       width={1800}
                       className={"md:h-[500px] p-2  object-cover lg:h-[500px] md:w-[500px] lg:w-[600px] w-full h-full rounded-2xl"}
                />
            </div>

        </section>
    )
}