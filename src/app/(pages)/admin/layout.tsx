import AdminSidebar from "@/components/adminSidebar/adminSidebar";

export default function AdminLayout({children,}: Readonly<{
    children: React.ReactNode;
}>){
    return(
        <main className={"flex gap-2 h-full"}>
            <AdminSidebar/>
            {children}
        </main>
    )
}