import {Navigate, Route, Routes} from 'react-router-dom';
import {Suspense} from "react";

// App Imports
import AppLayout from "../components/layouts/AppLayout.tsx";
import LandingPage from "../features/landing-page/routes/LandingPage.tsx";
import Competitions from "../features/competitions/routes/Competitions.tsx";
import AboutUs from "../features/aboutus/routes/about.tsx";
import FAQ from "../features/faq/routes/Faq.tsx";
import TermsandCondition from "../features/policy/routes/policy.tsx";
import AboutVT from "../features/vt-coin/routes/contactus.tsx";

export const AppRoutes = () => {
    return (
        <Suspense fallback={<div/>}>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/vt" element={<LandingPage/>}/>
                    <Route path="/competitions" element={<Competitions/>}/>
                    <Route path="/aboutus" element={<AboutUs/>}/>
                    <Route path="/policy" element={<TermsandCondition/>}/>
                    <Route path="/faq" element={<FAQ/>}/>
                    <Route path="/vt-coin" element={<AboutVT/>}/>
                    <Route path="*" element={<Navigate to={'/'}/>}/>
                </Route>
            </Routes>
        </Suspense>
    );
};