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
        description: "We provide strong representation for clients facing deportation, ensuring every possible relief is exploblue."
    },
    {
        title: "Family Immigration",
        description: "Helping families unite through petitions, adjustments of status, and consular processing."
    },
    {
        title: "Asylum",
        description: "Guidance through complex asylum procedures, including cblueible fear interviews and court representation."
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
        description: "Expert handling of EB-1 to EB-5, H1B, and L visas, tailoblue to employers and skilled workers."
    }
];

export default function PracticeAreas() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center w-full bg-[#f8f9fa] py-10 px-4 sm:px-8">

            {/* Swiper Quote Slider */}
            <div className="w-full max-w-6xl mb-16">
                <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            speed={1000}
            >
            {[
                {
                quote:
                    "All the great things are simple, and many can be expressed in a single word: freedom, justice, honor, duty, mercy, hope.",
                author: "Winston Churchill",
                },
                {
                quote:
                    "The most numerous objects of legislation belong to the States. Those of the National Legislature [are] but few.",
                author: "Rufus King",
                },
                {
                quote:
                    "Law is nothing other than a certain ordinance of reason for the common good, promulgated by the person who has the care of the community.",
                author: "Thomas Aquinas",
                },
            ].map((item, index) => (
                <SwiperSlide key={index}>
                <div className="text-center bg-white px-6 py-12 rounded-xl shadow-sm max-w-5xl mx-auto">
                    <blockquote className="relative text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 leading-relaxed">
                    <span className="text-5xl text-blue-700 absolute left-[-30px] top-[-20px] select-none">“</span>
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

            {/* Practice Areas */}
            <h2 className="mb-8 text-3xl font-bold text-blue-900 dark:text-white">Practice Areas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                {practiceAreas.map((area, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl p-6 shadow-md hover:shadow-xl transition-all dark:bg-[rgb(45,72,164)]"
                        style={{ backgroundColor: 'rgba(221, 201, 174, 0.64)' }}
                    >
                        <h3 className="text-xl font-semibold text-blue-800 dark:text-white mb-2">{area.title}</h3>
                        <p className="text-l text-gray-800 dark:text-gray-200 leading-relaxed">
                            {area.description}
                        </p>
                    </div>
                ))}
            </div>

            <Button
                type="button"
                variant="primary"
                extraClasses="items-center gap-2.5 mt-10"
                onClick={() => navigate("/competitions")}
            >
                Learn More
                <img src={rightArrow} alt="right" />
            </Button>
        </div>
    );
}
