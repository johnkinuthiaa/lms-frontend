"use client"
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Testimonials from "@/components/ui/testimonials";
import Pricing from "@/components/ui/pricing";
import Hero from "@/components/ui/hero";


export default function Home() {

  return (
      <div className={"w-full lg:w-[80%] h-screen" +
          "lg:justify-center m-auto "}>
          <Header></Header>
          <Hero></Hero>
          <Pricing></Pricing>
          <Testimonials/>
          <Footer></Footer>
      </div>

  );
}
