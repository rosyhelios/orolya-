import React from 'react'
type props={
    heading: string;
    subHeading:string;
};
export const SessionHeading = ({heading, subHeading}:props) => {
    return (
        <div>
            <h1 className={"flex justify-center sm:text-3xl text-8xl font-bold text-black"}>{heading}</h1>
            <p className={"flex justify-center text-center mt-3 text-black"}>{subHeading}</p>
        </div>
    );
}
export default SessionHeading;
