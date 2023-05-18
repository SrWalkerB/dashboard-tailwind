import { Report } from "../Report/ReportComponent";

export default function Task(){
    return(
        <div className="bg-white mt-4 rounded-lg mr-10 p-4">
            <div className="flex justify-between">
                <div>
                    <p className="font-bold text-3xl">Last tasks</p>

                    <div className="flex items-center">
                        <p className="font-bold text-sm">
                            177 total,
                        </p>
                        <p className="text-sm ml-1">
                            proceed to resolve them
                        </p>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between w-44">
                        <div className="text-center">
                            <p className="font-bold text-3xl">
                                94
                            </p>

                            <p>
                                Done
                            </p>
                        </div>

                        <div className="text-center">
                            <p className="font-bold text-3xl">
                                23
                            </p>

                            <p>
                                In Progress
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Report />
        </div>
    )
}