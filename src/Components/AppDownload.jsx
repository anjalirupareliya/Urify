import React from "react";
import phone from "../assets/3phone.svg";
import Sidecircle from "../assets/SideCircle.svg";
import circle from "../assets/halfcircle.svg";
import whitestar from "../assets/whitestar.svg";
import whitestar1 from "../assets/whitestar1.svg";
import shadow from "../assets/shadow.svg";
import sideStar from "../assets/SideStar.svg"

const AppDownload = () => {
    return (
        <div>
            <img src={sideStar} className="absolute left-9" alt="decorative star" />
            <div className="relative bg-black text-white overflow-hidden py-40 ml-44 mr-44 mt-32 rounded-xl">
                <img src={whitestar1} className="absolute top-10 left-[60%]" />
                <img src={whitestar} className="absolute bottom-28 left-[40%]" />
                <img src={Sidecircle} className="absolute top-0 right-0" />
                <img src={shadow} className="absolute top-10 right-[-100px]" />
                <img src={phone} className="absolute top-10 right-0" />

                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-10">
                    <div className="text-left md:ml-10">
                        <h1 className="text-5xl font-bold mb-6">Ready To Get Started?</h1>
                        <p className="text-base mb-8">
                            Risus Habitants Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.
                        </p>
                        <a href="https://apps.apple.com/in/app/cred-credit-cards-payments/id1428580080" target="_blank" rel="noopener noreferrer" >
                            <button className="flex items-center bg-white text-black text-lg py-4 px-6 rounded-lg font-semibold hover:bg-gray-200 transition">
                                Download App
                                <img className="w-8 h-8 ml-3" src="https://cdn-icons-png.flaticon.com/512/154/154870.png" alt="download icon" />
                            </button>
                        </a>
                    </div>
                </div>
                <img src={circle} className="absolute bottom-0 z-20" />
            </div>
        </div>
    );
};

export default AppDownload;
