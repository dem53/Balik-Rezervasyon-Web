import { useState } from 'react';
import ReservationModal from './ReservationModal';
import PopupBox from './PopupBox';
import { useTranslation } from 'react-i18next';

function ReadMore({
    onClose,
    isOpen,
    titleLogo,
    title,
    subtitleLogo,
    subtitle,
    subtitle2,
    uhrzeitLogo,
    uhrzeit,
    uhrzeitTitle,
    uhrzeit1,
    uhrzeit2,
    ganzTitle,
    ganz1,
    ganz2,
    ablaufLogo,
    ablauf,
    ablauf1,
    ablauf2,
    ablauf3,
    ablauf4,
    ablauf5,
    bootLogo,
    boot,
    boot1,
    boot2,
    boot3,
    boot4,
    boot5,
    mitbringenLogo,
    mitbringen,
    mitbringen1,
    mitbringen2,
    fürLogo,
    für,
    location,
    reservation
}) {


    if (!isOpen) return null;

    const [reservationShow, setReservationShow] = useState(false);
    const [popupShow, setPopupShow] = useState(false);

    const {t} = useTranslation();

    return (
        <div className='fixed inset-0 bg-black/30 z-50 flex mt-20 items-center justify-center backdrop-blur-xs px-10'>
            <div className='rounded-lg bg-gradient-to-r shadow-lg shadow-blue-500 border border-hidden from-sky-700 to-sky-400
                  w-[550px] h-auto overflow-y-auto overflow-auto'>
                <div className='w-full relative left-0'>
                    <span onClick={onClose} className='absolute cursor-pointer border-hidden font-bold bg-red-500 text-white rounded-md px-2 hover:bg-red-700 hover:text-white duration-300 ease-in-out transition-all top-2 right-2'>
                        X
                    </span>
                </div>
                <div className='flex flex-col items-start  pl-6 justify-center gap-4 mt-6'>
                    <div className='flex items-center w-full gap-1  justify-center'>
                        <div>{titleLogo}</div>
                        <h1 className='font-bold text-sm border-b lg:text-lg text-white'>{title}</h1>
                    </div>

                    <div className='flex items-center w-full gap-1  justify-center'>
                        <h1 className='font-bold text-sm border-b lg:text-lg text-white'>{location}</h1>
                    </div>

                    <div className='flex items-center my-0.5 justify-center'>
                        <p className='text-xs lg:text-sm font-semibold text-white text-shadow-blue-900 text-shadow-lg'>{subtitle2}</p>
                    </div>


                    <div className='flex items-center gap-1 my-1 justify-center'>
                        <div>{subtitleLogo}</div>
                        <p className='text-xs lg:text-sm text-white text-shadow-blue-900 text-shadow-lg font-semibold'>{subtitle}</p>

                    </div>


                    <div className='flex gap-1 items-center justify-center'>
                        <div>{uhrzeitLogo}</div>
                        <p className='text-black text-xs lg:text-sm border-b pb-1 border-b-black  font-extrabold'>{uhrzeit}</p>
                    </div>
                    <div className='flex w-full items-center gap-6 justify-between px-2'>

                        <div className='flex flex-col items-start justify-center'>
                            <div className='flex gap-1 items-center justify-center'>
                                <p className='text-gray-300 text-shadow-lg text-shadow-blue-500 text-xs mb-2 lg:text-sm  font-bold'>{uhrzeitTitle}</p>
                            </div>

                            <ul className='flex flex-col gap-1 list-disc items-start justify-center'>
                                <li className='text-gray-300 text-xs lg:text-sm  font-light'>{uhrzeit1}</li>
                                <li className='text-gray-300 text-xs lg:text-sm  font-light'>{uhrzeit2}</li>
                            </ul>
                        </div>


                        <div className='flex flex-col items-start justify-center'>
                            <div className='flex gap-1 items-center justify-center'>
                                <p className='text-gray-300 text-shadow-lg text-shadow-blue-500  text-xs mb-2 lg:text-sm  font-bold'>{ganzTitle}</p>
                            </div>

                            <ul className='flex flex-col gap-1 list-disc items-start justify-center'>
                                <li className='text-gray-300 text-xs lg:text-sm  font-light'>{ganz1}</li>
                                <li className='text-gray-300 text-xs lg:text-sm  font-light'>{ganz2}</li>
                            </ul>
                        </div>


                    </div>

                    <div className='flex gap-1 items-center justify-center'>
                        <div>{ablaufLogo}</div>
                        <p className='text-black text-xs lg:text-sm  border-b pb-1 border-b-black   font-extrabold'>{ablauf}</p>
                    </div>

                    <ul className='flex gap-1 flex-col list-disc items-start justify-center'>
                        <li className='text-gray-300 text-xs lg:text-sm  font-light'>{ablauf1}</li>
                        <li className='text-gray-300 text-xs lg:text-sm  font-light'>{ablauf2}</li>
                        <li className='text-gray-300 text-xs lg:text-sm  font-light'>{ablauf3}</li>
                        <li className='text-gray-300 text-xs lg:text-sm  font-light'>{ablauf4}</li>
                        <li className='text-gray-300 text-xs lg:text-sm  font-light'>{ablauf5}</li>
                    </ul>


                    <div className='flex gap-1 items-center justify-center'>
                        <div>{bootLogo}</div>
                        <p className='text-black text-xs lg:text-sm  border-b pb-1 border-b-black  font-extrabold'>{boot}</p>
                    </div>

                    <ul className='flex gap-1 flex-col list-disc items-start justify-center'>
                        <li className='text-gray-300 text-xs lg:text-sm  font-light'>{boot1}</li>
                        <li className='text-gray-300 text-xs lg:text-sm  font-light'>{boot2}</li>
                        <li className='text-gray-300 text-xs lg:text-sm  font-light'>{boot3}</li>
                        <li className='text-gray-300 text-xs lg:text-sm  font-light'>{boot4}</li>
                        <li className='text-gray-300 text-xs lg:text-sm  font-light'>{boot5}</li>
                    </ul>


                    <div className='flex gap-1 items-center justify-center'>
                        <div>{mitbringenLogo}</div>
                        <p className='text-black text-xs lg:text-sm  border-b pb-1 border-b-black   font-extrabold'>{mitbringen}</p>
                    </div>

                    <ul className='flex gap-1 flex-col list-disc items-start justify-center'>
                        <li className='text-gray-300 text-xs lg:text-sm  font-light'>{mitbringen1}</li>
                        <li className='text-gray-300 text-xs lg:text-sm  font-light'>{mitbringen2}</li>
                    </ul>


                    <div className='flex gap-1 mb-4 items-center justify-between pr-6 w-full'>
                        <div className='flex items-center gap-1'>{fürLogo}
                            <p className='text-gray-300 text-xs lg:text-sm  font-light'>{für}</p>
                        </div>


                        <button onClick={() => {
                            setReservationShow(true);
                        }} type='button' className='p-2 px-4 cursor-pointer hover:bg-emerald-600 ease-in-out duration-500 py-1 bg-emerald-400 text-sm text-white rounded-lg'>
                            {reservation}
                        </button>

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
                    message={t('reservationSuccessMessage')}
                    isOpen={popupShow}
                    onClose={() => {
                        setPopupShow(false);
                        window.location.reload();
                    }}

                />
            )}
        </div>

    )
}

export default ReadMore