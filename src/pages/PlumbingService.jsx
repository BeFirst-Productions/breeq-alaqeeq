import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';
import SEO from '../components/common/SEO';
import PrimaryButton from '../components/common/Buttons/PrimaryButton';
import { Wrench, Droplets, ShieldCheck, Clock, CheckCircle2, BadgeCheck, Zap, ArrowRight, } from 'lucide-react';
import plumbingImg from '../assets/images/services/plumbing-works.webp';

const PlumbingService = () => {
    const features = [
        { title: "Experienced Plumbers", desc: "Our team consists of skilled and certified plumbing professionals.", icon: <BadgeCheck className="w-5 h-5" /> },
        { title: "Modern Tools", desc: "We use the latest tools and technology for precise and efficient work.", icon: <Wrench className="w-5 h-5" /> },
        { title: "Approved Materials", desc: "Only high-quality, industry-approved materials are used for durability and safety.", icon: <ShieldCheck className="w-5 h-5" /> },
        { title: "Reliable Installations", desc: "We ensure plumbing systems are installed or repaired correctly the first time.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { title: "Safety First", desc: "All work follows strict safety protocols to protect you and your property.", icon: <ShieldCheck className="w-5 h-5" /> },
        { title: "Efficient Service", desc: "We complete projects quickly without compromising on quality.", icon: <Zap className="w-5 h-5" /> },
        { title: "Minimal Disruption", desc: "Our team works carefully to avoid inconveniencing your home or business.", icon: <Clock className="w-5 h-5" /> },
    ];

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <SEO
                title="Plumbing & Sanitary Installation Services Dubai | Professional Plumbers"
                description="BREEQ ALAQEEQ offers professional plumbing and sanitary installation services in Dubai. Leak-free pipes, fixture installation, and reliable repairs for homes and offices."
                keywords="plumbing services Dubai, sanitary installation, pipe repair, bathroom fixtures, water leakage repair, commercial plumbing Dubai"
                canonicalUrl="/services/plumbing-sanitary"
            />

            <PageHeader title="Plumbing & Sanitary Works" description="Efficient Flow, Reliable Systems" />

            {/* Hero Section - "The Connection" Layout */}
            <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                        {/* Text Side */}
                        <div className="lg:w-1/2 relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-[#800000]/10 rounded-full">
                                    <Droplets className="w-6 h-6 text-[#800000]" />
                                </div>
                                <span className="font-bold text-gray-900 tracking-wide uppercase text-sm">Professional Solutions</span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                                Plumbing & <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#800000] to-red-600">Sanitary Installation</span>
                            </h1>

                            <p className="text-gray-600 text-lg leading-relaxed mb-10 border-l-4 border-[#800000] pl-6 bg-gray-50 py-4 pr-4 rounded-r-xl">
                                <strong className="text-gray-900">BREEQ ALAQEEQ TECHNICAL WORKS</strong> delivers professional plumbing and sanitary installation services in Dubai for homes, offices, and commercial buildings. From pipe installation, water systems, and drainage to sanitary fittings and bathroom fixtures, our team ensures efficient, reliable, and long-lasting plumbing solutions.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <PrimaryButton text="Book a Plumber" onClick={() => window.location.href = '/contact'} />
                                <div className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-lg text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-[#800000]" />
                                    <span>Certified Experts</span>
                                </div>
                            </div>
                        </div>

                        {/* Image Side - Water Shape Clip */}
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                                <img src={plumbingImg} alt="Professional Plumbing" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 bg-[#800000] rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium uppercase tracking-wider">On-Site Expert</span>
                                    </div>
                                    <p className="font-light text-white/90">Ensuring leak-proof and durable systems.</p>
                                </div>
                            </div>
                            {/* Decorative Pipes Design */}
                            <div className="absolute -top-10 -right-10 w-full h-full border-2 border-[#800000]/10 rounded-[3rem] -z-10"></div>
                            <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-[#800000]/10 rounded-[3rem] -z-10"></div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Features Section - "The Pipeline" Timeline Layout */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                {/* Central Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>

                <Container>
                    <div className="text-center mb-20 relative z-10">
                        <span className="text-[#800000] font-bold tracking-widest uppercase text-sm">Why Go For Us?</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-2">The Flow of Excellence</h2>
                    </div>

                    <div className="space-y-8 relative z-10">
                        {features.map((feature, idx) => (
                            <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Icon/Dot Connection */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-[#800000] rounded-full items-center justify-center text-[#800000] shadow-lg z-20">
                                    <div className="w-3 h-3 bg-[#800000] rounded-full"></div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group cursor-default relative overflow-hidden`}>
                                        <div className="absolute top-0 w-full h-1 bg-[#800000] left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                                        <div className={`flex items-center gap-4 mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                            <div className="p-3 bg-[#800000]/5 rounded-xl text-[#800000] group-hover:bg-[#800000] group-hover:text-white transition-colors">
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="w-full md:w-1/2 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Bottom Breakdown - Split Panel Theme */}
            <section className="py-24 bg-white border-t border-gray-100">
                <Container>
                    <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
                        {/* Left: Content - Light Theme */}
                        <div className="bg-gray-50 p-12 lg:p-16 flex flex-col justify-center">
                            <div className="w-16 h-16 bg-[#800000]/10 rounded-2xl rotate-45 flex items-center justify-center mb-10">
                                <ShieldCheck className="w-8 h-8 text-[#800000] -rotate-45" />
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose <br /><span className="text-[#800000]">BREEQ ALAQEEQ?</span></h2>

                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                We are a trusted technical services provider in Dubai, offering high-quality plumbing and sanitary solutions.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our team ensures proper installation, leak-free operation, and durable systems that comply with industry standards and deliver long-term performance.
                            </p>
                        </div>

                        {/* Right: CTA - Maroon Theme */}
                        <div className="bg-[#800000] p-12 lg:p-16 text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-6">Ready for Reliable Plumbing?</h3>
                                <p className="text-white/80 mb-10 text-lg">
                                    Contact us today for professional installation, maintenance, and repairs.
                                </p>

                                <div className="space-y-6">
                                    <button className="w-full py-4 bg-white text-[#800000] font-bold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg group" onClick={() => window.location.href = '/contact'}>
                                        <span>Start Your Project</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>

                                    {/* <div className="flex items-center justify-center gap-2 text-white/80">
                                        <span>or call us at</span>
                                        <a href="tel:+971501234567" className="text-white font-bold hover:underline hover:text-white">+971 50 123 4567</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default PlumbingService;
