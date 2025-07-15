import { Button } from "../../../../libs/lib-vt-performance-ui";
import { useNavigate } from "react-router-dom";
import rightArrow from '../../../assets/images/right-arrow.svg';

const practiceAreas = [
    {
        title: "Family-Based Immigration",
        description: `We assist U.S. citizens and lawful permanent residents in sponsoring their close family members to immigrate to the United States. Whether you're petitioning for a spouse, fiancé(e), parent, child, or sibling, our team ensures the process is handled with care and accuracy.`,
        details: [
            "Petitions for spouses, parents, children, and siblings",
            "Fiancé(e) (K-1) visas and marriage-based green cards",
            "Adjustment of Status and Consular Processing",
            "Removal of Conditions (I-751) for conditional green cards"
        ],
        image: "https://www.jamesgrahamlaw.com/wp-content/uploads/2024/01/Slidell-Family-Immigration-Lawyers.jpeg"
    },
    {
        title: "Removal Defense",
        description: `Facing deportation is frightening. Our experienced attorneys provide strong defense strategies to keep families together and protect individual rights in immigration court.`,
        details: [
            "Cancellation of removal for lawful permanent residents and non-permanent residents",
            "Representation at Master and Individual Hearings",
            "Motions to reopen and reconsider",
            "Bond and custody redetermination hearings"
        ],
        image: "https://saavedraperezlaw.com/wp-content/uploads/2024/10/removal-defense-1.webp"
    },
    {
        title: "Asylum",
        description: `We help individuals fleeing persecution seek safety and protection in the United States. Our team provides expert guidance through the asylum process to ensure your voice is heard and rights are protected.`,
        details: [
            "Affirmative and defensive asylum filings",
            "Credible fear and reasonable fear interviews",
            "Representation in asylum court hearings",
            "Country condition documentation and expert affidavits"
        ],
        image: "https://www.e-ir.info/wp-content/uploads/fly-images/84607/shutterstock_394562299-1-807x455-c.jpg"
    },
    {
        title: "Humanitarian Relief",
        description: `We advocate for vulnerable individuals seeking protection and lawful status under various humanitarian programs. Our team treats each case with compassion and dedication.`,
        details: [
            "Asylum and Withholding of Removal",
            "VAWA petitions for survivors of domestic violence",
            "U and T Visas for victims of crime and trafficking",
            "Temporary Protected Status (TPS)"
        ],
        image: "https://concernusa.org/uploads/hero-un-principles-of-humanitarian-aid.webp"
    },
    {
        title: "Business Immigration",
        description: `We offer strategic immigration services tailored to entrepreneurs, investors, startups, and established companies looking to bring global talent to the U.S. Whether you're opening a new office, expanding your workforce, or launching an enterprise, we help you navigate the legal complexities.`,
        details: [
            "E-2 Treaty Investor and L-1 Intra-Company Transfer Visas",
            "EB-5 Immigrant Investor Program",
            "Advisory for business formation and visa strategy",
            "Support with USCIS compliance and filings",
            "Guidance for founders and executives of startups"
        ],
        image: "https://www.lawsb.com/wp-content/uploads/2024/09/business-immigration-lawyer-hero-image.jpg"
    },
    {
        title: "Employment-Based Green Cards & Visas",
        description: `We guide employers and skilled workers through complex U.S. employment-based immigration processes, ensuring efficient and compliant visa and green card solutions. Whether hiring international talent or adjusting your own status, we handle all the details so you can focus on your goals.`,
        details: [
            "H-1B visas for specialty occupations",
            "L-1 visas for intracompany transferees",
            "O-1 visas for individuals with extraordinary ability",
            "PERM labor certification process",
            "EB-1, EB-2 (including NIW), EB-3 green card categories",
            "Support with I-140 and I-485 filings"
        ],
        image: "https://s34329.pcdn.co/wp-content/uploads/2020/06/Employment-based-green-card-on-American-flag.jpg"
    }
];

const successStories = [
    {
        title: "Asylum Granted After Years of Fear",
        content: "Our client, a political activist, received asylum after a well-documented application and court representation. They're now thriving in the U.S. with their family."
    },
    {
        title: "Green Card Through Marriage Approved",
        content: "We successfully helped a couple prove their marriage was genuine. The client received their green card within 8 months after navigating a challenging RFE."
    },
    {
        title: "Dreamer Finds Stability With DACA",
        content: "A young DREAMer client renewed their DACA and obtained Advance Parole to visit a sick parent abroad — safely returning to continue work and studies."
    }
];

export default function PracticeAreas() {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-white py-16 px-6 sm:px-10 lg:px-20 text-[#1a1a1a] mt-[-70px]">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                    Our <span className="text-[rgba(184,164,135,0.9)]">Practice Areas</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We deliver expert legal solutions for every stage of your immigration journey—from family reunification to deportation defense, employment visas, and more.
                </p>
                <div className="w-24 h-1 bg-[rgba(184,164,135,0.7)] mx-auto mt-8 rounded-full"></div>
            </div>

            {/* Practice Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto mb-24">
                {practiceAreas.map((area, index) => (
                    <div
                        key={index}
                        className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img 
                                src={area.image} 
                                alt={area.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-blue-800 mb-4">{area.title}</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                            <ul className="space-y-3">
                                {area.details.map((point, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-[rgba(184,164,135,0.9)] mr-3 mt-1">•</span>
                                        <span className="text-gray-700">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="flex justify-center mb-24">
                <Button 
                    type="button" 
                    variant="primary" 
                    extraClasses="px-10 py-3 text-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                    onClick={() => navigate("/contactus")}
                >
                    Schedule a Consultation
                    <img src={rightArrow} alt="arrow" className="w-5" />
                </Button>
            </div>

            {/* Success Stories */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-0">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-16">
                    Client <span className="text-[rgba(184,164,135,0.9)]">Success Stories</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {successStories.map((story, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-[rgba(184,164,135,0.9)]"
                        >
                            <div className="text-5xl text-[rgba(184,164,135,0.3)] mb-4">"</div>
                            <h3 className="text-xl font-bold text-blue-800 mb-3">{story.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{story.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}