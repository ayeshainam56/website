import { useState } from "react";
import faqImage from "../../../assets/images/faq.jpg"; // Replace with your image path

const faqs = [
    {
        question: "What types of legal services does your firm offer?",
        answer: "We specialize in immigration law, family law, personal injury, and general civil litigation. Our experienced team can guide you through each step of your legal journey."
    },
    {
        question: "Do you offer free initial consultations?",
        answer: "Yes, we offer a free initial consultation to evaluate your case and determine the best course of action tailored to your legal needs."
    },
    {
        question: "How can I schedule an appointment?",
        answer: "You can schedule a consultation through our website’s contact page, by phone, or by visiting our office during business hours."
    },
    {
        question: "What should I bring to my first meeting with a lawyer?",
        answer: "Bring all relevant documents, such as court notices, immigration paperwork, identification, and any prior communication related to your case."
    },
    {
        question: "What are your payment options?",
        answer: "We accept multiple payment options including credit/debit cards, bank transfers, and structured payment plans depending on the case type."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full px-4 py-12 lg:py-20 bg-gray-50 dark:bg-gray-900 mt-[-40px]">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img src={faqImage} alt="FAQ" className="rounded-2xl shadow-lg w-full max-w-md" />
                </div>

                {/* FAQ Section */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl lg:text-5xl font-bold text-blue-900 mb-8">Frequently Asked Questions</h2>
                    <div className="flex flex-col gap-5">
                        {faqs.map((faq, index: number) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left px-6 py-4 text-lg font-semibold text-purple-800 hover:text-purple-900 dark:text-white"
                                >
                                    {faq.question}
                                </button>
                                {openIndex === index && (
                                    <p className="px-6 pb-4 text-gray-700 dark:text-gray-300 text-sm">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
