import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';
import SEO from '../components/common/SEO';
import PrimaryButton from '../components/common/Buttons/PrimaryButton';
import { Hammer, Ruler, RefreshCw, Layers, ShieldCheck, HardHat, CheckCircle2 } from 'lucide-react';
import plastering from '../assets/images/services/plastering-works.webp';

const PlasteringService = () => {
    return (
        <div className="bg-neutral-50 min-h-screen font-sans">
            <SEO
                title="Plastering Works in Dubai | Expert Wall Plastering Services"
                description="Professional plastering works in Dubai by BREEQ ALAQEEQ. Internal & external plastering, wall levelling, repair & restoration for residential and commercial properties."
                keywords="plastering works dubai, wall plastering dubai, ceiling plastering, wall levelling, plaster repair dubai, gypsum plastering"
                canonicalUrl="/services/plastering-works"
            />

            <PageHeader title="Plastering Works" description="Precision Plastering for Flawless Finishes" />

            {/* Unique Split Hero Section */}
            <section className="relative bg-white overflow-hidden">
                {/* Background Element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100/50 skew-x-12 transform origin-top-right translate-x-12 hidden lg:block"></div>

                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-12 py-16 lg:py-24 relative z-10">
                        {/* Text Content */}
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-[#800000] uppercase mb-4">
                                Premium Finishings
                            </h2>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
                                Smooth & Durable <br />
                                <span className="text-[#800000]">Plastering Solutions</span>
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-8">
                                <span className="font-bold text-gray-900">BREEQ ALAQEEQ TECHNICAL WORKS</span> provides master-class plastering works for residential, commercial, and industrial properties. We strengthen walls and ceilings while delivering finishes that define elegance and structural integrity.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <PrimaryButton text="Request Service" onClick={() => window.location.href = '/contact'} />
                                <div className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm">
                                    <ShieldCheck className="w-5 h-5 text-[#800000]" />
                                    <span className="text-sm font-semibold text-gray-700">ISO Standards</span>
                                </div>
                            </div>
                        </div>

                        {/* Visual Side - Image and Floating Card */}
                        <div className="lg:w-1/2 w-full relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] w-full">
                                <img
                                    src={plastering}
                                    alt="Expert Plastering Work in Dubai"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10"></div>
                            </div>

                            {/* Floating Stats Card */}
                            <div className="absolute -bottom-6 left-6 md:-left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-[#800000] max-w-xs z-20">
                                <p className="text-gray-900 font-bold text-lg mb-1">Expert Craftsmanship</p>
                                <p className="text-sm text-gray-600">Delivering superior wall leveling and bonding for long-lasting interiors.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Services Grid - Bento Style / Masonryish */}
            <section className="py-24 bg-stone-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Plastering Services</h2>
                        <div className="h-1 w-24 bg-[#800000] mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600">From surface preparation to final smoothing, we handle every aspect of plastering with precision.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Service Item 1 - Large emphasis */}
                        <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-shadow flex flex-col justify-between group">
                            <div className="mb-6">
                                <div className="w-14 h-14 bg-[#800000]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#800000] transition-colors duration-300">
                                    <Hammer className="w-7 h-7 text-[#800000] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Internal & External Plastering</h3>
                                <p className="text-gray-600 leading-relaxed">High-quality plastering solutions for both interior living spaces and harsh exterior facades. We ensure perfect adhesion and weather resistance, improving the lifespan of your property.</p>
                            </div>
                            <div className="w-full h-1 bg-stone-100 rounded-full overflow-hidden">
                                <div className="h-full w-0 group-hover:w-full bg-[#800000] transition-all duration-700 ease-out"></div>
                            </div>
                        </div>

                        {/* Service Item 2 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-shadow group">
                            <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mb-4 text-[#800000]">
                                <Ruler className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Wall Levelling</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Professional surface preparation and levelling to create perfectly flat bases for painting or tiling.</p>
                        </div>

                        {/* Service Item 3 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-shadow group">
                            <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mb-4 text-[#800000]">
                                <RefreshCw className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Repair Works</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Restoration of cracked, damaged, or blown plaster to maintain structural stability and aesthetics.</p>
                        </div>

                        {/* Service Item 4 - Full width on mobile/tablet, spans 4 on bottom row if needed */}
                        <div className="lg:col-span-4 bg-[#800000] rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-xl">
                            {/* Decorative Background */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-20"></div>

                            <div className="relative z-10 flex-1">
                                <div className="flex items-center gap-3 mb-4 text-white/80">
                                    <Layers className="w-6 h-6" />
                                    <span className="uppercase tracking-widest text-sm font-semibold">Specialized Finishes</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Gypsum & Cement Plaster</h3>
                                <p className="text-stone-200 lg:pr-12">
                                    We offer expert application of both gypsum for smooth modern interiors and cement plaster for robust exterior protection. Our team selects the right mix for your specific wall type.
                                </p>
                            </div>
                            <div className="relative z-10">

                                <PrimaryButton text="Consult Experts" onClick={() => window.location.href = '/contact'} />

                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why Choose Us - Minimal Horizontal Layout */}
            <section className="py-24 bg-white border-t border-gray-100">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Trust <br /><span className="text-[#800000]">Breeq Alaqeeq?</span></h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Reliable, professional, and dedicated to excellence. We understand the nuances of Dubai's construction standards and deliver customized plastering solutions that last.
                            </p>
                            <div className="flex items-center gap-2 text-[#800000] font-bold">
                                <span>Get in touch today</span>
                                <div className="h-[1px] w-12 bg-[#800000]"></div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="flex gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <HardHat className="w-8 h-8 text-[#800000]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Qualified Supervisors</h4>
                                    <p className="text-gray-600 text-sm">Our team is led by experienced technicians and supervisors who ensure every project meets our rigorous quality standards.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <ShieldCheck className="w-8 h-8 text-[#800000]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Premium Materials</h4>
                                    <p className="text-gray-600 text-sm">We use only high-grade cement, gypsum, and bonding agents to ensure durability and resistance to cracking.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <CheckCircle2 className="w-8 h-8 text-[#800000]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Advanced Techniques</h4>
                                    <p className="text-gray-600 text-sm">Utilizing modern application methods and equipment for faster completion and smoother finishes.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <div className="w-8 h-8 rounded-full border-2 border-[#800000] flex items-center justify-center font-bold text-xs text-[#800000]">24/7</div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Customer Satisfaction</h4>
                                    <p className="text-gray-600 text-sm">We carefully understand each client's requirements to provide tailored solutions that ensure 100% satisfaction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default PlasteringService;
