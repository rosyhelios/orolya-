"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import MobileNav from "./mobileNav";

const Nav = () => {
    const [navBg, setNavBg] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => setShowNav(!showNav);

    useEffect(() => {
        const handler = () => setNavBg(window.scrollY >= 90);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    // Text color based on scroll
    const textColor = navBg ? "text-black" : "text-white";
    const borderColor = navBg ? "border-black/50" : "border-white/50";

    return (
        <>
            <div
                className={`fixed w-full h-[12vh] z-[1000] transition-all duration-200 ${
                    navBg ? "bg-white shadow-md" : "bg-transparent"
                }`}
            >
                <div className="flex items-center justify-between w-[92%] h-full mx-auto">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                        <Link href={"/Home"}></Link>
                        <h1 className={`font-bold text-lg ${textColor}`}>OROLYA</h1>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-2">
                        {NavLinks.map((link, index) => (
                            <React.Fragment key={link.id}>
                                <Link href={link.url}>
                  <span
                      className={`px-4 font-medium transition-transform duration-200 hover:scale-110 hover:text-cyan-500 ${textColor}`}
                  >
                    {link.label}
                  </span>
                                </Link>
                                {index !== NavLinks.length - 1 && (
                                    <span
                                        className={`h-6 border-r ${borderColor} opacity-50`}
                                    ></span>
                                )}
                            </React.Fragment>
                        ))}
                        <button
                            className={`px-6 py-2 text-sm rounded-lg cursor-pointer transition-all duration-300 ml-4 ${
                                navBg
                                    ? "bg-blue-950 hover:bg-blue-700 text-white"
                                    : "bg-blue-950 hover:bg-blue-700 text-white"
                            }`}
                        >
                             take interview
                            <Link href={"/symptomChecker/adults/Formed"}></Link>
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="flex items-center lg:hidden">
                        <HiMenu
                            onClick={toggleNav}
                            className={`w-8 h-8 cursor-pointer ${textColor}`}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <MobileNav showNav={showNav} closeNav={toggleNav} />
        </>
    );
};

export default Nav;
