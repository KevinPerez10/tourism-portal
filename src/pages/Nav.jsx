import React from 'react'

export default function Nav() {
    return (
        <div className='bg-white border-2 z-10 fixed flex justify-center w-full py-5'>
            <div className='w-full mx-10 border-2 flex flex-row'>
                <ul>Logo</ul>
                <div className='hidden ml-auto md:flex justify-end w-1/2'>
                    <ul className='w-full text-center border-2 cursor-pointer bg-green-200 px-2'>Home</ul>
                    <ul className='w-full text-center border-2 cursor-pointer bg-green-200 px-2'>About Us</ul>
                    <ul className='w-full text-center border-2 cursor-pointer bg-green-200 px-2'>Contact Us</ul>
                </div>
                <div className='md:hidden ml-auto grid place-items-center text-2xl'>
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}
