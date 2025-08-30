"use client";
import React, { useState } from "react";
import Nav from "@/components/home/Navbar/nav";
import MobileNav from "@/components/home/Navbar/mobileNav";

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);

    // Toggle function
    const toggleNav = () => setShowNav(!showNav);

    return (
        <div>
            {/* Pass toggle function to Nav */}
            <Nav toggleNav={toggleNav} />

            {/* Mobile sidebar */}
            <MobileNav showNav={showNav} closeNav={toggleNav} />
        </div>
    );
};

export default ResponsiveNav;


