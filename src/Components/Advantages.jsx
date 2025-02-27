import React from "react";
import iphone7 from "../assets/iphone7.svg"
import iphone6 from "../assets/iphone6.svg"
import Bellicon from "../assets/Bellicon.svg"
import circle from "../assets/Circle.svg"
import visa from "../assets/visa.svg"
import sideStar from "../assets/SideStar.svg"
import star from "../assets/star.svg"
import shadow3 from "../assets/Shadow3.svg"
import shadow4 from "../assets/Shadow4.svg"
import card from "../assets/advantage_i_phone.svg"
import visa1 from "../assets/CreditCard.svg"
import { motion } from "framer-motion"

const Advantages = () => {
    return (
        <div className="bg-white p-8 md:p-16 md:ml-20">
            <div className="grid xl:grid-cols-2 gap-12 items-center">
                {/* first section */}
                <div className="flex flex-col items-start text-left mt-6 max-sm:mt-0">
                    <p className="text-xl font-bold text-red-400 font-serif max-sm:ml-28 max-sm:mt-16">ADVANTAGES</p>
                    <h2 className="text-5xl font-bold text-black text-center max-sm:ml-10 max-sm:mb-8 max-sm:text-4xl mb-5"> Why Choose Uifry? </h2>
                    <div className="flex items-center mb-4 mt-5 ">
                        <div>
                            <img src={Bellicon} />
                        </div>
                        <h3 className="text-3xl font-bold text-black ml-2">Clever Notifications</h3>
                    </div>
                    <p className="text-gray-500 font-semibold text-lg leading-relaxed max-sm:text-base">
                        Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies.
                        In Ultrices Maleuada Elit Mauris Etiam Odio. Duis Tristique Lacus,
                        Et Blandit Vivamus Nisi Velit. Sed Mattis Rhoncus, Diam Suspendisse
                        Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
                        Suspendisse Aliquam.
                    </p>
                </div>
                <div className="flex">
                    <img src={shadow4} className="mt-32" />
                    <motion.img src={card} alt="" className="mt-44 ml-[-230px] z-30 max-sm:mb-36 max-sm:max-w-60" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} />
                    <img src={iphone6} className="absolute max-sm:mr-20" />
                </div>


                {/* Second section */}
                <div className="flex">
                    <img src={shadow3} className="absolute max-w-[700px] left-56 max-sm:left-28 max-sm:max-w-[400px] max-sm:mt-32" />
                    <img src={circle} className="z-10" />
                    <motion.img src={visa1} alt="" className="mb-20 ml-[-383px] z-30 max-sm:ml-[-270px] max-sm:mb-24 max-sm:max-w-48" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} />
                    <img src={iphone7} className="absolute max-w-[420px] z-10 ml-52 mt-24 max-sm:right-10 max-sm:max-w-80" />
                    <img src={sideStar} className="mb-[600px]" />
                </div>
                <div className="flex flex-col items-start text-left">
                    <div className="flex items-center mb-4">
                            <img src={visa} />
                        <h3 className="text-3xl font-bold text-black ml-2">
                            Fully Customizable
                        </h3>
                    </div>
                    <p className="text-gray-500 font-semibold text-lg leading-relaxed">
                        Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies.
                        In Ultrices Maleuada Elit Mauris Etiam Odio. Duis Tristique Lacus,
                        Et Blandit Vivamus Nisi Velit. Sed Mattis Rhoncus, Diam Suspendisse
                        Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
                        Suspendisse Aliquam.
                    </p>
                    <img src={star} className="mt-28 ml-[400px]" />
                </div>
            </div>
        </div>
    );
};

export default Advantages;
