import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

function ReservationModal({ isOpen, onClose, onSuccess }) {

    if (!isOpen) return null;

    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        ad: '',
        nachname: '',
        email: '',
        phone: '',
        person: '',
        angeltour: '',
        location: '',
        startDate: '',
        endDate: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        if (name === 'phone' && !/^\d*$/.test(value)) {
            return;
        }
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.endDate < formData.startDate) {
            setError('Bitiş tarihi başlangıç tarihinden önce olamaz.', error);
            return;
        }
        try {
            setLoading(true);
            const response = await axios.post(`http://localhost:8000/api/create/reservation`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            onSuccess();
        } catch (error) {
            console.error('Rezervasyon gönderilirken bir hata', error);
        } finally {
            onClose();
        }
    };


    const getStartDate = () => {
        const today = new Date();
        const tomarrow = new Date(today);
        tomarrow.setDate(today.getDate() + 1);
        return tomarrow.toISOString().split('T')[0];
    }

    const getEndDate = () => {
        if (!formData.startDate) return getStartDate();
        const minDate = new Date(formData.startDate);
        minDate.setDate(minDate.getDate() + 1);
        return minDate.toISOString().split('T')[0];
    }


    useEffect(() => {
        if (formData.startDate && formData.endDate) {
            const start = new Date(formData.startDate);
            const end = new Date(formData.endDate);
            if (end <= start) {
                setFormData(prev => ({ ...prev, endDate: ' ' }));
            }
        }
    }, [formData.startDate]);


    if (loading) {
        return (
            <div className='inset-0 fixed backdrop-blur-xs top-0 left-0 bottom-0 w-full h-screen right-0 flex items-center justify-center'>
                <span className='p-5 bg-gray-700 opacity-90 flex flex-col items-center justify-center gap-4 rounded-lg'>
                    <h1 className='font-sans text-white text-xs lg:text-sm font-extralight'>
                        {t('resConnect')}
                    </h1>
                    <AiOutlineLoading3Quarters size={27} className='text-emerald-200 animate-spin' />
                </span>
            </div>
        )
    }

    return (

        <div className='fixed inset-0 top-0 left-0 bottom-0 right-0 bg-black/30 backdrop-blur-xs flex px-6 lg:px-0 items-center justify-center z-50'>
            <div className='bg-gray-100 rounded-lg shadow-xl h-4/5 lg:h-auto overflow-scroll w-full max-w-2xl'>
                <div className='flex justify-between uppercase bg-sky-500 text-white items-center border-b p-4'>
                    <h2 className='text-base lg:text-xl font-semibold text-white font-serif text-center w-full'>{t('RTitle')}</h2>
                    <button
                        onClick={onClose}
                        className='text-white border-red-400 border px-2 rounded-full bg-red-400 cursor-pointer hover:text-gray-700 focus:outline-none'
                    >
                        X
                    </button>
                </div>

                <form onSubmit={handleSubmit} className='p-8 cursor-pointer space-y-4'>
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                            <label htmlFor='ad' className='block text-xs md:text-sm font-medium text-gray-700'>{t('RForm1')}<span className='text-red-400'>*</span></label>
                            <input
                                type='text'
                                name='ad'
                                id='ad'
                                value={formData.ad}
                                onChange={handleChange}
                                className='w-full p-2 border-2 text-xs md:text-sm border-sky-200  rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                placeholder={t('RForm1')}
                                required
                            />
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor='nachname' className='block text-xs md:text-sm font-medium text-gray-700'>{t('RForm2')}<span className='text-red-400'>*</span></label>
                            <input
                                type='text'
                                name='nachname'
                                id='nachname'
                                value={formData.nachname}
                                onChange={handleChange}
                                className='w-full p-2 border-2 text-xs md:text-sm border-sky-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                placeholder={t('RForm2')}
                                required
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols md:grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                            <label htmlFor='phone' className='block text-xs md:text-sm font-medium text-gray-700'>{t('RForm3')}<span className='text-red-400'>*</span></label>
                            <input
                                type='text'
                                name='phone'
                                id='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                className='w-full p-2 border-2 border-sky-200 text-xs md:text-sm rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                placeholder={t('RForm3')}
                                maxLength={11}
                                inputMode='numeric'
                                required
                            />
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor='email' className='block text-xs md:text-sm font-medium text-gray-700'>{t('RForm4')}<span className='text-red-400'>*</span></label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                value={formData.email}
                                onChange={handleChange}
                                className='w-full p-2 border-2 text-xs md:text-sm border-sky-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                placeholder={t('RForm4')}
                                required
                            />
                        </div>
                    </div>


                    <div className='space-y-2'>
                        <label htmlFor='person' className='block text-xs md:text-sm font-medium text-gray-700'>{t('RForm5')}<span className='text-red-400'>*</span></label>
                        <select
                            name='person'
                            id='person'
                            value={formData.person}
                            onChange={handleChange}
                            className='w-full p-2 border-2 text-xs md:text-sm border-sky-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                            required
                        >
                            <option value=''>Select</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                        </select>
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor='location' className='block text-xs md:text-sm font-medium text-gray-700'>{t('RForm6')}<span className='text-red-400'>*</span></label>
                        <select
                            name='location'
                            id='location'
                            value={formData.location}
                            onChange={handleChange}
                            className='w-full p-2 border-2 text-xs md:text-sm border-sky-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                            required
                        >
                            <option value=''>Select</option>
                            <option value='Antalya - City'>Antalya - City</option>
                            <option value='İzmir - Seferihisar'>İzmir - Seferihisar</option>
                            <option value='Antalya - Adrasan'>Antalya - Adrasan</option>
                        </select>
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor='angeltour' className='block text-xs md:text-sm font-medium text-gray-700'>{t('RForm7')}<span className='text-red-400'>*</span></label>
                        <select
                            name='angeltour'
                            id='angeltour'
                            value={formData.angeltour}
                            onChange={handleChange}
                            className='w-full p-2 border-2 text-xs md:text-sm border-sky-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                            required
                        >
                            <option value=''>Select</option>
                            <option value='Halbtagestour (05:00-13:00)'>Morning Half Day Tour (05:00-13:00)</option>
                            <option value='Halbtagestour (13:00-19:00)'>Afternoon Half Day Tour (13:00-19:00)</option>
                            <option value='Ganztagestour(05:00-19:00)'>Full Day Tour (05:00-19:00)</option>
                        </select>
                    </div>



                    <div className='grid grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                            <label htmlFor='startDate' className='block text-xs md:text-sm font-medium text-gray-700'>{t('RForm8')}<span className='text-red-400'>*</span></label>
                            <input
                                type='date'
                                name='startDate'
                                id='startDate'
                                value={formData.startDate}
                                onChange={handleChange}
                                min={getStartDate()}
                                className='w-full p-2 border-2 border-sky-200 text-xs md:text-sm rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                required
                            />
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor='endDate' className='block text-xs md:text-sm font-medium text-gray-700'>{t('RForm9')}<span className='text-red-400'>*</span></label>
                            <input
                                type='date'
                                name='endDate'
                                id='endDate'
                                value={formData.endDate}
                                onChange={handleChange}
                                min={getEndDate()}
                                className='w-full p-2 border-2 border-sky-200 text-xs md:text-sm rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                required
                            />
                        </div>

                    </div>

                    <div className='space-y-2'>
                        <label htmlFor='message' className='block text-xs md:text-sm font-medium text-gray-700'>{t('RForm10')}</label>
                        <textarea
                            name='message'
                            id='message'
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            aria-colspan={12}
                            className='w-full p-2 pb-10 border-2 border-sky-200 text-xs md:text-sm rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                            placeholder={t('RForm10')}
                        />
                    </div>

                    <div className='flex justify-end pt-4 gap-4'>

                        <button
                            type='submit'
                            className='px-4 py-2 cursor-pointer bg-green-600 text-white text-sm rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                        >
                            {t('RFormSuccess')}
                        </button>

                        <button
                            type='button'
                            onClick={onClose}
                            className='mr-3 px-4 cursor-pointer py-2 border text-sm border-gray-300 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            {t('RFormCancel')}
                        </button>

                    </div>
                </form>

            </div >
        </div >
    );
}

export default ReservationModal;