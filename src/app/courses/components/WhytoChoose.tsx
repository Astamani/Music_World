"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { title } from "process";

const musicData = [
    {
      title: "Collaborative Composition",
      description:
        "Learn to compose music collaboratively in real time with your bandmates, colleagues, and mentors. Share ideas, create harmonies, and make musical decisions quickly. Our platform streamlines your collaborative workflow, increasing creativity and productivity.",
    },
    {
      title: "Real-time Performance Feedback",
      description:
        "Get instant feedback on your musical performance. Track every modification in your playing or composition in real time. No more confusion about the latest version of your work. Embrace the simplicity of real-time updates to improve your skills efficiently.",
    },
    {
      title: "Version Control for Compositions",
      description:
        "Manage your music compositions effortlessly with real-time version control. Always work on the most recent version of your tracks, eliminating the need for manual updates. Keep your band or team aligned, maintain your creative flow, and avoid any interruptions.",
    },
    {
      title: "Expanding Your Musical Repertoire",
      description:
        "Never run out of new content to play or compose. Our platform ensures you have access to the latest musical pieces, tutorials, and practice sessions. Stay inspired, keep your skills sharp, and maintain the flow of your musical journey without any interruptions.",
    },
    {
      title: "Expanding Your Musical Repertoire",
      description:
        "Never run out of new content to play or compose. Our platform ensures you have access to the latest musical pieces, tutorials, and practice sessions. Stay inspired, keep your skills sharp, and maintain the flow of your musical journey without any interruptions.",
    },
    {
      title: "Expanding Your Musical Repertoire",
      description:
        "Never run out of new content to play or compose. Our platform ensures you have access to the latest musical pieces, tutorials, and practice sessions. Stay inspired, keep your skills sharp, and maintain the flow of your musical journey without any interruptions.",
    },
  ];
  

const WhytoChoose = () => {
    return (
        <div>
            <StickyScroll content={musicData}  />
        </div>
    )
}

export default WhytoChoose