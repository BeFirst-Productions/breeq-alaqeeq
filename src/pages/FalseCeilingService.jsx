import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';
import SEO from '../components/common/SEO';
import PrimaryButton from '../components/common/Buttons/PrimaryButton';
import { Layers, Maximize, Ruler, ShieldCheck, Sun, Clock, ArrowRight, LayoutDashboard } from 'lucide-react';
import ceilingImg from '../assets/images/services/false-ceiling.webp';

const FalseCeilingService = () => {
    const features = [
        { title: "Skilled Installation", desc: "Professionals with experience in gypsum false ceilings and partitions.", icon: <Ruler className="w-5 h-5" /> },
        { title: "Customized Designs", desc: "Solutions tailored to your space, style, and functional needs.", icon: <LayoutDashboard className="w-5 h-5" /> },
        { title: "Premium Materials", desc: "High-quality gypsum, panels, and accessories for durability.", icon: <Layers className="w-5 h-5" /> },
        { title: "Attention to Detail", desc: "Flawless finishes and precise installation for long-lasting results.", icon: <Maximize className="w-5 h-5" /> },
        { title: "Timely Service", desc: "Efficient project execution with minimal disruption to your routine.", icon: <Clock className="w-5 h-5" /> },
        { title: "Modern Aesthetics", desc: "Transforming interiors with stylish and functional solutions.", icon: <Sun className="w-5 h-5" /> },
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO
                title="False Ceiling & Light Partition Installation Dubai | Gypsum & Glass Partitions"
                description="BREEQ ALAQEEQ expert false ceiling and light partition installation in Dubai. Modern gypsum designs, office partitions, and stylish interior solutions."
                keywords="false ceiling Dubai, gypsum ceiling, light partitions, office partitions Dubai, gypsum board installation, interior fit-out"
                canonicalUrl="/services/false-ceiling-partition"
            />

            <PageHeader title="False Ceiling & Partitions" description="Modern Overhead & Spatial Solutions" />

            {/* Hero Section - "Modern Split" Layout */}
            <section className="relative py-20 lg:py-28 overflow-hidden bg-gray-50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                        {/* Text Side */}
                        <div className="text-left">
                            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white border border-gray-200 text-[#800000] font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
                                <Sun className="w-4 h-4" />
                                <span>Elevate Your Interiors</span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                False Ceiling & <br />
                                <span className="text-[#800000] relative inline-block">
                                    Light Partitions
                                </span>
                            </h1>

                            <p className="text-gray-600 text-lg leading-relaxed mb-8 border-l-4 border-[#800000] pl-6">
                                <strong className="text-gray-900">BREEQ ALAQEEQ TECHNICAL WORKS</strong> provides expert false ceiling and light partition installation services in Dubai, transforming interiors with modern, stylish, and functional solutions.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <PrimaryButton text="Get a Quote" onClick={() => window.location.href = '/contact'} />
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="relative">
                            <div className="relative z-10 rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-2xl border-4 border-white h-[500px]">
                                <img src={ceilingImg} alt="Modern False Ceiling" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-[#800000]/5 pointer-events-none"></div>

                                {/* Floating Card */}
                                <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur-sm p-6 pr-8 rounded-tr-3xl shadow-lg border-t-4 border-[#800000]">
                                    <h3 className="text-lg font-bold text-gray-900">Modern Spaces</h3>
                                    <p className="text-xs text-gray-500 mt-1">Gypsum & Glass Solutions</p>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#800000]/10 rounded-full blur-2xl -z-10"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-200 rounded-full blur-2xl -z-10"></div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Features Section - "Floating Panels" */}
            <section className="py-24 bg-white relative">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(128,0,0,0.15)] transition-all duration-300 border border-gray-100 group">
                                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#800000] mb-6 group-hover:bg-[#800000] group-hover:text-white transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed group-hover:text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Split Panel Bottom Section - Standard Theme */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <Container>
                    <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
                        {/* Left: Content - Light Theme */}
                        <div className="bg-white p-12 lg:p-16 flex flex-col justify-center">
                            <div className="w-16 h-16 bg-[#800000]/10 rounded-full flex items-center justify-center mb-10">
                                <ShieldCheck className="w-8 h-8 text-[#800000]" />
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose <br /><span className="text-[#800000]">BREEQ ALAQEEQ?</span></h2>

                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                BREEQ ALAQEEQ TECHNICAL WORKS is a trusted provider of technical services in Dubai. We combine skilled craftsmanship, premium materials, and years of experience to deliver precise, durable, and visually appealing results.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Every project is executed with attention to detail, safety, and efficiency, ensuring minimal disruption and timely completion.
                            </p>
                        </div>

                        {/* Right: CTA - Maroon Theme */}
                        <div className="bg-[#800000] p-12 lg:p-16 text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-6">Transform Your Space</h3>
                                <p className="text-white/80 mb-10 text-lg">
                                    Ready to upgrade your ceilings or partition your office? Contact us today.
                                </p>

                                <div className="space-y-6">
                                    <button className="w-full py-4 bg-white text-[#800000] font-bold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg group" onClick={() => window.location.href = '/contact'}>
                                        <span>Start Your Project</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default FalseCeilingService;
