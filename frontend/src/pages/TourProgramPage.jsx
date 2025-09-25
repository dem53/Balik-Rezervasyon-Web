import React from 'react'
import Header from '../components/Header'
import ContentHeader from '../components/ContentHeader'
import Footer from '../components/Footer';
import { TiArrowRightOutline } from "react-icons/ti";
import { FcClock } from "react-icons/fc";
import { GiFishing } from "react-icons/gi";
import { GiBoatFishing } from "react-icons/gi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FcTodoList } from "react-icons/fc";
import ReservationModal from '../components/ReservationModal';
import PopupBox from '../components/PopupBox';
import { useState } from 'react';
import { GoChecklist } from "react-icons/go";
import { useTranslation } from 'react-i18next';


function TourProgramPage() {

  const [reservationShow, setReservationShow] = useState(false);
  const [popupShow, setPopupShow] = useState(false);

  const { t } = useTranslation();

  return (

    <div>
      <Header background={'bg-white/35'} />
      <ContentHeader title={t('TourProgramTitle')} />
      <section className='container mx-auto'>
        <div className='p-5 flex flex-col my-8 items-start justify-start gap-6 '>
          <div className='flex flex-col my-6 items-start px-6 justify-center gap-4'>

            <h1 className='font-extrabold flex items-center justify-center gap-2.5 font-sans text-2xl uppercase mb-4 text-gray-700 md:text-3xl lg:text-4xl xl:text-5xl tracking-wide'>
              <GiFishing className='text-blue-500' size={50} />
              {t('webTitle')}

            </h1>

            <div className='flex items-center my-2 justify-center'>

              <button onClick={() => setReservationShow(true)} type='button' className='p-2 px-4 py-1 flex items-center justify-center gap-1 cursor-pointer hover:bg-emerald-600 duration-500 ease-in-out bg-emerald-500 text-white rounded-lg animate-pulse'>
                <GoChecklist size={20} />
                {t('reservation')}
              </button>
            </div>

            <div className='flex items-start my-4 flex-col justify-center gap-3'>
              <h2 className='font-extrabold flex items-center justify-center uppercase bg-sky-400 shadow-xl py-2 px-2 gap-2 my-4 text-white text-shadow-black text-shadow-lg text-xl'>
                <FcTodoList size={25} />
                {t('tour1')}
              </h2>

              <h2 className='font-medium'>
                {t('tour2')}
              </h2>


              <div className='flex flex-col my-6 items-start justify-center gap-4'>
                <h1 className='font-extrabold flex items-center justify-center gap-1 text-3xl'>
                  <IoInformationCircleOutline size={35} className='text-red-500 mt-0.5' />
                  {t('tour3')}
                </h1>

                <h2 className='font-extrabold flex items-center justify-center gap-2 my-4 text-black text-xl'>
                  <GiBoatFishing className='text-blue-800' size={25} />
                  {t('tour4')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <FcClock size={20} className='text-blue-500' />
                  {t('tour5')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <FcClock size={20} className='text-blue-500' />
                  {t('tour6')}
                </h2>



                <h2 className='font-extrabold flex items-center justify-center gap-2 my-4 text-black text-xl'>
                  <GiBoatFishing className='text-blue-800' size={25} />
                  {t('tour7')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <FcClock size={20} className='text-blue-500' />
                  {t('tour8')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <FcClock size={20} className='text-blue-500' />
                  {t('tour9')}
                </h2>



                <h2 className='font-extrabold flex items-center justify-center gap-2 my-4 text-black text-xl'>
                  <GiBoatFishing className='text-blue-800' size={25} />
                  {t('tour10')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <FcClock size={20} className='text-blue-500' />
                  {t('tour11')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <FcClock size={20} className='text-blue-500' />
                  {t('tour12')}
                </h2>







                <h2 className='font-extrabold flex items-center justify-center uppercase bg-sky-400 shadow-xl py-2 px-2 gap-2 my-4 text-white text-shadow-black text-shadow-lg text-xl'>
                  <FcTodoList size={25} />
                  {t('tour13')}
                </h2>

                <h2 className='font-extrabold border-b pb-2 text-black'>
                  {t('tour14')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour15')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour16')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour17')}
                </h2>

                <h2 className='font-extrabold mt-6 border-b pb-2 text-black'>
                  {t('tour18')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour19')}
                </h2>
                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour20')}
                </h2>

                <h2 className='font-extrabold mt-6 border-b pb-2 text-black'>
                  {t('tour21')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour22')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour23')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour24')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour25')}
                </h2>

                <h2 className='font-extrabold mt-6 border-b pb-2 text-black'>
                  {t('tour26')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour27')}
                </h2>


                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour28')}
                </h2>


                <h2 className='font-extrabold mt-6 border-b pb-2 text-black'>
                  {t('tour29')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour30')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour31')}
                </h2>


                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour32')}
                </h2>


                <h2 className='font-extrabold mt-6 border-b pb-2 text-black'>
                  {t('tour33')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour34')}
                </h2>

                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour35')}
                </h2>


                <h2 className='font-medium flex items-center justify-center gap-1 text-black'>
                  <TiArrowRightOutline size={20} className='text-blue-500' />
                  {t('tour36')}
                </h2>


              </div>
            </div>


          </div>

          <div className='flex flex-col mb-6  px-6 items-start justify-center gap-4'>
            <h1 className='font-bold text-xl'>
              {t('tour37')}
            </h1>

            <p>
              {t('tour38')}
            </p>

            <p>
              {t('tour39')}
            </p>
          </div>


          <div className='flex flex-col px-6 items-start my-4 justify-center gap-4'>
            <h1 className='font-bold text-xl'>
              {t('tour40')}
            </h1>

            <p>
              {t('tour41')}
            </p>

            <p>
              {t('tour42')}
            </p>
          </div>


          <div className='flex flex-col px-6 items-start my-4 justify-center gap-4'>
            <h1 className='font-bold text-xl'>
              {t('tour43')}
            </h1>

            <p>
              {t('tour44')}
            </p>

            <ul className='my-4 flex flex-col items-start list-disc pl-6 justify-center gap-4'>

              <li className='font-semibold text-black'>
                <h3 className='font-sans'>       {t('tour45')}</h3>
              </li>
              <li className='font-semibold text-black'>
                <h3 className='font-sans'>       {t('tour46')}</h3>
              </li>

              <li className='font-semibold text-black'>
                <h3 className='font-sans'>       {t('tour47')}</h3>
              </li>

              <li className='font-semibold text-black'>
                <h3 className='font-sans'>       {t('tour48')}</h3>
              </li>

              <li className='font-semibold text-black'>
                <h3 className='font-sans'>       {t('tour49')}</h3>
              </li>
            </ul>


            <div className='flex items-center my-2 justify-center'>
              <button onClick={() => setReservationShow(true)} type='button' className='p-2 px-4 py-1 flex items-center justify-center gap-1 cursor-pointer hover:bg-emerald-600 duration-500 ease-in-out bg-emerald-500 text-white rounded-lg animate-pulse'>
                <GoChecklist size={20} />
                {t('reservation')}
              </button>
            </div>
          </div>
        </div>
      </section>


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

      <Footer />
    </div>
  )
}

export default TourProgramPage;