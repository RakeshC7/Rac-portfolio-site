const Callout = (props) => {
    const classes = props.className
        ? props.className + ' ' + 'rounded-lg bg-blue-100 text-zinc-700 text-sm font-normal p-4 leading-6'
        : 'rounded-lg bg-blue-100 text-zinc-700 text-sm font-normal p-4 leading-6';
    return (
        <div
            className={classes}
        >
            {props?.children}
        </div>
    );
};

export default Callout;