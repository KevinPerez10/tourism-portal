import React from 'react'

export default function Nav() {
    return (
        <div className='bg-white flex justify-center w-full py-10'>
            <div className='w-4/5 justify-between flex flex-row'>
                <div className='w-1/2'>Logo</div>
                <div className='w-1/2 flex flex-row justify-between'>
                    <ul>Home</ul>
                    <ul>About Us</ul>
                    <ul>Contact Us</ul>
                </div>
            </div>
        </div>
    )
}
