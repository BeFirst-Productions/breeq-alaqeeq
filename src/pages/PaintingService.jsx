import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';
import SEO from '../components/common/SEO';
import { Paintbrush, Check, Star, Shield, PenTool, Layers, Home, Building2, Factory } from 'lucide-react';
import PrimaryButton from '../components/common/Buttons/PrimaryButton';
import paintingImg from '../assets/images/services/painting-works.webp';

const PaintingService = () => {

    const paintingTypes = [
        {
            title: "Residential Painting",
            description: "Transform your home with our specialized residential painting for villas and apartments.",
            icon: <Home className="w-8 h-8" />
        },
        {
            title: "Commercial Painting",
            description: "Create professional environments for offices and retail spaces that impress clients.",
            icon: <Building2 className="w-8 h-8" />
        },
        {
            title: "Industrial Painting",
            description: "Durable and protective coatings for warehouses, factories, and industrial facilities.",
            icon: <Factory className="w-8 h-8" />
        }
    ];

    const specificBenefits = [
        {
            text: "Trained and supervised painting professionals",
            icon: <UsersIcon />
        },
        {
            text: "Premium quality paints and approved materials",
            icon: <PaintbrushIcon />
        },
        {
            text: "Smooth, durable, and long-lasting finishes",
            icon: <LayersIcon />
        },
        {
            text: "Clean and timely project execution",
            icon: <ClockIcon />
        },
        {
            text: "Competitive pricing and flexible packages",
            icon: <WalletIcon />
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO
                title="Best Painting Services Dubai | Professional Painting Contractors"
                description="Breeq Alaqeeq Technical Works offers expert painting services in Dubai for residential, commercial, and industrial properties. High-quality, durable finishes."
                keywords="painting services dubai, painting contractors dubai, residential painting dubai, commercial painting services, wall painting dubai"
                canonicalUrl="/services/painting-works"
            />

            <PageHeader title="Painting Works in Dubai" description="Professional Painting Contractors for All Property Types" />

            {/* Intro Section - Centered Layout Difference */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <span className="text-[#800000] font-bold tracking-widest uppercase text-sm">
                            Your Professional Painting Contractors
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Bringing Colors to Life with <span className="text-[#800000] block mt-2">Precision & Care</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            BREEQ ALAQEEQ TECHNICAL WORKS is your one-stop solution for all types of painting works in Dubai. As one of the trusted technical service providers, we combine industry expertise, high-quality materials, and modern painting techniques to deliver durable, smooth, and visually appealing finishes.
                        </p>
                    </div>
                </Container>
            </section>

            {/* 3-Column Feature Cards with unique style */}
            <section className="pb-20">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {paintingTypes.map((type, idx) => (
                            <div key={idx} className="bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 p-8 rounded-2xl border border-gray-100 group text-center">
                                <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 text-[#800000]">
                                    {type.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#800000] transition-colors">{type.title}</h3>
                                <p className="text-gray-600">{type.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Main Content Split with image on Left (opposite to cleaning service) */}
            <section className="py-20 bg-[#FAF9F6]">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            {/* Abstract decoration */}
                            <div className="absolute top-[-20px] left-[-20px] w-24 h-24 bg-[#800000] opacity-10 rounded-full blur-xl"></div>
                            <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 bg-yellow-400 opacity-10 rounded-full blur-xl"></div>

                            <div className="bg-white p-2 rounded-2xl shadow-lg relative z-10 transition-transform hover:scale-[1.01] duration-500">
                                {/* Painting image */}
                                <div className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden relative group">
                                    <img
                                        src={paintingImg}
                                        alt="Professional Painting Works"
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-transparent"></div>
                                </div>
                            </div>

                            {/* Floating Card */}
                            <div className="hidden md:block absolute -right-6 -bottom-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs z-20">
                                <div className="flex items-start gap-4">
                                    <Shield className="w-10 h-10 text-[#800000]" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Protected Surfaces</h4>
                                        <p className="text-sm text-gray-500 mt-1">Enhance appearance while protecting against weather & wear.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 space-y-8">
                            <h3 className="text-3xl font-bold text-gray-900">Our Painting Solutions</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our painting solutions are designed to enhance property appearance while protecting walls and surfaces from harsh weather conditions, moisture, and everyday wear and tear. We cater to the diverse needs of homeowners and businesses, ensuring attractive and long-lasting results that reflect quality workmanship and professional care.
                            </p>

                            {/* Detailed List */}
                            <div className="space-y-4">
                                <h4 className="font-bold text-gray-900 border-l-4 border-[#800000] pl-4">Why Go for BREEQ ALAQEEQ?</h4>
                                <ul className="space-y-3">
                                    {specificBenefits.map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-4 h-4 text-green-600" />
                                            </div>
                                            <span className="text-gray-700 font-medium">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <PrimaryButton text="Get a Quote" onClick={() => window.location.href = '/contact'} />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why Choose Us - Brand Themed Section */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="bg-[#800000] rounded-2xl md:rounded-3xl p-6 md:p-16 text-white overflow-hidden relative shadow-2xl">
                        {/* Background Patterns */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 relative z-10 items-center">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
                                        Why Choose <span className="text-yellow-400">Breeq Alaqeeq</span> Technical Works?
                                    </h3>
                                    <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                                        We are a trusted provider of professional technical and maintenance services in Dubai. We are committed to delivering high-quality solutions that ensure safety, reliability, and complete customer satisfaction.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 flex items-center gap-3 hover:bg-white/20 transition-colors w-full sm:w-auto justify-center sm:justify-start">
                                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        <span className="font-semibold tracking-wide">100% Satisfaction</span>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 flex items-center gap-3 hover:bg-white/20 transition-colors w-full sm:w-auto justify-center sm:justify-start">
                                        <Shield className="w-5 h-5 text-yellow-400" />
                                        <span className="font-semibold tracking-wide">Safety First</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-4 md:gap-5">
                                {/* Feature Card 1 */}
                                <div className="bg-white text-gray-900 p-5 md:p-6 rounded-xl shadow-lg transform transition-transform hover:-translate-y-1 duration-300 flex flex-col sm:flex-row items-start gap-4 md:gap-5">
                                    <div className="bg-[#800000]/10 p-3 rounded-lg shrink-0">
                                        <PenTool className="w-8 h-8 text-[#800000]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg md:text-xl mb-2 text-[#800000]">Skilled Supervisors</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Our team consists of experienced technicians, skilled supervisors, and dedicated support staff who work together to deliver exceptional service standards.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature Card 2 */}
                                <div className="bg-white text-gray-900 p-5 md:p-6 rounded-xl shadow-lg transform transition-transform hover:-translate-y-1 duration-300 flex flex-col sm:flex-row items-start gap-4 md:gap-5">
                                    <div className="bg-[#800000]/10 p-3 rounded-lg shrink-0">
                                        <Layers className="w-8 h-8 text-[#800000]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg md:text-xl mb-2 text-[#800000]">Advanced Equipment</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            We use advanced equipment, high-quality materials, and industry-approved methods to ensure long-lasting and professional results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>


        </div>
    );
};

// Simple Icons for local use
const UsersIcon = () => <Users className="w-5 h-5 text-[#800000]" />;
const PaintbrushIcon = () => <Paintbrush className="w-5 h-5 text-[#800000]" />;
const LayersIcon = () => <Layers className="w-5 h-5 text-[#800000]" />;
const ClockIcon = () => <Clock className="w-5 h-5 text-[#800000]" />;
const WalletIcon = () => <div className="w-5 h-5 flex items-center justify-center font-bold text-[#800000]">$</div>;

// Missing import fix
import { Users, Clock } from 'lucide-react';

export default PaintingService;
