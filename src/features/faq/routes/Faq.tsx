import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqImage from "../../../assets/images/frequently.jpg";

const faqs = [
    {
        question: "What types of legal services does your firm offer?",
        answer: "We specialize in immigration law, family law, personal injury, and general civil litigation. Our experienced team can guide you through each step of your legal journey.",
        icon: "⚖️"
    },
    {
        question: "Do you offer free initial consultations?",
        answer: "We do not offer free consultations. Our fee is $100 for the initial consultation, which allows us to understand your case in detail and provide tailored advice.",
        icon: "💬"
    },
    {
        question: "How can I schedule an appointment?",
        answer: "You can schedule a consultation through our website's contact page, by phone at (555) 123-4567, or by visiting our office during business hours (Mon-Fri, 9AM-5PM).",
        icon: "📅"
    },
    {
        question: "What should I bring to my first meeting with a lawyer?",
        answer: "Bring all relevant documents, such as court notices, immigration paperwork, identification, and any prior communication related to your case. The more documentation you provide, the better we can assess your situation.",
        icon: "📂"
    },
    {
        question: "What are your payment options?",
        answer: "We accept credit/debit cards, bank transfers, and structured payment plans depending on the case type. For certain cases, we may work on a contingency fee basis.",
        icon: "💳"
    },
    {
        question: "How long does the immigration process typically take?",
        answer: "Processing times vary significantly depending on the type of application and current USCIS backlogs. Simple applications may take 6-12 months, while complex cases can take several years. We'll provide a realistic timeline during your consultation.",
        icon: "⏳"
    },
    {
        question: "What documents do I need for a family-based green card application?",
        answer: "Typical requirements include proof of relationship (marriage/birth certificates), financial documents (tax returns, pay stubs), medical examination results, and identity documents. We'll provide a personalized checklist during your consultation based on your specific case.",
        icon: "📋"
    },
    {
        question: "Can you help if my case was previously denied?",
        answer: "Yes, we specialize in overcoming previous denials. We'll review your case history, identify the reasons for denial, and develop a strong strategy to address USCIS concerns. Many refused applications can be successfully refiled or appealed with proper legal guidance.",
        icon: "🔄"
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full px-4 py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Find answers to common questions about our legal services and processes.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* FAQ Section */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200"
                                >
                                    <div className="flex items-center">
                                        <span className="text-2xl mr-4">{faq.icon}</span>
                                        <h3 className="text-lg font-semibold text-blue-900 dark:text-white">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <motion.span
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        className="text-blue-600 dark:text-blue-400 text-xl"
                                    >
                                        ▼
                                    </motion.span>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 pt-2 text-gray-700 dark:text-gray-300">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 sticky top-24">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img 
                                src={faqImage} 
                                alt="Legal consultation" 
                                className="w-full h-auto object-cover rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                            
                            {/* Overlay Content */}
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
                                <p className="mb-4">We're here to help clarify any legal concerns you may have.</p>
                                <a 
                                    href="/contactus" 
                                    className="inline-block px-6 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-blue-100 transition-colors duration-200"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>

                        {/* Stats Card */}
                        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                            <h4 className="text-lg font-semibold text-blue-900 dark:text-white mb-4">
                                Quick Legal Facts
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                                    <span className="text-gray-700 dark:text-gray-300">Average consultation: 45-60 minutes</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                                    <span className="text-gray-700 dark:text-gray-300">Response time: Within 24 business hours</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                                    <span className="text-gray-700 dark:text-gray-300">Languages: English, Spanish</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}