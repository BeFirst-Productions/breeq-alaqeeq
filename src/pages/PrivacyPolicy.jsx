import React from 'react';
import PageHeader from '../components/common/PageHeader';
import PrivacyPolicySection from '../components/privacyPolicyPage/PrivacyPolicySection';
import SEO from '../components/common/SEO';

const PrivacyPolicy = () => {
    return (
        <div className="bg-[#FAF5F5]">
            <SEO
                title="Privacy Policy | BREEQ ALAQEEQ Technical Works Dubai UAE"
                description=" Read the Privacy Policy of BREEQ ALAQEEQ Technical Works to understand how we collect, use, and protect personal data for our technical services in Dubai and across the UAE."
                keywords=" technical services in dubai,technical services companies in dubai,technical company in dubai,technical services llc dubai, technical services in uae, technical services companies in uae, best technical services company in dubai, building cleaning services, hvac service, plastering in dubai"
                canonicalUrl="/privacy-policy"
            />
            <PageHeader title="Privacy Policy" />
            <PrivacyPolicySection />
        </div>
    );
};

export default PrivacyPolicy;
