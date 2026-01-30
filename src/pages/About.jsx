import React from 'react'

const About = () => {
    return (
        <div className="py-20 bg-gray-50 min-h-screen">
            <div className="container-custom">
                <h1 className="text-secondary-900 mb-8">About Us</h1>
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <p className="text-lg text-secondary-600 mb-6">
                        Breeq Alaqeeq is dedicated to delivering excellence in every pixel.
                        We are a team of passionate developers and designers who believe in the power of the web.
                    </p>
                    <div className="h-64 bg-secondary-100 rounded-xl mb-6 flex items-center justify-center">
                        <span className="text-secondary-400">Team Image Placeholder</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-secondary-600">
                        To empower businesses with digital tools that drive growth and success.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
