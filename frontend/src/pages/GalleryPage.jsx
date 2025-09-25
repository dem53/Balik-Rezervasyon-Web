import React from 'react'
import Header from '../components/Header'
import ContentHeader from '../components/ContentHeader'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next';

function GalleryPage() {

  const {t} = useTranslation();

  return (
    <div>
   <Header background={'bg-white/35'} />
      <ContentHeader title={t('GalleryTitle')} />
      <div className='max-w-6xl mx-auto px-4 py-10'>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8'>
          {[
            '/src/images/photo-6.jpeg',
            '/src/images/photo-7.jpeg',
            '/src/images/photo-8.jpeg',
            '/src/images/photo-9.jpeg',
            '/src/images/photo-3.jpeg',
            '/src/images/photo-5.jpeg',
            '/src/images/photo-10.jpeg',
            '/src/images/photo-4.jpeg',
            '/src/images/photo-1.png',
            '/src/images/photo-2.jpeg',
          ].map((src, i) => (
            <div key={i} className="aspect-square cursor-pointer overflow-hidden rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-white">
              <img src={src} alt={`gallery-${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="aspect-square cursor-pointer overflow-hidden rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-white">
            <video
              src='/src/images/video-1.mp4'
              autoPlay
              muted
              loop
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GalleryPage