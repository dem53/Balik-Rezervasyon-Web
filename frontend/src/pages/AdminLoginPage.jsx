import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GiFishEscape } from "react-icons/gi";

function AdminLoginPage() {
    

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(`http://localhost:8000/api/admin/dashboard/login`, {
                email, password
            });
            if (response.data && response.data.success) {
                setLoading('Giriş Başarılı!', true);
            }
            console.log("RESPONSE Data", response.data);
            const { token, user } = response.data;
            localStorage.setItem('user', user);
            localStorage.setItem('authToken', token);
            localStorage.setItem('userIsAdmin', user.isAdmin);
            navigate('/');
        } catch (error) {
            setLoading(false);
            setError('Giriş yapılırken bir hata ile karşılaşıldı...', error);
            console.error('Giriş yapılırken hata!!!');
        }
    }


    return (
        <div className='fixed inset-0 right-0 left-0 top-0 bottom-0 flex items-center justify-center bg-gradient-to-b from-sky-800 to-white'>
            <div className='p-10 rounded-lg bg-white/90 shadow-2xl w-80 shadow-sky-500 border-hidden'>
                <form onSubmit={handleSubmit} method='post' className='flex items-center justify-center flex-col gap-2 w-full'>
                    <div>
                        <div className='my-6 flex items-center justify-center'>
                        <Link to={'/'} className='flex cursor-pointer items-center w-56 h-0 justify-center'>
                            <img className='object-cover' src='/src/images/fishing-logo.png' />
                        </Link>
                    </div>

                    </div>
                    <div className='flex flex-col mt-4 gap-2 w-full items-start justify-center'>
                        <label htmlFor='email'>
                            <h1 className='text-sm font-sans font-medium'>E-Mail</h1>
                        </label>

                        <input
                            id='email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='p-2 w-full border-blue-300 border-2 cursor-pointer text-sm rounded-lg'
                            placeholder='E-Mail Adresse'
                        />
                    </div>

                    <div className='flex flex-col w-full gap-2 items-start justify-center'>
                        <label htmlFor='password'>
                            <h1 className='text-sm font-sans font-medium'>Password</h1>
                        </label>

                        <input
                            id='password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='p-2 w-full border-2 border-blue-300 cursor-pointer text-sm rounded-lg'
                            placeholder='Password'
                        />

                        <div className='font-bold text-center text-sm w-full mt-2 text-red-500'>
                            {error}
                        </div>

                        <div className='font-bold text-center text-sm w-full mt-2 text-emerald-500'>
                            {loading}
                        </div>


                    </div>

                    <button type='submit' className='cursor-pointer px-6 py-1.5   rounded-lg text-sm bg-emerald-500 text-white'>
                        LOGİN
                    </button>


                </form>
            </div>
        </div>
    )
}

export default AdminLoginPage