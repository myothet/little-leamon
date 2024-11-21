export default function Card(props){


return(<div className="card">
<img  src={props.path} className="cardImg"></img>
<p >{props.text}</p>


</div>)


}