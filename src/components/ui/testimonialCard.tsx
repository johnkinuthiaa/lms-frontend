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
        <div className={"w-7/12 flex flex-col p-2 gap-4 rounded-xl shadow-2xs"}>
            <div className={"flex gap-2 text-yellow-500"}><Star/><Star/><Star/><Star/><Star/><Star/></div>
            <div className={"break-words"}>{message}</div>
            <div className={"flex gap-2"}>
                <Image
                    src={profileImage}
                    className={"rounded-full w-15 h-15 object-cover"}
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