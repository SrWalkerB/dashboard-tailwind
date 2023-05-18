import { LayoutDashboard } from "lucide-react";

interface IProps{
    title: string
}

export function SideBarItem(props: IProps){
    return (
        <li className="flex p-4 cursor-pointer rounded hover:text-white hover:bg-black">
            <LayoutDashboard />
            <p className="ms-3">{ props.title }</p>  
        </li>
    )
}