const getBlogs = () => {
    return [
        {
            title: 'React Resource Vault',
            description: 'Master React\'s core concepts with comprehensive cheatsheets. Quick reference guide for React expertise.',
            tag: 'React',
            linkType: 'external',
            link: 'https://github.com/RakeshC7/React-Cheatsheets',
            publishedAt: {
                year: 2023,
                month: 'Aug'
            },
        },
        {
            title: 'HTML5 Boilerplate',
            description: 'A fast, flexible and modern template for beginners and experts.',
            tag: 'Html',
            linkType: 'external',
            link: 'https://github.com/RakeshC7/HTML5-Boilerplate',
            publishedAt: {
                year: 2021,
            },
        },
    ];
}

export default getBlogs;