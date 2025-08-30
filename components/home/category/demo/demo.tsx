import React from 'react'
import SessionHeading from "@/components/home/category/sessionHeading";
import  HeroVideoDialog  from "@/components/magicui/hero-video-dialog";
const Demo = () => {
    return (
        <div className="pt-16 pb-16">
            <SessionHeading heading="Demonstration" subHeading="Here we walk through how the system works: users select symptoms, the algorithm processes them, results are shown," />

            <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc="https://www.example.com/dummy-video"
                thumbnailSrc="https://www.example.com/dummy-thumbnail.png"
                thumbnailAlt="Dummy Video Thumbnail"
            />
        </div>
    )
}
export default Demo
