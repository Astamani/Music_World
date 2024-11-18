'use client'
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const indiaSingers = [
  {
    id: 1,
    name: "A.R. Rahman",
    designation: "Music Composer, Singer, Songwriter",
    image: "https://images.unsplash.com/photo-1570158268183-d296b2892211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcGhvdG9zfGVufDB8fDB8fHww", // Replace with actual image URL
  },
  
  {
    id: 3,
    name: "Kishore Kumar",
    designation: "Playback Singer",
    image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
  },
  {
    id: 4,
    name: "Asha Bhosle",
    designation: "Playback Singer",
    image: "https://plus.unsplash.com/premium_photo-1682096186855-3f32647abe68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW58ZW58MHx8MHx8fDA%3D", // Replace with actual image URL
  },
  {
    id: 5,
    name: "Sonu Nigam",
    designation: "Playback Singer",
    image: "https://plus.unsplash.com/premium_photo-1679440415182-c362deb2fd40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVufGVufDB8fDB8fHww", // Replace with actual image URL
  },
  {
    id: 6,
    name: "Kumar Gandharva",
    designation: "Hindustani Classical Singer",
    image: "https://images.unsplash.com/photo-1580643668142-265d03d70da2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNleHklMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
  }
];


export const MeetOurInstructors = () => {
  return (
    <>
      <div className=" relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl flex flex-col items-center justify-center h-full mx-auto">
          <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>
            Meet Our Instructor
          </h2>
          <p className="text-white text-center mb-9 antialiased">Discover Your Instrument and the best teachers you got to get to the top</p>
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={indiaSingers} />
          </div>
        </WavyBackground>
      </div>
    </>
  )
}
