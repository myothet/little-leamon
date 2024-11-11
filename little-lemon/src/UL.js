function UL(props){


    return(
        <ul>
            {props.items.map((item, index) => (
                <li key={index}><a>{item}</a></li>
            ))}
        </ul>);
}
export default UL;