import Head from 'next/head';
import favicon from './../../public/media/favicon.ico';

const MetaHead = ({
    title = 'Rakesh Chotaliya',
    metaTitle = 'Rakesh Chotaliya | Front-end Developer based in Bengaluru, India.',
    description = 'Embark on my Frontend Development journey, showcasing past projects and the realm of React, JS, wordpress, ionic and CSS. Join me in my digital world—Let\'s connect!',
    site = 'https://rakeshchotaliya.com/',
    embedSource = 'default',
    ...attr
}) => {
    return (
        <Head {...attr}>
            <title>{title}</title>
            <link rel="shortcut icon" type='image' href={favicon} />
            <meta name="title" content={metaTitle} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={site} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={description} />
            <meta
                property="og:image"
                content={
                    embedSource === 'default'
                        ? 'https://ik.imagekit.io/o00zyvf99d/portfolioImage/seo/porfolioImgSource.jpg?updatedAt=1694326474757&tr=w-1200%2Ch-630%2Cfo-auto'
                        : embedSource?.og
                }
            />

            <meta
                property="twitter:card"
                content={
                    embedSource === 'default'
                        ? 'https://ik.imagekit.io/o00zyvf99d/portfolioImage/seo/porfolioImgSource.jpg?updatedAt=1694326474757&tr=w-1200%2Ch-675%2Cfo-auto'
                        : embedSource?.twitter
                }
            />
            <meta property="twitter:url" content={site} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta
                property="twitter:image"
                content={
                    embedSource === 'default'
                        ? 'https://ik.imagekit.io/o00zyvf99d/portfolioImage/seo/porfolioImgSource.jpg?updatedAt=1694326474757&tr=w-1200%2Ch-675%2Cfo-auto'
                        : embedSource?.twitter
                }
            />
        </Head>
    )
}
export default MetaHead;