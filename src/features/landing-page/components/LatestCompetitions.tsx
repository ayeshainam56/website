import { Button } from "../../../../libs/lib-vt-performance-ui";
import rightArrow from "../../../assets/images/right-arrow.svg";
import { useNavigate } from "react-router-dom";

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
        <div className="flex flex-col items-center">
            <h2 className="mb-8 text-3xl font-bold text-blue-900 dark:text-white">Practice Areas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4 sm:px-8">
                {practiceAreas.map((area, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl p-6 shadow-md hover:shadow-lg transition-all dark:bg-[rgb(45,72,164)]"
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