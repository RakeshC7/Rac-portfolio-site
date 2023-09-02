const ViewContainer = (props) => {
    const Classes = props.className ? props.className + ' ' + 'view-container' : 'view-container';
    return (
        <div className={Classes}>
            {props?.children}
        </div>
    )
}
export default ViewContainer