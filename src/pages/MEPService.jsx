import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';
import SEO from '../components/common/SEO';
import PrimaryButton from '../components/common/Buttons/PrimaryButton';
import { Wrench, Zap, Settings, ShieldCheck, Clock, CheckCircle2, Factory, Scale } from 'lucide-react';
import mepImage from '../assets/images/services/electromechanical-works.webp';

const MEPService = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO
                title="MEP Services Dubai | Electromechanical Installation & Maintenance"
                description="Professional MEP services in Dubai by BREEQ ALAQEEQ. Mechanical, electrical, and plumbing installation and maintenance for residential & industrial properties."
                keywords="MEP services Dubai, electromechanical maintenance Dubai, MEP installation, mechanical electrical plumbing, HVAC electrical Dubai"
                canonicalUrl="/services/mep-works"
            />

            <PageHeader title="MEP Services" description="Mechanical, Electrical & Plumbing Excellence" />

            {/* Hero Section - Technical Grid Design */}
            <section className="border-b border-gray-200">
                <Container>
                    <div className="flex flex-col lg:flex-row">
                        {/* Left Content with heavy border grid */}
                        <div className="lg:w-1/2 py-20 lg:pr-16 lg:border-r border-gray-200">
                            <div className="inline-block px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 mb-8 tracking-wider uppercase">
                                Engineering & Infrastructure
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                Electromechanical <br />
                                <span className="text-[#800000]">Equipment Solutions</span>
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                <span className="font-bold text-gray-900">BREEQ ALAQEEQ TECHNICAL WORKS</span> provides expert MEP installation and maintenance services in Dubai. We cover mechanical, electrical, and plumbing systems to ensure reliable performance, safety compliance, and long-term efficiency for your master projects.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <PrimaryButton text="Schedule Consultation" onClick={() => window.location.href = '/contact'} />
                                <div className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full text-gray-600 font-semibold hover:bg-gray-50 transition-colors">
                                    <Settings className="w-5 h-5 text-[#800000]" />
                                    <span>System Diagnostics</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Image panel */}
                        <div className="lg:w-1/2 relative bg-gray-50 min-h-[400px] lg:min-h-full">
                            {/* Grid overlay */}
                            <div className="absolute inset-0 z-10 opacity-20 pointer-events-none"
                                style={{
                                    backgroundImage: 'linear-gradient(#800000 1px, transparent 1px), linear-gradient(90deg, #800000 1px, transparent 1px)',
                                    backgroundSize: '40px 40px'
                                }}>
                            </div>

                            <img
                                src={mepImage}
                                alt="MEP Technician"
                                className="absolute inset-0 w-full h-full object-cover z-0"
                            />

                            {/* Overlay Card */}
                            <div className="absolute bottom-0 left-0 w-full bg-[#800000]/95 backdrop-blur-sm p-6 text-white z-20 flex justify-between items-center border-t border-white/20">
                                <div>
                                    <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Service Status</p>
                                    <p className="font-bold text-lg">Industrial Grade Certified</p>
                                </div>
                                <ShieldCheck className="w-8 h-8 opacity-80" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why Go For Us - Technical Spec Layout */}
            <section className="py-24 bg-white relative">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Header Column */}
                        <div className="lg:w-1/3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
                                Technical Advantages
                                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#800000]"></span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Our solutions are built on a foundation of engineering precision and safety. We don't just fix problems; we optimize entire systems.
                            </p>
                            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                                <div className="flex items-start gap-3 mb-4">
                                    <Scale className="w-6 h-6 text-[#800000] mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Compliance Focused</h4>
                                        <p className="text-sm text-gray-600">Strict adherence to Dubai's safety and building regulations.</p>
                                    </div>
                                </div>
                                <div className="h-px bg-gray-200 my-4"></div>
                                <div className="flex items-start gap-3">
                                    <Factory className="w-6 h-6 text-[#800000] mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Industrial Ready</h4>
                                        <p className="text-sm text-gray-600">Equipment capable of handling heavy-duty requirements.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                            {/* Item 1 */}
                            <div className="relative pl-10">
                                <span className="absolute left-0 top-0 text-3xl font-black text-[#800000]/10 font-mono">01</span>
                                <Wrench className="w-6 h-6 text-[#800000] absolute left-0 top-1" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Skilled MEP Technicians</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Our trained professionals have extensive experience handling mechanical, electrical, and plumbing systems for all types of properties.
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="relative pl-10">
                                <span className="absolute left-0 top-0 text-3xl font-black text-[#800000]/10 font-mono">02</span>
                                <Zap className="w-6 h-6 text-[#800000] absolute left-0 top-1" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Tools & Materials</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We use modern equipment and premium materials designed to ensure reliable, safe, and long-lasting electromechanical results.
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="relative pl-10">
                                <span className="absolute left-0 top-0 text-3xl font-black text-[#800000]/10 font-mono">03</span>
                                <Clock className="w-6 h-6 text-[#800000] absolute left-0 top-1" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Efficient & Reliable</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We focus on timely service delivery with minimal disruption to your operations, understanding urgency is critical in MEP faults.
                                </p>
                            </div>

                            {/* Item 4 */}
                            <div className="relative pl-10">
                                <span className="absolute left-0 top-0 text-3xl font-black text-[#800000]/10 font-mono">04</span>
                                <Settings className="w-6 h-6 text-[#800000] absolute left-0 top-1" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Preventive Maintenance</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Regular maintenance helps prevent system failures, reduce repair costs, and significantly improve operational efficiency.
                                </p>
                            </div>

                            {/* Item 5 - Full Width */}
                            <div className="md:col-span-2 relative pl-10 pt-4 border-t border-gray-100">
                                <span className="absolute left-0 top-4 text-3xl font-black text-[#800000]/10 font-mono">05</span>
                                <CheckCircle2 className="w-6 h-6 text-[#800000] absolute left-0 top-5" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Customized Solutions</h3>
                                <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                                    We provide tailored MEP solutions to match the unique requirements of residential, commercial, and industrial buildings, scaling from simple repairs to complex installations.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why Choose Us - Restructured Technical Panel */}
            <section className="py-24 bg-white border-t border-gray-100">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-0 lg:gap-0 bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
                        {/* Left Panel: Brand & CTA */}
                        <div className="lg:w-2/5 bg-[#1a1a1a] text-white p-10 md:p-12 flex flex-col justify-center relative">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <Settings className="w-32 h-32 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6 relative z-10 leading-tight">Why Partner With <br /> Breeq Alaqeeq?</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed relative z-10 text-sm">
                                We deliver precision engineering and reliable maintenance. Our commitment to safety and efficiency makes us the preferred choice for complex MEP requirements in Dubai.
                            </p>
                            <div className="relative z-10">
                                <PrimaryButton
                                    text="Get a Free Quote"
                                    onClick={() => window.location.href = '/contact'}
                                    className="w-full justify-center bg-[#800000] border-none text-white hover:bg-[#600000]"
                                />
                            </div>
                        </div>

                        {/* Right Content Grid */}
                        <div className="lg:w-3/5 p-10 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 bg-white relative">
                            {/* Background Grid Pattern */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none"
                                style={{
                                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                                    backgroundSize: '20px 20px'
                                }}>
                            </div>

                            <div className="flex flex-col gap-2 relative z-10">
                                <div className="w-10 h-10 bg-[#800000]/10 rounded-lg flex items-center justify-center mb-2">
                                    <ShieldCheck className="w-5 h-5 text-[#800000]" />
                                </div>
                                <h4 className="font-bold text-gray-900 text-lg">Safety First</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Rigorous safety protocols for every installation and repair task to protect your property.</p>
                            </div>

                            <div className="flex flex-col gap-2 relative z-10">
                                <div className="w-10 h-10 bg-[#800000]/10 rounded-lg flex items-center justify-center mb-2">
                                    <Clock className="w-5 h-5 text-[#800000]" />
                                </div>
                                <h4 className="font-bold text-gray-900 text-lg">24/7 Support</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Rapid response teams available round-the-clock for critical system emergencies.</p>
                            </div>

                            <div className="flex flex-col gap-2 relative z-10">
                                <div className="w-10 h-10 bg-[#800000]/10 rounded-lg flex items-center justify-center mb-2">
                                    <Zap className="w-5 h-5 text-[#800000]" />
                                </div>
                                <h4 className="font-bold text-gray-900 text-lg">Advanced Tech</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Using the latest diagnostic tools for precise fault finding and resolution.</p>
                            </div>

                            <div className="flex flex-col gap-2 relative z-10">
                                <div className="w-10 h-10 bg-[#800000]/10 rounded-lg flex items-center justify-center mb-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#800000]" />
                                </div>
                                <h4 className="font-bold text-gray-900 text-lg">Quality Assured</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Premium materials ensuring longevity and reliability of your building systems.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default MEPService;
