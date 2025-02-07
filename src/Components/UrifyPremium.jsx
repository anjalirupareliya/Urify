import React from "react";
import sideStar from "../assets/SideStar.svg"
import circle from "../assets/Circle.svg"
import iphone5 from "../assets/i_phone_5.svg"
import shadow1 from "../assets/Shadow1.svg"
import shadow from "../assets/shadow.svg"

const UrifyPremium = () => {
    return (
        <div className="flex items-center bg-white min-h-screen">
            {/* Left Section */}
            <img src={sideStar} className="ml-[80px]"/>
            <div className="flex">
            <img src={shadow1} className="absolute max-w-[520px] z-10 ml-[100px] mt-[90px]"/>
                <img src={circle}/>
                <img src={iphone5} className="absolute max-w-[420px] z-10 ml-[200px] mt-[90px]"/>
            </div>

            {/* Right Section */}
            <div className="flex-1 ml-12">
            <img src={shadow} className="absolute max-w-[720px] z-30 ml-[650px]"/>
                <p className="text-2xl font-bold text-red-400 font-mono">FEATURES</p>
                <h1 className="text-5xl font-bold mb-6 mt-1">Uifry Premium</h1>
                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="w-6 h-6 flex items-center justify-center text-white mr-4 mt-5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.00043L10.6985 7.20642C10.4445 8.22228 10.3176 8.7302 10.0531 9.14352C9.81915 9.5091 9.50868 9.81958 9.14309 10.0535C8.72978 10.318 8.22185 10.445 7.20599 10.6989L2 12.0004L7.20599 13.3019C8.22185 13.5559 8.72978 13.6829 9.14309 13.9473C9.50868 14.1813 9.81915 14.4918 10.0531 14.8573C10.3176 15.2707 10.4445 15.7786 10.6985 16.7944L12 22.0004L13.3015 16.7944C13.5555 15.7786 13.6824 15.2707 13.9469 14.8573C14.1808 14.4918 14.4913 14.1813 14.8569 13.9473C15.2702 13.6829 15.7782 13.5559 16.794 13.3019L22 12.0004L16.794 10.6989C15.7782 10.445 15.2702 10.318 14.8569 10.0535C14.4913 9.81958 14.1808 9.5091 13.9469 9.14352C13.6824 8.7302 13.5555 8.22228 13.3015 7.20642L12 2.00043Z" stroke="#FF5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mt-4">Budgeting Intervals</h2>
                            <p className="text-gray-600 text-base absolute z-30">
                                Cum et convallis risus placerat aliquam, nunc scelerisque aliquet
                                faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="w-6 h-6 flex items-center justify-center text-white mr-4 mt-5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.50045V12.0005M12 12.0005L20.5 7.27816M12 12.0005L3.5 7.27816M12 12.0005V21.5005M20.5 16.7227L12.777 12.4321C12.4934 12.2746 12.3516 12.1958 12.2015 12.1649C12.0685 12.1376 11.9315 12.1376 11.7986 12.1649C11.6484 12.1958 11.5066 12.2746 11.223 12.4321L3.5 16.7227M21 16.059V7.9419C21 7.59925 21 7.42793 20.9495 7.27513C20.9049 7.13996 20.8318 7.01587 20.7354 6.91118C20.6263 6.79285 20.4766 6.70965 20.177 6.54324L12.777 2.43213C12.4934 2.27457 12.3516 2.1958 12.2015 2.16491C12.0685 2.13758 11.9315 2.13758 11.7986 2.16491C11.6484 2.1958 11.5066 2.27458 11.223 2.43213L3.82297 6.54325C3.52345 6.70965 3.37369 6.79285 3.26463 6.91119C3.16816 7.01588 3.09515 7.13996 3.05048 7.27514C3 7.42793 3 7.59925 3 7.9419V16.059C3 16.4016 3 16.573 3.05048 16.7258C3.09515 16.8609 3.16816 16.985 3.26463 17.0897C3.37369 17.2081 3.52345 17.2913 3.82297 17.4577L11.223 21.5688C11.5066 21.7263 11.6484 21.8051 11.7986 21.836C11.9315 21.8633 12.0685 21.8633 12.2015 21.836C12.3516 21.8051 12.4934 21.7263 12.777 21.5688L20.177 17.4577C20.4766 17.2913 20.6263 17.2081 20.7354 17.0897C20.8318 16.985 20.9049 16.8609 20.9495 16.7258C21 16.573 21 16.4016 21 16.059Z" stroke="#FF5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mt-4">Budgeting Intervals</h2>
                            <p className="text-gray-600 text-base absolute z-30">
                                Cum et convallis risus placerat aliquam, nunc scelerisque aliquet
                                faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="w-6 h-6flex items-center justify-center text-white mr-4 mt-5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.5 16.0004H8M8 16.0004V3.50043M8 16.0004L3.5 20.5004M3.5 8.00043H16M16 8.00043V20.5004M16 8.00043L20.5 3.50043M21 15.3377V3.80043C21 3.5204 21 3.38039 20.9455 3.27343C20.8976 3.17935 20.8211 3.10286 20.727 3.05492C20.62 3.00043 20.48 3.00043 20.2 3.00043H8.66274C8.41815 3.00043 8.29586 3.00043 8.18077 3.02806C8.07873 3.05255 7.98119 3.09296 7.89172 3.14779C7.7908 3.20963 7.70432 3.2961 7.53137 3.46906L3.46863 7.5318C3.29568 7.70475 3.2092 7.79123 3.14736 7.89214C3.09253 7.98161 3.05213 8.07916 3.02763 8.1812C3 8.29628 3 8.41858 3 8.66317V20.2004C3 20.4805 3 20.6205 3.0545 20.7274C3.10243 20.8215 3.17892 20.898 3.273 20.9459C3.37996 21.0004 3.51997 21.0004 3.8 21.0004H15.3373C15.5818 21.0004 15.7041 21.0004 15.8192 20.9728C15.9213 20.9483 16.0188 20.9079 16.1083 20.8531C16.2092 20.7912 16.2957 20.7048 16.4686 20.5318L20.5314 16.4691C20.7043 16.2961 20.7908 16.2096 20.8526 16.1087C20.9075 16.0192 20.9479 15.9217 20.9724 15.8197C21 15.7046 21 15.5823 21 15.3377Z" stroke="#FF5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div>
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
