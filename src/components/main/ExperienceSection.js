import Section from '../layout/Section';
import LinkText from '../UI/LinkText';
import Callout from './Callout';
import { getExperiences } from '../../lib/experiences';

const ExperienceSection = () => {
    return (
        <Section className='experience-section grid grid-cols-1 justify-start gap-4'>
            <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
                {'worked as.'}
            </h2>
            <div className='experience-item-list-wrapper mt-4 grid grid-cols-1 justify-start gap-8'>
                {
                    getExperiences().map((experience, experienceIndex) => (
                        <ExperienceItem {...experience} key={experienceIndex} />
                    ))
                }
            </div>
        </Section>
    )
}

const ExperienceItem = ({
    experienceTitle,
    experienceDescription,
    experienceOrg,
    experienceStatus,
    className,
    ...attr
}) => {
    const defaultClasses = 'experience-item border-l-2 pl-4 hover:border-blue-300 cursor-default transition-all'
    const classes = className ? className + ' ' + defaultClasses : defaultClasses
    return (
        <div
            className={classes}
            {...attr}
        >
            <div
                className='flex flex-row items-start justify-between max-md:flex-col max-md:justify-start max-md:gap-2 max-sm:w-[320px]'
            >
                <span>
                    <h3 className="experience-title font-normal text-zinc-900 capitalize w-[46ch] max-md:w-[30ch]">
                        {experienceTitle + ', ' + experienceOrg?.name}
                    </h3>
                    <p className="experience-org-details-wrapper text-sm flex flex-row items-center justify-start gap-1.5">
                        {typeof experienceOrg?.link === 'string' ? (
                            <LinkText
                                className="font-normal text-sm"
                                href={experienceOrg?.link}
                                target={'_blank'}>
                                {experienceOrg?.websiteDisplayName}
                            </LinkText>
                        ) : (
                            <span className="font-normal text-sm">
                                {experienceOrg?.websiteDisplayName}
                            </span>
                        )}
                    </p>
                </span>
                <p className="experience-status font-normal text-zinc-500 text-sm">
                    {typeof experienceStatus === 'string' &&
                        experienceStatus === 'current' &&
                        experienceStatus}
                    {typeof experienceStatus === 'object' && (
                        <span className="experience-status-duration-wrapper">
                            {experienceStatus?.startAt + '-' + experienceStatus?.endAt}
                        </span>
                    )}
                </p>
            </div>
            <ul className="experience-description-list-content-wrapper mt-4 flex flex-col items-start justify-start gap-2 pl-3">
                {experienceDescription?.map((descriptionItem, descriptionIndex) => (
                    <li
                        className="font-normal text-zinc-500 text-sm list-disc list-outside"
                        key={descriptionIndex}>
                        {descriptionItem}
                    </li>
                ))}
                {experienceOrg?.name === 'AsyncAPI Initiative' && (
                    <Callout>
                        Was a part of AsyncAPI&apos;s first ever Mentorship Program, held in
                        year 2022. Learn more{' '}
                        <LinkText
                            className="text-sm text-zinc-600"
                            href={
                                'https://github.com/asyncapi/community/discussions/376#discussioncomment-2890658'
                            }>
                            here
                        </LinkText>
                    </Callout>
                )}
            </ul>
        </div>
    )
}


export default ExperienceSection;