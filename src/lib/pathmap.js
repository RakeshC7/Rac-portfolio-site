const getpathMap = () => {
    return [
        {
            pathType: 'internal',
            title: 'home',
            link: '/',
            isAvailable: true,
        },
        {
            pathType: 'internal',
            title: 'blog',
            link: '/blog',
            isAvailable: true,
        },
        {
            pathType: 'internal',
            title: 'crafts 🌱',
            link: '/crafts',
            isAvailable: true,
        }
        // ,
        // {
        //     pathType: 'internal',
        //     title: 'newsletter 🌱',
        //     link: '/newsletter',
        //     isAvaliable: true,
        // }
    ]
}

export default getpathMap;