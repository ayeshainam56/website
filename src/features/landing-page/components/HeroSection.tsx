import coin from '../../../assets/images/law.jpg';
import rightArrow from '../../../assets/images/right-arrow.svg';
import {Button} from "../../../../libs/lib-vt-performance-ui";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();
    
    return (
        <div className="w-full flex flex-col lg:flex-row gap-8 pb-[60px]">
            <div className="flex flex-col flex-1 gap-7">
                <h1 className="flex flex-col text-3xl md:text-4xl lg:text-5xl text-blue-900">
                    <span className="font-extrabold tracking-tight">A Guiding Light</span>
                    <span className="outlined-text font-extrabold">For Your</span>
                    <span className="font-black italic tracking-tight">Immigrations matters</span>
                </h1>
                <Button type={"button"} variant={"primary"} extraClasses="max-w-[275px] gap-2.5 items-center" onClick={() => navigate("/contactus")}>
                    Schedule a Consultation
                    <img src={rightArrow} alt="arrow" />
                </Button>
            </div>

          <div className="flex flex-1 justify-end items-center">
    <div className="relative min-w-[350px] flex justify-end items-center">
        {/* Circle Background */}
        <div className="w-56 h-56 rounded-full bg-blue-900"></div>

        {/* Coin Image with Circular Frame */}
        <div className="absolute left-[-100px] top-[-10px] w-[300px] h-[300px] rounded-full overflow-hidden">
            <img
                src={coin}
                alt="coin"
                className="w-full h-full object-cover"
            />
        </div>

        {/* Decorative Bubbles */}
        
        <div className="w-[60px] h-[57px] bg-[rgba(184,164,135,0.9)] rounded-full absolute bottom-[-60px] right-3"></div>
    </div>
</div>

            
        </div>
    );
}