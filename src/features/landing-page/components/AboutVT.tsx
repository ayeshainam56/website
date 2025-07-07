import bgLight from '../../../assets/images/bg-doodles.svg';
import coin from '../../../assets/images/logo_crop.png';
import rightArrow from '../../../assets/images/right-arrow.svg';
import {Button} from "../../../../libs/lib-vt-performance-ui";
import { useNavigate } from "react-router-dom";

export default function AboutVT() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-4">
            <div
                className="w-full flex flex-col gap-32 justify-start items-start lg:justify-center lg:items-center lg:pt-10">
                <div
                    className="bg-blue-900 text-white w-fit rounded-[10px] py-1 px-3 sm:py-3 sm:px-7 lg:hidden">
                    <h2 className="text-sm md:text-2xl lg:text-[32px] font-normal">Learn About us: <span
                        className="font-bold">Your Key to Immigration Solutions</span>
                    </h2>
                </div>
                <div className="relative max-w-[900px] lg:pt-20 bg-blue-700 rounded-[10px] flex flex-col gap-8">
                    <div
                        className="z-20 bg-[rgba(184,164,135,0.9)] text-white w-fit rounded-[10px] py-3 px-7 hidden lg:block absolute top-[-35px] left-[-80px]"
>
                        <h2 className="text-[32px] font-normal">Learn About us: <span className="font-bold">Your Key to Immigration Solutions</span>
                        </h2>
                    </div>
                    <img src={bgLight} alt="bg"
                         className="absolute inset-0 object-cover w-full h-full opacity-5 object-right-bottom z-10"/>
                    <div className="flex px-7 pb-9 lg:pr-12 lg:pb-12 text-white z-20 flex-col items-center lg:flex-row">
                        <img src={coin} alt="coin"
                             className="w-[250px] h-[250px] sm:w-[308px] sm:h-[308px] mt-[-130px] sm:mt-[-150px] lg:ml-[-200px] lg:mt-[-40px]"/>
                        <div className="lg:ml-[30px]">
                            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Who We Are?</h2>
                            <p className="text-base lg:text-lg font-normal">
                                <span className="font-semibold mr-1">Malik & Associates LLC</span>
                                is a client-focused law firm offering personalized legal solutions in a
                                 variety of practice areas including family law, immigration, civil litigation, 
                                 and corporate advisory. Our mission is to deliver strategic, compassionate, and 
                                 results-driven representation tailored to each client’s needs. With a commitment 
                                 to integrity and excellence, we help individuals and businesses navigate complex 
                                 legal challenges with clarity and confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex lg:justify-end">
                <Button
                type="button"
                variant="primary"
                extraClasses="items-center gap-2.5 mt-10"
                onClick={() => navigate("/aboutus")}
            >
                About Us
                <img src={rightArrow} alt="right" />
            </Button>
            </div>
        </div>


    );
}