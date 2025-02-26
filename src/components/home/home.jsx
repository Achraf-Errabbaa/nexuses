import React from 'react';
import { images } from '../../constant';
import { motion } from 'framer-motion';
import { FaHandshake, FaHeadset, FaMoneyBills } from "react-icons/fa6";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};
const textVariants = {
    hidden: { opacity: 0 , x: -500},
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5,ease: "easeOut" }
    },
};
export const Home = () => {
    return (
        <div style={{ overflowX: 'hidden' }}> {/* Prevent horizontal scrolling */}
            <div id="default-carousel" className="overflow-hidden relative mx-auto max-w-7xl w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-[600px] lg:h-[500px] xl:h-[600px] w-full">
                    {/* Make the first slide visible by replacing "hidden" with "block" */}
                    <div className="block duration-700 ease-in-out w-full" data-carousel-item>
                        <img
                            src={images.slide1}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="Slide 1"
                        />
                    </div>

                    {/* The rest remain hidden until activated */}
                    <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                        <img
                            src={images.slide2}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="Slide 2"
                        />
                    </div>

                    <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                        <img
                            src={images.slide3}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="Slide 3"
                        />
                    </div>

                    <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                        <img
                            src={images.slide4}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="Slide 4"
                        />
                    </div>

                    <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                        <img
                            src={images.slide5}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="Slide 5"
                        />
                    </div>
                </div>

                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>

                <button
                    type="button"
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 1L1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>

                <button
                    type="button"
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

            <div className='flex justify-between px-10 pb-12 pt-16'>
                <div>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <img className='w-[160px]' src={images.gamingpc} alt="gamingpc" />
                        <h1 className='text-center text-white from-neutral-600 text-2xl font-semibold'>Gaming PC</h1>
                    </motion.button>
                </div>
                <div>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <img className='w-[160px]' src={images.laptop} alt="gaminglaptop" />
                        <h1 className='text-center text-white from-neutral-600 text-2xl font-semibold'>Gaming Laptop</h1>
                    </motion.button>
                </div>
                <div>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <img className='w-[130px]' src={images.accessories} alt="accessories" />
                        <h1 className='text-center text-white pt-10 from-neutral-600 text-2xl font-semibold'>Accessories</h1>
                    </motion.button>
                </div>
            </div>


            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='md:flex-1  max-w-[780px]'>
                    <img src={images.pccard} alt="" className='w-full h-[600px]' />
                </div>

                <div className='md:flex-1 w-full'>
                    <div id="default-carousel" className="relative w-full  bg-gray-300" data-carousel="slide">
                        <div className="relative  h-56 overflow-hidden rounded-lg md:h-[600px]  lg:h-[500px] xl:h-[600px] w-full">
                            {/* Slides */}
                            <div className="hidden  duration-700 p-24 ease-in-out gap-4 " data-carousel-item>
                                <div className='flex flex-col gap-4'>
                                    <h1 className='font-extrabold text-6xl'>Testimonials</h1>
                                    <h2 className='font-semibold text-2xl text-red-600'>&quot;TechPulse transformed my gaming setup!&quot;</h2>
                                    <p className='italic text-xl'>&quot;Nexuses has completely changed the way I build and upgrade my gaming PC. Their detailed reviews and build guides helped me make informed decisions, and I’ve seen a noticeable boost in performance. I couldn’t be happier!&quot;</p>
                                </div>
                            </div>
                            <div className="hidden duration-700 p-24 ease-in-out gap-4 " data-carousel-item>
                                <div className='flex flex-col gap-4'>
                                    <h1 className='font-extrabold text-6xl'>Testimonials</h1>
                                    <h2 className='font-semibold text-2xl text-red-600'>&quot;A must-read for every tech enthusiast.&quot;</h2>
                                    <p className='italic text-xl'>&quot;The content on Nexuses is top-notch. Whether you're a beginner or a seasoned PC builder, their expert insights and hardware comparisons give you all the information you need to create the perfect system.&quot;</p>
                                </div>
                            </div>
                            <div className="hidden duration-700 p-24 ease-in-out gap-4 " data-carousel-item>
                                <div className='flex flex-col gap-4'>
                                    <h1 className='font-extrabold text-6xl'>Testimonials</h1>
                                    <h2 className='font-semibold text-2xl text-red-600'>&quot;Invaluable resource for custom builds.&quot;</h2>
                                    <p className='italic text-xl'>&quot;I was overwhelmed by all the options when building my new PC, but Nexuses made it easy. Their comprehensive guides and real-world advice helped me select the best components for my needs. I now have a high-performance rig that runs like a dream!quot;</p>
                                </div >
                            </div>
                            <div className="hidden duration-700 p-24 ease-in-out gap-4 " data-carousel-item>
                                <div className='flex flex-col gap-4'>
                                    <h1 className='font-extrabold text-6xl'>Testimonials</h1>
                                    <h2 className='font-semibold text-2xl text-red-600'>&quot;The community and content are unbeatable.&quot;</h2>
                                    <p className='italic text-xl'>&quot;What I love most about Nexuses is the community. The tips, reviews, and user experiences shared here have been a game changer for me. It’s the perfect blend of technical expertise and friendly support.&quot;</p>
                                </div>
                            </div>
                            <div className="hidden  duration-700 p-24 ease-in-out gap-4 " data-carousel-item>
                                <div className='flex flex-col gap-4'>
                                    <h1 className='font-extrabold text-6xl'>Testimonials</h1>
                                    <h2 className='font-semibold text-2xl text-red-600'>&quot;Expert advice that truly delivers.&quot;</h2>
                                    <p className='italic text-xl'>&quot;From performance benchmarks to the latest hardware trends, Nexuses covers it all. Their clear, unbiased reviews have helped me stay ahead of the curve and make smart upgrades to my computer. Highly recommended!&quot;</p>
                                </div>
                            </div>

                            {/* Carousel Indicators */}
                            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                <button
                                    type="button"
                                    className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400 aria-[current=true]:bg-red-600"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                    data-carousel-slide-to="0"
                                ></button>
                                <button
                                    type="button"
                                    className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400 aria-[current=true]:bg-red-600"
                                    aria-current="false"
                                    aria-label="Slide 2"
                                    data-carousel-slide-to="1"
                                ></button>
                                <button
                                    type="button"
                                    className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400 aria-[current=true]:bg-red-600"
                                    aria-current="false"
                                    aria-label="Slide 3"
                                    data-carousel-slide-to="2"
                                ></button>
                                <button
                                    type="button"
                                    className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400 aria-[current=true]:bg-red-600"
                                    aria-current="false"
                                    aria-label="Slide 4"
                                    data-carousel-slide-to="3"
                                ></button>
                                <button
                                    type="button"
                                    className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400 aria-[current=true]:bg-red-600"
                                    aria-current="false"
                                    aria-label="Slide 5"
                                    data-carousel-slide-to="4"
                                ></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='relative w-full h-[600px]'>
                <img
                    className='w-full h-full object-cover'
                    src={images.whyus}
                    alt="Why choose Nexuses"
                />
                <div 
                    className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'
                    

                >

                    <motion.div className='max-w-4xl px-4 flex flex-col items-center gap-6 text-center'
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}>
                        
                        <h2 className='text-white text-3xl md:text-5xl font-bold'>
                            Why Nexuses?
                        </h2>
                        <p className='text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto'>
                            At Nexuses, we envision a world where technology seamlessly empowers creativity,
                            performance, and innovation. Our mission is to provide top-tier gaming PCs,
                            high-performance laptops, and cutting-edge hardware to enthusiasts, gamers,
                            and professionals alike.
                        </p>
                        <button className='mt-4 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
                            Read More
                        </button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="bg-white p-20 flex flex-wrap justify-center gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-50px" }}
            >
                {/* Financing Section */}
                <motion.div
                    className="flex flex-col items-center text-center gap-4 max-w-sm"
                    variants={itemVariants}
                >
                    <FaMoneyBills size={80} className="text-green-500" />
                    <h1 className="text-3xl font-semibold">Flexible Financing Options</h1>
                    <ul className="text-gray-700 list-disc text-start list-inside">
                        <li>Easy to apply</li>
                        <li>Get instant pre-approved offers and rates</li>
                        <li>Twelve months same as cash available*</li>
                        <li>No prepayment penalties</li>
                        <li>Up to 36 months of payment options</li>
                    </ul>
                </motion.div>


                {/* Affiliates Section */}
                <motion.div
                    className="flex flex-col items-center text-start gap-4 max-w-sm"
                    variants={itemVariants}
                >
                    <FaHandshake size={80} className="text-blue-500" />
                    <h1 className="text-3xl font-semibold">Affiliate Program</h1>
                    <ul className="text-gray-700 list-disc list-inside">
                        <li>Earn commissions on every sale</li>
                        <li>Perfect for gamers, streamers, and tech enthusiasts</li>
                        <li>Easy tracking and payout system</li>
                        <li>Exclusive promotions and discounts for affiliates</li>
                        <li>Grow your audience while earning</li>
                    </ul>
                </motion.div>


                {/* Support Section */}
                < motion.div
                    className="flex flex-col items-center text-start gap-4 max-w-sm"
                    variants={itemVariants}
                >
                    <FaHeadset size={80} className="text-red-500" />
                    <h1 className="text-3xl font-semibold">Dedicated Support</h1>
                    <ul className="text-gray-700 list-disc list-inside">
                        <li>Expert guidance on choosing the right products</li>
                        <li>Fast and reliable troubleshooting assistance</li>
                        <li>Comprehensive after-sales support</li>
                        <li>Live chat, email, and phone support</li>
                        <li>Customer satisfaction guaranteed</li>
                    </ul>
                </motion.div >

            </motion.div>

        </div >
    );
};