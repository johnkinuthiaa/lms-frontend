import Aside from "@/components/aside";

export default function DashBoardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={"flex [&>*]:p-4"}>
            <Aside/>
            <div className={"flex flex-10/12"}>
                {children}
            </div>

        </main>
    );
}