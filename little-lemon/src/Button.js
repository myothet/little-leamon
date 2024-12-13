function Button(props){

    return(<button type="submit" aria-label="On Click" style={{width:"150", height:"30px" ,backgroundColor:"gold", borderRadius:"8px", boxShadow:"1px 1px 2px 1px rgb(0,0,0,0.3)",paddingLeft:"10px",paddingRight:"10px"}} disabled={props.isdisable} onClick={props.clicked}>{props.children}</button>);


}
export default Button;