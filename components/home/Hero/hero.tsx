import React from "react";
import Image from "next/image";

export const Hero = () => {
    return (
        <div
            className="relative w-full h-screen flex items-end bg-[url('/images/bg-hero.jpg')] bg-cover bg-center"
        >
            <div className="container mx-auto flex flex-col xl:flex-row items-end justify-between px-6 py-10 h-full">
                {/* Text on bottom-left */}
                <div className="xl:w-1/2 w-full mb-16 xl:mb-0">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white leading-tight">
                        OROLYA <br />
                        ORAL HEALTH CHECKER
                    </h1>
                    <p className="mt-6 text-lg sm:text-2xl md:text-3xl font-medium text-white">
                        So you can stop worrying
                    </p>
                </div>

                {/* Image on the right (occupies only a portion) */}
                <div className="xl:w-1/2 w-full flex justify-end">
                    <Image
                        src="/images/hero.png"
                        alt="hero doctor image"
                        width={1000} // adjust width to fill desired portion
                        height={1000} // adjust height proportionally
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
