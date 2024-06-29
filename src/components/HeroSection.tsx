import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
function HeroSection() {
    return (
        //Hero section
        <div id='Hero' className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="#BC96E6"
            />
            <div className='p-4 relative w-full text-center'>
                <h1
                    className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'
                >Master the Art of Music</h1>
                <p
                    className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'
                >Discover diverse music courses for all levels. From beginners to advanced musicians, our expert instructors and interactive lessons will ignite your passion and elevate your musical journey. Join us today!</p>
                <div className="mt-4">
                    <Link href={'/courses'}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Explore
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection