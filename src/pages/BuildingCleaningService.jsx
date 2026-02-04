import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';
import SEO from '../components/common/SEO';
import { CheckCircle, ShieldCheck, Star, Clock, Home, Building, Users, Sparkles } from 'lucide-react';
import PrimaryButton from '../components/common/Buttons/PrimaryButton';
import cleaningImg from '../assets/images/services/building-cleaning.webp';

const BuildingCleaningService = () => {
    const services = [
        {
            title: "Post-construction Cleaning",
            description: "Get rid of dust, debris, and residues after construction or renovation.",
            icon: <Building className="w-10 h-10 text-primary-500" />,
        },
        {
            title: "Deep Cleaning for Villas & Apartments",
            description: "Comprehensive cleaning for floors, kitchens, bathrooms, and living spaces.",
            icon: <Home className="w-10 h-10 text-primary-500" />,
        },
        {
            title: "Office & Commercial Building Cleaning",
            description: "Maintain sanitized, organized, and presentable work areas for your business.",
            icon: <Building className="w-10 h-10 text-primary-500" />,
        },
        {
            title: "Common Area & Facility Cleaning",
            description: "Cleaning for lobbies, corridors, staircases, and shared facilities.",
            icon: <Users className="w-10 h-10 text-primary-500" />,
        },
        {
            title: "Contract & One-time Cleaning",
            description: "Flexible solutions for your ongoing or occasional cleaning needs.",
            icon: <Clock className="w-10 h-10 text-primary-500" />,
        },
        {
            title: "Specialized Sanitation Services",
            description: "Health and safety compliance through disinfection and maintenance of hygiene.",
            icon: <ShieldCheck className="w-10 h-10 text-primary-500" />,
        }
    ];

    const benefits = [
        "Trained and supervised cleaning staff",
        "Eco-friendly and approved cleaning solutions",
        "Prompt and trustworthy service delivery",
        "Reasonable pricing and adaptable packages",
        "Long-lasting and professional results"
    ];

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Building Cleaning Services Dubai | Breeq Alaqeeq Technical Works"
                description="Expert building cleaning services in Dubai for residential, commercial, and industrial properties. Deep cleaning, post-construction, and more."
                keywords="building cleaning services dubai, post construction cleaning dubai, deep cleaning villas dubai, office cleaning dubai, commercial cleaning services"
                canonicalUrl="/services/building-cleaning"
            />

            <PageHeader title="Building Cleaning Services" />
            {/* <p className="text-gray-200 text-lg md:text-xl max-w-2xl mt-4">
                    Your professional partner for spotless residential, commercial, and industrial properties in Dubai.
                </p>
            </PageHeader> */}

            {/* Introduction Section */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Professional Cleaning Company Dubai</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Expert Building Cleaning <span className="text-primary-600">Services in Dubai</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                BREEQ ALAQEEQ TECHNICAL WORKS is your one-stop-shop for all types of building cleaning services in Dubai, including cleaning services for residential, commercial, and industrial properties.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Being one of the top technical service providers in Dubai, we leverage our industry experience, professional equipment, and use of eco-friendly cleaning materials to produce hygienic, safe, and spotless premises. Our solutions are aimed at catering to varied businesses and homeowners, ensuring a fresh and healthy atmosphere that communicates the highest level of professional and personal care.
                            </p>
                            <div className="pt-4">
                                <PrimaryButton text="Contact Us Today" onClick={() => window.location.href = '/contact'} />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary-100 rounded-2xl transform rotate-3 -z-10 opacity-50"></div>

                            <div className="bg-gray-200 rounded-2xl h-80 w-full flex items-center justify-center overflow-hidden shadow-xl">
                                <img src={cleaningImg} alt="Building Cleaning Services" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-24 bg-gray-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Complete Range of Cleaning Services</h2>
                        <p className="text-gray-600 text-lg">We provide specialized cleaning solutions tailored to your specific needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
                                <div className="mb-6 p-4 bg-primary-50 rounded-lg inline-block group-hover:bg-primary-100 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Why Choose Us Section - Spacious Redesign */}
            <section className="py-20 md:py-32 bg-white overflow-hidden relative">


                <Container>
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                        <div className="lg:w-1/2 space-y-10">
                            <div className="space-y-6">
                                <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold tracking-wide uppercase">
                                    Why Choose Us?
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                    Committed to <br />
                                    <span className="text-primary-600">Excellence & Quality</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Breeq Alaqeeq Technical Works is a trusted provider of professional technical and maintenance services in Dubai. We deliver high-quality solutions that ensure safety, reliability, and complete customer satisfaction.
                                </p>
                            </div>

                            {/* Our Approach Highlight */}
                            <div className="bg-gray-900 text-white p-8 md:p-10 rounded-2xl relative overflow-hidden shadow-xl">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Sparkles className="w-32 h-32" />
                                </div>
                                <div className="relative z-10 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-primary-600 rounded-lg">
                                            <Sparkles className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold">Our Approach</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        We use advanced equipment, professional materials, and industry-approved methods to ensure long-lasting results. Our customized solutions are designed to match every client's unique requirements.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Benefits Grid */}
                        <div className="lg:w-1/2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className={`p-6 rounded-xl border border-gray-100 hover:border-primary-100 hover:shadow-lg transition-all duration-300 bg-white group ${index === benefits.length - 1 ? 'sm:col-span-2' : ''}`}
                                    >
                                        <div className="flex flex-col h-full justify-between gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary-50 transition-colors">
                                                <CheckCircle className="w-6 h-6 text-gray-400 group-hover:text-primary-600 transition-colors" />
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 leading-snug">
                                                {benefit}
                                            </h4>
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>
                </Container>
            </section>


        </div>
    );
};

export default BuildingCleaningService;
