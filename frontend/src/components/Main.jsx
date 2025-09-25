import React, { useState } from 'react';
import ReadMore from './ReadMore';
import { GiFishingBoat } from "react-icons/gi";
import { GiBoatFishing } from "react-icons/gi";
import { TiPointOfInterest } from "react-icons/ti";
import { IoBoat } from "react-icons/io5";
import { PiWarningCircleFill } from "react-icons/pi";
import { FaUsersCog } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import { GoChecklist } from "react-icons/go";
import ReservationModal from '../components/ReservationModal';
import PopupBox from '../components/PopupBox';
import { useTranslation } from 'react-i18next';

function Main() {

    const { t } = useTranslation();

    const [readMore, setReadMore] = useState(false);
    const [readMore2, setReadMore2] = useState(false);
    const [readMore3, setReadMore3] = useState(false);

    const [reservationShow, setReservationShow] = useState(false);
    const [popupShow, setPopupShow] = useState(false);


    return (
        <main className='flex flex-col w-full  items-center justify-center bg-sky-50'>
            {/* Banner Video */}
            <div className='h-[35rem] lg:h-[40rem] mt-10 w-full overflow-hidden'>
                <video
                    src='/src/images/main-video.mp4'
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Tittle */}
            <div className='bg-sky-50 '>
                <div className='container mx-auto px-2 sm:px-4 md:px-10 p-10 bg-sky-50'>
                    <div className='flex flex-col gap-12 mb-12 mt-6 items-center justify-center'>
                        <div className='flex items-center text-center mt-6 justify-center'>
                            <h1 className='font-sans font-medium text-3xl lg:text-4xl text-sky-300 bg-gray-700  px-2 py-2 animate-bounce'>{t('mainTitle')}</h1>
                        </div>
                        <div className='flex items-center text-center flex-col mt-6 justify-center'>
                            <h1 className='font-medium  text-center text-4xl lg:text-5xl uppercase tracking-wider text-white text-shadow-lg text-shadow-sky-500 p-2'>{t('mainTitle2')}</h1>
                            <h1 className='font-medium text-center text-4xl mt-2 lg:text-5xl uppercase tracking-wider text-white text-shadow-lg text-shadow-sky-500 border-b-2 pb-8 border-b-black p-2'>{t('mainTitle3')}</h1>


                        </div>

                        <div className='flex items-center flex-col gap-3 justify-center text-center mt-4'>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-sky-600 bg-gray-300 p-2  font-extrabold'>
                                {t('title1')}
                            </h1>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl animate-pulse text-white bg-sky-700 p-2 font-extrabold'>
                                {t('title2')}
                            </h1>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-sky-600 bg-gray-300 p-2 font-extrabold'>
                                {t('title3')}
                            </h1>
                        </div>


                        <div className='flex items-center flex-col gap-3 text-center mt-5 justify-center'>
                            <h1 className='font-light font-mono text-lg md:text-xl italic lg:text-2xl text-gray-700'>{t('title4')}</h1>
                        </div>

                    </div>
                </div>
            </div>

            {/* Tours Card */}
            <div className='bg-sky-50'>
                <div className='container mx-auto px-2 sm:px-4 md:px-10 bg-sky-50'>
                    <div className='flex flex-col items-center justify-center gap-8'>
                        <div className='flex items-center justify-center mb-6 text-center'>
                            <h1 className='text-3xl lg:text-4xl font-semibold text-shadow-lg text-shadow-sky-800 uppercase bg-sky-800 w-full px-12 py-5 text-white tracking-wider'>{t('cardTitle')}</h1>
                        </div>
                        <div className='w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 flex-wrap flex-1'>
                            {/* Card 1 */}
                            <div className='rounded-lg bg-gradient-to-b flex cursor-pointer flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-96 p-5 items-center justify-center from-blue-400 to-sky-600'>
                                <h1 className='text-center font-sans text-white shadow-md mb-4 shadow-white p-3 uppercase'>Antalya</h1>
                                <div className='w-full aspect-square my-3 max-w-xs sm:max-w-sm md:max-w-md lg:w-72 lg:h-72'>
                                    <img src='/src/images/card-tours-1-dm.jpg' className='object-cover w-full h-full' />
                                </div>
                                <h2 className='my-1 text-black text-lg text-center font-bold tracking-wider'>City</h2>
                                <p className='text-center text-sm text-white mb-4 font-light'>
                                    {t('cardTitle2')}
                                </p>
                                <button type='button' onClick={() => setReadMore(true)} className='cursor-pointer text-white py-1.5 px-6 rounded-lg text-sm bg-gradient-to-b from-sky-300 to-blue-500'>{t('readMore')} </button>
                            </div>
                            {/* Card 2 */}
                            <div className='rounded-lg bg-gradient-to-b flex cursor-pointer flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-96 p-5 items-center justify-center from-blue-400 to-sky-600'>
                                <h1 className='text-center font-sans text-white shadow-md mb-4 shadow-white p-3'>İZMİR</h1>
                                <div className='w-full aspect-square my-3 max-w-xs sm:max-w-sm md:max-w-md lg:w-72 lg:h-72'>
                                    <img src='/src/images/photo-2.jpeg' className='object-cover w-full h-full' />
                                </div>
                                <h2 className='my-1 text-black text-lg text-center font-bold tracking-wider'>Seferihisar</h2>
                                <p className='text-center text-sm text-white mb-4 font-light'>
                                    {t('cardTitle3')}

                                </p>
                                <button type='button' onClick={() => setReadMore2(true)} className='cursor-pointer text-white py-1.5 px-6 rounded-lg text-sm bg-gradient-to-b from-sky-300 to-blue-500'>{t('readMore')}</button>
                            </div>
                            {/* Card 3 */}
                            <div className='rounded-lg bg-gradient-to-b flex cursor-pointer flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-96 p-5 items-center justify-center from-blue-400 to-sky-600'>
                                <h1 className='text-center font-sans text-white shadow-md mb-4 shadow-white p-3'>ANTALYA</h1>
                                <div className='w-full aspect-square my-3 max-w-xs sm:max-w-sm md:max-w-md lg:w-72 lg:h-72'>
                                    <img src='/src/images/card-tours-img-3-dm.webp' className='object-cover w-full h-full' />
                                </div>
                                <h2 className='my-1 text-black text-lg text-center font-bold tracking-wider'>Adrasan</h2>
                                <p className='text-center text-sm text-white mb-4 font-light'>
                                    {t('cardTitle4')}
                                </p>
                                <button type='button' onClick={() => setReadMore3(true)} className='cursor-pointer text-white py-1.5 px-6 rounded-lg text-sm bg-gradient-to-b from-sky-300 to-blue-500'>{t('readMore')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Über Uns */}
            <div className='bg-sky-50 mt-20 mb-24'>
                <div className='container mx-auto font-mono flex items-center justify-center px-2 sm:px-4 md:px-10 bg-sky-50'>
                    <div className='w-full m-5 flex items-center justify-center flex-col gap-4 p-5 shadow-black text-shadow-lg rounded-2xl bg-gradient-to-b from-sky-700 to-gray-100 px-4 sm:px-10'>
                        <h1 className='mt-5 text-3xl uppercase text-white font-sans font-bold'>{t('uberUns')}</h1>
                        <span className='flex flex-col items-center justify-center'>
                            <h2 className='font-extrabold text-2xl mb-4 bg-sky-600 text-white p-2 px-2 py-2 mt-4 text-shadow-black text-shadow-xs text-center'>{t('webTitle')}</h2>
                            <h2 className='font-light mt-4 text-white text-center'>{t('webTitle1')}</h2>
                        </span>
                        <span className='flex flex-col items-center my-3 justify-center'>
                            <p className='my-4 text-white text-center'>
                                {t('webTitle2')}
                            </p>
                        </span>
                        <h2 className='font-light text-center mt-6 text-white'>
                            {t('webTitle3')}
                        </h2>
                        <h3 className='font-bold mt-4 text-center font-mono italic tracking-widest text-blue-500 shadow-white text-shadow-lg text-lg'>
                            {t('webTitle4')}
                        </h3>

                        <div className='flex items-center my-5 justify-center'>
                            <button onClick={() => setReservationShow(true)} type='button' className='p-2 px-4 py-1 flex items-center justify-center gap-1 cursor-pointer hover:bg-emerald-600 duration-500 ease-in-out bg-emerald-500 text-white rounded-lg animate-pulse'>
                                <GoChecklist size={20} />
                                {t('reservation')}
                            </button>
                        </div>
                    </div>



                </div>
            </div>

            {reservationShow && (
                <ReservationModal
                    isOpen={reservationShow}
                    onClose={() => setReservationShow(false)}
                    onSuccess={() => {
                        setPopupShow(true);
                    }}
                />
            )}

            {popupShow && (
                <PopupBox
                    message={'Die Reservierung wurde erfolgreich abgeschlossen. Die Reservierung wurde als nicht abgeholte Mail versendet.'}
                    isOpen={popupShow}
                    onClose={() => {
                        setPopupShow(false);
                        window.location.reload();
                    }}

                />
            )}



            <ReadMore
                titleLogo={<GiFishingBoat className='text-white' size={20} />}
                title={'EXTREME FISHING TOUR TURKEY'}
                location={'Antalya - City'}
                subtitleLogo={<GiBoatFishing size={20} />}
                subtitle={t('subtitle')}
                subtitle2={t('subtitle2')}
                uhrzeitLogo={<FcClock size={20} />}
                uhrzeit={t('uhrzeit')}
                uhrzeitTitle={t('uhrzeitTitle')}
                uhrzeit1={t('uhrzeit1')}
                uhrzeit2={t('uhrzeit2')}
                ganzTitle={t('ganzTitle')}
                ganz1={t('ganz1')}
                ganz2={t('ganz2')}
                ablaufLogo={<TiPointOfInterest className='text-blue-800' size={20} />}
                ablauf={t('ablauf')}
                ablauf1={t('ablauf1')}
                ablauf2={t('ablauf2')}
                ablauf3={t('ablauf3')}
                ablauf4={t('ablauf4')}
                ablauf5={t('ablauf5')}
                bootLogo={<IoBoat className='text-blue-500' size={20} />}
                boot={t('boot')}
                boot1={t('boot1')}
                boot2={t('boot2')}
                boot3={t('boot3')}
                boot4={t('boot4')}
                boot5={t('boot5')}
                mitbringenLogo={<PiWarningCircleFill className='text-red-600' size={20} />}
                mitbringen={t('mitbringen')}
                mitbringen1={t('mitbringen1')}
                mitbringen2={t('mitbringen2')}
                fürLogo={<FaUsersCog className='text-yellow-500' size={20} />}
                für={t('für')}
                reservation={t('reservation')}
                isOpen={readMore}
                onClose={() => setReadMore(false)}
            />


            <ReadMore
                titleLogo={<GiFishingBoat className='text-white' size={20} />}
                title={'EXTREME FISHING TOUR TURKEY'}
                location={'İzmir - Seferihisar'}
                subtitleLogo={<GiBoatFishing size={20} />}
                subtitle={t('subtitle')}
                subtitle2={t('subtitle2')}
                uhrzeitLogo={<FcClock size={20} />}
                uhrzeit={t('uhrzeit')}
                uhrzeitTitle={t('uhrzeitTitle')}
                uhrzeit1={'Start: 5:00 oder 13:00 Uhr'}
                uhrzeit2={'Rückkehr: ca. 13:00–19:00 Uhr'}
                ganzTitle={t('ganzTitle')}
                ganz1={'Start: 05:00 Uhr'}
                ganz2={'Rückkehr: ca. 19:00 Uhr'}
                ablaufLogo={<TiPointOfInterest className='text-blue-800' size={20} />}
                ablauf={t('ablauf')}
                ablauf1={t('ablauf1')}
                ablauf2={t('ablauf2')}
                ablauf3={t('ablauf3')}
                ablauf4={t('ablauf4')}
                ablauf5={t('ablauf5')}
                bootLogo={<IoBoat className='text-blue-500' size={20} />}
                boot={t('boot')}
                boot1={t('boot1')}
                boot2={t('boot2')}
                boot3={t('boot3')}
                boot4={t('boot4')}
                boot5={t('boot5')}
                mitbringenLogo={<PiWarningCircleFill className='text-red-600' size={20} />}
                mitbringen={t('mitbringen')}
                mitbringen1={t('mitbringen1')}
                mitbringen2={t('mitbringen2')}
                fürLogo={<FaUsersCog className='text-yellow-500' size={20} />}
                für={t('für')}
                reservation={t('reservation')}
                isOpen={readMore2}
                onClose={() => setReadMore2(false)}
            />

    

            <ReadMore
                titleLogo={<GiFishingBoat className='text-white' size={20} />}
                title={'EXTREME FISHING TOUR TURKEY'}
                location={'Antalya - Adrasan'}
                subtitleLogo={<GiBoatFishing size={20} />}
                subtitle={t('subtitle')}
                subtitle2={t('subtitle2')}
                uhrzeitLogo={<FcClock size={20} />}
                uhrzeit={t('uhrzeit')}
                uhrzeitTitle={t('uhrzeitTitle')}
                uhrzeit1={'Start: 5:00 oder 13:00 Uhr'}
                uhrzeit2={'Rückkehr: ca. 13:00–19:00 Uhr'}
                ganzTitle={t('ganzTitle')}
                ganz1={'Start: 05:00 Uhr'}
                ganz2={'Rückkehr: ca. 19:00 Uhr'}
                ablaufLogo={<TiPointOfInterest className='text-blue-800' size={20} />}
                ablauf={t('ablauf')}
                ablauf1={t('ablauf1')}
                ablauf2={t('ablauf2')}
                ablauf3={t('ablauf3')}
                ablauf4={t('ablauf4')}
                ablauf5={t('ablauf5')}
                bootLogo={<IoBoat className='text-blue-500' size={20} />}
                boot={t('boot')}
                boot1={t('boot1')}
                boot2={t('boot2')}
                boot3={t('boot3')}
                boot4={t('boot4')}
                boot5={t('boot5')}
                mitbringenLogo={<PiWarningCircleFill className='text-red-600' size={20} />}
                mitbringen={t('mitbringen')}
                mitbringen1={t('mitbringen1')}
                mitbringen2={t('mitbringen2')}
                fürLogo={<FaUsersCog className='text-yellow-500' size={20} />}
                für={t('für')}
                reservation={t('reservation')}
                isOpen={readMore3}
                onClose={() => setReadMore3(false)}
            />
            
        </main>
    );
}

export default Main;