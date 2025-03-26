"use client"
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Testimonials from "@/components/ui/testimonials";


export default function Home() {

  return (
      <div className={"w-full lg:w-[80%] border border-blue-500 h-screen" +
          "lg:justify-center m-auto "}>
          <Header></Header>
          <Testimonials/>
          <Footer></Footer>
      </div>

  );
}
