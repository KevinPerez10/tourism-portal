import React from 'react'
import Nav from './Nav'

export default function Home() {
    return (
        <div className='flex flex-col items-center bg-green-200'>
            <Nav/>
            <main className='bg-cyan-300 h-screen w-full'>
                Goodbye World! :D
            </main>
            <main className='bg-red-300 h-screen w-full'>
                Goodbye World! :D
            </main>
            <main className='bg-orange-300 h-screen w-full'>
                Goodbye World! :D
            </main>
        </div>
    )
}
