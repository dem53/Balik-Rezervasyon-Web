import { Link } from 'react-router-dom';
import { GiFishEscape } from "react-icons/gi";
import axios from 'axios';
import { useState } from 'react';
import { TbMessageCheck } from "react-icons/tb";
import { useEffect } from 'react';
import PopUpBox from './PopupBox';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {

    const { t } = useTranslation();

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [popupShow, setPopupShow] = useState(false);
    const [openFishingTour, setOpenFishingTour] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [auth, setAuth] = useState(null);


    useEffect(() => {
        authTokenControl();
    }, []);


    const authTokenControl = () => {
        try {
            const token = localStorage.getItem('authToken');
            if (token) {
                setAuth(true);
            } else {
                setAuth(false);
            }
        } catch (error) {
            console.error('Auth token hatası', error);
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8000/api/contact/add', {
                name, email, phone, message
            });

            if (response.data && response.data.success) {
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setPopupShow(true);

            }
        } catch (error) {
            setError('İletişim formu iletilirken hata', error);
            console.log('Form gönderilirken hata ile karşılaşıldı', error);
        }
    }

    return (
        <>
            <footer className='bg-gray-700 pt-12'>

                <div className='flex items-center h-full lg:items-start flex-col pb-5 flex-wrap lg:flex-row justify-center gap-6 lg:gap-12'>

                    <div className='flex items-center justify-center  mt-6'>
                        <Link to={'/'} className='flex cursor-pointer items-center justify-center'>
                            <GiFishEscape size={30} className='text-sky-600' />
                            <h1 className='font-sans font-bold text-sky-400 rounded-ss tracking-widest'>VİPFishingTOUR</h1>
                        </Link>
                    </div>


                    <div className='flex items-center my-6 justify-center mx-6 flex-col gap-4'>
                        <h1 className='text-white font-light tracking-widest'>Antalya - Merkez, Turkey</h1>
                        <h1 className='text-white font-light tracking-widest'>İzmir - Seferihisar, Turkey</h1>
                        <h1 className='text-white font-light tracking-widest'>Antalya - Adrasan, Turkey</h1>
                        <h1 className='text-blue-400 font-bold'>info@vipfishingtour.com</h1>
                        <h1 className='text-blue-400 font-bold'>+90 542 234 0044</h1>
                        <h2 className='text-blue-400 font-bold'>+1 324 556 9984</h2>
                    </div>

                    <form onSubmit={handleSubmit} method='post' className='mt-6 flex px-8 md:px-4 flex-col items-center md:items-start gap-4 justify-center'>
                        <h1 className='font-extrabold font-sans text-2xl text-white mb-4 md:text-3xl uppercase lg:text-4xl xl:text-5xl'>{t('contact')}</h1>
                        <div className='flex items-center gap-4 justify-center'>

                            <input
                                type='text'
                                value={name}
                                id='name'
                                name='name'
                                onChange={(e) => setName(e.target.value)}
                                placeholder={t('RForm1')}
                                className='p-3 px-4 border-4 border-blue-200 cursor-pointer w-full py-2 rounded-sm bg-gray-100 text-gray-500'
                                required
                            />

                            <input
                                type='email'
                                value={email}
                                id='email'
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t('RForm4')}
                                className='p-3 px-4 border-4 border-blue-200 cursor-pointer w-full py-2 rounded-sm bg-gray-100 text-gray-500'
                                required
                            />

                        </div>

                        <input
                            type='text'
                            value={phone}
                            id='phone'
                            name='phone'
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder={t('RForm3')}
                            maxLength={11}
                            className='p-3 px-4 border-4 border-blue-200 cursor-pointer w-full py-2 rounded-sm bg-gray-100 text-gray-500'
                            inputMode='numeric'
                            pattern='[0-9]*'
                            required
                        />


                        <textarea
                            type='text'
                            value={message}
                            id='message'
                            onChange={(e) => setMessage(e.target.value)}
                            aria-colspan={12}
                            placeholder={t('RForm10')}
                            className='pb-16 pl-4 pt-2 border-4 cursor-pointer border-blue-200 rounded-md bg-gray-100 w-full text-gray-500'
                        />

                        <button type='submit' className='bg-sky-400 w-full flex items-center justify-center gap-2 text-sm py-2 hover:bg-blue-500 cursor-pointer hover:duration-500 hover:ease-in-out hover:trasition-all text-white px-4 rounded-lg'>
                            <TbMessageCheck size={20} />
                            <h2 className='text-sm font-light text-center'>
                                {t('FooterSuccess')}
                            </h2>
                        </button>


                    </form>

                    <nav className='mt-6'>
                        <ul className='flex flex-col items-start justify-center gap-6 font-medium cursor-pointer uppercase font-sans text-xs lg:text-sm'>
                            {auth && (
                                <li className='flex hover:font-bold hover:duration-200 hover:transition-all'>
                                    <a className='text-red-600 font-bold font-sans text-shadow-white text-shadow-xs' href='/admin/panel'>
                                        - Admin
                                    </a>
                                </li>

                            )}

                            <li className='flex hover:font-bold hover:duration-200 hover:transition-all'>
                                <a className='text-white shadow-md text-shadow-lg' href='/'>
                                    - {t('home')}
                                </a>
                            </li>
                            <li className="relative">
                                <button
                                    type="button"
                                    onClick={() => setOpenFishingTour((prev) => !prev)}
                                    className="text-white uppercase flex cursor-pointer items-center w-full"
                                >
                                    - {t('fishingTypes')}
                                    <span className="ml-2">{openFishingTour ? "▲" : "▼"}</span>
                                </button>

                                {openFishingTour && (
                                    <div className="flex flex-col gap-3 font-sans uppercase px-0 my-0.5 mt-3 text-xs font-bold text-white  z-50">
                                        <a href="/fishing_tour/trolling">- {t('trolling')}</a>
                                        <a href="/fishing_tour/deepdrop_fishing">- {t('deepdrop')}</a>
                                        <a href="/fishing_tour/jigging">- {t('jigging')}</a>
                                    </div>
                                )}
                            </li>

                            <li className='flex hover:font-bold hover:duration-200 hover:transition-all'>
                                <a className='text-white shadow-md text-shadow-lg' href='/tour_program'>
                                    - {t('tourProgram')}
                                </a>
                            </li>

                            <li className='flex hover:font-bold hover:duration-200 hover:transition-all'>
                                <a className='text-white shadow-md text-shadow-lg' href='/gallery'>
                                    -  {t('gallery')}
                                </a>
                            </li>

                            <li className='flex hover:font-bold hover:duration-200 hover:transition-all'>
                                <a className='text-white shadow-md text-shadow-lg' href='/about'>
                                    -{t('about')}
                                </a>
                            </li>

                            <li className='flex hover:font-bold hover:duration-200 hover:transition-all'>
                                <a className='text-white shadow-md text-shadow-lg' href='/faq'>
                                    - {t('faq')}
                                </a>
                            </li>

                        </ul>
                    </nav>
                </div>

                <div className='w-full mt-24 text-center py-4 bg-sky-600'>
                    <h2 className='text-xs md:text-sm italic font-serif font-light text-white '>
                        {t('demiR')}
                    </h2>
                </div>

            </footer>

            {popupShow && (
                <PopUpBox
                    message={t('ContactSuccessMessage')}
                    isOpen={popupShow}
                    onClose={() => {
                        setPopupShow(false);
                        navigate('/');
                        window.location.reload();
                        window.scrollTo(0, 0);
                    }}
                />
            )}

        </>
    )
}

export default Footer;