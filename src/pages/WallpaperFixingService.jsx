import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';
import SEO from '../components/common/SEO';
import PrimaryButton from '../components/common/Buttons/PrimaryButton';
import { Palette, Clock, CheckCircle2, ClipboardCheck, ShieldCheck, ChevronRight } from 'lucide-react';
import wallpaperImg from '../assets/images/services/wallpaper-fixing.webp';

const WallpaperFixingService = () => {
    return (
        <div className="bg-[#FAF9F6] min-h-screen font-sans selection:bg-[#800000] selection:text-white">
            <SEO
                title="Wallpaper Fixing Works Dubai | Professional Installation"
                description="Expert wallpaper fixing services in Dubai by BREEQ ALAQEEQ. Smooth, bubble-free installation for residential & commercial spaces. Custom designs & texture application."
                keywords="wallpaper fixing dubai, wallpaper installation, wall decor dubai, wallpaper adhesive, interior design dubai, wall covering services"
                canonicalUrl="/services/wallpaper-fixing"
            />

            <PageHeader title="Wallpaper Fixing Works" description="Professional Wallpaper Installation Services" />

            {/* Section 1: Intro & Content Split */}
            <section className="py-20 lg:py-28 bg-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#800000]/5 -skew-x-12 transform origin-top translate-x-32 hidden lg:block"></div>

                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-100 rounded-full text-[#800000] text-xs font-bold uppercase tracking-wider mb-6">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>Expert Installation</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Wallpaper Fixing Works <br />
                                <span className="text-[#800000]">in Dubai</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                <span className="font-bold text-gray-900">BREEQ ALAQEEQ TECHNICAL WORKS</span> provides expert wallpaper fixing services in Dubai for residential, commercial, and retail spaces. We handle all types of wallpaper, including decorative, textured, and customized designs, ensuring a smooth and precise finish that enhances interior aesthetics.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Our team prepares surfaces thoroughly and applies the wallpaper with precision for durable and long-lasting results.
                            </p>

                            <div className="bg-gray-50 p-6 border-l-4 border-[#800000] rounded-r-xl mb-8">
                                <p className="text-gray-700 italic font-medium">
                                    "Get professional wallpaper fixing works in Dubai with precision and care. BREEQ ALAQEEQ TECHNICAL WORKS ensures smooth, bubble-free, and long-lasting installation for homes and offices."
                                </p>
                            </div>

                            <PrimaryButton text="Book Consultation" onClick={() => window.location.href = '/contact'} />
                        </div>

                        <div className="relative">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                                <img src={wallpaperImg} alt="Wallpaper Finishing" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                                    <p className="font-bold text-lg">Precision & Care</p>
                                    <p className="text-sm opacity-80">Smooth, bubble-free finishing guaranteed.</p>
                                </div>
                            </div>
                            {/* Decorative Pattern Behind */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#800000] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Section 2: Why Go For Us (Grid) */}
            <section className="py-24 bg-stone-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Go for BREEQ ALAQEEQ?</h2>
                        <div className="h-1 w-20 bg-[#800000] mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 text-lg">
                            Our trained professionals deliver flawless wallpaper installation with attention to detail. We use premium adhesives and techniques to prevent bubbles, wrinkles, or misalignment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                        {/* Box 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex gap-6">
                            <div className="shrink-0">
                                <div className="w-14 h-14 rounded-xl bg-[#800000]/10 flex items-center justify-center text-[#800000]">
                                    <ClipboardCheck className="w-7 h-7" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Expert Technical Solutions</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    At BREEQ ALAQEEQ TECHNICAL WORKS, we provide top-notch technical services tailored to your needs. From HVAC servicing and building maintenance to plastering and cleaning, our skilled team ensures every project is handled with precision and professionalism.
                                </p>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex gap-6">
                            <div className="shrink-0">
                                <div className="w-14 h-14 rounded-xl bg-[#800000]/10 flex items-center justify-center text-[#800000]">
                                    <ShieldCheck className="w-7 h-7" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Quality You Can Trust</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    We prioritize quality in every task we undertake. Using the latest tools, techniques, and industry standards, we guarantee lasting results that exceed expectations. Your satisfaction is our commitment.
                                </p>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex gap-6">
                            <div className="shrink-0">
                                <div className="w-14 h-14 rounded-xl bg-[#800000]/10 flex items-center justify-center text-[#800000]">
                                    <Clock className="w-7 h-7" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Timely & Reliable Service</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Time is money, and we respect both. Our dedicated professionals ensure timely completion of all services without compromising on quality. You can rely on us to keep your home or business running smoothly.
                                </p>
                            </div>
                        </div>

                        {/* Box 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex gap-6">
                            <div className="shrink-0">
                                <div className="w-14 h-14 rounded-xl bg-[#800000]/10 flex items-center justify-center text-[#800000]">
                                    <Palette className="w-7 h-7" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Customized Solutions</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Every project is unique, and so are our solutions. We work closely with clients to understand their requirements and provide personalized solutions that perfectly match their needs and budget.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Section 3: Why Choose Us (Structured Split Panel) */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-xl">
                        {/* Text Content Side */}
                        <div className="lg:w-2/3 bg-gray-50 p-10 md:p-14 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Why Choose <span className="text-[#800000]">BREEQ ALAQEEQ?</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                We are a trusted technical services provider in Dubai, offering professional wallpaper fixing solutions with expert craftsmanship. Our team ensures precise application, long-lasting finishes, and aesthetically appealing results, giving your interiors a polished, professional look.
                            </p>

                            <div className="flex flex-wrap gap-8 mt-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-[#800000]">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold text-gray-900">Proven Reliability</span>

                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-[#800000]">
                                        <Palette className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold text-gray-900">Aesthetic Precision</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Side - Maroon Brand */}
                        <div className="lg:w-1/3 bg-[#800000] p-10 md:p-14 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
                            {/* Decorative Pattern */}
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Ready to Transform?</h3>
                                <p className="text-white/80 mb-8 text-sm">Get expert technicians for your property today.</p>
                                <PrimaryButton text="Get Skilled Technicians" onClick={() => window.location.href = '/contact'} />

                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default WallpaperFixingService;