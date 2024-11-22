import {Link} from "react-router-dom";
function UL(props){


    return(
        <ul>
            {props.items.map((item, index) => (
                <li key={index}><Link to={item.toLowerCase()}>{item}</Link></li>
            ))}
        </ul>);
}
export default UL;