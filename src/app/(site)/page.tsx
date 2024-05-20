import TitleSection from '@/components/landing-page/title-section';
import React from 'react';
import Image from 'next/image'
import Banner from '../../../public/appBanner.png';

const HomePage = () => {
    return (
        <section>
            <div
                className=" overflow-hidden
            px-4
            sm:px-6
            mt-10
            sm:flex
            sm:flex-col
            gap-4
            md:justify-center
            md:items-center
            "
            >
                <TitleSection pill="✨ Your Workspace, Perfected" title="All-IN-One Collaboration and productivity platform"></TitleSection>
                <div
                    className='bg-white
             p-[2px]
             mt-6
             rounded-xl
             
             '
                >
                    <button
                        className="btn-secondary 
              w-full rounded-[10px]
              p-6 text-2xl
              bg-background
              "
                    >Write Us</button>
                </div>
                <div className='md:mt-[-90px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] sm:ml-0 ml-[-50px]'>
                    <Image src={Banner} alt="Application Banner" className="scale-[80%]" />

                </div>

            </div>
        </section>
    )
};

export default HomePage;