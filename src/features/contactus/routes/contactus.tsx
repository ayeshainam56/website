import React, { useState } from "react";
import contactImage from "../../../assets/images/contactus.jpg";
import { Button } from "../../../../libs/lib-vt-performance-ui/index.ts";
import emailjs from "emailjs-com";
import { FiMapPin, FiPhone, FiClock, FiSend } from "react-icons/fi";

const SERVICE_ID = "service_ds3hauq";
const TEMPLATE_ID = "template_fgwk1zh";
const PUBLIC_KEY = "FEknXuELhly3f4ZK5";

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then(() => {
                setSent(true);
                setFormData({ name: "", email: "", message: "" });
                setLoading(false);
            })
            .catch((error) => {
                console.error("Email error:", error);
                alert("Failed to send message. Please try again.");
                setLoading(false);
            });
    };

    return (
        <div className="w-full px-4 sm:px-6 py-12 bg-gradient-to-b from-blue-50 to-white">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Contact Us</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Ready to discuss your legal needs? Reach out to our experienced team for personalized assistance.
                </p>
            </div>

            {/* Contact Information Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {/* Location Card */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FiMapPin className="text-2xl text-blue-700" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Our Locations</h3>
                    <div className="space-y-2 text-gray-700">
                        <p className="font-semibold">Main Office:</p>
                        <p>255 Butler Ave Ste 204, Lancaster, PA 17601</p>
                        <p className="font-semibold mt-4">By Appointment Only:</p>
                        <p>140 N Lansdowne Ave, Lansdowne, PA 19050</p>
                    </div>
                </div>

                {/* Contact Card */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FiPhone className="text-2xl text-blue-700" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Get In Touch</h3>
                    <div className="space-y-2 text-gray-700">
                        <p className="font-semibold">Phone:</p>
                        <p>+1(223) 529-8055</p>
                        <p className="font-semibold mt-4">Email:</p>
                        <a href="mailto:malikassociatesllc6@gmail.com" className="text-blue-600 hover:underline">
                            malikassociatesllc6@gmail.com
                        </a>
                    </div>
                </div>

                {/* Hours Card */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FiClock className="text-2xl text-blue-700" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Office Hours</h3>
                    <div className="space-y-2 text-gray-700">
                        <p>Monday - Friday</p>
                        <p className="font-semibold">9:00 AM – 5:00 PM</p>
                        <p className="mt-4 text-gray-500">Saturday - Sunday: Closed</p>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="max-w-7xl mx-auto mb-16">
                <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">📍 Visit Our Office</h3>
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <iframe
                        title="Office Location"
                        src="https://www.google.com/maps?q=255+Butler+Ave+Ste+204,+Lancaster,+PA+17601&output=embed"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-stretch gap-10 bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Image Section */}
                    <div className="w-full lg:w-2/5 relative">
                        <img
                            src={contactImage}
                            alt="Contact Our Legal Team"
                            className="w-full h-full object-cover min-h-[400px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end p-8">
                            <div className="text-white">
                                <h2 className="text-2xl font-bold mb-2">Personalized Legal Support</h2>
                                <p>Our team is ready to guide you through your immigration journey.</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="w-full lg:w-3/5 p-8">
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-blue-900 mb-2">Send Us a Message</h2>
                            <p className="text-gray-600">
                                Have questions about your case? Fill out the form below and we'll get back to you within 24 hours.
                            </p>
                        </div>

                        {sent ? (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                                <p className="text-green-700">We'll get back to you as soon as possible.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <Button 
                                    type="submit" 
                                    variant="primary" 
                                    extraClasses="w-full py-3 text-lg font-medium flex items-center justify-center gap-2"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend className="text-lg" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;