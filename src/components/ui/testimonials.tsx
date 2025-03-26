import {testimonialList} from "@/utils/testimonialsList";
import TestimonialCard from "@/components/ui/testimonialCard";

export default function Testimonials(){
    const firstCarousel =testimonialList.slice(0,10)
    const secondCarousel =testimonialList.slice(10,testimonialList.length-1)
    return(
        <section id={"#testimonial"} className={"flex flex-col"}>
            <div className={"flex overflow-hidden"}>
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
            <div className={"flex overflow-hidden"}>
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