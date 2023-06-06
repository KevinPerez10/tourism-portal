import React from 'react'
import Nav from './Nav'

export default function Home() {
    return (
        <div className='flex flex-col items-center'>
            <Nav/>
            <main className='flex relative items-center justify-center bg-home-image bg-cover bg-no-repeat h-screen w-full'>
                <div className='absolute backdrop-brightness-50 h-full w-full'/>
                <div className='flex flex-col text-white w-full text-4xl sm:text-5xl md:text-8xl text-center'>
                    <h1 className='drop-shadow-lg'>Experience</h1>
                    <h2 className='puerto-header drop-shadow-lg font-bold'>Puerto Princesa</h2>
                    <p className='mt-5 text-lg drop-shadow-lg'>Where Nature's Masterpieces Come to Life</p>
                </div>
                <div className="custom-shape-divider-bottom-1685939409 hidden md:block">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </main>

            <section className='my-10 w-full bg-white z-10 gap-10 flex flex-col items-center justify-center'>
                <div className='flex flex-col md:w-1/2 w-4/5 sm:text-xl text-center'>
                    <h1 className='text-2xl font-bold'>Tropical Dreams Come True</h1>
                    <div>
                        Prepare to be captivated by the enchanting beauty and incredible sights that await you in Puerto Princesa, Palawan!
                    </div>
                </div>
                <div className='md:w-3/5 w-4/5 grid place-items-center text-center'>
                    <img className='shadow-xl rounded-2xl' src="src/assets/images/uepi05jkfw2ptfccqe0d.webp" alt="" />
                </div>
            </section>
            
            <section className='relative bg-start-image bg-cover bg-no-repeat flex flex-col gap-10 items-center w-full md:rounded-tr-[10rem] md:rounded-bl-[10rem]'>
                <div className='absolute backdrop-blur-sm backdrop-brightness-50 h-full w-full md:rounded-tr-[10rem] md:rounded-bl-[10rem]'/>
                <div className='text-white lg:w-3/5 md:w-1/2 pt-10 w-4/5 md:self-start md:ml-10'>
                    <h1 className='text-2xl font-bold drop-shadow-lg'>Start your journey now at Puerto Princesa!</h1>
                    <div className='drop-shadow-lg'>
                        Indulge in pure bliss as you soak up the sun on the pristine beaches of Puerto Princesa, Palawan, where paradise awaits.
                    </div>
                </div>
                <div className='grid place-items-center gap-5 w-4/5 grid-cols-4 drop-shadow-lg mb-20 text-white'>
                    <div className='overflow-hidden relative cursor-pointer hover:bg-gray-900/25 font-bold rounded-xl grid place-items-center w-full h-36 sm:col-span-3 col-span-4'>
                        <p className='drop-shadow-lg'>Underground River Tour</p>
                        <img className='absolute -z-10 bottom-0' src="src/assets/images/lxonyeuu3jwtavzldwjp.webp" alt="" />
                    </div>
                    <div className='border-2 overflow-hidden relative cursor-pointer hover:bg-gray-900/25 font-bold rounded-xl grid place-items-center w-full h-36 row-start-2 sm:col-span-2 col-span-4'>City Heritage Tour</div>
                    <div className='border-2 overflow-hidden relative cursor-pointer hover:bg-gray-900/25 font-bold rounded-xl grid place-items-center w-full h-36 sm:col-span-2 col-span-4'>Island Hopping Tour</div>
                    <div className='border-2 overflow-hidden relative cursor-pointer hover:bg-gray-900/25 font-bold rounded-xl grid place-items-center w-full h-36 col-span-4'>Package 4</div>
                    <div className='border-2 overflow-hidden relative cursor-pointer hover:bg-gray-900/25 font-bold rounded-xl grid place-items-center w-full h-36 sm:col-start-2 sm:col-span-3 col-span-4'>Package 5</div>
                </div>
            </section>

            <section className='bg-orange-200 mt-40 h-screen w-full relative'>
                <div class="custom-shape-divider-top-1686037844">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className='pt-32'>
                    <h1>Journey to Tranquility</h1>
                    <p>Find Peace and Relaxation in Puerto Princesa, Palawan's Idyllic Retreats!</p>
                </div>
            </section>
        </div>
    )
}
