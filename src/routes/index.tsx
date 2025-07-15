import {Navigate, Route, Routes} from 'react-router-dom';
import {Suspense} from "react";

// App Imports
import AppLayout from "../components/layouts/AppLayout.tsx";
import LandingPage from "../features/landing-page/routes/LandingPage.tsx";
import PracticeAreas from "../features/lawyers-lancaster-immigration/routes/lawyers-lancaster-immigration.tsx";
import AboutUs from "../features/aboutus/routes/about.tsx";
import FAQ from "../features/faq/routes/Faq.tsx";
import TermsandCondition from "../features/policy/routes/policy.tsx";
import ContactUs from "../features/contactus/routes/contactus.tsx";

export const AppRoutes = () => {
    return (
        <Suspense fallback={<div/>}>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/Home" element={<LandingPage/>}/>
                    <Route path="/lawyers-lancaster-immigration" element={<PracticeAreas/>}/>
                    <Route path="/aboutus" element={<AboutUs/>}/>
                    <Route path="/policy" element={<TermsandCondition/>}/>
                    <Route path="/faq" element={<FAQ/>}/>
                    <Route path="/contactus" element={<ContactUs/>}/>
                    <Route path="*" element={<Navigate to={'/'}/>}/>
                </Route>
            </Routes>
        </Suspense>
    );
};