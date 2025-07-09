import React, { useState } from "react";
import contactImage from "../../../assets/images/contactus.jpg"; // Replace this with your blue-themed image
import { Button } from "../../../../libs/lib-vt-performance-ui/index.ts";
import emailjs from "emailjs-com";

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
        <div className="w-full px-6 py-12 bg-[#f7f9fc] text-[#1a1a1a]">
            {/* Top Section with Contact & Hours */}
            <div className="flex flex-col md:flex-row justify-around items-center gap-8 bg-[rgba(184,164,135,0.9)] text-black rounded-2xl p-8 mb-12">
                <div className="flex flex-col items-center gap-3">
                    <h3 className="text-xl font-bold">📞 Contact</h3>
                    <p className="text-lg">Office: (223) 529-8055</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <h3 className="text-xl font-bold">⏰ Hours</h3>
                    <p>Monday - Friday: 9:00 AM – 5:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                </div>
            </div>

            <div className="mt-20 mb-20">
                <h3 className="text-2xl font-bold text-center text-[#002244] mb-4">📍 Our Location</h3>
                <div className="rounded-2xl overflow-hidden shadow-lg">
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

            {/* Bottom Form Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="w-full lg:w-1/2">
                    <img
                        src={contactImage}
                        alt="Contact Us"
                        className="rounded-2xl shadow-lg w-full h-auto object-cover max-h-[450px]"
                    />
                </div>

                <div className="w-full lg:w-1/2 bg-white p-6 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold text-[#002244] mb-4">Get in Touch</h2>
                    <p className="mb-6 text-gray-700">
                        Have a question or want to discuss your legal case? Fill out the form and we’ll get back to you soon.
                    </p>

                    {sent ? (
                        <div className="text-green-600 font-semibold text-lg">✅ Message sent successfully!</div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />

                            <Button type="submit" variant="primary" extraClasses="mt-2">
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    )}
                </div>
            </div>

            {/* Google Map Location */}
            
        </div>
    );
};

export default ContactUs;
