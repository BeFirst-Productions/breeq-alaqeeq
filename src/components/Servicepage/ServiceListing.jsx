import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../common/Container';
import PrimaryButton from '../common/Buttons/PrimaryButton';
import { serviceListingData } from '../../utils/serviceListingData';

// Import Images
import buildingCleaning from '../../assets/images/services/building-cleaning.webp';
import painting from '../../assets/images/services/painting-works.webp';
import plastering from '../../assets/images/services/plastering-works.webp';
import hvac from '../../assets/images/services/hvac-installation&maintenance.webp';
import mep from '../../assets/images/services/electromechanical-works.webp';
import wallpaper from '../../assets/images/services/wallpaper-fixing.webp';
import carpentry from '../../assets/images/services/carpeting-woodflooring.webp';
import engraving from '../../assets/images/services/engraving-ornamentation.webp';
import tiling from '../../assets/images/services/floor-wall-filling.webp';
import plumbing from '../../assets/images/services/plumbing-works.webp';
import falseCeiling from '../../assets/images/services/false-ceiling.webp';

const ServiceListing = () => {
    const navigate = useNavigate();

    // Map service IDs to images
    const imageMap = {
        'building-cleaning': buildingCleaning,
        'painting-works': painting,
        'plastering-works': plastering,
        'hvac-services': hvac,
        'mep-services': mep,
        'wallpaper-fixing': wallpaper,
        'carpentry-flooring': carpentry,
        'engraving-ornamentation': engraving,
        'tiling-works': tiling,
        'plumbing-sanitary': plumbing,
        'false-ceiling': falseCeiling
    };

    return (
        <section className="py-10 md:py-20 bg-[#FAF5F5]">

            <Container className="space-y-32 ">
                {serviceListingData.map((service, index) => {
                    const isEven = index % 2 === 0;
                    const ServiceImage = imageMap[service.id] || buildingCleaning;

                    return (
                        <div
                            key={service.id}
                            id={service.id}
                            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center `}
                        >
                            {/* Content Section */}
                            <div className="flex-1 space-y-6">
                                <div className="space-y-4">
                                    <h2
                                        onClick={() => navigate(service.detailPage)}
                                        className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight cursor-pointer hover:text-[#800000] transition-colors"
                                    >
                                        {service.title}
                                    </h2>
                                    {/* Subtitle removed as requested for short description focus */}

                                    <p className="text-gray-600 leading-relaxed text-lg line-clamp-4">
                                        {service.description}
                                    </p>
                                </div>

                                {/* CTAs */}
                                <div className="flex flex-wrap gap-4 pt-4">
                                    {service.detailPage && (
                                        <PrimaryButton
                                            text="View Details"
                                            onClick={() => navigate(service.detailPage)}
                                            icon="arrow"
                                        />
                                    )}
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="flex-1 w-full">
                                <div
                                    className="relative group cursor-pointer"
                                    onClick={() => navigate(service.detailPage)}
                                >
                                    {/* Decorative Borders/Backdrops */}
                                    <div className={`absolute -inset-4 bg-[#800000]/10 rounded-lg transform ${isEven ? 'rotate-2' : '-rotate-2'} transition-transform duration-500 group-hover:rotate-0`} />
                                    <div className={`absolute -inset-4 bg-gray-100 rounded-lg transform ${isEven ? '-rotate-2' : 'rotate-2'} -z-10 transition-transform duration-500 group-hover:rotate-0`} />

                                    {/* Main Image */}
                                    <div className="relative overflow-hidden rounded-lg shadow-xl aspect-[4/3]">
                                        <img
                                            src={ServiceImage}
                                            alt={service.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                            <span className="text-white font-bold text-lg border-l-4 border-[#800000] pl-3">
                                                {service.title}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Container>
        </section>

    );
};

export default ServiceListing;
