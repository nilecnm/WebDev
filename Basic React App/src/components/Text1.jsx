const Text1 = (props) =>{
    const {title,status} = props
    return (
        <li>{title} <span>{status}</span></li>
    );
}

export default Text1