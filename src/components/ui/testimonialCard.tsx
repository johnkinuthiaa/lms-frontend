import {Star} from "@mui/icons-material";
import Image from "next/image";

type TestimonialProps ={
    message:string,
    profileImage:string,
    name:string,
    role:string
}
export default function TestimonialCard({message,profileImage,name,role}:TestimonialProps){
    return(
        <div className={"w-full justify-between flex flex-col p-2 gap-4 rounded-xl shadow-2xs border-gray-700 leading-7"}>
            <div className={"flex flex-col"}>
                <div className={"flex gap-1 text-yellow-500"}><Star/><Star/><Star/><Star/><Star/></div>
                <div className={"w-80 mt-3"}>{message}</div>
            </div>
            <div className={"flex gap-2 align-bottom"}>
                <Image
                    src={profileImage}
                    className={"rounded-full w-12 h-12 object-cover"}
                    alt={name+"review"}
                    width={100}
                    height={100}/>
                <div className={"flex flex-col gap-2"}>
                    <div className={"font-bold"}>{name}</div>
                    <div>{role}</div>
                </div>
            </div>
        </div>
    )

}