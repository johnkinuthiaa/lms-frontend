"use server"
const myHeaders =new Headers()
myHeaders.append("Content-Type","application/json")


type CourseParams ={
    id:string,
    title:string,
    description:string
    modulesInCourse:[{
        id:string,
        title:string,
        slug:string,
        moduleImage:string
        lessonsInModule:object[]
    }
    ],
    createdOn:string,
    slug:string
}

export async function fetchAllCourses():Promise<CourseParams|string|undefined>{
    const fetchCourseUrl ="http://localhost:8080/api/v1/courses/all"
    try{
        const response =await fetch(fetchCourseUrl,{
            method:"GET",
            headers:myHeaders
        })
        if(response.ok){
            const data =await response.json()
            if(data.statusCode !=200){
                return data?.message
            }
            return data?.courseList
        }
    }
    catch (e){
        throw new Error(">>"+e)
    }


}