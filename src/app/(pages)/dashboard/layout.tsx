import Aside from "@/components/aside";

export default function DashBoardLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={"flex [&>*]:p-4"}>
            <div className={"fixed"}>
                <Aside/>
            </div>
            <div className={"flex w-full mt-2 ml-56 "}>
                {children}
            </div>

        </main>
    );
}