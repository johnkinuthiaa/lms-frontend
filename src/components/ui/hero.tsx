import {ArrowUpward, Person, Star} from "@mui/icons-material";
import {BsArrowUpRight} from "react-icons/bs";

export default function Hero(){
    return(
        <section className={"flex mt-20 lg:p-6 md:p-6 p-4 flex-col md:flex-row lg:flex-row"}>
            <div className={"flex flex-col md:w-[45%] lg:w-[45%] w-full "}>
                <h1 className={"lg:text-6xl md:text-6xl text-4xl font-light"}>Track Your <span className={"font-bold"}>Learning Progress</span> </h1>
                <p className={"mt-10"}>Stay on top of your game with realtime learning tools,insights and interactive quizzes and exercises</p>
                <div className={"flex gap-2 lg:w-80 md:w-80 w-96 mt-10 mb-5"}>
                    <button
                        className={"w-full gap-2  font-bold p-2 hover:bg-[rgb(255,255,255,0.8)] bg-white text-black flex justify-center items-center rounded cursor-pointer"}
                    >Get Started <BsArrowUpRight/></button>
                    <button
                        className={"w-full font-bold p-2 hover:bg-[rgb(255,255,255,0.8)] bg-white text-black flex justify-center items-center rounded cursor-pointer"}
                    >Learn More</button>
                </div>
                <div className={"flex gap-2"}>
                    <p>4.9 <span><Star/></span></p>
                    <p>10k+ <span>reviews</span></p>
                    <div className={"[&>*]:rounded-full  ml-2 [&>*]:-ml-4"}>
                        <Person/>
                        <Person/>
                        <Person/>
                    </div>
                </div>
            </div>
            <div>

            </div>

        </section>
    )
}