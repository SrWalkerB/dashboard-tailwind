import { Album, List } from "lucide-react"

export default function Menu(){
    return (
        <div className="pr-10 pt-3">
            <div className="bg-white w-full rounded-md p-3 flex flex-row items-center justify-between">
                <div>
                    <input 
                        className="rounded-xl p-2 w-96 border border-gray-300"
                        placeholder="Search"
                    />

                    <input 
                        className="rounded-xl p-2 w-96 ms-4  border border-gray-300"
                        placeholder="Monday"
                    />
                </div>

                <div className="flex">
                    <div className="flex bg-black p-2 rounded-xl mr-7 items-center">
                        <Album color="white" />
                        <p className="text-cyan-50 ml-3 text-sm">
                            Cards
                        </p>
                    </div>

                    <div className="flex bg-white p-2 rounded-xl items-center">
                        <List />
                        <p className="text-black ml-3 text-sm">
                            List
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}