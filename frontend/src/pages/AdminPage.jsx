import React from 'react'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import ContactContent from '../components/ContactContent'
import ReservationContent from '../components/ReservationContent'
import { useNavigate } from 'react-router-dom'


function AdminPage() {

    useEffect(() => {
        authToken();
    }, []);

    const navigate = useNavigate();

    const authToken = () => {
        try {
            const token = localStorage.getItem('authToken');
            if (token) {
                setAuth(true);
                return;
            } else {
                setAuth(false);
                navigate('/');
            }
        } catch (error) {
            console.error('Auth middleware error', error);
        }
    }

    const [auth, setAuth] = useState(false);
    const [contactShow, setContactShow] = useState(false);
    const [reservationShow, setReservationShow] = useState(false);

    return (
        <div>
            <Header background={'bg-blue-700'} />
            <div className='container mx-auto'>
                <div className='flex items-center flex-col gap-6  justify-center w-full p-5 rounded-md'>
                    {auth && (
                        <div className='mt-24 flex mb-8 border-b-2 w-full pb-4 flex-row-reverse items-center justify-center gap-8'>
                            <div onClick={() => { setContactShow(true); setReservationShow(false) }} className='border cursor-pointer flex items-center justify-center bg-blue-500 hover:bg-blue-600 ease-in-out transition-all  text-white font-sans font-medium w-60 rounded-md p-5'>
                                <h1>
                                    Contact Data
                                </h1>
                            </div>

                            <div onClick={() => { setReservationShow(true); setContactShow(false) }} className='border cursor-pointer flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 ease-in-out transition-all  text-white font-sans font-medium w-60 rounded-md p-5'>
                                <h1>
                                    Reservation Data
                                </h1>
                            </div>
                        </div>
                    )}
                </div>

            </div>
            {contactShow && (
                <ContactContent />
            )}

            {reservationShow && (
                <ReservationContent />
            )}
        </div>
    )
}

export default AdminPage