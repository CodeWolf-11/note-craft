"use client";

import React from 'react'
import Logo from './Logo'
import { cn } from '@/lib/utils'
import { useScrollTop } from '@/hooks/use-scroll-top'

function Navbar() {
    const scrolled = useScrollTop();
    return (
        <div className={cn(
            "z-50 bg-background fixed top-0 flex items-center w-full p-6",
            scrolled && "border-b shadow-sm"
        )}>
            <Logo />
            <div className='md:ml-auto md:justify-end justify-between w-full flex items-center'>
                Login
            </div>
        </div>
    )
}

export default Navbar