"use client"
import Image from "next/image";
import TopProfileCard from "@/components/topprofileCard";
import {Person, Star, Timer} from "@mui/icons-material";
import {useRouter} from "next/navigation";

export default function CourseCard(){
    const router =useRouter()
    return(
        <div className={"flex border lg:min-w-[881px] border-gray-600 rounded-2xl p-2 m-2 w-[90%]"}
             onClick={()=>router.push("/dashboard/aboutCourse/1")}
        >
            <Image
                alt={"course image"}
                height={100}
                width={100}
                className={"rounded-xl h-72 w-80 object-fill"}
                src={"https://i.pinimg.com/236x/05/d7/84/05d784805e083785e14d8555d9428c1b.jpg"}/>
            <div className={"flex  ml-3 flex-col gap-2 [&>*]:leading-10 [&>*]:flex [&>*]:justify-between"}>
                <div className={""}>
                    <div className={"bg-green-100  font-bold rounded-xl p-1 text-green-500"}>Health and fitness</div>
                    <div className={"font-bold "}>$14.00 <span className={"font-light text-gray-600"}>$26.00</span></div>
                </div>
                <h3 className={"font-bold border-b border-b-gray-600"}>Investing in Stocks The complete Course!(13 h.. and trying to do good.</h3>
                <div>
                    <TopProfileCard
                        img={"https://i.pinimg.com/236x/05/d7/84/05d784805e083785e14d8555d9428c1b.jpg"}
                        name={"John kinuthia"} role={" "}/>
                    <div className={"text-yellow-500"} ><Star/>5.0</div>
                </div>
                <div>
                    <div className={"flex gap-2"}>
                        <Person/>
                        <p>200.7k <span>students</span></p>
                    </div>
                    <div className={"text-green-500"}><Timer/> 6 hour</div>
                </div>
            </div>
        </div>
    )
}