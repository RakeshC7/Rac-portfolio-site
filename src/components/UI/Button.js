const Button = (props) => {
    const ThemeButton = 'px-3 py-1.5 bg-zinc-800 text-zinc-50 border-2 border-transparent truncate rounded hover:brightness-150 active:brightness-125 disabled:cursor-default disabled:bg-zinc-200 disabled:text-zinc-900';
    const classes = props.classes ? props.classes + ' ' + ThemeButton : ThemeButton;
    return (
        <button
            className={classes}
        >
            {props?.children}
        </button>
    );
};

export default Button;