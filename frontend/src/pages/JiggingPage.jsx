import React from 'react'
import Header from '../components/Header'
import ContentHeader from '../components/ContentHeader'
import { GiBoatFishing } from "react-icons/gi";
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

function JiggingPage() {

  const {t} = useTranslation();

  return (
    <div className="flex flex-col">
   <Header background={'bg-white/35'} />
      <ContentHeader title={t('JiggingTitle')} />
      <main className="flex-1 w-full">
        <div className="container mx-auto w-full flex flex-col items-center justify-center my-6 px-2 sm:px-4 md:px-8">
          <div className="flex flex-col items-start w-full lg:max-w-5xl text-center my-10 justify-center gap-6">
            <h1 className='text-lg font-sans text-gray-700 text-left'>
              <strong className='text-lg font-bold'>{t('jigging1')} </strong>
              {t('jigging2')}
            </h1>

            {/* Was ist Jigging? */}
            <section className="w-full text-left">
              <label className='flex items-center gap-1 mb-2' htmlFor='jigging'>
                <GiBoatFishing className='text-blue-500' size={25} /> {t('jigging3')} <strong className='font-bold'> {t('jigging4')}</strong>
              </label>
              <h2 id='jigging' className='font-sans text-lg'>
                {t('jigging5')}
              </h2>
            </section>

            {/* Ausrüstung fürs Jigging */}
            <section className="w-full text-left mt-6">
              <h2 className='text-xl font-bold mb-2'>{t('jigging6')}</h2>
              <ul className="flex flex-col gap-2 pl-2">
                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('jigging7')}</span> {t('jigging8')}</li>
                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('jigging9')}</span> {t('jigging10')}</li>
                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('jigging11')}</span> {t('jigging12')}</li>
                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('jigging13')}</span> {t('jigging14')}</li>
                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('jigging15')}</span> {t('jigging16')}</li>
              </ul>
            </section>

            {/* Jigging-Arten */}
            <section className="w-full text-left mt-6">
              <h2 className='text-xl font-bold mb-2'>{t('jigging17')}</h2>
              <ul className="flex flex-col gap-2 pl-2">
                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('jigging18')}</span> {t('jigging19')}</li>
                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('jigging20')}</span> {t('jigging21')}</li>
                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('jigging22')}</span> {t('jigging23')}</li>
                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('jigging24')}</span> {t('jigging25')}</li>
              </ul>
            </section>

            {/* Zielfische Tablosu */}
            <section className="w-full mt-8">
              <h2 className="text-xl text-start font-light font-mono my-4 text-gray-500">{t('trolling21')}</h2>
              <div className="overflow-x-auto rounded-lg border-2 border-gray-200 shadow">
                <table className="min-w-[600px] w-full text-xs md:text-sm">
                  <thead className="bg-gray-600 text-white">
                    <tr>
                      <th className="font-bold border font-sans px-4 py-2">Deutscher Name</th>
                      <th className="font-bold border font-sans px-4 py-2">Türkischer Name</th>
                      <th className="font-bold border font-sans px-4 py-2">Hinweise</th>
                      <th className="font-bold border font-sans px-4 py-2">Maximalgewicht</th>
                    </tr>
                  </thead>
                  <tbody className="font-medium text-black font-sans">
                    <tr className="text-center hover:bg-blue-50 border">
                      <td className="border px-4 py-2">Amberjack - Bersteinmakrele</td>
                      <td className="border px-4 py-2">Akya</td>
                      <td className="border px-4 py-2">{t('TableTitle1')}</td>
                      <td className="border font-extrabold px-4 py-2">ca. 70 kg oder mehr</td>
                    </tr>
                    <tr className="text-center hover:bg-blue-50 border">
                      <td className="border px-4 py-2">Zahnbrasse / Rotbarsch (allg.)</td>
                      <td className="border px-4 py-2">Kırmızı / Sinarit Balık</td>
                      <td className="border px-4 py-2">{t('TableTitle2')}</td>
                      <td className="border font-extrabold px-4 py-2">ca. 10-30 kg</td>
                    </tr>
                    <tr className="text-center hover:bg-blue-50 border">
                      <td className="border px-4 py-2">Schwertfisch</td>
                      <td className="border px-4 py-2">Kılıç Balığı</td>
                      <td className="border px-4 py-2">{t('TableTitle3')}</td>
                      <td className="border font-extrabold px-4 py-2">über 600 kg</td>
                    </tr>
                    <tr className="text-center hover:bg-blue-50 border">
                      <td className="border px-4 py-2">Kugelfisch (giftig)</td>
                      <td className="border px-4 py-2">Balon Balığı</td>
                      <td className="border px-4 py-2">{t('TableTitle4')}</td>
                      <td className="border font-extrabold px-4 py-2">ca. 10-15 kg</td>
                    </tr>
                    <tr className="text-center hover:bg-blue-50 border">
                      <td className="border px-4 py-2">Zackenbarsch</td>
                      <td className="border px-4 py-2">Trança</td>
                      <td className="border px-4 py-2">{t('TableTitle5')}</td>
                      <td className="border font-extrabold px-4 py-2">ca. 10-30 kg</td>
                    </tr>
                    <tr className="text-center hover:bg-blue-50 border">
                      <td className="border px-4 py-2">Gelbflossen-Thunfisch</td>
                      <td className="border px-4 py-2">Sarıkanat Orkinos</td>
                      <td className="border px-4 py-2">{t('TableTitle6')}</td>
                      <td className="border font-extrabold px-4 py-2">über 200-220 kg</td>
                    </tr>
                    <tr className="text-center hover:bg-blue-50 border">
                      <td className="border px-4 py-2">Bonito / Makrelen-Thunfisch</td>
                      <td className="border px-4 py-2">Uskumru Orkinos</td>
                      <td className="border px-4 py-2">{t('TableTitle7')}</td>
                      <td className="border font-extrabold px-4 py-2">ca. 15 kg</td>
                    </tr>
                    <tr className="text-center hover:bg-blue-50 border">
                      <td className="border px-4 py-2">Lagos / Lahos (Großer Zackenbarsch)</td>
                      <td className="border px-4 py-2">Lagos / Lahos</td>
                      <td className="border px-4 py-2">{t('TableTitle8')}</td>
                      <td className="border font-extrabold px-4 py-2">ca. 30-40 kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default JiggingPage