import Aside from "@/components/aside";

export default function DashBoardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={"flex [&>*]:p-4"}>
            <div className={"fixed "}>
                <Aside/>
            </div>

            <div className={"flex flex-10/12 mt-2 ml-56 "}>
                {children}
            </div>

        </main>
    );
}