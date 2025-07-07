import HeroSection from "../components/HeroSection.tsx";
import Stats from "../components/Stats.tsx";
//import Guide from "../components/Guide.tsx";

import AboutVT from "../components/AboutVT.tsx";
import LatestCompetitions from "../components/LatestCompetitions.tsx";

export default function LandingPage() {

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-16">
            <HeroSection/>
            <Stats/>
            {/* <Guide /> */}
            <LatestCompetitions />
            <AboutVT />
            
        </div>
    );
}
