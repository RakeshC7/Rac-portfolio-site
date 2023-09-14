import Image from 'next/image';
import Section from '../layout/Section';
import profileImg from './../../public/media/profile.jpg'

const Header = () => {
    return (
        <Section className="gap-6 pt-14 block sm:flex sm:items-center ">
            <div
                className="profile-icon-wrapper relative w-fit h-fit mb-6 sm:mb-0">
                <div className="rounded-full overflow-hidden">
                    <Image
                        src={profileImg}
                        alt="Rakesh Chotaliya"
                        width={'110'}
                        height={'110'}
                        className="rounded-full flex-shrink transition-all hover:scale-110 transition-scale duration-500"
                        priority
                    />
                </div>
                <div
                    className="box icon-content-wrapper animation-delay absolute px-2 py-1 bg-white shadow rounded-full text-sm left-20 bottom-0 cursor-default select-none max-sm:text-xs max-sm:px-1 max-sm:py-0.5"
                >
                    {'✨'}
                </div>
            </div>
            <div>
                <h1 className="welcome-text leading-snug font-semibold text-xl text-zinc-900 sm:text-2xl ">
                    <span className='block mr-2 sm:inline-block'>Namaste !</span> I am Rakesh Chotaliya
                </h1>
                <div className="leading-snug font-normal text-base text-zinc-500 mt-1">
                    <p className='max-w-lg'>
                        {/* {'a Frontend developer Based in Bangalore, India.'} */}
                        {'Passionate Frontend developer crafting exceptional web experiences, based in Bangalore, India.'}
                    </p>
                    {/* <p>{new Date().getFullYear() - 1997 + ', he/him'}</p> */}
                </div>
            </div>
        </Section>
    );
};

export default Header;