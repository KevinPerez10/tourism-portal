import React from 'react'

export default function Nav() {
    return (
        <div
            data-aos='fade-down'
            data-aos-delay="100"
            data-aos-duration="1000"
            className='bg-white z-20 fixed flex justify-center w-full'
        >
            <div className='w-full xl:mx-40 md:mx-20 mx-5 text-xs flex flex-row items-center'>
                <div>
                    <img className='md:w-20 w-10' src='src/assets/images/logo.png' alt="logo" />
                </div>
                <div className='hidden lg:text-lg ml-auto md:flex justify-end w-1/2'>
                    <ul className='lg:w-full text-center cursor-pointer drop-shadow-xl px-2'>Home</ul>
                    <ul className='lg:w-full text-center cursor-pointer drop-shadow-xl px-2'>About Us</ul>
                    <ul className='lg:w-full text-center cursor-pointer drop-shadow-xl px-2'>Contact Us</ul>
                </div>
                <div className='md:hidden ml-auto grid place-items-center text-2xl'>
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}
