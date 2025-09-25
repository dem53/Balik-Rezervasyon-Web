import React from 'react'
import Header from '../components/Header'
import ContentHeader from '../components/ContentHeader'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next';

function AboutPage() {

  const { t } = useTranslation();


  return (
    <div>
      <Header background={'bg-white/35'} />
      <ContentHeader title={t('UberUnsTitle')} />
      <section className='container mx-auto'>
        <div className='p-10 flex items-center justify-center gap-6 px-0 lg:px-20'>
          <div className='flex flex-col my-16 items-start px-10 justify-center gap-4'>

            <h1 className='font-extrabold font-sans text-2xl uppercase mb-4 text-gray-700 md:text-3xl lg:text-4xl xl:text-5xl tracking-wide'>
              {t('uber1')}
            </h1>

            <h4 className='text-sm lg:text-lg font-light my-4 indent-1.5 text-gray-500'>

              {t('uber2')}
            </h4>


            <h4 className='text-sm lg:text-lg font-light my-4 indent-1.5 text-gray-500'>

              {t('uber3')}
            </h4>


            <h4 className='text-sm lg:text-lg font-light my-2 indent-1.5 text-gray-500'>

              {t('uber4')}
            </h4>

            <h4 className='text-sm lg:text-lg font-light my-12 indent-1.5 text-gray-500'>
              {t('uber5')}
            </h4>


          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage