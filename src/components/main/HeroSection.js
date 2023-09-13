import Section from '../layout/Section';
import Callout from './Callout';
import Button from '../UI/Button';
import LinkText from '../UI/LinkText';
import Header from './Header'

const HeroSection = () => {
    return (
        <>
            <Header />
            <Section className='profileSection'>
                <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
                    {'about me.'}
                </h2>
                <div className="about-content-wrapper leading-6 text-sm font-normal text-zinc-500 mt-4">
                    <p>
                        {
                            'Hey! I\'m a Computer Engineer with 5+ years of experience in web and app development. My love for tech drives my continuous learning and innovation. Beyond coding, I enjoy tea and chess, and I\'m eager to contribute to open source. Let\'s collaborate on your digital vision!'
                        }
                    </p>
                </div>
                <Callout className='mt-4'>
                    <p>
                        {
                            'I am currently open for full-time engineering roles, which involves user interface and experience design, frontend engineering as the core.'
                        }
                    </p>
                    <p className="mt-2 mb-4">
                        {
                            'A collaborative team of engineers and designers, who are building great products. Interested in working together? Feel free to schedule a meet!'
                        }
                    </p>
                    <div className="flex flex-row items-center justify-start gap-4">
                        <Button onClick={() => window.open('https://cal.com/rakeshc7')}>
                            {'Schedule a meet / cal.com'}
                        </Button>
                        {/* <LinkText
                            href={'/resume'}
                            className="text-zinc-600 font-medium text-sm"
                        >
                            {'Resume'}
                        </LinkText> */}
                    </div>
                </Callout>
            </Section>
        </>
    )
}

export default HeroSection;