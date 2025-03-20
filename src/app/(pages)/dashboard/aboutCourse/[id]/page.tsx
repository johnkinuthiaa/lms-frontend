import {use} from "react";
export default  function CourseInformation ({ params }: { params: Promise<{ id: string }> }) {
    const {id} =use(params)
    return(
        <div>{id}</div>
    )

}