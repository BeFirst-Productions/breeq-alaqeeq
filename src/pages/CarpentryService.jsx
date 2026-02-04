import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';
import SEO from '../components/common/SEO';
import PrimaryButton from '../components/common/Buttons/PrimaryButton';
import { Hammer, Ruler, PenTool, Gem, Clock, CheckCircle2, Award, HardHat, ChevronRight } from 'lucide-react';
import carpentryImg from '../assets/images/services/carpeting-woodflooring.webp';

const CarpentryService = () => {

    const features = [
        {
            title: "Years of Experience",
            description: "We bring extensive experience in carpentry, wood flooring, and technical services.",
            icon: <Award className="w-6 h-6" />
        },
        {
            title: "Skilled Craftsmanship",
            description: "Our team consists of skilled professionals who ensure precision and quality in every project.",
            icon: <Hammer className="w-6 h-6" />
        },
        {
            title: "Passion for Quality",
            description: "We are committed to delivering top-notch results that exceed client expectations.",
            icon: <CheckCircle2 className="w-6 h-6" />
        },
        {
            title: "Custom Designs",
            description: "We design and execute carpentry and wood flooring projects tailored to your style, space, and needs.",
            icon: <PenTool className="w-6 h-6" />
        },
        {
            title: "Premium Materials",
            description: "Only high-quality materials are used for durability and long-lasting appeal.",
            icon: <Gem className="w-6 h-6" />
        },
        {
            title: "Precise Techniques",
            description: "Our expert techniques guarantee smooth finishes and polished, flawless results.",
            icon: <Ruler className="w-6 h-6" />
        },
        {
            title: "Timely Execution",
            description: "Projects are completed on schedule without compromising on quality.",
            icon: <Clock className="w-6 h-6" />
        },
        {
            title: "Attention to Detail",
            description: "We focus on every detail to ensure perfect outcomes.",
            icon: <CheckCircle2 className="w-6 h-6" />
        }
    ];

    return (
        <div className="bg-[#fcfbf9] min-h-screen font-sans">
            <SEO
                title="Carpentry & Wood Flooring Works Dubai | Custom Furniture & Floors"
                description="Professional carpentry and wood flooring services in Dubai by BREEQ ALAQEEQ. Custom furniture, wooden flooring, cabinets, and doors with expert craftsmanship."
                keywords="carpentry services Dubai, wood flooring installation, painting and carpentry, custom furniture Dubai, wooden cabinets, flooring contractors"
                canonicalUrl="/services/carpentry-flooring"
            />

            <PageHeader title="Carpentry & Services" description="Skilled Carpentry & Wood Flooring Services" />

            {/* Hero Section - "Craftsman" Layout */}
            <section className="relative py-20 lg:py-28 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#800000]/5 -skew-x-6 transform origin-bottom hidden lg:block"></div>
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Content Side */}
                        <div className="lg:w-1/2 relative z-10">
                            <span className="inline-block py-1 px-3 rounded bg-[#800000]/10 text-[#800000] font-bold text-xs uppercase tracking-widest mb-6">Expert Woodworks</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-8">
                                Carpentry & <br />
                                <span className="text-[#800000] underline decoration-4 underline-offset-8 decoration-gray-200">Wood Flooring</span>
                            </h1>
                            <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                <span className="font-bold">BREEQ ALAQEEQ TECHNICAL WORKS</span> offers professional carpentry and wood flooring services in Dubai, combining precision, craftsmanship, and high-quality materials. Whether it’s custom furniture, cabinets, doors, or complete wood flooring installations for homes, offices, or commercial spaces, we deliver solutions that are both functional and visually appealing.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <PrimaryButton text="Request Service" onClick={() => window.location.href = '/contact'} />
                                <div className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg bg-white shadow-sm">
                                    <Hammer className="w-5 h-5 text-[#800000]" />
                                    <span className="font-semibold text-gray-900">Custom Builds</span>
                                </div>
                            </div>
                        </div>

                        {/* Image Side - Stacked Panels */}
                        <div className="lg:w-1/2 relative">
                            {/* Back Panel */}
                            <div className="absolute top-8 right-8 w-full h-full border-4 border-[#800000]/20 rounded-xl z-0 hidden md:block"></div>
                            {/* Main Image */}
                            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                                <img src={carpentryImg} alt="Carpenter at work" className="w-full h-[500px] object-cover" />
                                {/* Overlay Box */}
                                <div className="absolute bottom-0 left-0 bg-white p-6 md:p-8 text-left max-w-xs shadow-lg rounded-tr-xl border-t-4 border-[#800000]">
                                    <p className="text-gray-900 font-bold text-xl mb-1">Precision Works</p>
                                    <p className="text-gray-500 text-sm">Enhancing interior spaces with durable, long-lasting wood results.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Features Grid - "The Workshop" Style */}
            <section className="py-24 bg-white relative border-t border-gray-100">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Go for <span className="text-[#800000]">BREEQ ALAQEEQ?</span></h2>
                            <p className="text-gray-600">Our team ensures every project is executed with attention to detail, creating durable results.</p>
                        </div>
                        <div className="hidden md:block w-32 h-1 bg-gray-100 rounded-full">
                            <div className="w-16 h-full bg-[#800000] rounded-full"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                        {features.map((feature, idx) => (
                            <div key={idx} className="group relative p-6 bg-gray-50 rounded-xl hover:bg-[#800000] transition-colors duration-300">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    {feature.icon}
                                </div>
                                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-[#800000] mb-4 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">{feature.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white/80 transition-colors">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Bottom Breakdown - Structured Split Panel */}
            <section className="py-16 lg:py-24 bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">
                        {/* Title & CTA Panel - Dark */}
                        <div className="lg:w-2/5 bg-[#1a1a1a] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden text-white">
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose <br /><span className="text-[#800000]">BREEQ ALAQEEQ?</span></h2>
                                <div className="h-1 w-24 bg-[#800000] mb-8 rounded-full"></div>
                                <p className="text-white/60 mb-12 max-w-sm">We combine industry expertise with premium materials to deliver exceptional results for every project.</p>
                            </div>

                            <div className="relative z-10">
                                <PrimaryButton text="Start Your Project" onClick={() => window.location.href = '/contact'} />

                            </div>

                            {/* Decoration */}
                            <div className="absolute right-0 bottom-0 w-48 h-48 bg-[#800000] rounded-tl-[100px] opacity-10"></div>
                        </div>

                        {/* Content Panel - Maroon */}
                        <div className="lg:w-3/5 bg-[#800000] p-8 md:p-12 text-white flex flex-col justify-center gap-8 md:gap-10 relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

                            {/* Item 1 */}
                            <div className="flex flex-col sm:flex-row gap-5 items-start relative z-10">
                                <div className="p-3 bg-white/10 rounded-xl shrink-0 backdrop-blur-sm border border-white/20 shadow-inner">
                                    <HardHat className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Expert Technical Solutions</h3>
                                    <p className="text-white/80 leading-relaxed text-sm">
                                        We provide a wide range of technical services in Dubai, including carpentry, wood flooring, wallpaper fixing, HVAC, building maintenance, and more. Our team combines experience and skill to deliver precise, high-quality results every time.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-white/10 relative z-10"></div>

                            {/* Item 2 */}
                            <div className="flex flex-col sm:flex-row gap-5 items-start relative z-10">
                                <div className="p-3 bg-white/10 rounded-xl shrink-0 backdrop-blur-sm border border-white/20 shadow-inner">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Skilled & Experienced Team</h3>
                                    <p className="text-white/80 leading-relaxed text-sm">
                                        Our professionals are trained, certified, and experienced in their respective fields. From detailed woodwork to complex maintenance tasks, we ensure every project is completed with accuracy, efficiency, and perfection.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default CarpentryService;
