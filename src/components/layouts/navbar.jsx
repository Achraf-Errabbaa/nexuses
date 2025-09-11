import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { images } from '../../constant';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa6";
import { TbXboxXFilled } from "react-icons/tb";

export const Navbar = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Fixed template literal syntax
            navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
            setSearchOpen(false);
            setSearchQuery('');
        }
    };

    return (
        <nav className="top-0 left-0 w-full z-50 flex items-center justify-between bg-white shadow-md px-4 py-2">
            <div className="logo w-28 p-2">
                <img src={images.logo} alt="Logo" />
            </div>
            <ul className="flex items-center gap-8 font-semibold">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="right-section flex items-center gap-4">
                <form onSubmit={handleSearch} className="flex items-center">
                    <button
                        type="button"
                        className="search-button p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                        onClick={() => setSearchOpen(prev => !prev)}
                    >
                        {searchOpen ? <TbXboxXFilled size={20} /> : <FaSearchengin size={20} />}
                    </button>
                    <div
                        className="search-container bg-gray-200 rounded-full overflow-hidden transition-all duration-300"
                        style={{ width: searchOpen ? '300px' : '0px' }}
                    >
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 text-gray-700 bg-transparent outline-none border-none rounded-full appearance-none"
                        />
                    </div>
                </form>
                <div className="cart-icon p-2 mr-4 rounded-full bg-gray-200 hover:bg-blue-400 transition-colors">
                    <button>
                        <FaShoppingCart size={20} />
                    </button>
                </div>
            </div>
        </nav>
    );
};