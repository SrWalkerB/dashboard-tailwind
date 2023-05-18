import Menu from "@/components/Menu/MenuComponent";
import { Report } from "@/components/Report/ReportComponent";
import SideBar from "@/components/SideBar/SideBarComponent";
import Task from "@/components/Tasks/TasksComponent";

export default function Home() {
  return (
    <main className="flex bg-slate-900 h-screen">
      <SideBar />

      <div className="flex flex-col w-full ms-8">
        <Menu />

        <Task />

        <div className="flex align-middle justify-between flex-wrap w-8/12">
          <div className="bg-white rounded-xl w-128 p-5 w mt-8">
            <div>
              <p className="font-bold text-xl">Productivity</p>
            </div>

            <div>
              Graphics
            </div>
          </div>

          <div className="bg-white rounded-xl w-128 p-5 w mt-8">
            <div>
              <p className="font-bold text-xl">Productivity</p>
            </div>

            <div>
              Graphics
            </div>
          </div>

        </div>

      </div>

    </main>
  )
}
