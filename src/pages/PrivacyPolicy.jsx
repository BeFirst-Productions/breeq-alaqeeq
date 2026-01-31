import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white">
            <PageHeader title="Privacy Policy" />
            <Container className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto prose prose-lg prose-red">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Welcome to BREEQ ALAQEEQ TECHNICAL WORKS. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We collect personal information that you provide to us such as name, address, contact information, and billing details when you request our technical services, which include:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>AC Repair and Maintenance</li>
                            <li>Electrical and Plumbing Works</li>
                            <li>Technical Installation and Repairs</li>
                            <li>Building Maintenance Services</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use personal information collected via our website for a variety of business purposes described below:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>To facilitate account creation and logon process.</li>
                            <li>To send administrative information to you for service updates.</li>
                            <li>To fulfill and manage your service requests.</li>
                            <li>To request feedback and to contact you about your use of our services.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Will Your Information Be Shared?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We aim to protect your personal information through a system of organizational and technical security measures. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have questions or comments about this policy, you may email us at info@breeqalaqeeq.com or by post to our office in Dubai, UAE.
                        </p>
                    </section>
                </div>
            </Container>
        </div>
    );
};

export default PrivacyPolicy;
