import { SideBarItem } from "./SideBarItemComponent"

export default function SideBar(){
    return(
        <div className="pt-3">
            <div className="bg-slate-300 w-64 h-full rounded-lg ms-4">
                <div className="p-6 text-start border-b-2 border-gray-500">
                    <h2 className="font-bold text-xl">SrWalkerB</h2>
                </div>

                <nav className="mt-2 p-1">
                    <ul>
                        <SideBarItem title="Dashboard" />
                        <SideBarItem title="Projects" />
                        <SideBarItem title="Task List" />
                        <SideBarItem title="Services" />
                        <SideBarItem title="Notifications" />
                        <SideBarItem title="Chart" />
                    </ul>
                </nav>
            </div>
        </div>
    )
}