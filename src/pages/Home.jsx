import React from 'react'
import Nav from './Nav'

export default function Home() {
    return (
        <div className='flex flex-col items-center'>
            <Nav/>
            <main className='flex items-center justify-center bg-gray-300 h-screen w-full'>
                <div className='flex flex-col text-white text-4xl sm:text-5xl md:text-8xl text-center'>
                    <h1 className='drop-shadow-lg'>Experience</h1>
                    <h2 className='puerto-header drop-shadow-lg font-bold'>Puerto Princesa</h2>
                    <p className='mt-5 text-lg drop-shadow-lg'>Where Nature's Masterpieces Come to Life</p>
                </div>
                <div class="custom-shape-divider-bottom-1685939409 hidden md:block">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </main>
            <section className='h-screen w-full gap-10 flex flex-col items-center justify-center'>
                <div className='flex flex-col w-1/2 sm:text-xl text-center'>
                    <h1 className='text-2xl font-bold'>Tropical Dreams Come True</h1>
                    <subtitle>
                        Prepare to be captivated by the enchanting beauty and incredible sights that await you in Puerto Princesa, Palawan!
                    </subtitle>
                </div>
                <div className='border-2 w-3/5 text-center h-40 rounded-2xl'>
                    image-here
                </div>
            </section>
            <section className='bg-orange-300 h-screen w-full rounded-tr-[10rem] rounded-bl-[10rem]'>
                    <div className='w-1/2 border-2'>
                        <h1 className='text-2xl font-bold'>Start your journey now at Puerto Princesa!</h1>
                        <subtitle>
                            Indulge in pure bliss as you soak up the sun on the pristine beaches of Puerto Princesa, Palawan, where paradise awaits.
                        </subtitle>
                    </div>
                    <div className='grid place-items-center grid-cols-4'>
                        <div className='border-2'>1</div>
                        <div className='border-2'>2</div>
                        <div className='border-2'>3</div>
                        <div className='border-2'>4</div>
                    </div>
            </section>
        </div>
    )
}
