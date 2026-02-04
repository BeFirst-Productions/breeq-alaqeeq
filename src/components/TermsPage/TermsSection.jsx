import React from 'react'
import Container from '../common/Container'
import { SITE_CONFIG } from '../../utils/constants'

const TermsSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <Container>
                {/* <div className=""> */}
                    <div className="mb-12">

                        {/* <p className="text-lg text-gray-700 font-medium">BREEQ ALAQEEQ TECHNICAL WORKS</p> */}
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Welcome to <b>BREEQ ALAQEEQ TECHNICAL WORKS</b>. By accessing our website or using our technical and maintenance services, you agree to comply with and be bound by the following Terms & Conditions.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-primary">1. Acceptance of Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                By accessing our website, requesting a quote, booking a service, or engaging with BREEQ ALAQEEQ TECHNICAL WORKS, you confirm that you agree to be legally bound by these Terms & Conditions and all applicable laws and regulations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-primary">2. Services Provided</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                BREEQ ALAQEEQ TECHNICAL WORKS provides technical and maintenance services in Dubai and across the UAE, including but not limited to:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
                                <li className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                                    <span>Building maintenance</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                                    <span>HVAC services</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                                    <span>MEP works</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                                    <span>Electrical and plumbing services</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                                    <span>Cleaning services</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                                    <span>Painting and plastering</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                                    <span>Interior finishing works</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                                    <span>General technical support services</span>
                                </li>
                            </ul>
                            <p className="text-gray-600 mt-4 leading-relaxed">
                                The scope of services may vary based on project requirements and written agreements. We reserve the right to modify, expand, or discontinue any service at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-primary">3. Quotations and Service Approval</h2>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>All quotations are valid for a limited time as stated in the quote.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Service work will begin only after client approval.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Additional work outside the approved scope may be charged separately.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Prices may vary based on site conditions and material requirements.</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-primary">4. User Responsibilities</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">You agree to:</p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Provide accurate and complete information</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Allow safe and reasonable site access for technicians</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Ensure required permissions and approvals are available</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Use our website and services only for lawful purposes</span>
                                </li>
                            </ul>
                            <p className="text-gray-600 mt-4 leading-relaxed">
                                You must not misuse our services for fraudulent, abusive, or illegal activities.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-primary">5. Payments and Billing</h2>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Payments must be made as per the agreed quotation or contract terms.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Advance payments may be required for certain services or projects.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Delayed payments may result in service suspension or delay.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>All applicable taxes and government fees will be charged where required.</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-primary">6. Refund and Cancellation</h2>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Project and contract-based services are generally non-refundable once work has started.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Scheduled services may be canceled before technician dispatch; cancellation fees may apply afterward.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Approved refunds, if any, will be processed within a reasonable business timeframe.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>No refunds apply for delays caused by client-side issues or force majeure events.</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-primary">7. Intellectual Property</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                All website content including text, graphics, logos, images, and service materials are the property of BREEQ ALAQEEQ TECHNICAL WORKS or its licensors.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                You may not copy, reproduce, distribute, or reuse any content without prior written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-primary">8. Confidentiality</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Any client information shared with us during service engagement will be treated as confidential. We will not disclose such information to third parties except:
                            </p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>With client consent</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>To service partners involved in execution</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>When required by law or authority</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-primary">9. Limitation of Liability</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">BREEQ ALAQEEQ TECHNICAL WORKS shall not be liable for:</p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Indirect or consequential damages</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Loss of business or profits</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Delays caused by third parties or authorities</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Damages due to hidden site conditions not disclosed in advance</span>
                                </li>
                            </ul>
                            <p className="text-gray-600 mt-4 leading-relaxed font-medium text-gray-800">
                                Our total liability, if any, shall not exceed the amount paid for the specific service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-primary">10. Service Warranty</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">Where applicable, limited service warranty may be provided for specific works. Warranty terms:</p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Apply only to defined scope of work</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Do not cover misuse, external damage, or unauthorized modifications</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Require proper usage and maintenance by the client</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-primary">11. Termination</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">We reserve the right to suspend or terminate services if:</p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Terms are violated</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Payments are not made</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>Site conditions are unsafe</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-[#800000] rounded-full shrink-0"></span>
                                    <span>There is misuse or abusive behavior</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-primary">12. Website Use</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We do not guarantee that the website will always be available or error-free. Content is provided for general information and may be updated without notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-primary">13. Modifications to Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We may update these Terms & Conditions from time to time. Updated versions will be posted on this page. Continued use of our services means you accept the revised terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-primary">14. Governing Law</h2>
                            <p className="text-gray-600 leading-relaxed">
                                These Terms & Conditions are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the jurisdiction of the courts of Dubai, UAE.
                            </p>
                        </section>

                        <section className="p-8 bg-gray-50 rounded-2xl border border-gray-100 mt-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-primary">15. Contact Us</h2>
                            <p className="text-gray-600 mb-4">For questions regarding these Terms & Conditions, please contact:</p>
                            <div className="text-gray-800 font-semibold space-y-1">
                                <p>{SITE_CONFIG.name}</p>
                                <p>Dubai, United Arab Emirates</p>
                                <p className="text-[#800000]">{SITE_CONFIG.phone}</p>
                                <p className="text-[#800000]">{SITE_CONFIG.contactEmail}</p>
                            </div>
                        </section>
                    </div>
                {/* </div> */}
            </Container>
        </section>
    )
}

export default TermsSection