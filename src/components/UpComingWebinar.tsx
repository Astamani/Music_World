'use client'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";
const instrumentData = [
  {
    title: "Piano",
    description: "A versatile keyboard instrument with a wide tonal range. Perfect for learning music theory and playing a variety of genres.",
    link: "<a href='https://www.learnandmaster.com/piano/'>Learn More</a>",
  },
  {
    title: "Guitar",
    description: "A popular instrument known for its portability and versatility. Great for strumming chords or playing intricate melodies.",
    link: "<a href='https://yourguitaracademy.com/lessons-and-courses'>Learn More</a>",
  },
  {
    title: "Violin",
    description: "A beautiful string instrument with a rich and expressive sound. Requires dedication and practice to master.",
    link: "<a href='https://www.superprof.com/lessons/violin/online/'>Learn More</a>",
  },
  {
    title: "Drums",
    description: "The foundation of rhythm in many musical styles. Develops coordination and a sense of groove.",
    link: "<a href='https://www.learnandmaster.com/drums/'>Learn More</a>",
  },
  {
    title: "Ukulele",
    description: "A fun and easy-to-learn instrument with a bright and cheerful sound. Great for beginners and singalongs.",
    link: "<a href='https://www.youtube.com/watch?v=Ailz-IgzeM4'>Learn More</a>",
  },
  {
    title: "Singing",
    description: "Learn to use your voice as an instrument. Develop vocal control, range, and technique.",
    link: "<a href='https://hearandplay.shop/products/vocal-mastery-course'>Learn More</a>",
  },
 
];

export const UpComingWebinar = () => {
  return (
    <div className='p-12 bg-black flex flex-col justify-center items-center'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
          <h2 className='text-3xl sm:text-6xl font-bold antialiased tracking-wide '>Here is What we love to Teach?</h2>
        </div>
        <div className='mt-10'>
          <HoverEffect items={instrumentData} />
        </div>
        <div className='mt-10 text-center'>
          <Link href={'/seemore'}>
            <button className=' px-10 py-3 rounded-lg font-semibold dark:bg-[#121A2D]'>
              View all courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
