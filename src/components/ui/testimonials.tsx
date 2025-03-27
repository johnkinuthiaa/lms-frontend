import {testimonialList} from "@/utils/testimonialsList";
import TestimonialCard from "@/components/ui/testimonialCard";

export default function Testimonials(){
    const firstCarousel =testimonialList.slice(0,10)
    const secondCarousel =testimonialList.slice(10,testimonialList.length-1)
    return(
        <section id={"#testimonial"} className={"flex flex-col overflow-hidden "}>
            <div className={"flex flex-col mt-10 mb-10 w-[80%] m-auto items-center"}>
                <div className={"font-bold text-xl text-center"}>What our Experts Say</div>
                <p className={"mt-4"}>Gain insights from industry experts on how our platform empowers learners to grow,
                upskill and reach their full potential</p>
            </div>
            <div className={"flex  carrousel "}>
                {firstCarousel.map((carousel1,index)=>(
                    <div key={index}>
                        <TestimonialCard
                            message={carousel1.message}
                            profileImage={carousel1.profileImage}
                            name={carousel1.name}
                            role={carousel1.role}/>
                    </div>
                ))}
            </div>
            <div className={"flex mt-10 mb-10 carrousel_reverse"}>
                {secondCarousel.map((carousel2,index)=>(
                    <div key={index}>
                        <TestimonialCard
                            message={carousel2.message}
                            profileImage={carousel2.profileImage}
                            name={carousel2.name}
                            role={carousel2.role}/>
                    </div>
                ))}
            </div>
        </section>
    )
}