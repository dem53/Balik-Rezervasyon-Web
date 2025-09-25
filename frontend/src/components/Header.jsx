import { useState, useEffect } from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBars, FaChevronRight } from "react-icons/fa";
import { BsDoorOpenFill } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import ReservationModal from './ReservationModal';
import PopupBox from './PopupBox';
import { useTranslation } from 'react-i18next';

function Header({ background }) {

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
    };

    const [auth, setAuth] = useState(null);
    const [checkSideBar, setCheckSideBar] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [openFishingTour, setOpenFishingTour] = useState(false);
    const [reservationShow, setReservationShow] = useState(false);
    const [popupShow, setPopupShow] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        setAuth(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
        window.location.reload();
    };

    const sideBar = () => {
        setCheckSideBar(!checkSideBar);
    };

    useEffect(() => {
        if (checkSideBar) {
            setShowSidebar(true);
        } else if (showSidebar) {
            const timer = setTimeout(() => setShowSidebar(false), 500);
            return () => clearTimeout(timer);
        }
    }, [checkSideBar]);

    return (
        <>
            <header className={`w-full fixed backdrop-blur-sm ${background} shadow-sm shadow-black/50 z-20`}>
                <div className='w-full xl:container mx-auto py-6 lg:py-4'>
                    <div className='w-full px-4 flex items-center justify-around'>

                        <div className='hidden md:flex items-center justify-center'>
                            <Link to={'/'} className='flex cursor-pointer items-center w-48 h-0 justify-center'>
                                <img className='object-cover'
                                    src='/src/images/fishing-logo.png'
                                    alt='web-logo'
                                />
                            </Link>
                        </div>

                        <div className='flex md:hidden cursor-pointer'>
                            <span onClick={sideBar}>
                                <FaBars className='text-blue-800' size={25} />
                            </span>
                        </div>

                        {showSidebar && (
                            <div className={`fixed top-19.5 z-50 w-60 left-0 md:hidden h-screen pb-10 bg-slate-600/90 p-5 transition-all duration-500 ease-in-out ${checkSideBar ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                                <nav>
                                    <ul className='flex flex-col gap-6 font-medium uppercase cursor-pointer font-sans text-xs lg:text-sm'>
                                        <li className='border-b w-full pb-2 border-white'>
                                            <span className='text-white'>{t('menu')}</span>
                                        </li>

                                        {auth && (
                                            <li>
                                                <a href='/admin/panel' className='text-red-600 font-bold'>{t('admin')}</a>
                                            </li>
                                        )}

                                        <li><a href='/' className='text-white'>- {t('home')}</a></li>

                                        <li className="relative">
                                            <button
                                                onClick={() => setOpenFishingTour(prev => !prev)}
                                                className="text-white uppercase flex w-full"
                                            >
                                                - {t('fishingTypes')}
                                                <span className="ml-2">{openFishingTour ? "▲" : "▼"}</span>
                                            </button>
                                            {openFishingTour && (
                                                <div className="flex flex-col gap-3 px-5 mt-4 text-xs font-bold text-white">
                                                    <a href="/fishing_tour/trolling">- {t('trolling')}</a>
                                                    <a href="/fishing_tour/deepdrop_fishing">- {t('deepdrop')}</a>
                                                    <a href="/fishing_tour/jigging">- {t('jigging')}</a>
                                                </div>
                                            )}
                                        </li>

                                        <li><a href='/tour_program' className='text-white'>- {t('tourProgram')}</a></li>
                                        <li><a href='/gallery' className='text-white'>- {t('gallery')}</a></li>
                                        <li><a href='/about' className='text-white'>- {t('about')}</a></li>
                                        <li><a href='/faq' className='text-white'>- {t('faq')}</a></li>

                                        {auth && (
                                            <button onClick={handleLogout} className='text-white bg-red-400 p-1 rounded-md flex items-center gap-1'>
                                                <BsDoorOpenFill size={20} /> {t('logout')}
                                            </button>
                                        )}
                                    </ul>
                                </nav>
                            </div>
                        )}

                        <div className='flex md:hidden pl-12 items-center justify-center'>
                            <Link to={'/'} className='flex cursor-pointer items-center w-48 h-0 justify-center'>
                                <img className='object-cover'
                                    src='/src/images/fishing-logo.png'
                                    alt='web-logo'
                                />
                            </Link>
                        </div>

                        <div className='hidden md:flex'>
                            <nav>
                                <ul className='flex w-full gap-3 lg:gap-6 font-medium uppercase font-serif text-xs xl:text-sm'>
                                    {auth && (
                                        <li>
                                            <a href='/admin/panel' className='text-red-700 font-semibold'>{t('admin')}</a>
                                        </li>
                                    )}
                                    <li><a href='/' className='text-black hidden lg:flex font-bold'>{t('home')}</a></li>

                                    <li className="relative group">
                                        <span className="text-black font-semibold cursor-pointer">{t('fishingTypes')}</span>
                                        <div className="absolute min-w-60 px-6 bg-white/80 py-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 text-black shadow-lg z-50">
                                            <a className='w-full' href='/fishing_tour/trolling'>{t('trolling')}</a><br />
                                            <a className='w-full' href='/fishing_tour/deepdrop_fishing'>{t('deepdrop')}</a><br />
                                            <a className='w-full' href='/fishing_tour/jigging'>{t('jigging')}</a>
                                        </div>
                                    </li>

                                    <li><a href='/tour_program' className='text-black font-bold'>{t('tourProgram')}</a></li>
                                    <li><a href='/gallery' className='text-black font-bold'>{t('gallery')}</a></li>
                                    <li><a href='/about' className='text-black font-bold'>{t('about')}</a></li>
                                    <li><a href='/faq' className='text-black font-bold'>{t('faq')}</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-2 justify-center'>
                                <div onClick={() => setReservationShow(true)} className='cursor-pointer flex flex-col items-center hover:-translate-y-0.5 transition'>
                                    <GoChecklist
                                        className='bg-blue-200 border-2 rounded-full p-0.5 text-blue-800'
                                        size={27}
                                    />
                                    <h1 className='hidden lg:flex text-sky-700 text-xs md:text-sm font-semibold'>{t('reservation')}</h1>
                                </div>

                                <a href="https://wa.me/905551112233" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center'>
                                    <IoLogoWhatsapp
                                        size={30}
                                        className='text-emerald-500 bg-white border-2 rounded-full p-0.5'
                                    />
                                    <span className='hidden lg:flex text-green-700 text-xs md:text-sm font-semibold'>{t('whatsapp')}</span>
                                </a>

                                {auth && (
                                    <button onClick={handleLogout} className='hidden lg:flex bg-red-400 cursor-pointer p-1 rounded-md items-center text-white text-sm ml-4'>
                                        <BsDoorOpenFill
                                            className='text-gray-500'
                                            size={20}
                                        />
                                        <FaChevronRight size={10} />
                                    </button>
                                )}
                            </div>

                            <select
                                value={i18n.language}
                                onChange={(e) => changeLanguage(e.target.value)}
                                className='text-xs cursor-pointer rounded-md bg-gray-300 p-1 border border-gray-400 text-center font-extralight'
                            >
                                <option className='cursor-pointer' value='de'>🇩🇪</option>
                                <option className='cursor-pointer' value='en'>🇬🇧</option>
                                <option className='cursor-pointer' value='tr'>🇹🇷</option>
                                <option className='cursor-pointer' value='fr'>🇫🇷</option>
                                <option className='cursor-pointer' value='rs'>🇷🇺</option>
                                <option className='cursor-pointer' value='sa'>🇸🇦</option>
                            </select>
                        </div>
                    </div>
                </div>
            </header>

            <div>
                {reservationShow && (
                    <ReservationModal
                        isOpen={reservationShow}
                        onClose={() => setReservationShow(false)}
                        onSuccess={() => setPopupShow(true)}
                    />
                )}

                {popupShow && (
                    <PopupBox
                        message={t('reservationSuccessMessage')}
                        isOpen={popupShow}
                        onClose={() => {
                            setPopupShow(false);
                            window.location.reload();
                        }}
                    />
                )}
            </div>
        </>
    );
}

export default Header;
