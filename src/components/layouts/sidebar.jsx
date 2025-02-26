import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4 }
    }  // Added missing closing brace
};

export const ShopFilters = ({ selectedCategories, onCategoryChange }) => {
    const categories = [
        'Gaming Computers',
        'Gaming Laptops',
        'Monitor',
        'Accessories'
    ];

    return (
        <div className="sticky top-20 h-fit lg:mr-8 p-6 bg-[#2d2d2d]/80 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold text-[#fcb505] mb-6">Filter Products</h2>

            <div className="space-y-4">
                {categories.map((category, index) => (
                    <motion.div
                        key={category}
                        variants={filterVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={index * 0.1}
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
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

// Proper PropTypes placement
ShopFilters.propTypes = {
    selectedCategories: PropTypes.array.isRequired,
    onCategoryChange: PropTypes.func.isRequired
};