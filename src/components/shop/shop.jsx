import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useLocation } from 'react-router-dom';
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
    const location = useLocation();
    const locationState = location.state?.selectedCategory;

    const [selectedCategories, setSelectedCategories] = useState(locationState ? [locationState] : []
    );
    const [searchParams] = useSearchParams();
    const calculatedMaxPrice = Math.max(...products.map(p => p.price));
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(calculatedMaxPrice);
    const searchQuery = searchParams.get('search')?.toLowerCase() || '';

    useEffect(() => {
        if (locationState) {
            setSelectedCategories([locationState]);
        }
        else {
            setSelectedCategories([]);
        }
    }, [locationState]);

    const onMaxChange = (newMaxPrice) => {
        setMaxPrice(newMaxPrice);
    };

    useEffect(() => {
        if (maxPrice > calculatedMaxPrice) {
            onMaxChange(calculatedMaxPrice);
        }
    }, [calculatedMaxPrice, maxPrice]);

    const handleCategoryChange = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    // Calculate max price from products only once

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const categoryMatch = selectedCategories.length === 0 ||
                selectedCategories.includes(product.category);
            const searchMatch = selectedCategories.length > 0
                ? true
                : product.name.toLowerCase().includes(searchQuery);
            const priceMatch = product.price >= minPrice &&
                product.price <= maxPrice &&
                minPrice < maxPrice;

            return categoryMatch && searchMatch && priceMatch;
        });
    }, [selectedCategories, searchQuery, minPrice, maxPrice]);


    return (
        <div>
            <motion.div className='relative w-full'>
                <img
                    src="/tiny-blur-shopstart.jpg" // very small blurred image
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
                />
                <img loading="eager"
                    className=' w-full h-[660px] object-cover'
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
                <div className="w-72">
                    <ShopFilters
                        selectedCategories={selectedCategories}
                        onCategoryChange={handleCategoryChange}
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        onMinChange={setMinPrice}
                        onMaxChange={setMaxPrice}
                        calculatedMaxPrice={calculatedMaxPrice}
                    />
                </div>
                <div className='overflow-x-hidden'>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-[#2d2d2d] rounded-xl p-4"
                            >
                                <div className='h-48 flex items-center justify-center'>
                                    <img loading="lazy"
                                        src={productImages[product.image]}
                                        alt={product.name}
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                </div>
                                <h2 className="text-xl md:text-xl font-semibold text-[#fcb505] mt-2">
                                    {product.name}
                                </h2>
                                <p className="text-xs md:text-sm text-gray-300 mt-1">
                                    {product.description}
                                </p>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-base md:text-xl font-semibold text-[#fcb505]">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <button className="px-3 md:px-4 py-2 bg-[#fcb505] text-[#2d2d2d] font-semibold rounded-lg hover:bg-[#fcc529] transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};