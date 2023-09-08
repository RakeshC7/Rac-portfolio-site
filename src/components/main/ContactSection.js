import { getContacts } from '../../lib/contacts';
import Section from '../layout/Section';
import LinkText from '../UI/LinkText';

const ContactSection = () => {
    return (
        <Section
            className="contacts-section grid grid-cols-1 justify-start gap-4"
            id="contact">
            <h2 className="contact-heading leading-snug font-medium text-base text-zinc-900">
                {'contact, socials.'}
            </h2>
            <div className="contact-item-list-wrapper mt-4 flex flex-wrap gap-x-7 gap-y-4">
                {
                    getContacts()?.map((contact, contactIndex) => (
                        <ContactItem {...contact} key={contactIndex} />
                    ))
                }
            </div>
        </Section>
    );
};

const ContactItem = ({
    title,
    link,
    className,
    ...attr
}) => {

    const defaultClasses = 'contact-item flex flex-row items-center justify-start gap-4 border-b-2 pb-1 hover:border-blue-300 transition-all'
    const classes = className ? className + ' ' + defaultClasses : defaultClasses;
    return (
        <div
            className={classes}
            {...attr}>
            <span className="contact-title font-normal text-sm">{title}</span>
            <span className="contact-link-content">
                {link?.url && (
                    <LinkText
                        className="text-sm font-normal text-zinc-500"
                        href={link?.url}>
                        {link?.display}
                    </LinkText>
                )}
                {!link?.url && (
                    <span className="text-sm font-normal text-zinc-500">
                        {'link not found'}
                    </span>
                )}
            </span>
        </div>
    );
};

export default ContactSection;