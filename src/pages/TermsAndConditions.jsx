import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';

const TermsAndConditions = () => {
    return (
        <div className="bg-white">
            <PageHeader title="Terms and Conditions" />
            <Container className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto prose prose-lg prose-red">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                        <p className="text-gray-700 leading-relaxed">
                            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and BREEQ ALAQEEQ TECHNICAL WORKS ("we," "us" or "our"), concerning your access to and use of our technical services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We specialize in technical works including but not limited to:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Air Conditioning, Ventilation & Air Filtration Systems Installation & Maintenance.</li>
                            <li>Electromechanical Equipment Installation and Maintenance.</li>
                            <li>Plumbing & Sanitary Installation.</li>
                            <li>Building Cleaning Services.</li>
                            <li>Wall Tiling and Floor Works.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Quotations and Pricing</h2>
                        <p className="text-gray-700 leading-relaxed">
                            All quotations provided are valid for 30 days. Prices are subject to change based on the specific requirements discovered during onsite inspection. VAT is applicable as per UAE law.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Payment is due upon completion of the service unless otherwise agreed in writing. For larger projects, a deposit may be required before work commences.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Warranty and Liability</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We provide a limited warranty on our workmanship. We are not liable for pre-existing conditions or damages caused by improper use or lack of maintenance by the client.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
                        <p className="text-gray-700 leading-relaxed">
                            These Terms and Conditions and your use of the services are governed by and construed in accordance with the laws of the United Arab Emirates as applied in the Emirate of Dubai.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason.
                        </p>
                    </section>
                </div>
            </Container>
        </div>
    );
};

export default TermsAndConditions;
