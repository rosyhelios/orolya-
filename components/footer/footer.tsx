import React from 'react'
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-10">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">

                {/* Logo & About */}
                <div className="xl:col-span-2">
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                        <h3 className="font-bold text-xl text-white">OROLYA</h3>
                    </div>
                    <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                        If you have any complaints or feedback, we welcome your opinion.
                        Thank you for being with us — arigato!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                        <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                        <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center space-x-2">
                            <Phone size={16} /> <span>+91 97463 72303</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Mail size={16} /> <span>hridhikeshspremnath@gmail.com</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <MapPin size={16} /> <span>No Way, No Street, California, USA</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter / Extra */}
                <div className="xl:col-span-1">
                    <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
                    <p className="text-sm text-gray-400 mb-3">Subscribe to our newsletter</p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-l-lg px-3 py-2 text-sm text-black focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-primary px-4 py-2 rounded-r-lg text-white text-sm hover:bg-primary/90 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} OROLYA. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
