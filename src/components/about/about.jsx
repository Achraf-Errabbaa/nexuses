import { motion } from 'framer-motion';
import { images } from '../../constant';

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.1, duration: 0.4 }
    })
};

export const About = () => {
    return (
        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] min-h-screen">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white pt-16 px-6 lg:px-20"
            >
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <motion.div
                            variants={sectionVariants}
                            initial="hidden"
                            animate="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-[#fcb505] mb-4">
                                About Nexuses
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-semibold text-[#61c0bf] mb-6">
                                Welcome to Nexuses – Powering Your Gaming Experience
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                                At Nexuses, we believe that gaming is more than just entertainment 
                                it&#39;s an experience, a passion, and a way of life. That’s why we provide
                                high-performance gaming computers, laptops, and accessories designed to
                                elevate every moment you spend in the digital world.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex-1"
                    >
                        <img loading="lazy"
                            className="w-full h-[500px]  object-cover rounded-xl shadow-2xl hover:shadow-[#fcb505]/40 transition-shadow duration-300"
                            src={images.aboutimage}
                            alt="Gaming setup"
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* Mission Section */}
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-white py-20 px-6 lg:px-20 bg-gradient-to-r from-[#2d2d2d] to-[#1a1a1a] mt-20"
            >
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-[#ff7777] mb-8">
                        Our Mission
                    </h1>
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                        Empower gamers with the best technology at unbeatable value. We’re committed to
                        delivering top-tier gaming PCs, laptops, and peripherals that combine performance,
                        durability, and affordability. We aim to make premium gaming accessible to all
                        while offering flexible financing options and world-class support.
                    </p>
                </div>
            </motion.div>

            {/* What We Offer */}
            <motion.div
                className="text-white py-20 px-6 lg:px-20"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <h1 className="text-4xl font-bold text-[#fcb505] mb-12 text-center">
                    What We Offer
                </h1>
                <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        '🎮 Custom-Built Gaming PCs – High-performance rigs tailored to your needs',
                        '💻 Gaming & Productivity Laptops – Power meets portability',
                        '🖱️ Premium Accessories – Keyboards, mice, headsets, and more',
                        '💰 Flexible Financing – Upgrade now, pay later',
                        '🤝 Affiliate Program – Earn while you share your passion for gaming',
                        '🛠 Dedicated Support – Expert help when you need it'
                    ].map((item, index) => (
                        <motion.li
                            key={index}
                            custom={index}
                            variants={listItemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="p-6 bg-[#2d2d2d] rounded-xl shadow-lg hover:bg-[#3d3d3d] transition-colors duration-300"
                        >
                            <span className="text-2xl">{item}</span>
                        </motion.li>
                    ))}
                </ol>
            </motion.div>

            {/* Why Choose Nexuses */}
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-white py-20 px-6 lg:px-20 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d]"
            >
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-[#fcb505] mb-12 text-center">
                        Why Choose Nexuses?
                    </h1>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            '✔️ Top-Tier Components – We use only high-quality, hand-picked parts',
                            '✔️ Built for Performance – Unmatched speed, graphics, and cooling',
                            '✔️ Unbeatable Value – Competitive pricing and financing options',
                            '✔️ Expert Support – From purchase to setup, we’re with you every step',
                            '✔️ Innovation-Driven – Always ahead with the latest technology'
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                custom={index}
                                variants={listItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="p-6 bg-[#2d2d2d] rounded-xl shadow-lg hover:bg-[#3d3d3d] transition-colors duration-300"
                            >
                                <span className="text-2xl">{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* Our Story */}
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-white py-20 px-6 lg:px-20 bg-gradient-to-r from-[#2d2d2d] to-[#1a1a1a]"
            >
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-[#ff7777] mb-8">
                        Our Story
                    </h1>
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                        Nexuses was founded by a team of gaming enthusiasts and tech experts who saw the need for 
                        high-performance yet affordable gaming solutions. Our passion for gaming fuels our dedication 
                        to crafting PCs and accessories that redefine performance. We know what gamers want—because 
                        we are gamers ourselves.
                    </p>
                </div>
            </motion.div>

            {/* Let's Level Up */}
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-white py-20 px-6 lg:px-20"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-[#61c0bf] mb-12">
                        Let’s Level Up Together
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {[
                            '📞 Need help? Contact our support team anytime',
                            '📢 Want to earn with us? Check out our Affiliate Program',
                            '💻 Ready to upgrade? Explore our latest gaming systems today!'
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={listItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="p-6 bg-[#2d2d2d] rounded-xl shadow-lg hover:bg-[#3d3d3d] transition-colors duration-300"
                            >
                                <span className="text-2xl">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-2xl text-gray-300">
                        Welcome to Nexuses – where power meets play. 🚀
                    </p>
                </div>
            </motion.div>
        </div>
    );
};