import Header from '../components/Header'
import ContentHeader from '../components/ContentHeader'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next';

function TrollingPage() {

    const {t} = useTranslation();

    return (
        <div className="flex flex-col ">
         <Header background={'bg-white/35'} />
            <ContentHeader title={t('TrollingTitle')} />

            <main className="flex-1 w-full">
                <div className="container mx-auto w-full flex flex-col items-center justify-center my-6 px-2 sm:px-4 md:px-8">
                    <div className="flex flex-col items-start w-full lg:max-w-5xl text-center my-10 justify-center gap-6">
                        <h1 className="text-lg font-sans text-gray-700 text-left">
                            <strong className="font-bold font-sans">{t('trolling1')} </strong>
                            {t('trolling2')}
                        </h1>

                        {/* Ausrüstung */}
                        <section className="w-full text-left">
                            <h2 className="text-xl font-bold mb-2">{t('trolling3')}</h2>
                            <ul className="flex flex-col gap-2 pl-2">
                                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('trolling4')}</span> {t('trolling5')}</li>
                                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('trolling6')}</span> {t('trolling7')}</li>
                                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('trolling8')}</span> {t('trolling9')}</li>
                                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('trolling10')}</span> {t('trolling11')}</li>
                                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('trolling12')}</span> {t('trolling13')}</li>
                                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('trolling14')}</span> {t('trolling15')}.</li>
                            </ul>
                        </section>

                        {/* Schlepptechniken */}
                        <section className="w-full text-left mt-6">
                            <h2 className="text-xl font-bold mb-2">{t('trolling16')}</h2>
                            <ul className="flex flex-col gap-2 pl-2">
                                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('trolling17')}</span> {t('trolling18')}</li>
                                <li className="text-sm font-sans flex gap-2"><span className="font-bold">- {t('trolling19')}</span> {t('trolling20')}</li>
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

export default TrollingPage