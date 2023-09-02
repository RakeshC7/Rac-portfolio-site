import Section from '../layout/Section';
import LinkText from '../UI/LinkText';
import Callout from './Callout';

const ExperienceSection = () => {
    return (
        <Section className='experience-section grid grid-cols-1 justify-start gap-4'>
            <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
                {'worked as.'}
            </h2>
        </Section>
    )
}

export default ExperienceSection;