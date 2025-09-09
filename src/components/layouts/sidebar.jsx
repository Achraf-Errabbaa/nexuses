
import PropTypes from 'prop-types';
import { useEffect, } from 'react';



export const ShopFilters = ({
    selectedCategories,
    onCategoryChange,
    minPrice,
    maxPrice,
    onMinChange,
    onMaxChange,
    calculatedMaxPrice
}) => {
    const categories = [
        'Gaming Computers',
        'Gaming Laptops',
        'Monitors',
        'Accessories'
    ];

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice);
        onMinChange(Math.max(value, 0));
    };
    
    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice);
        onMaxChange(Math.min(value, calculatedMaxPrice));
    };

    useEffect(() => {
        if (maxPrice > calculatedMaxPrice) {
            onMaxChange(calculatedMaxPrice);
        }
        if (minPrice > maxPrice) {
            onMaxChange(maxPrice - 1);
        }
    }, [calculatedMaxPrice, maxPrice, minPrice, onMaxChange, onMinChange]);

    return (
        <div className="sticky top-20 h-fit lg:mr-8 p-8 w-72  bg-[#2d2d2d]/80 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold text-[#fcb505] mb-6">Filter Products</h2>

            <div className="space-y-4">
                {/* Category Filters */}
                {categories.map((category) => (
                    <div
                        key={category}
                        
                    >
                        <label className="flex items-center space-x-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                name={category}
                                checked={selectedCategories.includes(category)}
                                onChange={() => onCategoryChange(category)}
                                className="w-5 h-5 rounded border-2 border-[#3d3d3d] focus:ring-0 text-[#fcb505] bg-[#1a1a1a]"
                            />
                            <span className="text-gray-300 group-hover:text-[#fcb505] transition-colors">
                                {category}
                            </span>
                        </label>
                    </div>
                ))}

                {/* Price Range Filter */}
                <div
                    
                >
                    <div className="pt-4 mt-4 border-t border-[#3d3d3d]">
                        <div className="text-gray-300 mb-4 flex justify-between">
                            <span>${minPrice.toFixed(2)}</span>
                            <span>${maxPrice.toFixed(2)}</span>
                        </div>

                        <div className="relative h-12">
                            {/* Background Track */}
                            <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-[#3d3d3d] rounded-full transform -translate-y-1/2" />

                            {/* Progress Bar */}
                            <div
                                className="absolute top-1/2 h-1.5 bg-[#fcb505] rounded-full transform -translate-y-1/2"
                                style={{
                                    left: `${(minPrice / calculatedMaxPrice) * 100}%`,
                                    right: `${100 - (maxPrice / calculatedMaxPrice) * 100}%`
                                }}
                            />

                            {/* Min Input - higher z-index */}
                            <input
                                type="range"
                                min={0}
                                max={calculatedMaxPrice}
                                value={minPrice}
                                onChange={handleMinChange}
                                className="absolute w-full top-1/2 transform -translate-y-1/2 h-0 appearance-none z-30"
                                style={{ zIndex: minPrice > (calculatedMaxPrice / 2) ? 20 : 30 }}
                            />

                            {/* Max Input - lower z-index */}
                            <input
                                type="range"
                                min={0}
                                max={calculatedMaxPrice}
                                value={maxPrice}
                                onChange={handleMaxChange}
                                className="absolute w-full top-1/2 transform -translate-y-1/2 h-0 appearance-none z-20"
                                style={{ zIndex: maxPrice < (calculatedMaxPrice / 2) ? 30 : 20 }}
                            />

                            {/* Value Bubbles */}
                            <div
                                className={`absolute top-0 transform -translate-x-1/2 -translate-y-5 ${minPrice >= maxPrice ? 'bg-red-400' : 'bg-[#fcb505]'
                                    } text-[#2d2d2d] px-2 py-1 rounded text-sm font-medium`}
                                style={{ left: `${(minPrice / calculatedMaxPrice) * 100}%` }}
                            >
                                ${minPrice.toFixed(2)}
                            </div>
                            <div
                                className={`absolute top-0 transform -translate-x-1/2 -translate-y-5 ${maxPrice <= minPrice ? 'bg-red-400' : 'bg-[#fcb505]'
                                    } text-[#2d2d2d] px-2 py-1 rounded text-sm font-medium`}
                                style={{ left: `${(maxPrice / calculatedMaxPrice) * 100}%` }}
                            >
                                ${maxPrice.toFixed(2)}
                            </div>

                            {/* Validation Message */}
                            {minPrice >= maxPrice && (
                                <div className="text-red-400 text-sm mt-2 text-center">
                                    Minimum price must be less than maximum price
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ShopFilters.propTypes = {
    selectedCategories: PropTypes.array.isRequired,
    onCategoryChange: PropTypes.func.isRequired,
    minPrice: PropTypes.number.isRequired,
    maxPrice: PropTypes.number.isRequired,
    onMinChange: PropTypes.func.isRequired,
    onMaxChange: PropTypes.func.isRequired,
    calculatedMaxPrice: PropTypes.number.isRequired

};