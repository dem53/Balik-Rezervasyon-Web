import React from 'react'

function ConfirmBox({ isOpen, message, onConfirm, onClose }) {

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 flex items-center justify-center backdrop-blur-xs bg-black/30'>
            <div className='p-5 rounded-lg cursor-pointer bg-white flex flex-col gap-2 items-center justify-center'>
                <span className='my-2 font-serif text-sm text-center'>
                    {message}
                </span>
                <span className='flex items-center justify-center gap-4'>
                    <button onClick={onConfirm} type='button' className='px-2 py-1 rounded-md text-xs cursor-pointer font-sans text-center text-white bg-red-400 hover:bg-red-600 duration-500 ease-in-out'>
                        Evet
                    </button>
                    <button onClick={onClose} type='button' className='px-2 py-1 rounded-md text-xs cursor-pointer font-sans text-center text-white bg-gray-400 hover:bg-gray-600 duration-500 ease-in-out'>
                        İptal
                    </button>
                </span>
            </div>
        </div>
    )
}

export default ConfirmBox