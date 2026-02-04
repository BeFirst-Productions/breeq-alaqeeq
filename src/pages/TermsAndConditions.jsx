import React from 'react';
import PageHeader from '../components/common/PageHeader';
import TermsSection from '../components/TermsPage/TermsSection';
import SEO from '../components/common/SEO';

const TermsAndConditions = () => {
    return (
        <div className="bg-[#FAF5F5]">
            <SEO
                title="Terms & Conditions | BREEQ ALAQEEQ Technical Works Dubai"
                description="  Read the Terms & Conditions of BREEQ ALAQEEQ Technical Works covering technical services in Dubai, maintenance work, service usage, responsibilities, and customer obligations."
                keywords=" technical services in dubai,technical services companies in dubai,technical company in dubai,technical services llc dubai, technical services in uae, technical services companies in uae, best technical services company in dubai"
                canonicalUrl="/privacy-policy"
            />
            <PageHeader title="Terms and Conditions" />
            <TermsSection />
        </div>
    );
};

export default TermsAndConditions;
