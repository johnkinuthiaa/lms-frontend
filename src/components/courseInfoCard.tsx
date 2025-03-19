
type InfoProps={
    metrics:number,
    text:string
    icon: never

}
export default function CourseInfoCard({metrics,text,icon}:InfoProps){
    return(
        <div className={`flex gap-2 p-3 w-80 border border-gray-600 rounded-xl`}>
            <>{icon}</>
            <div>
                <h2 className={"text-3xl font-extrabold"}>{metrics}</h2>
                <p className={"font-bold"}>{text}</p>
            </div>
        </div>
    )
}