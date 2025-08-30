import React from 'react'
import SessionHeading from "@/components/home/category/sessionHeading";
import  HeroVideoDialog  from "@/components/magicui/hero-video-dialog";
const Demo = () => {
    return (
        <div className="pt-16 pb-16">
            <SessionHeading heading="Demonstration" subHeading="Here we walk through how the system works: users select symptoms, the algorithm processes them, results are shown," />
    <div className={"m-10 flex flex-wrap justify-center w-250 h-50"}>
        <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/y3QsGvx547M"
        thumbnailSrc='/images/TN.jpg'
        thumbnailAlt="Dummy Video Thumbnail"
        />

    </div>

        </div>
    )
}
export default Demo
