"use client";
import React from "react";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
    showNav: boolean;
    closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
    return (
        <>
            {/* Overlay */}
            <div
                onClick={closeNav}
                className={`fixed inset-0 bg-black transition-opacity duration-300 ${
                    showNav ? "opacity-70" : "opacity-0 pointer-events-none"
                } z-[900]`}
            ></div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-blue-950 z-[1000] transform transition-transform duration-500 ${
                    showNav ? "translate-x-0" : "translate-x-full"
                } flex flex-col justify-center space-y-6 px-6 pt-20`}
            >
                <CgClose
                    onClick={closeNav}
                    className="absolute top-4 right-6 w-8 h-8 cursor-pointer text-white"
                />

                {NavLinks.map((link) => (
                    <Link key={link.id} href={link.url} onClick={closeNav}>
                        <p className="text-white text-xl sm:text-3xl border-b-[1.5px] pb-1 border-white w-fit cursor-pointer">
                            {link.label}
                        </p>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default MobileNav;
