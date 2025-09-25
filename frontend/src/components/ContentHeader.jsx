import React from 'react'
import '../App.css'

function ContentHeader({ title }) {
    return (
        <section className='w-full -z-10 border-hidden h-[25rem] content-header relative flex items-center justify-center content-header-bg lg:h-[30rem]'>
            <div className='h-full w-full opacity-75 bg-sky-500'>
            </div>
            <div className='items-center justify-center text-center absolute flex'>
                <h1 className='font-bold text-3xl text-center md:text-4xl lg:text-5xl uppercase px-5 lg:px-0 text-white mt-12 text-shadow-lg text-shadow-black'>
                    {title}
                </h1>
            </div>
        </section>
    )
}

export default ContentHeader