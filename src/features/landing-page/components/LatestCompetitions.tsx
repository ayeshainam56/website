import { Button } from "../../../../libs/lib-vt-performance-ui";
import rightArrow from "../../../assets/images/right-arrow.svg";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const practiceAreas = [
    {
        title: "Removal Defenses",
        description: "We provide strong representation for clients facing deportation, ensuring every possible relief is explored."
    },
    {
        title: "Family Immigration",
        description: "Helping families unite through petitions, adjustments of status, and consular processing."
    },
    {
        title: "Asylum",
        description: "Guidance through complex asylum procedures, including credible fear interviews and court representation."
    },
    {
        title: "Humanitarian Reliefs",
        description: "We assist with VAWA, U Visas, T Visas, and other humanitarian-based immigration benefits."
    },
    {
        title: "Business Immigration",
        description: "Comprehensive solutions for businesses and investors seeking to navigate U.S. immigration pathways."
    },
    {
        title: "Employment-Based Green Cards & Visas",
        description: "Expert handling of EB-1 to EB-5, H1B, and L visas, tailored to employers and skilled workers."
    }
];

export default function PracticeAreas() {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-8 lg:px-16">
            {/* Swiper Quote Slider - Maintained exactly as is */}
            <div className="w-full max-w-6xl mx-auto mb-20">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    speed={1000}
                >
                    {[
                        {
                            quote: "Those who disbelieve in the signs of Allah and kill the prophets without right and kill those who order justice from among the people - give them tidings of a painful punishment.",
                            author: "Surah Al-Imran Ayat 21",
                        },
                        {
                            quote: "Indeed, Allah commands you to render trusts to whom they are due and when you judge between people to judge with justice. Excellent is that which Allah instructs you. Indeed, Allah is ever Hearing and Seeing.",
                            author: "Surah An-Nisa Ayat 58",
                        },
                        {
                            quote: "O you who have believed, be persistently standing firm in justice, witnesses for Allah, even if it be against yourselves or parents and relatives.",
                            author: "Surah An-Nisa Ayat 135",
                        },
                    ].map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center bg-white px-6 py-12 rounded-xl shadow-sm max-w-5xl mx-auto">
                                <blockquote className="relative text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 leading-relaxed">
                                    <span className="text-5xl text-blue-700 absolute left-[-30px] top-[-20px] select-none">"</span>
                                    <span className="inline-block ml-4 mr-2">{item.quote}</span>
                                </blockquote>
                                <cite className="block mt-6 text-lg text-blue-700 font-semibold">
                                    {item.author}
                                </cite>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Enhanced Practice Areas Section */}
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 relative">
                    Practice Areas
                    <span className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[rgba(221,201,174,0.8)] rounded-full"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {practiceAreas.map((area, idx) => (
                        <div
                            key={idx}
                            className="relative rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 bg-[rgba(221,201,174,0.64)] border border-[rgba(221,201,174,0.8)] hover:border-blue-300 group overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-700 group-hover:h-2 transition-all duration-300"></div>
                            <h3 className="text-xl font-bold text-blue-900 mb-3">{area.title}</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        type="button"
                        variant="primary"
                        extraClasses="px-8 py-3 text-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
                        onClick={() => navigate("/competitions")}
                    >
                        Learn More
                        <img src={rightArrow} alt="right" className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}