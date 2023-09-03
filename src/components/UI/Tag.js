const Tag = ({ className, ...attr }) => {
    const defaultClasses = 'tag px-2 py-1 rounded bg-blue-100 text-zinc-700 border border-transparent text-sm flex flex-row items-center justify-center gap-1 w-fit h-auto hover:bg-orange-200'
    const classes = className ? className + ' ' + defaultClasses : defaultClasses;
    return (
        <span
            className={classes}
            {...attr}>
            {attr?.children}
        </span>
    );
};

export default Tag;