export default function CourseInformation ({params}:{params:{id:string}}) {
    const courseId =params.id
    return(
        <div>{courseId}</div>
    )

}