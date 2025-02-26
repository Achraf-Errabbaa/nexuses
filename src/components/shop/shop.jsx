import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import images from '../../constant/images';
import { ShopFilters } from '../layouts/sidebar';
import { productImages, products } from '../../constant/data';

const textVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        }
    }
};

export const Shop = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search')?.toLowerCase() || '';

    // Add missing handleCategoryChange function
    const handleCategoryChange = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };
    
    const categoryFilteredProducts = selectedCategories.length > 0
    ? products.filter(product => selectedCategories.includes(product.category))
    : products;

// 2. Then apply search filter only if no categories are selected
const finalProducts = selectedCategories.length > 0
    ? categoryFilteredProducts
    : categoryFilteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery)
    );

    return (
        <div>
            <motion.div className='relative w-full'>
                <img
                    className='w-full h-[660px] object-cover'
                    src={images.shopstart}
                    alt="Gaming setup"
                />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full'>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: false, amount: 0.5 }}
                        variants={textVariants}
                    >
                        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide'>
                            NEXT-GEN GAMING POWER
                        </h1>
                        <p className='text-xl md:text-3xl text-[#fcb505] font-semibold'>
                            Experience Unmatched GAMING Performance
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-12 bg-[#1a1a1a]">
                <div className="lg:w-72">
                    <ShopFilters
                        selectedCategories={selectedCategories}
                        onCategoryChange={handleCategoryChange}
                    />
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {finalProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#2d2d2d] rounded-xl p-4"
                        >
                            <img
                                src={productImages[product.image]}
                                alt={product.name}
                                className="w-full h-52 object-cover rounded-lg"
                            />
                            <h2 className="text-xl font-semibold text-[#fcb505] mt-2">
                                {product.name}
                            </h2>
                            <p className="text-sm text-gray-300 mt-1">
                                {product.description}
                            </p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-xl font-semibold text-[#fcb505]">
                                    ${product.price.toFixed(2)}
                                </span>
                                <button className="px-4 py-2 bg-[#fcb505] text-[#2d2d2d] font-semibold rounded-lg hover:bg-[#fcc529] transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};