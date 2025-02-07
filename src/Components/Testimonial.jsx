import React from "react";
import People from "../assets/People.svg"
import iphone8 from "../assets/iphone8.svg"
import shadow5 from "../assets/Shadow5.svg"
import sideStar from "../assets/SideStar.svg"

const Testimonial = () => {
    return (
        <div className="flex flex-col items-center bg-white mt-10">
            <div className="text-center mr-[239px] mb-10">
                <h2 className="font-semibold text-xl mb-2">TESTIMONIAL</h2>
                <h2 className="text-6xl font-bold mx-auto text-center max-w-3xl">
                    What Our Users Say About Us!
                </h2>
            </div>
            <div className="flex ml-20">
                <img src={sideStar} className="mt-[500px]" />
                <img src={shadow5}  className="mr-[-24px]"/>
                <img src={iphone8} alt="iPhone" className="ml-[-534px]" />
                <div className="mt-28 ml-32">
                    <h1 className="text-4xl font-bold mb-6 mr-[350px]">
                        The Best Financial Accounting App Ever!
                    </h1>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <p className="text-gray-500 font-semibold text-lg mr-[350px]">
                                "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                                Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
                                Tristique Lacus, Et Blandit Vivamus Nisi Velit. Sed Mattis
                                Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget
                                Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam."
                            </p>
                        </div>
                        <img src={People} alt="People" />
                        <p className="text-lg font-bold">Nick Jonas</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;