import Section from './../../components/layout/Section';
import ViewContainer from './../../components/layout/ViewContainer';
import Header from './../../components/main/Header';
import getCrafts from './../../lib/crafts';
import Link from 'next/link';
import MetaHead from './../../components/seo/MetaHead';
import AnimatedBg from './../../components/main/AnimatedBg'

const Crafts = () => {
    return (
        <>
            <MetaHead
                title={'Crafts | Rakesh Chotaliya'}
                description={'Handcrafted UI Components for Frontend Development to Choose From.'}
                embedSource={{
                    twitter:
                        'https://ik.imagekit.io/o00zyvf99d/portfolioImage/seo/crafts.jpg?updatedAt=1694539293271&tr=w-1200%2Ch-675%2Cfo-auto',
                    linkedin:
                        'https://ik.imagekit.io/o00zyvf99d/portfolioImage/seo/crafts.jpg?updatedAt=1694539293271&tr=w-1200%2Ch-628%2Cfo-auto',
                    og: 'https://ik.imagekit.io/o00zyvf99d/portfolioImage/seo/crafts.jpg?updatedAt=1694539293271',
                }}
            />
            <AnimatedBg />
            <div className="crafts-view-container" id="crafts">
                <ViewContainer>
                    <Header />
                    <Section
                        className="crafts-list-wrapper mt-8"
                        id="crafts-list"
                        aria-label="Crafts">
                        <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
                            {'crafts.'}
                        </h2>
                        <ul className="crafts-list mt-8 grid grid-cols-1 items-start gap-4">
                            {getCrafts()?.map((craft, craftIndex) => {
                                if (craft?.linkType === 'external' && craft?.craftLink) {
                                    return (
                                        <li className="craft-item bg-white" key={craftIndex}>
                                            <Link
                                                href={craft?.craftLink}
                                                target={craft?.craftSlug ? '_self' : '_blank'}>
                                                <h3 className="text-lg hover:underline">
                                                    {craft?.craftTitle}
                                                </h3>
                                                <p className="text-sm font-normal text-zinc-500">
                                                    {craft?.craftDescription}
                                                </p>
                                            </Link>
                                        </li>
                                    );
                                } else if (craft?.linkType === 'internal' && craft?.craftSlug) {
                                    return (
                                        <li className="craft-item bg-white" key={craftIndex}>
                                            <Link
                                                href={`/crafts/${craft?.craftSlug}`}
                                                target={craft?.craftSlug ? '_self' : '_blank'}>
                                                <h3 className="text-lg hover:underline">
                                                    {craft?.craftTitle}
                                                </h3>
                                                <p className="text-sm font-normal text-zinc-500">
                                                    {craft?.craftDescription}
                                                </p>
                                            </Link>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </Section>
                </ViewContainer>
            </div>
        </>
    )
}

export default Crafts;