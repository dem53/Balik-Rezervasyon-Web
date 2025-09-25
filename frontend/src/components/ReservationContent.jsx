import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ConfirmBox from '../components/ConfirmBox';
import PopUpBox from '../components/PopupBox';


function ReservationContent() {

    const navigate = useNavigate();

    const [reservationData, setReservationData] = useState([]);

    const [selectedContact, setSelectedContact] = useState(null);

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    useEffect(() => {
        const authTokenControl = () => {
            try {
                const token = localStorage.getItem('authToken');
                if (token) {
                    fetchContacts();
                } else {
                    navigate('/');
                }
            } catch (error) {
                console.error('token doğrulama hatası', error);
            }
        };

        const fetchContacts = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) {
                console.error('Token eksik. İletişim formları gösterilemez!', error);
                return;
            }
            try {
                const response = await axios.get('http://localhost:8000/api/get/reservation', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": 'application/json'
                    }
                });
                if (response.data && response.data.success) {
                    const data = response.data.reservation;
                    const sortedData = data.sort((a, b) =>
                        new Date(b.createdDate) - new Date(a.createdDate)
                    );
                    setReservationData(sortedData);
                }
            } catch (error) {
                console.error('İletişim verileri alınamadı:', error);
            }
        };

        authTokenControl();
    }, [navigate]);


    const handleRemoveContact = async (id) => {
        if (!id) {
            console.error('Böyle bir ID ait iletişim formu bulunamadı');
            return;
        }
        const token = localStorage.getItem('authToken');
        try {
            await axios.delete(`http://localhost:8000/api/delete/reservation/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setShowPopUp(true);
        } catch (error) {
            console.error('İletişim formu silinirken hata', error);
        }
    }

    const totalPages = Math.ceil(reservationData.length / rowsPerPage);

    const paginatedData = reservationData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleRowsPerPageChange = (e) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    return (

        <div className='w-auto pb-4'>
            <div className="container mx-auto flex flex-col items-start px-4 mb-6">

                <div className='w-full overflow-x-scroll'>


                    <h2 className="text-2xl font-extrabold pt-4 mb-6 border-b w-full text-start font-sans pb-3">Rezervasyon Talepleri</h2>

                    <div className="mb-4 flex items-center gap-2">
                        <label htmlFor="rowsPerPage" className="text-xs font-medium">Sayfa başı:</label>
                        <select
                            id="rowsPerPage"
                            value={rowsPerPage}
                            onChange={handleRowsPerPageChange}
                            className="border rounded px-2 text-xs py-1"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                        </select>
                    </div>
                    <div className="overflow-x-auto rounded-lg w-full border-white p-2 shadow-black shadow-lg">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="bg-blue-500 text-sm text-white">
                                    <th className="py-3 px-4 text-left">Ad Soyad</th>
                                    <th className="py-3 px-4 text-left">E-Mail</th>
                                    <th className="py-3 px-4 text-left">Telefon</th>
                                    <th className="py-3 px-4 text-left">Personel</th>
                                    <th className="py-3 px-4 text-left">Angeltour</th>
                                    <th className="py-3 px-4 text-left">Location</th>
                                    <th className="py-3 px-6 text-left">Start Date</th>
                                    <th className="py-3 px-6 text-left">End Date</th>
                                    <th className="py-3 px-4 text-left">Message</th>
                                    <th className="py-3 px-4 text-left">Oluşturulma</th>
                                    <th className="py-3 px-4 text-left">İşlemler</th>

                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData.length === 0 ? (
                                    <tr>
                                        <td colSpan={11} className="text-center text-sm py-5 text-gray-500">
                                            Rezervasyon Formu Kaydı bulunamadı.
                                        </td>
                                    </tr>
                                ) : (
                                    paginatedData.map((reservation, idx) => (
                                        <tr key={reservation._id || idx} className="border-b cursor-pointer text-xs hover:bg-blue-50">
                                            <td className="py-2 flex w-36 px-4">{reservation.ad} {reservation.nachname}</td>
                                            <td className="py-2 px-4">{reservation.email}</td>
                                            <td className="py-2 px-4">{reservation.phone}</td>
                                            <td className="py-2 px-4">{reservation.person}</td>
                                            <td className="py-2 px-4">{reservation.angeltour}</td>
                                            <td className="py-2 px-4">{reservation.location}</td>
                                            <td className="py-2 px-4">{reservation.startDate ? new Date(reservation.startDate).toLocaleDateString('tr-TR') : '-'}</td>
                                            <td className="py-2 px-4">{reservation.endDate ? new Date(reservation.endDate).toLocaleDateString('tr-TR') : '-'}</td>
                                            <td className="py-2 text-xs w-72 px-4">{reservation.message}</td>
                                            <td className="py-2 px-4">
                                                {reservation.createdDate
                                                    ? new Date(reservation.createdDate).toLocaleString('tr-TR')
                                                    : '-'}
                                            </td>
                                            <td className="py-2 text-xs w-72 px-4">
                                                <button onClick={() => {
                                                    setShowConfirmModal(true);
                                                    setSelectedContact(reservation._id);
                                                }} type='button' className='px-3 py-1 cursor-pointer bg-red-400 hover:bg-red-600 hover:duration-500 ease-in-out transition-colors text-white rounded-md font-sans text-xs text-center'>Sil</button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* pagination */}
                    <div className="flex gap-2 items-center justify-center p-0.5 mt-6">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-xs text-white cursor-pointer hover:bg-blue-600'}`}
                        >
                            Önceki
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => handlePageChange(i + 1)}
                                className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-700 text-xs cursor-pointer hover:bg-blue-300'}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages || totalPages === 0}
                            className={`px-3 py-1 rounded ${currentPage === totalPages || totalPages === 0 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white cursor-pointer text-xs hover:bg-blue-600'}`}
                        >
                            Sonraki
                        </button>
                    </div>

                </div>
            </div>


            <ConfirmBox
                isOpen={showConfirmModal}
                message={'Seçilen rezervasyon formunu silmek istiyor musunuz ?'}
                onConfirm={() => {
                    if (selectedContact) {
                        handleRemoveContact(selectedContact);
                        setShowConfirmModal(false);
                    }
                }}
                onClose={() => setShowConfirmModal(false)}
            />

            <PopUpBox
                isOpen={showPopUp}
                message={'Rezervasyon formu başarıyla silindi.'}
                onClose={() => {
                    setShowPopUp(false);
                    fetchContacts();
                    window.location.reload();
                }}
            />


        </div>

    );
}

export default ReservationContent;