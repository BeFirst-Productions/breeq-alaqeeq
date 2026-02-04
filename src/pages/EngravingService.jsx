import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';
import SEO from '../components/common/SEO';
import PrimaryButton from '../components/common/Buttons/PrimaryButton';
import { PenTool, Gem, Crown, Sparkles, Feather, ShieldCheck, ChevronRight, Star } from 'lucide-react';
import engravingImg from '../assets/images/services/engraving-ornamentation.webp';

const EngravingService = () => {

    const features = [
        {
            title: "Expert Craftsmanship",
            description: "Our skilled artisans specialize in precise engraving and exquisite ornamentation.",
            icon: <PenTool className="w-6 h-6" />
        },
        {
            title: "Custom Designs",
            description: "Every design is tailored to your style, space, and requirements.",
            icon: <Feather className="w-6 h-6" />
        },
        {
            title: "High-Quality Materials",
            description: "We use premium materials to ensure durability and elegance.",
            icon: <Gem className="w-6 h-6" />
        },
        {
            title: "Attention to Detail",
            description: "Each project is executed meticulously to achieve flawless results.",
            icon: <Sparkles className="w-6 h-6" />
        },
        {
            title: "Timely & Reliable",
            description: "We complete projects efficiently, respecting your schedule.",
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            title: "Creative Solutions",
            description: "From traditional patterns to modern designs, we bring creativity to every project.",
            icon: <Crown className="w-6 h-6" />
        },
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            <SEO
                title="Engraving & Ornamentation Works Dubai | Artistic Detailed Services"
                description="BREEQ ALAQEEQ offers professional engraving and ornamentation services in Dubai. Intricate designs on wood, metal, glass, and stone by skilled artisans."
                keywords="engraving services Dubai, ornamentation works, custom wood carving, metal engraving Dubai, artistic interior decoration"
                canonicalUrl="/services/engraving-ornamentation"
            />

            <PageHeader title="Engraving & Ornamentation" description="Artistry, Precision, and Luxury Detailing" />

            {/* Hero Section - Elegant Light Theme */}
            <section className="relative py-20 lg:py-28 overflow-hidden bg-[#f9f9f9]">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#800000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <Container>
                    <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
                        {/* Text Side */}
                        <div className="lg:col-span-7 flex flex-col items-start">
                            <div className="flex items-center gap-2 mb-6 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm text-[#800000]">
                                <Sparkles className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-widest">Masterpieces in Detail</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-serif text-gray-900 leading-tight mb-8">
                                Engraving <span className="text-[#800000] italic">&</span> <br />
                                <span className="text-gray-900">Ornamentation</span>
                            </h1>

                            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl font-light border-l-4 border-[#800000] pl-6">
                                <span className="text-[#800000] font-bold">BREEQ ALAQEEQ TECHNICAL WORKS</span> transforms spaces into works of art. From intricate decorative designs on wood, metal, glass, and stone to custom ornaments, we deliver precision, creativity, and lasting beauty.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                                <PrimaryButton text="Get a Consultation" onClick={() => window.location.href = '/contact'} />
                            </div>
                        </div>

                        {/* Image Side - Simple Framed */}
                        <div className="lg:col-span-5 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[8px] border-white">
                                <img src={engravingImg} alt="Engraving Artistry" className="w-full h-auto object-contain" />
                                <div className="absolute inset-0 bg-[#800000]/5 pointer-events-none"></div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl z-20 max-w-[220px] rounded-lg border-l-4 border-[#800000]">
                                <Star className="w-8 h-8 text-[#800000] mb-2 fill-[#800000]" />
                                <p className="text-gray-600 text-xs font-medium italic">"Transforming your spaces and items into works of art."</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Features Section - Clean Grid */}
            <section className="py-24 bg-white relative">
                <Container>
                    <div className="text-center mb-20">
                        <h2 className="text-3xl lg:text-5xl font-serif text-gray-900 mb-6">Why Go for <span className="text-[#800000] italic">Breeq Alaqeeq?</span></h2>
                        <div className="w-24 h-1 bg-[#800000] mx-auto mb-6 rounded-full"></div>
                        <p className="text-gray-500 font-light max-w-2xl mx-auto">
                            Expert Craftsmanship. Every design is tailored to your style, space, and requirements using premium materials for durability and elegance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="group relative p-10 bg-gray-50 rounded-2xl hover:bg-[#800000] transition-colors duration-500 overflow-hidden shadow-sm hover:shadow-xl">
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#800000] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-serif text-gray-900 mb-4 group-hover:text-white transition-colors">{feature.title}</h3>
                                    <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Bottom Breakdown - Split Panel Theme Colors */}
            <section className="py-24 bg-white relative">
                <Container>
                    <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
                        {/* Left: Content - Light Theme */}
                        <div className="bg-gray-50 p-12 flex flex-col justify-center">
                            <span className="text-[#800000] font-bold tracking-widest uppercase mb-4 text-sm">Why Choose Us?</span>
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">Elevate Your Space <br /> With Art</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                As a trusted technical services company in Dubai, we provide engraving and ornamentation works that combine artistry, precision, and reliability.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000] shrink-0">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Trusted Expertise</h4>
                                        <p className="text-gray-500 text-sm">Skilled craftsmanship & premium materials.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000] shrink-0">
                                        <Crown className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Luxury Finish</h4>
                                        <p className="text-gray-500 text-sm">Timely delivery & durable results.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: CTA - Maroon Theme */}
                        <div className="bg-[#800000] p-12 text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-4">Start Your Project</h3>
                                <p className="text-white/80 mb-8">Contact BREEQ ALAQEEQ today for bespoke engraving services that stand out.</p>

                                <PrimaryButton text="Get a Consultation" onClick={() => window.location.href = '/contact'} />

                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default EngravingService;
