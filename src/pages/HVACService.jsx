import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';
import SEO from '../components/common/SEO';
import PrimaryButton from '../components/common/Buttons/PrimaryButton';
import { Wind, Thermometer, Fan, CheckCircle, ShieldCheck, Zap, Activity, Clock } from 'lucide-react';
import hvacTechnician from '../assets/images/services/hvac-installation&maintenance.webp';


const HVACService = () => {

    const advantages = [
        {
            title: "Experienced HVAC Technicians",
            desc: "Our trained professionals have extensive experience in handling AC installation, ventilation systems, and air filtration solutions for all property types.",
            icon: <Activity className="w-6 h-6 text-[#800000]" />
        },
        {
            title: "Advanced Equipment",
            desc: "We use modern tools, premium components, and industry-approved techniques to ensure efficient and long-lasting HVAC system performance.",
            icon: <Zap className="w-6 h-6 text-yellow-500" />
        },
        {
            title: "Improved Air Quality",
            desc: "Our services help maintain proper airflow, reduce energy consumption, and improve indoor air quality for healthier and more comfortable environments.",
            icon: <Wind className="w-6 h-6 text-[#800000]" />
        },
        {
            title: "Reliable & Timely Service",
            desc: "We ensure fast response, efficient service execution, and minimal downtime for your cooling and ventilation systems.",
            icon: <Clock className="w-6 h-6 text-green-600" />
        },
        {
            title: "Preventive Maintenance",
            desc: "Regular HVAC maintenance helps extend system lifespan, prevent breakdowns, and maintain consistent cooling performance.",
            icon: <ShieldCheck className="w-6 h-6 text-[#800000]" />
        },
        {
            title: "Customized Solutions",
            desc: "We provide tailored HVAC services designed to match different property requirements and budget expectations.",
            icon: <CheckCircle className="w-6 h-6 text-blue-600" />
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans overflow-x-hidden">
            <SEO
                title="HVAC Installation & Maintenance Services in Dubai"
                description="Expert HVAC, Air-Conditioning, Ventilation & Air Filtration services in Dubai by BREEQ ALAQEEQ. Reliable installation, repair, and maintenance."
                keywords="HVAC services Dubai, AC installation Dubai, ventilation services, air filtration Dubai, HVAC maintenance"
                canonicalUrl="/services/hvac-works"
            />

            <PageHeader title="HVAC Services" description="Air-Conditioning, Ventilation & Air Filtration Solutions" />

            {/* Hero Section - Clean Brand Look */}
            <section className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden">
                {/* Background Tech Pattern - Subtle */}
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #800000 1px, transparent 0)', backgroundSize: '30px 30px' }}>
                </div>

                {/* Soft Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#800000]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

                <Container>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#800000]/10 border border-[#800000]/20 text-[#800000] text-sm font-semibold mb-6">
                                <Thermometer className="w-4 h-4" />
                                <span>Optimal Climate Control</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                Master <span className="text-[#800000]">Cooling & Ventilation</span>
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
                                <span className="text-gray-900 font-bold">BREEQ ALAQEEQ TECHNICAL WORKS</span> delivers professional HVAC solutions designed to maintain comfortable indoor temperatures and ensure energy-efficient performance for all property types in Dubai.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <PrimaryButton text="Book Inspection" onClick={() => window.location.href = '/contact'} />
                                <button className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 bg-white shadow-sm">
                                    <Fan className="w-5 h-5 text-[#800000]" />
                                    <span>Air Quality Solutions</span>
                                </button>
                            </div>
                        </div>

                        {/* Right Graphic - Modern Card overlap */}
                        <div className="md:w-1/2 relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                                <img
                                    src={hvacTechnician}
                                    alt="HVAC Technician"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Stats Card - Placed Below Image */}
                            <div className="relative z-20 mt-6 md:mr-6">
                                <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 border-l-4 border-l-[#800000]">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-900 font-bold">System Status</span>
                                        <div className="flex items-center gap-1 text-green-600 text-xs font-bold uppercase">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                            Optimal
                                        </div>
                                    </div>
                                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full w-[90%] bg-[#800000] rounded-full"></div>
                                    </div>
                                    <p className="text-gray-500 text-xs mt-2">Energy Efficiency: 95% Verified</p>
                                </div>
                            </div>

                            {/* Decorative background element behind image */}
                            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-dashed border-[#800000]/20 rounded-2xl -z-0"></div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why Go For Us - Light Grid Layout */}
            <section className="py-24 bg-white relative">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Go for BREEQ ALAQEEQ?</h2>
                        <div className="h-1 w-24 bg-[#800000] mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">We combine advanced technology with skilled workmanship to deliver reliable HVAC solutions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {advantages.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-[#800000]/20 transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-md border border-gray-100 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#800000] transition-colors">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Why Choose Us - Structured Layout */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row">
                        {/* Left: Brand Side (Maroon) */}
                        <div className="lg:w-1/3 bg-[#800000] p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                            {/* Decorative Circle */}
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">Why Choose <br /> BREEQ ALAQEEQ?</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                                            <ShieldCheck className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">100% Trusted</h4>
                                            <p className="text-white/70 text-sm mt-1">Reliable technical services provider in Dubai.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                                            <Zap className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Energy Efficient</h4>
                                            <p className="text-white/70 text-sm mt-1">Systems designed to lower power consumption.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 mt-12">
                                <PrimaryButton
                                    text="Contact Us Now"
                                    onClick={() => window.location.href = '/contact'}
                                    className="bg-white text-[#800000] hover:bg-gray-100 border-none w-full justify-center"
                                />
                            </div>
                        </div>

                        {/* Right: Content Side */}
                        <div className="lg:w-2/3 p-10 md:p-12 lg:pl-16 flex flex-col justify-center">
                            <h4 className="text-[#800000] font-bold tracking-widest text-sm uppercase mb-4">Professional Excellence</h4>
                            <p className="text-gray-900 text-lg font-medium leading-relaxed mb-6">
                                Choosing the right company for HVAC services in Dubai is essential. We deliver professional air-conditioning, ventilation, and air filtration solutions that prioritize your comfort and health.
                            </p>
                            <div className="space-y-4 mb-8">
                                <p className="text-gray-600 leading-relaxed text-sm border-l-4 border-gray-200 pl-4">
                                    <strong className="text-gray-900 block mb-1">Improved Efficiency</strong>
                                    Professional services ensure your system operates smoothly without excessive power consumption, directly impacting your utility bills.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-sm border-l-4 border-gray-200 pl-4">
                                    <strong className="text-gray-900 block mb-1">Extended Lifespan</strong>
                                    Regular maintenance and expert handling prevent unexpected breakdowns and significantly extend the life of your expensive equipment.
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                <span>Licensed & Insured Services</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default HVACService;
