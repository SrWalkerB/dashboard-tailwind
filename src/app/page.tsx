import Menu from "@/components/Menu/MenuComponent";
import SideBar from "@/components/SideBar/SideBarComponent";
import Task from "@/components/Tasks/TasksComponent";

export default function Home() {
  return (
    <main className="flex bg-slate-900 h-screen">
      <SideBar />

      <div className="flex flex-col w-full ms-8">
        <Menu />

        <Task />
      </div>

    </main>
  )
}
