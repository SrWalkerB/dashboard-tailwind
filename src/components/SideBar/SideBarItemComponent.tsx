import { LayoutDashboard } from "lucide-react";

export function SideBarItem(){
    return (
        <li className="flex p-4 cursor-pointer rounded hover:text-white hover:bg-black">
            <LayoutDashboard />
            <p className="ms-3">Dashboard</p>  
        </li>
    )
}