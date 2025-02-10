import React from "react"
import Fire from "../assets/urify.svg"
import Message from "../assets/Message.svg"
import Call from "../assets/Call.svg"

const Footer = () => {
    return (
        <div className="ml-44 mr-44">
            <footer className="bg-white text-black p-9">
                <div className=" mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mt-32">
                    {/* Logo and Contact */}
                    <div>
                        <a href="#" className="font-bold text-4xl flex justify-start">
                            <img src={Fire} className="mr-1" />uifry
                        </a>
                        <a href="#" className="text-base font-semibold flex justify-start mt-5 hover:text-red-600">
                            <img src={Message} className="mr-2 ml-1" />
                            Help@Frybix.Com</a>
                        <a href="#" className="text-base font-semibold flex justify-start mt-4 hover:text-red-600">
                            <img src={Call} className="mr-1 ml-1" />
                            +1234 456 6789</a>
                    </div>

                    {/* Links */}
                    <div>
                        <a href="" className="text-4xl font-bold mb-2">Links</a>
                        <ul className="text-base font-semibold space-y-3 mt-5">
                            <li><a href="#" className="text-red-600">Home</a></li>
                            <li><a href="#" className="hover:text-red-600">About Us</a></li>
                            <li><a href="#" className="hover:text-red-600">Bookings</a></li>
                            <li><a href="#" className="hover:text-red-600">Blog</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <a href="" className="text-4xl font-bold mb-2">Legal</a>
                        <ul className="text-base font-semibold space-y-3 mt-5">
                            <li><a href="#" className="hover:text-red-600">Terms Of Use</a></li>
                            <li><a href="#" className="hover:text-red-600">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-red-600">Cookie Policy</a></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <a href="" className="text-4xl font-bold mb-2">Product</a>
                        <ul className="text-base font-semibold space-y-3 mt-5">
                            <li><a href="#" className="hover:text-red-600">Take Tour</a></li>
                            <li><a href="#" className="hover:text-red-600">Live Chat</a></li>
                            <li><a href="#" className="hover:text-red-600">Reviews</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <div className="grid">
                        <a href="" className="text-4xl font-bold mb-2">Newsletter</a>
                        <a href="" className="text-base font-semibold mb-4 mt-3 hover:text-red-600">Stay Up To Date</a>
                        </div>
                        <div className="flex">
                            <input type="email" placeholder="Your email" className="p-4" />
                            <button className="bg-black text-white p-2 px-6 rounded-md border border-black hover:bg-white hover:text-black hover:border-black">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="mt-20 text-center font-semibold text-base">
                    <hr className="mb-10" />
                    Copyright 2022 Uifry.Com All Rights Reserved
                </div>
            </footer>
        </div>
    );
};

export default Footer;