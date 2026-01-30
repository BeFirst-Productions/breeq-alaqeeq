import React from 'react'

const Services = () => {
    const services = [
        'Web Development',
        'UI/UX Design',
        'Mobile Apps',
        'SEO Optimization',
        'Cloud Solutions',
        'Consulting'
    ]

    return (
        <div className="py-20 min-h-screen">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h1 className="text-secondary-900 mb-4">Our Services</h1>
                    <p className="text-secondary-600">Comprehensive solutions for your digital needs.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div key={idx} className="card p-6 text-center hover:-translate-y-1 transition-transform">
                            <h3 className="text-lg font-bold text-secondary-800">{service}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
