
import React from 'react';
import Hero from "@/components/home/Hero/hero";
import Category from "@/components/home/category/process/category";
import Demo from "@/components/home/category/demo/demo";
import Footer from "@/components/footer/footer";
import Formed from "@/components/symptomChecker/adults/Formed";


export const HomePage = () => {
    return (
        <>
            {/* Full-screen hero section */}
            <section
                style={{
                    backgroundImage: "url('/images/banner.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    minHeight: "100vh",
                }}
                className="flex items-center justify-center"

            >
                <Hero/>
            </section>

            <section className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
                <Category/>
            </section>

            <section className="w-full min-h-screen bg-blue-200 flex items-center justify-center">
                <Demo/>
            </section>
            <section className="w-full h-600 bg-blue-200 flex items-center justify-center">

            </section>
            <section className="w-full min-h-screen bg-blue-200 flex items-center justify-center">
                <Formed/>
            </section>
            <footer >
                <Footer/>
            </footer>
        </>
    );
};

export default HomePage;
