import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import ReactFlagsSelect from 'react-flags-select';

import bgDoodles from '../../assets/images/bg_doodles_light.svg';
import firm_logo from '../../assets/images/firm_logo.png';

import award from '../../assets/images/award.svg';
import twitter from '../../assets/images/twitter.svg';
import insta from '../../assets/images/instagram.svg';

import twitterDark from '../../assets/images/twitter-dark.svg';
import instaDark from '../../assets/images/instagram-dark.svg';

import burger from '../../assets/images/burger.svg';
import cross from '../../assets/images/cross.svg';

const tabs = [
    { title: 'Home', to: 'Home' },
    { title: 'Practice Areas', to: 'lawyers-lancaster-immigration' },
    { title: 'Team', to: 'aboutus' },
    { title: 'Contact Us', to: 'contactus' },
    { title: 'Faq', to: 'Faq' },
];

export default function AppLayout() {
    const [openSidebar, setOpenSidebar] = useState(false);
    const navigate = useNavigate();
    const [selected, setSelected] = useState('GB');
    const location = useLocation();
    const currentPath = location.pathname.split('/')[1];

    
    useEffect(() => {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }, []);

    return (
        <div className="min-h-screen min-w-screen flex flex-col justify-between dark:bg-blue-950">
            <img src={bgDoodles} alt="bg-doodles"
                className="absolute top-0 w-full min-h-[150px] object-cover z-10" />

            {openSidebar && (
                <div className="w-full flex fixed top-0 left-0 z-30 min-w-screen min-h-screen">
                    <div className="min-w-[300px] flex flex-col bg-white py-6 px-8 justify-between">
                        <div className="flex flex-col gap-14">
                            <img src={firm_logo} alt="logo" className="w-28 h-auto" onClick={() => navigate('/')} />
                            <div className="flex flex-col gap-5">
                                {tabs.map((item) => {
                                    const isCurrent = currentPath === item.to.replace('/', '');
                                    return (
                                        <Link
                                            to={item.to}
                                            key={item.title}
                                            className={`text-base font-bold tracking-[1px] ${isCurrent ? 'text-blue-300' : 'text-blue-600'}`}
                                        >
                                            {item.title.toUpperCase()}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <img src={twitterDark} alt="twitter" className="cursor-pointer" />
                            <img src={instaDark} alt="insta" className="cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex-grow bg-black bg-opacity-60 flex justify-end items-start">
                        <img src={cross} alt="cross" className="cursor-pointer my-6 mx-7"
                            onClick={() => setOpenSidebar(!openSidebar)} />
                    </div>
                </div>
            )}

            <div className="flex items-center lg:hidden z-10 py-6 px-8 bg-[#f5f5dc]">
                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => navigate('/')}>
                        <img src={firm_logo} alt="logo" className="w-24 h-auto" />
                        <span className="font-light text-sm tracking-[0.3em] text-blue-900">Malik & Associates LLC</span>
                    </div>
                </div>
                <img src={burger} alt="burger" className="cursor-pointer"
                    onClick={() => setOpenSidebar(!openSidebar)} />
            </div>

            <div className="z-10 py-10 hidden lg:flex justify-center bg-white bg-opacity-40 w-full">
                <div className="flex justify-between items-center w-11/12">
                    <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => navigate('/')}>
                        <img src={firm_logo} alt="logo" className="w-28 h-auto" />
                        <span className="font-light text-lg tracking-[0.3em] text-blue-900">Malik & Associates LLC</span>
                    </div>
                    <div className="flex gap-8">
                        {tabs.map((item) => {
                            const isCurrent = currentPath === item.to.replace('/', '');
                            return (
                                <Link
                                    to={item.to}
                                    key={item.title}
                                    className={`text-base font-bold tracking-[1px] ${isCurrent ? 'text-blue-300' : 'text-black'}`}
                                >
                                    {item.title.toUpperCase()}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="z-20 px-8 md:px-24 lg:px-36 py-14 md:py-28">
                <Outlet />
            </div>

            <div className="bg-[rgba(184,164,135,0.9)] z-20 flex items-center justify-center py-14">
                <div className="w-10/12 flex flex-col gap-10">
                    <div className="flex justify-between">
                        <div className="flex gap-4 items-center">
                            <img src={award} alt="award" />
                            <div className="flex flex-col text-white">
                                <h2 className="text-lg sm:text-xl font-bold">TRUSTED LEGAL REPRESENTATION</h2>
                                <p className="text-sm sm:text-base font-normal">
                                    Providing expert legal services with integrity and professionalism. Connect with us to learn more about how we can help.
                                </p>
                            </div>
                        </div>
                        <div className="h-2 w-48 rounded-[10px] hidden lg:flex bg-white"></div>
                    </div>
                    <div className="flex items-center justify-between gap-3.5 flex-col lg:flex-row">
                        <div className="flex gap-5 flex-wrap lg:flex-nowrap items-center justify-center">
                            {tabs.map((item) => {
                                const isCurrent = currentPath === item.to.replace('/', '');
                                return (
                                    <Link
                                        to={item.to}
                                        key={item.title}
                                        className={`text-base font-normal tracking-[0.25px] ${isCurrent ? 'text-blue-300' : 'text-white'}`}
                                    >
                                        {item.title.toUpperCase()}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* 🔁 LANGUAGE SWITCHER replaces address */}
                        <div>
                                <ReactFlagsSelect
                                    selected={selected}
                                    onSelect={(code) => setSelected(code)}
                                    countries={['GB', 'ES']}
                                    customLabels={{
                                        GB: 'English',
                                        ES: 'Spanish',
                                    }}
                                    className="border-0"
                                    selectButtonClassName="!bg-gradient-to-r from-blue-900 to-blue-500 !border-0 !text-white !rounded-[10px]"
                                />
                            </div>
                    </div>

                    <div className="pt-5 border-t-2 flex justify-between items-center gap-3.5 flex-col xl:flex-row" style={{ borderColor: 'rgba(3, 57, 138, 0.91)' }}>
                        <div className="flex gap-3.5 items-center">
                            <img src={firm_logo} alt="logo" className="w-24 h-auto" />
                            <span className="font-normal text-sm sm:text-base tracking-[0.3em] text-white">Malik & Associates LLC</span>
                        </div>
                        <span className="text-white text-sm font-normal">© 2025 All Rights Reserved</span>
                        <div className="text-white flex gap-4 text-sm font-bold flex-col items-center sm:flex-row">
                            <Link to="/policy">
                                <span className="cursor-pointer">Terms & Conditions</span>
                            </Link>
                            <span className="cursor-pointer">Privacy policy</span>
                            <span className="cursor-pointer">Cookie Policy</span>
                        </div>
                        <div className="flex gap-14 sm:gap-7 mt-4 sm:mt-0">
                            <img src={twitter} alt="twitter" className="cursor-pointer" />
                            <img src={insta} alt="insta" className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
