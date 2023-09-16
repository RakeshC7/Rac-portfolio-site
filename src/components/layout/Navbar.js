import getPathMap from './../../lib/pathmap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ViewContainer from './ViewContainer';

const Navbar = () => {

    const router = useRouter();
    let pathName = router?.pathname;
    const defaultNavbarListItem = 'navbar-option-item option-item-available text-base text-zinc-500 hover:text-zinc-600';

    // Function to check if a path should be considered active
    const isPathActive = (path) => {
        if (path === '/') return path === pathName;
        return pathName.startsWith(path);
    };

    return (
        <nav className="navbar mt-12 z-50">
            <ViewContainer>
                <ul className='navbar-options-list flex flex-row items-center justify-end gap-4'>
                    {
                        getPathMap()?.map((pathMapItem, pathMapIndex) => {
                            if (pathMapItem?.isAvailable) {
                                const isActive = isPathActive(pathMapItem?.link);

                                return (
                                    <li
                                        key={pathMapIndex}
                                        className={
                                            isActive
                                                ? defaultNavbarListItem + ' border-b-2 border-blue-300'
                                                : defaultNavbarListItem
                                        }
                                    // className={pathName === pathMapItem?.link ? defaultNavbarListItem + ' ' + 'border-b-2 border-blue-300' : defaultNavbarListItem}
                                    >
                                        {pathMapItem?.link && (
                                            <Link
                                                href={pathMapItem?.link}
                                                target={
                                                    pathMapItem?.pathType === 'external'
                                                        ? '_blank'
                                                        : '_self'
                                                }
                                                className="">
                                                {pathMapItem?.title}
                                            </Link>
                                        )}
                                    </li>
                                )
                            } else {
                                return (
                                    <li
                                        className="navbar-option-item option-item-unavailable cursor-not-allowed text-base text-zinc-400"
                                        key={pathMapIndex}>
                                        {pathMapItem?.title}
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </ViewContainer>
        </nav>
    )
}

export default Navbar;