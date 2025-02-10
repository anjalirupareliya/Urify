import React from "react";
import sideStar from "../assets/SideStar.svg"
import zimage from "../assets/Z_image.svg"
import circle from "../assets/Circle.svg"
import iphone1 from "../assets/i_phone_1.svg"
import iphone2 from "../assets/i_phone_2.svg"
import iphone3 from "../assets/i_phone_3.svg"
import shadow from "../assets/shadow.svg"
import shadow1 from "../assets/Shadow1.svg"
import { motion } from "framer-motion"

const Finance = () => {
  return (
    <div className="bg-white text-black font-sans">
      <section className="flex flex-col lg:flex-row items-center px-8 py-16 space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="text-center lg:text-left max-w-lg ml-28">
          <img src={sideStar} className="mb-5" />
          <div className="flex">
            <h1 className="text-5xl font-extrabold z-30">Make The Best Finanacial Decisions</h1>
            <img src={shadow} className="absolute max-w-[500px] bottom-[500px] z-10 left-[200px]" />
          </div>
          <p className="text-gray-600 text-xl mb-8 mt-7">
            Cum et convallis risus placerat aliquam, nunc scelerisque aliquet faucibus tincidunt.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-sm border border-black hover:bg-white hover:text-black hover:border-black">Get Started →</button>
            <button className="flex items-center text-black font-bold">
              <img className="h-8 w-8 mr-2 ml-4" src="https://cdn-icons-png.flaticon.com/512/0/375.png" />
              Watch Video
            </button>
          </div>
          <img src={zimage} />
        </div>

        <div className='flex'>
          <motion.img src={iphone1} alt="" className="w-45 absolute left-[1100px] bottom-[0px] z-10"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} />
          <motion.img src={iphone2} alt="" className="w-65 absolute left-[1000px] bottom-[50px] z-20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} />
          <motion.img src={iphone3} alt="" className="w-90 absolute left-[900px] bottom-[90px] z-30"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} />
          <img src={circle} alt="" className="w-200 max-w-[615px] absolute bottom-[130px] right-[260px]" />
          <img src={shadow1} className="absolute max-w-[700px] left-[900px] bottom-[50px] " />
          <img src={sideStar} className="ml-[340px] mt-[400px]" />
        </div>
      </section>
    </div>
  );
};


export default Finance;