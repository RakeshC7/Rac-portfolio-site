import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const LinkText = (props) => {

    const classes = props.className
        ? props.className + ' ' + 'flex flex-row items-center justify-start gap-0.5 text-base font-medium transition-all text-zinc-900 hover:text-zinc-700 hover:gap-1 active:text-orange-500'
        : 'flex flex-row items-center justify-start gap-0.5 text-base font-medium transition-all text-zinc-900 hover:text-zinc-700 hover:gap-1 active:text-orange-500'

    const targetValue = props.target ? props.target : '_blank';

    return (
        <Link
            className={classes}
            target={targetValue}
            href={props.href}>
            <span className="link-text-content-wrapper">{props?.children}</span>
            <ArrowUpRight className="w-4" />
        </Link>
    );
};

export default LinkText;