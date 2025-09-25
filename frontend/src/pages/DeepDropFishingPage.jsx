import React from 'react'
import Header from '../components/Header'
import ContentHeader from '../components/ContentHeader'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next';

function DeepDropFishingPage() {

    const {t} = useTranslation();

    return (
        <div>
       <Header background={'bg-white/35'} />
            <ContentHeader title={t('DeepDropTitle')} />
            <div className='container flex items-center text-justify justify-center mx-auto my-6'>
                <div className='w-full px-6 lg:px-2 lg:max-w-5xl my-8 items-start justify-center flex flex-col gap-4'>
                    <h1 className='font-extrabold font-sans border-b-2 border-b-blue-500 pb-2 text-black text-2xl'>
                        {t('deepDrop1')}
                    </h1>

                    <h2 className='font-medium text-justify my-3 text-base'>
                          {t('deepDrop2')}
                    </h2>

                    <h1 className='font-bold font-sans mt-4 text-black text-lg'>
                      {t('deepDrop3')}
                    </h1>

                    <ul className='my-4 flex flex-col items-start list-disc justify-center gap-4'>

                        <li className='font-semibold text-black'>
                            <h3 className='font-sans'>  {t('deepDrop4')}</h3>
                        </li>
                        <li className='font-semibold text-black'>
                            <h3 className='font-sans'>  {t('deepDrop5')}</h3>
                        </li>

                        <li className='font-semibold text-black'>
                            <h3 className='font-sans'>  {t('deepDrop6')}</h3>
                        </li>

                        <li className='font-semibold text-black'>
                            <h3 className='font-sans'>  {t('deepDrop7')}</h3>
                        </li>

                    </ul>

                    <h2 className='font-medium my-4 text-base'>
                          {t('deepDrop8')}
                    </h2>

                    <h1 className='font-bold font-sans mt-4 text-black text-lg'>
                         {t('deepDrop9')}
                    </h1>

                    <ul className='my-4 flex flex-col items-start list-disc pl-6 justify-center gap-4'>

                        <li className='font-semibold text-black'>
                            <h3 className='font-sans'>  {t('deepDrop10')}</h3>
                        </li>
                        <li className='font-semibold text-black'>
                            <h3 className='font-sans'>  {t('deepDrop11')}</h3>
                        </li>

                        <li className='font-semibold text-black'>
                            <h3 className='font-sans'>  {t('deepDrop12')}</h3>
                        </li>

                        <li className='font-semibold text-black'>
                            <h3 className='font-sans'>  {t('deepDrop13')}</h3>
                        </li>

                    </ul>

                    <h2 className='font-medium my-4 text-base'>
                          {t('deepDrop14')}
                    </h2>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default DeepDropFishingPage