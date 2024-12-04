export default function Card(props){


return(<div className="card">
<img  src={props.path} className="cardImg" loading="lazy"></img>
<div className="card-subtitle"><p>{props.subtitle}</p>
<p>{props.price}</p>

</div>
<p >{props.text}</p>

<div className="card-last">
<p>Order a delivery</p>
<img src={props.secondpath}/>
</div>
</div>)


}