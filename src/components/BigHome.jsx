import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './home/home';
import { Shop } from './shop/shop';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Navbar } from './layouts/navbar';
import { Footer } from './layouts/footer';
import ScrollToTopButton from './layouts/ScrollToTopButton';
<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />


export const BigHome = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                <Navbar />
                <div className=" flex-grow"> {/* Adjust pt value as needed */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <ScrollToTopButton />
                <Footer />
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
        </>
    );
};