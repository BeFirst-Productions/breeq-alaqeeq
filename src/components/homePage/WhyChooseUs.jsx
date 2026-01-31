import React, { useState, useEffect, useRef } from 'react';
import Container from '../common/Container';
import { row1Cards, row2Cards } from '../../utils/whyChooseData';

const WhyChooseUs = () => {
    const [expandedRow1, setExpandedRow1] = useState(0);
    const [expandedRow2, setExpandedRow2] = useState(2);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const Card = ({ card, isExpanded, onHover }) => {
        return (
            <div
                onMouseEnter={onHover}
                className="relative h-[300px] md:h-[320px] lg:h-[340px] rounded-[16px] overflow-hidden cursor-pointer flex shadow-2xl group select-none min-w-[120px]"
                style={{
                    flex: isExpanded ? 2.8 : 1,
                    transition: 'flex 3s cubic-bezier(0.4, 0, 0.2, 1), background 3s ease',
                    willChange: 'flex',
                    background: 'linear-gradient(277deg, #8F1413 0%, #000000 100%)',
                }}
            >
                {/* 1. Background Content Layer */}
                <div className="relative w-full h-full flex flex-col justify-between p-5 md:p-7 lg:p-8 xl:p-10 z-10">

                    {/* Top Section: Number always top-right */}
                    <div className="flex justify-end w-full">
                        <div className={`text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-bold transition-all duration-[3000ms]
                            ${isExpanded ? 'text-[#F03535] opacity-100 scale-110' : 'text-[#F03535] opacity-40'}
                        `}
                            style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                        >
                            {card.id}
                        </div>
                    </div>

                    {/* Bottom Section: Text Content (Left) + Image (Right, shown on expand) */}
                    <div className="flex items-end justify-between w-full h-full pt-12">
                        {/* Text Content */}
                        <div className={`transition-all duration-[3000ms] flex flex-col justify-end
                            ${isExpanded ? 'w-[55%] xl:w-[60%]' : 'w-full'}
                        `}
                            style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                        >
                            <h3 className={`font-bold text-white transition-all duration-[3000ms] leading-tight
                                ${isExpanded ? 'text-lg md:text-xl lg:text-2xl xl:text-[28px] mb-4' : 'text-sm md:text-base lg:text-lg xl:text-[20px] mb-2'}
                            `}
                                style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                            >
                                {card.title}
                            </h3>

                            <p className={`text-white/80 leading-relaxed transition-all duration-[3000ms] overflow-hidden
                                ${isExpanded ? 'text-xs md:text-sm xl:text-base opacity-100 max-h-[120px]' : 'text-[11px] md:text-xs opacity-60 line-clamp-2 max-h-[40px] md:max-h-[60px]'}
                            `}
                                style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                            >
                                {card.description}
                            </p>
                        </div>

                        {/* Image: Bottom Right Inset */}
                        {card.image && (
                            <div className={`hidden lg:block relative transition-all duration-[3000ms] overflow-hidden rounded-[16px] shadow-2xl shrink-0
                                ${isExpanded ? 'opacity-100 translate-y-0 translate-x-0 w-[160px] xl:w-[220px] h-[120px] xl:h-[165px]' : 'opacity-0 translate-y-8 translate-x-8 w-0 h-0 pointer-events-none'}
                            `}
                                style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile overlay for non-hovered state */}
                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-1000 md:hidden ${isExpanded ? 'opacity-0' : 'opacity-100'}`} />
            </div>
        );
    };

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-white overflow-hidden">
            <Container>
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-[#1183C8]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L14.4 9.6H22L15.8 14.2L18.2 21.8L12 17.2L5.8 21.8L8.2 14.2L2 9.6H9.6L12 2Z" />
                        </svg>
                        <span className="text-[#1183C8] font-bold tracking-widest text-sm md:text-base uppercase">
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Why Clients Choose<br />
                        <span className="text-[#1183C8]">BREEQ ALAQEEQ</span> TECHNICAL WORKS
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="w-full max-w-[1200px] mx-auto">
                    {/* Desktop View: Stretching Logic */}
                    <div className="hidden lg:flex lg:flex-col lg:gap-5 xl:gap-[22px]">
                        {/* Row 1 - Slides from Right */}
                        <div className={`flex gap-1 w-full transition-all duration-1000 ease-out transform
                            ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                        `}>
                            {row1Cards.map((card, idx) => (
                                <Card
                                    key={card.id}
                                    card={card}
                                    isExpanded={expandedRow1 === idx}
                                    onHover={() => setExpandedRow1(idx)}
                                />
                            ))}
                        </div>

                        {/* Row 2 - Slides from Left */}
                        <div className={`flex gap-1 w-full transition-all duration-1000 ease-out transform
                            ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-100%] opacity-0'}
                        `}>
                            {row2Cards.map((card, idx) => (
                                <Card
                                    key={card.id}
                                    card={card}
                                    isExpanded={expandedRow2 === idx}
                                    onHover={() => setExpandedRow2(idx)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Mobile & Tablet View: Static Cards */}
                    <div className={`lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-2 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        {[...row1Cards, ...row2Cards].map((card) => (
                            <div
                                key={card.id}
                                className="rounded-[16px] p-6 md:p-8 shadow-xl relative overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                                style={{
                                    background: 'linear-gradient(277deg, #8F1413 0%, #000000 100%)',
                                    backgroundPosition: 'center center'
                                }}
                            >
                                {/* Header Section */}
                                <div className="flex justify-between items-center mb-6">
                                    <div className="text-5xl md:text-6xl font-bold text-[#8F1413] opacity-60 leading-none">
                                        {card.id}
                                    </div>
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg border border-white/10 shrink-0">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 flex flex-col justify-end">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                                        {card.title}
                                    </h3>
                                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WhyChooseUs;
