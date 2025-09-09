import images from '../../constant/images';
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";


export const Footer = () => {
    return (
        <footer className="bg-[#1f2937] text-gray-300 dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-12">
                {/* Logo & Description */}
                <div className="mb-12 flex flex-col items-start">
                    <a
                        href="/"
                        className="transition-transform hover:scale-105"
                        aria-label="TechPulse Home"
                    >
                        <img
                            className="w-48 items-start"
                            src={images.logofooter}
                            alt="TechPulse Logo"
                        />
                    </a>
                    <p className=" text-xl leading-relaxed text-gray-400">
                    Welcome to Nexuses, your ultimate destination for high-performance gaming PCs, laptops, and premium hardware materials. Whether you're a hardcore gamer, a creative professional, or a tech enthusiast, we offer top-tier gaming rigs, cutting-edge components, and expert advice to elevate your setup.

From blazing-fast processors to immersive graphics, we handpick every product for peak performance and reliability. Need custom builds or upgrade solutions? We’ve got you covered!

Step into the world of Nexuses, where technology meets passion. Your next-level gaming and computing experience starts here! 🚀🎮
                    </p>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 gap-8 border-t border-gray-700 pt-12 md:grid-cols-4">
                    {[
                        {
                            title: "products",
                            links: ["Gaming PCs", "Laptops", "Accessories", "PC Cards"]
                        },
                        {
                            title: "Company",
                            links: ["About", "shop", "contact", "Blog"]
                        },
                        {
                            title: "Help center",
                            links: ["instagram", "Twitter", "Facebook", "Contact Us"]
                        },
                        {
                            title: "Legal",
                            links: ["Privacy Policy", "Licensing", "Terms & Conditions"]
                        },
                        
                    ].map((section, index) => (
                        <div key={index}>
                            <h2 className="mb-6 text-lg font-semibold uppercase tracking-wide text-white">
                                {section.title}
                            </h2>
                            <ul className="space-y-4">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href="#"
                                            className="text-gray-400 transition-colors hover:text-white"
                                            aria-label={`${link} link`}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright & Socials */}
                <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row">
                    <span className="text-gray-500">
                        © {new Date().getFullYear()} <strong className="text-white">NEXUSES™</strong>. All Rights Reserved to <strong className='text-red-600'>A Guy With A Rocket Lancher </strong>
                    </span>

                    <div className="mt-6 flex space-x-6 md:mt-0">
                        <a
                            href="#"
                            className="text-gray-400 transition-colors hover:text-white"
                            aria-label="Facebook"
                        >
                            <SlSocialFacebook size={24} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 transition-colors hover:text-white"
                            aria-label="Instagram"
                        >
                            <SlSocialInstagram size={24} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 transition-colors hover:text-white"
                            aria-label="Twitter"
                        >
                            <SlSocialTwitter size={24} />
                        </a>

                        
                    </div>
                </div>
            </div>
        </footer>
    );
};