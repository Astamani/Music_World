'use client'

import Link from 'next/link'
import courseData from '../../../data/music-data.json'
import { BackgroundGradient } from './ui/background-gradient'

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}
export const FeaturedSection = () => {

    const featuredCourses = courseData.courses.filter((courses: Course) => courses.isFeatured)
    return (
        <div className='py-12 '>
            <div>
                <div className='text-center '>
                    <h2 className='my-4 font-semibold text-[#BC96E6] text-2xl tracking-wide uppercase'>Featured Courses</h2>
                    <p className='text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Learn with the best</p>
                </div>
            </div>
            <div className='my-10 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {
                        featuredCourses.map((course: Course) => (
                            <div key={course.id} className='flex justify-center'>
                                <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                                    <div className='p-4 sm:6 flex flex-col items-center text-center flex-grow'>
                                        <p className='text-lg sm:text-2xl font-semibold mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                                        <p className='text-[16px] text-neutral-600 mt-2 dark:text-neutral-400 flex-grow'>{course.description}</p>
                                        <Link href={`/course/${course.slug}`} className='mt-2'>Learn more</Link>
                                    </div>
                                </BackgroundGradient>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-18 text-center'>
                <Link href={'/courses'}>
                    <button className=' px-10 py-3 rounded-lg font-semibold dark:bg-[#121A2D]'>
                        View all courses
                    </button>
                </Link>
            </div>
        </div>
    )
}
