import React from 'react'

const Portfolio = () => {
    return (
        <div className="py-20 min-h-screen bg-gray-50">
            <div className="container-custom">
                <h1 className="text-secondary-900 mb-10 text-center">Our Portfolio</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
                            <div className="h-64 bg-gray-300 w-full transition-transform duration-500 group-hover:scale-110"></div>
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white text-xl font-bold">Project {item}</h3>
                                    <p className="text-gray-200">View Case Study</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
