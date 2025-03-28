import {Book, School} from "@mui/icons-material";

type InfoProps={
    metrics:number,
    text:string

}
export default function CourseInfoCard({metrics,text}:InfoProps){
    return(
        <div className={`flex gap-2 p-2 lg:w-80 md:w-80 w-fit border border-gray-600 rounded-xl`}>
            <School/>
            <div>
                <div className={"font-extrabold"}>{metrics}</div>
                <p className={"font-bold"}>{text}</p>
            </div>
        </div>
    )
}