import React from 'react'
import Image from 'next/image'

function Heros() {
    return (
        <div className='flex flex-col items-center justify-center max-w-5xl'>
            <div className='flex items-center'>
                <div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]'>
                    <Image src={"/document.png"} fill priority className='object-contain' alt='Document' />
                </div>

                <div className='relative h-[400px] w-[400px] hidden md:block'>
                    <Image priority fill src={"/reading.png"} className='object-contain' alt='Reading' />
                </div>
            </div>
        </div>
    )
}

export default Heros