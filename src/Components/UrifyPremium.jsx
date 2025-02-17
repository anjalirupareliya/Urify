import React from "react";
import sideStar from "../assets/SideStar.svg";
import circle from "../assets/Circle.svg";
import iphone5 from "../assets/i_phone_5.svg";
import shadow1 from "../assets/Shadow1.svg";
import shadow from "../assets/shadow.svg";
import shine from "../assets/shine.svg";
import square from "../assets/Square.svg";
import box from "../assets/Box.svg";
import { motion } from "framer-motion";

const UrifyPremium = () => {
    return (
        <div className="flex items-center bg-white flex-col xl:flex-row max-lg:flex-col-reverse">
            {/* Left Section */}
            <img src={sideStar} className="ml-20 mb-10 max-sm:mb-0 hidden md:block" />
            <div className="flex justify-center lg:justify-start">
                <img src={shadow1} className="absolute max-w-[520px] z-10 lg:ml-28 mt-24 max-sm:max-w-80" />
                <img src={circle} className="max-sm:max-w-[450px]" />
                <motion.img src={iphone5} alt="" className="absolute max-w-96 z-10 lg:ml-52 lg:mt-20 max-sm:max-w-80 max-sm:mt-10 max-sm:ml-20" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} />
            </div>

            {/* Right Section */}
            <div className="flex-1 ml-12 lg:ml-24 mt-12 max-sm:ml-5 max-sm:mt-0">
                <img src={shadow} className="absolute max-w-[720px] z-30 ml-[650px]" />
                <p className="text-2xl font-bold text-red-400 font-mono max-sm:ml-36">FEATURES</p>
                <h1 className="text-3xl lg:text-5xl font-bold mb-6 mt-1 max-sm:ml-20 max-sm:text-4xl">Uifry Premium</h1>
                <div className="space-y-6">
                    <div className="flex items-start max-sm:mt-10">
                        <img src={shine} className="mr-4 mt-6" />
                        <div className="max-sm:mb-14">
                            <h2 className="text-xl font-bold mt-4">Budgeting Intervals</h2>
                            <p className="text-gray-600 text-base absolute z-30">
                                Cum et convallis risus placerat aliquam, nunc scelerisque aliquet
                                faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <img src={square} className="mr-4 mt-6" />
                        <div className="max-sm:mb-14">
                            <h2 className="text-xl font-bold mt-4">Budgeting Intervals</h2>
                            <p className="text-gray-600 text-base absolute z-30">
                                Cum et convallis risus placerat aliquam, nunc scelerisque aliquet
                                faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <img src={box} className="mr-4 mt-6" />
                        <div className="max-sm:mb-14">
                            <h2 className="text-xl font-bold mt-4">Budgeting Intervals</h2>
                            <p className="text-gray-600 text-base">
                                Cum et convallis risus placerat aliquam, nunc scelerisque aliquet
                                faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UrifyPremium;
