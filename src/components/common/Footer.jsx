import React from 'react'
import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '../../utils/constants'
import logo from '../../assets/logos/breeq-alaqeeq-technical-works.svg'
import Container from './Container'

const Footer = () => {
    // Skyline SVG path (simplified representation)
    const skylinePath = "M0 100 L0 90 L10 90 L10 70 L20 70 L20 40 L30 40 L30 80 L40 80 L40 30 L50 30 L50 90 L60 90 L60 50 L70 50 L70 90 L80 90 L80 60 L90 60 L90 100 Z";

    return (
        <footer className="w-full bg-gradient-to-r from-black to-[#8F1413] text-white pt-16 pb-6 overflow-hidden font-sans">
            <Container>

                {/* 1. Top White Banner */}
                <div className="relative bg-white rounded-2xl p-6 md:p-10 mb-16 flex flex-col md:flex-row items-center md:items-start justify-between shadow-xl overflow-hidden">
                    {/* Logo Section */}
                    <div className="w-full md:w-1/4 flex justify-center md:justify-start items-center mb-6 md:mb-0 relative z-10">
                        <img
                            src={logo}
                            alt={SITE_CONFIG.name}
                            className="h-20 w-auto object-contain"
                        />
                    </div>

                    {/* Divider (Desktop only) */}
                    <div className="hidden md:block w-px h-24 bg-gray-200 mx-8 relative z-10"></div>

                    {/* Description Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0 relative z-10">
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
                            We are a trusted and dependable technical service provider in Dubai with a focus on precision, safety, and trust. Our experienced team focuses on quality execution, transparent processes, and timely to ensure complete customer satisfaction from start to final handover.
                        </p>
                    </div>

                    {/* Skyline Graphic (Right Bottom absolute) */}
                    {/* Using a placeholder SVG or styling for the skyline effect from the image */}
                    <div className="hidden md:block absolute bottom-0 right-0 w-1/3 h-24 opacity-80 pointer-events-none">
                        <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="w-full h-full text-[#8F1413] fill-current">
                            {/* Stylized skyline silhouette */}
                            <path d="M0 100 H400 V90 H390 V70 H380 V90 H375 V60 H365 V90 H360 V40 H350 V30 H345 V90 H340 V50 H330 V90 H320 V65 H310 V90 H300 V75 H290 V90 H280 V55 H270 V90 H260 V45 H250 V90 H240 V100 Z" />
                        </svg>
                    </div>
                </div>

                {/* 2. Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">

                    {/* Column 1: Quick Links (Span 5) */}
                    <div className="lg:col-span-5">
                        <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy policy</Link></li>
                                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                                <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Get In Touch (Span 4) */}
                    <div className="lg:col-span-4">
                        <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Get In Touch</h4>
                        <div className="space-y-4">
                            <a href={`tel:1129 22 33333`} className="flex items-center group">
                                <span className="bg-[#8F1413] p-1.5 rounded mr-3 group-hover:bg-red-700 transition-colors">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">1129 22 33333</span>
                            </a>
                            <a href={`mailto:info@breeq.com`} className="flex items-center group">
                                <span className="bg-[#8F1413] p-1.5 rounded mr-3 group-hover:bg-red-700 transition-colors">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">info@breeq.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Map (Span 3) */}
                    <div className="lg:col-span-3">
                        {/* Map Placeholder or IFrame */}
                        <div className="bg-gray-200 rounded-lg h-32 w-full flex items-center justify-center overflow-hidden relative group">
                            {/* Simple Map representation or interactive map */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231220.32766327896!2d55.11666620580327!3d25.076280447833037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1709121221321!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-80 group-hover:opacity-100 transition-opacity"
                            ></iframe>
                            <div className="absolute pointer-events-none font-bold text-black bg-white/80 px-3 py-1 rounded shadow-sm hidden">Map</div>
                        </div>
                    </div>
                </div>

                {/* 3. Bottom Bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0 text-center md:text-left">
                        &copy; 2026 {SITE_CONFIG.name}. Published by Next Media. All Rights Reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex bg-[#8F1413] rounded-lg px-2 py-1 space-x-1">
                        {[
                            { name: 'Facebook', icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
                            { name: 'LinkedIn', icon: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 4a2 2 0 11-2 2 2 2 0 012-2z" /> },
                            { name: 'Instagram', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z" /> },
                            { name: 'WhatsApp', icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /> }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href="#"
                                className="w-8 h-8 flex items-center justify-center text-white hover:bg-white hover:text-[#8F1413] rounded-md transition-all sm:w-10 sm:h-10"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                                    {social.icon}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer