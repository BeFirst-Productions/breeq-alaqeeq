import HeroCarousel from '../components/home/HeroCarousel'

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Carousel */}
            <HeroCarousel />

            {/* Features Section */}
            {/* <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-secondary-900 mb-4">Our Core Features</h2>
                        <p className="text-secondary-600 max-w-2xl mx-auto">
                            Built with precision and passion, our detailed approach ensures excellence in every project.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Modern Design', desc: 'Sleek, contemporary aesthetics that capture attention.' },
                            { title: 'High Performance', desc: 'Optimized for speed and efficiency across all devices.' },
                            { title: 'Scalable Solutions', desc: 'Architecture designed to grow with your business.' }
                        ].map((feature, idx) => (
                            <div key={idx} className="card p-8 hover:shadow-xl transition-all border border-gray-100">
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6 text-primary-600 font-bold text-xl">
                                    {idx + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-secondary-900">{feature.title}</h3>
                                <p className="text-secondary-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Home
