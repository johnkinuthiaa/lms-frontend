import Image from "next/image";

type TopProfileCardProps ={
    img:string,
    name:string,
    role:string
}
export default function TopProfileCard({img,name,role}:TopProfileCardProps){
    return(
        <div className={"flex gap-1"}>
            <Image
                src={img}
                alt={name+"profile image"}
                className={"h-15 w-15 rounded-full object-fill"}
                height={100}
                width={100}
            />
            <div className={"flex flex-col gap-1"}>
                <p className={"font-bold"}>{name}</p>
                <p className={"font-light"}>{role}</p>
            </div>
        </div>
    )
}