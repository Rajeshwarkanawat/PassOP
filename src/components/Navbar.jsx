import React from 'react'

function Navbar() {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontaier  flex justify-between  items-center px-4 py-5 h-14">

                <div className="logo font-bold">
                    <span className="text-green-700">&lt;</span>Pass
                    <span className="text-green-700">OP/&gt;</span>
                </div>

                <a  href="https://github.com/Rajeshwarkanawat/" target="_blank" rel="noopener noreferrer">
                    <button className='text-white cursor-pointer bg-green-700 my-5 mx-2 rounded-full flex justify-between items-center ring-white ring-1'>
                        <img className='invert w-10 p-1' src="/icons/github.svg" alt="Github logo" />
                        <span className='font-bold px-2'>GitHub</span>
                    </button>
                </a>

            </div>
        </nav>
    )
}

export default Navbar
