import PricingCard from "@/components/ui/pricingCard";

export default function Pricing(){
    return(
        <section id={"pricing"} className={"flex p-2 flex-col lg:w-[80%] md:w-[80%] w-full m-auto items-center justify-between "}>
            <div className={"items-center flex flex-col mt-10"}>
                <div className={"text-center gap-2 flex flex-col"}>
                    <div className={"font-bold text-xl"}>Choose Your Plan</div>
                    <p>Choose a flexible plan tailored to your learning and career growth </p>
                </div>
            </div>
            <PricingCard/>
        </section>
    )
}