import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
      <div className="w3-col s12 m3 l3 w3-margin">
        <div className="w3-card-4">
		  <header className="w3-container w3-light-grey">
			<h4 className="w3-center">{props.name}</h4>
		  </header>
		  <div className="w3-container">
			<p className="w3-border-bottom">Full product name</p>
			<center><img src={props.imgsrc} className="w3-circle w3-border w3-padding" alt="IMG" width="30px" height="45px" /></center>
			<div className="w3-container">
			  <p>Some information</p>
			  <p>More information</p>
			  <p>Much more information</p>
			</div>
		  </div>
		  <footer className="w3-container w3-grey w3-center">
			<NavLink to={`/products/${props.path}`} className="w3-hover-black w3-pointer w3-btn" >SEE</NavLink>
		  </footer>
		</div>
      </div>
    )
}
export default Card;