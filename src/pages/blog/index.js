import Section from './../../components/layout/Section';
import ViewContainer from './../../components/layout/ViewContainer';
import Header from './../../components/main/Header';
import getBlogs from './../../lib/blogs';
import Link from 'next/link';
import MetaHead from '../../components/seo/MetaHead';
import AnimatedBg from './../../components/main/AnimatedBg'

const BlogView = () => {
    return (
        <>
            <MetaHead
                title={'Blogs | Rakesh Chotaliya'}
                description={'Explore Design and Technical Blogs by Rakesh Chotaliya.'}
                embedSource={{
                    twitter:
                        'https://ik.imagekit.io/o00zyvf99d/portfolioImage/seo/blogs.jpg?updatedAt=1694539293382&tr=w-1200%2Ch-675%2Cfo-auto',
                    linkedin:
                        'https://ik.imagekit.io/o00zyvf99d/portfolioImage/seo/blogs.jpg?updatedAt=1694539293382&tr=w-1200%2Ch-628%2Cfo-auto',
                    og: 'https://ik.imagekit.io/o00zyvf99d/portfolioImage/seo/blogs.jpg?updatedAt=1694539293382',
                }}
            />
            <AnimatedBg />
            <div
                className="blog-view-container"
                id="blog"
            >
                <ViewContainer>
                    <Header />
                    <Section className='grid grid-cols-1 items-start justify-start gap-12'>
                        <div
                            className="blogs-list-wrapper mt-8"
                            id="blogs-list"
                            aria-label="Blogs"
                        >
                            <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
                                {'blogs.'}
                            </h2>
                            <ul className="blogs-list mt-8 grid gap-4">
                                {getBlogs()?.map((blog, blogIndex) => {
                                    if (blog?.link) {
                                        return (
                                            <li className="blog-item bg-white" key={blogIndex}>
                                                <div className="blog-item__content-wrapper flex flex-col items-start justify-between gap-1 h-full">
                                                    <Link
                                                        href={blog?.link}
                                                        target={
                                                            blog?.linkType === 'external' ? '_blank' : '_self'
                                                        }>
                                                        <h2 className="blog-title text-lg hover:underline max-sm:text-sm max-sm:truncate max-sm:w-[24ch]">
                                                            {blog?.title}
                                                        </h2>
                                                    </Link>
                                                    {
                                                        blog?.description &&
                                                        <p className='text-sm text-zinc-500 font-light mb-2'>{blog?.description}</p>
                                                    }
                                                    {
                                                        <div className='flex justify-between items-center w-full'>
                                                            <p className="blog-published-at text-xs font-normal text-zinc-600">
                                                                {blog?.publishedAt?.date && (
                                                                    <span className="published-at__date inline-block mr-1">
                                                                        {blog?.publishedAt?.date}
                                                                    </span>
                                                                )}
                                                                {blog?.publishedAt?.month && (
                                                                    <span className="published-at__month inline-block mr-1">
                                                                        {blog?.publishedAt?.month}
                                                                    </span>
                                                                )}
                                                                {blog?.publishedAt?.year && (
                                                                    <span className="published-at__year inline-block">
                                                                        {blog?.publishedAt?.year}
                                                                    </span>
                                                                )}
                                                            </p>
                                                            <p className='text-xs font-normal text-zinc-900'>
                                                                {blog?.tag}
                                                            </p>
                                                        </div>
                                                    }
                                                </div>
                                            </li>
                                        );
                                    } else {
                                        return (
                                            <li className="blog-item" key={blogIndex}>
                                                <div className="blog-item__content-wrapper p-2 flex flex-row items-center justify-between transition-all border-b border-zinc-200 hover:border-orange-200">
                                                    <h2 className="blog-title cursor-default max-sm:text-sm max-sm:truncate max-sm:w-[24ch]">
                                                        {blog?.title}
                                                    </h2>
                                                    <p className="blog-published-at text-sm font-normal text-zinc-500">
                                                        {blog?.publishedAt?.date && (
                                                            <span className="published-at__date">
                                                                {blog?.publishedAt?.date}
                                                            </span>
                                                        )}
                                                        {blog?.publishedAt?.month && (
                                                            <span className="published-at__month">
                                                                {blog?.publishedAt?.month}
                                                            </span>
                                                        )}
                                                        {blog?.publishedAt?.year && (
                                                            <span className="published-at__year">
                                                                {blog?.publishedAt?.year}
                                                            </span>
                                                        )}
                                                    </p>
                                                </div>
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                    </Section>
                </ViewContainer>
            </div>
        </>
    )
}

export default BlogView;