import React from 'react'
import realestate from '../assets/projects/realestate.jpg'

const Work = () => {
    return (
        <div className="w-full md:h-screen bg-[#0a192f] text-gray-300">
            <div className="max-w-[1000px] ma-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                        Work
                    </p>
                    <p className="py-6">//Check out some of my recent work</p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
                    <div>
                        <span></span>
                        <div>
                            <a href="#">
                                <button></button>
                            </a>
                            <a href="#">
                                <button></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Work