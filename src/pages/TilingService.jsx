import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';
import SEO from '../components/common/SEO';
import PrimaryButton from '../components/common/Buttons/PrimaryButton';
import { Grid, Layers, Maximize, Ruler,  ShieldCheck, ArrowRight, LayoutGrid } from 'lucide-react';
import tilingImg from '../assets/images/services/floor-wall-filling.webp';

const TilingService = () => {

    const features = [
        { title: "Accurate Placement", icon: <Ruler className="w-6 h-6" />, desc: "Precision alignment for a flawless finish." },
        { title: "Surface Prep", icon: <Layers className="w-6 h-6" />, desc: "Expert foundation preparation for longevity." },
        { title: "Premium Adhesives", icon: <ShieldCheck className="w-6 h-6" />, desc: "Using only the best materials for bonding." },
        { title: "All Tile Types", icon: <Grid className="w-6 h-6" />, desc: "Ceramic, porcelain, marble, and mosaic." },
        { title: "Scalable Projects", icon: <Maximize className="w-6 h-6" />, desc: "Efficient handling of both large and small jobs." },
        { title: "Quality Assurance", icon: <LayoutGrid className="w-6 h-6" />, desc: "Maintaining high standards throughout." },
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO
                title="Floor & Wall Tiling Works Dubai | Precision Tile Installation"
                description="BREEQ ALAQEEQ provides expert floor and wall tiling services in Dubai. Residential & commercial ceramic, marble, and mosaic installation."
                keywords="tiling works Dubai, floor tiling, wall tiling, ceramic tiles Dubai, marble installation, bathroom tiling, kitchen tiling"
                canonicalUrl="/services/tiling-works"
            />

            <PageHeader title="Floor & Wall Tiling Works" description="Precision, Durability, and Style" />

            {/* Hero Section - The Fit */}
            <section className="relative py-20 lg:py-28 overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50 hidden lg:block"></div>
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-md bg-[#800000]/5 text-[#800000] font-bold text-xs uppercase tracking-widest mb-6 border border-[#800000]/20">
                                Seamless Finishes
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                                Expert <span className="text-[#800000]">Floor & Wall</span> <br />
                                Tiling Services
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 border-l-4 border-gray-200 pl-6">
                                <strong className="text-gray-900">BREEQ ALAQEEQ TECHNICAL WORKS</strong> offers professional floor and wall tiling services in Dubai, providing durable, precise, and visually appealing tile installations for residential, commercial, and industrial properties. Our team handles all types of tiles, including ceramic, porcelain, marble, and mosaic, delivering a seamless finish.
                            </p>
                            <div className="flex gap-4">
                                <PrimaryButton text="Get a Quote" onClick={() => window.location.href = '/contact'} />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative h-[500px] w-full bg-white p-4 shadow-2xl rounded-tr-[100px] border-b-8 border-[#800000]">
                                <img src={tilingImg} alt="Luxury Tiling Works" className="w-full h-full object-cover rounded-tr-[90px]" />
                                {/* Floating Badge */}
                                <div className="absolute bottom-8 -left-8 bg-white p-6 shadow-xl rounded-lg border-l-4 border-[#800000] hidden md:block">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#800000] p-3 rounded-full text-white">
                                            <LayoutGrid className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-gray-900">100%</div>
                                            <div className="text-sm text-gray-500 font-medium">Precision Alignment</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative dots */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[radial-gradient(#800000_2px,transparent_2px)] [background-size:16px_16px] opacity-20"></div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why Go For Us - The Mosaic Grid */}
            <section className="py-24 bg-gray-50 relative">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Go for <span className="text-[#800000]">BREEQ ALAQEEQ?</span></h2>
                        <p className="text-gray-600 text-lg">
                            We focus on accurate tile placement, proper surface preparation, and premium adhesive usage to ensure long-lasting, flawless tiling. Our team handles both large and small projects with efficiency, maintaining high-quality standards throughout.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
                        {features.map((item, idx) => (
                            <div key={idx} className="bg-white p-10 hover:bg-[#800000] group transition-colors duration-300 relative overflow-hidden border border-gray-100">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#800000] group-hover:bg-white/20 transition-colors"></div>
                                <div className="mb-6 text-[#800000] group-hover:text-white transition-colors p-3 bg-gray-50 w-fit rounded-lg group-hover:bg-white/10">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                                <p className="text-gray-500 group-hover:text-white/80 transition-colors text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Bottom Breakdown - The Foundation */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-2xl">
                        {/* Text Panel */}
                        <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center relative">
                            {/* Decor */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#800000] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

                            <span className="text-[#800000] font-bold tracking-wider uppercase mb-4 text-sm">Our Promise</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                                Why Choose <span className="text-[#800000]">BREEQ ALAQEEQ?</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                As a trusted technical services company in Dubai, we provide expert floor and wall tiling solutions. Our precise workmanship, durable finishes, and attention to detail ensure that your floors and walls look stunning while standing the test of time.
                            </p>

                            {/* <button className="w-fit group flex items-center gap-2 text-white border-b border-[#800000] pb-1 hover:text-[#800000] transition-colors" onClick={() => window.location.href = '/contact'}>
                                <span className="font-medium">Schedule a Visit</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button> */}
                        </div>

                        {/* Visual/Color Panel */}
                        <div className="lg:w-1/2 bg-[#800000] p-12 lg:p-16 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                            <div className="relative z-10 max-w-md">
                                <LayoutGrid className="w-20 h-20 mx-auto mb-6 text-white/90" />
                                <h3 className="text-2xl font-bold mb-4">Start Your Transformation</h3>
                                <p className="text-white/80 mb-8">
                                    Ready to upgrade your space? Let's discuss your tiling needs today.
                                </p>
                                <PrimaryButton text="Contact Us Now" onClick={() => window.location.href = '/contact'} className="bg-white text-[#800000] hover:bg-gray-100 border-none w-full justify-center" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default TilingService;
