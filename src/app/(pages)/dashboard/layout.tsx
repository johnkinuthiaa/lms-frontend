"use client"
import Aside from "@/components/aside";
import MobileHeader from "@/components/ui/mobileHeader";

export default function DashBoardLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main className={"flex flex-col md:flex-row lg:flex-row [&>*]:p-4"}>
            <div className={"md:fixed md:contents lg:fixed lg:contents"}>
                <div className={"desktop_sidebar hidden lg:contents md:contents"}>
                    <Aside/>
                </div>
                <div className={"mobile_sidebar lg:hidden md:hidden"}>
                    <MobileHeader/>
                </div>
            </div>
            <div className={"w-full md:w-[90%] lg:w-[90%] mt-2 md:ml-4 lg:ml-4 "}>
                {children}
            </div>

        </main>
    );
}