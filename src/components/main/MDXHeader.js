import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Section from '../layout/Section';
import ViewContainer from '../../components/layout/ViewContainer';
import Button from '../UI/Button';
import { getCraftHeader } from '../../lib/crafts';
import MetaHead from '../seo/MetaHead';
import { ArrowLeft, Clock, Heart } from 'lucide-react';
import { cn, copyToClipboard } from '../../lib/utils';

const MDXHeader = ({
    className,
    ...attr
}) => {
    const pathName = useRouter()?.pathname;
    const craftHeaderData = getCraftHeader({ craftSlug: pathName });

    const [copyAction, setCopyAction] = useState(false);
    const [craftLike, setCraftLike] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setCopyAction(false);
        }, 3000);
    }, [copyAction]);

    return (
        <>
            <MetaHead
                title={`${craftHeaderData?.header} - Crafts | Rakesh Chotaliya`}
                description={craftHeaderData?.description}
                embedSource={{
                    twitter:
                        'https://ik.imagekit.io/o00zyvf99d/portfolioImage/seo/crafts.jpg?updatedAt=1694539293271&tr=w-1200%2Ch-675%2Cfo-auto',
                    linkedin:
                        'https://ik.imagekit.io/o00zyvf99d/portfolioImage/seo/crafts.jpg?updatedAt=1694539293271&tr=w-1200%2Ch-628%2Cfo-auto',
                    og: 'https://ik.imagekit.io/o00zyvf99d/portfolioImage/seo/crafts.jpg?updatedAt=1694539293271',
                }}
            />
            <div className={cn('mdx-header my-12', className)} {...attr}>
                <ViewContainer>
                    <Link
                        href={'/crafts'}
                        className="text-zinc-500 flex flex-row items-center justify-start gap-1">
                        <ArrowLeft className="w-4 h-4" />
                        {'Back to crafts'}
                    </Link>
                    <Section className="flex flex-row items-center justify-between max-lg:flex-col max-lg:items-start max-lg:gap-4">
                        <div className="header-content-container grid grid-cols-1 items-start justify-start gap-2">
                            <h1 className="craft-title leading-snug text-5xl max-lg:text-3xl max-md:text-2xl font-semibold">
                                {craftHeaderData?.header}
                            </h1>
                            <p className="craft-description truncate  text-zinc-500 text-lg max-lg:text-base max-md:text-sm">
                                {craftHeaderData?.description}
                            </p>
                            <p className="craft-uploaded-at flex flex-row items-center justify-start gap-1 text-zinc-500 text-base max-lg:text-sm max-md:text-xs">
                                <Clock className="w-4 h-4 max-md:w-3 max-md:h-3" />
                                {(craftHeaderData?.uploadedAt?.date || '') +
                                    (craftHeaderData?.uploadedAt?.month || '') +
                                    ', ' +
                                    craftHeaderData?.uploadedAt?.year}
                            </p>
                        </div>
                        <div className="craft-actions-layer-container flex flex-row items-center justify-end gap-6 max-lg:w-full">
                            <Heart
                                onClick={() => setCraftLike(!craftLike)}
                                className={cn(
                                    'cursor-default',
                                    craftLike ? 'fill-blue-400' : '',
                                )}
                            />
                            <Button
                                className={cn(
                                    'select-none',
                                    !copyAction ||
                                    'bg-transparent border-zinc-800 text-zinc-800 hover:brightness-105',
                                )}
                                onClick={() => {
                                    copyToClipboard({
                                        content: `https://rakeshchotaliya.com${pathName}`,
                                    });
                                    setCopyAction(true);
                                }}>
                                {!copyAction ? 'Share Craft' : 'Copied ✅'}
                            </Button>
                        </div>
                    </Section>
                </ViewContainer>
            </div>
        </>
    );
};

export default MDXHeader;