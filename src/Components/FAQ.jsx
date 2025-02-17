import React from "react"
import star from "../assets/star.svg"
import { motion } from "framer-motion"

const FAQ = () => {
  return (
    <div className="bg-white p-8 ml-36 mr-36">
      <div className="text-left mb-8">
        <h3 className="text-red-500 font-semibold text-xl uppercase">FAQ</h3>
        <div className="flex justify-between">
          <h1 className="text-5xl font-extrabold">Frequently Asked <h1>Questions</h1></h1>
          <img src={star} className="mr-[600px]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div className="bg-red-500 text-white p-8 rounded-xl shadow-md" whileHover={{ scale: 1.1 }} >
          <h2 className="text-3xl font-bold mb-2 font-serif">The Best Financial Accounting App Ever!</h2>
          <p className="text-base font-semibold">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris.
          </p>
        </motion.div>

        <motion.div className="bg-white text-black p-8" whileHover={{ scale: 1.1 }} >
          <h2 className="text-3xl font-bold mb-2 font-serif">The Best Financial Accounting App Ever!</h2>
          <p className="text-base text-gray-500 font-semibold">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </motion.div>

        <motion.div className="bg-white text-black p-8" whileHover={{ scale: 1.1 }} >
          <h2 className="text-3xl font-bold mb-2 font-serif">The Best Financial Accounting App Ever!</h2>
          <p className="text-base text-gray-500 font-semibold">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </motion.div>

        <motion.div className="bg-red-500 text-white p-8 rounded-xl shadow-md" whileHover={{ scale: 1.1 }} >
          <h2 className="text-3xl font-bold mb-2 font-serif">The Best Financial Accounting App Ever!</h2>
          <p className="text-base font-semibold">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </motion.div>

        <motion.div className="bg-red-500 text-white p-8 rounded-xl shadow-md" whileHover={{ scale: 1.1 }} >
          <h2 className="text-3xl font-bold mb-2 font-serif">The Best Financial Accounting App Ever!</h2>
          <p className="text-base font-semibold">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </motion.div>

        <motion.div className="bg-white text-black p-8" whileHover={{ scale: 1.1 }} >
          <h2 className="text-3xl font-bold mb-2 font-serif">The Best Financial Accounting App Ever!</h2>
          <p className="text-base text-gray-500 font-semibold">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </motion.div>
      </div>
    </div >
  );
};

export default FAQ;