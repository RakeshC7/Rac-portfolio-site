const Section = (props) => {
    const classes = props.className ? props.className : 'my-6 py-2'
    return (
        <section className={classes}>
            {props?.children}
        </section>
    );
}

export default Section;