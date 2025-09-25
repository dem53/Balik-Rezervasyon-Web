import { GiConfirmed } from "react-icons/gi";

function PopUpBox({ isOpen, message, onClose }) {

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 flex items-center justify-center backdrop-blur-xs z-50 bg-black/30'>
            <div className='p-5 rounded-lg cursor-pointer bg-white flex flex-col gap-2 items-center justify-center'>
                <span className='my-2 font-serif text-sm text-center'>
                    {message}
                </span>
                <span className='flex items-center justify-center gap-4'>
                    <button onClick={onClose} type='button' className='rounded-md text-xs cursor-pointer font-sans text-center duration-500 ease-in-out'>
                        <GiConfirmed size={25} className="text-emerald-300 border rounded-md hover:bg-emerald-500 hover:text-white duration-500 ease-in-out transition-colors" />
                    </button>
                </span>
            </div>
        </div>
    )
}

export default PopUpBox