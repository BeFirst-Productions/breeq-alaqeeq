import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Message sent! (Simulation)')
    }

    return (
        <div className="py-20 min-h-screen">
            <div className="container-custom max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h1 className="text-secondary-900 mb-6">Get in Touch</h1>
                        <p className="text-secondary-600 mb-8">
                            We'd love to hear from you. Fill out the form and we'll be in touch as soon as possible.
                        </p>
                        <div className="space-y-4">
                            <p><strong>Email:</strong> {import.meta.env.VITE_CONTACT_EMAIL || 'contact@example.com'}</p>
                            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                            <p><strong>Address:</strong> 123 Tech Street, Digital City</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    className="input-field"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="input-field"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    className="input-field min-h-[120px]"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
