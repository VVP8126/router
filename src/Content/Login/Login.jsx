import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle, faUser, faUserGroup} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) => {
    const [name,setName] = useState();
    const [surname,setSurname] = useState();
    const navigate = useNavigate();

    const handleClick = async(e) => {
        e.preventDefault();
        console.log(`Logged in user: ${name} ${surname}`)
        if(!name || !surname) { return }
        setUser({name:name, surname:surname});
        navigate('/dashboard');
    }

    return (
      <div className="w3-container w3-margin w3-card-4 w3-padding">
        <form onSubmit={handleClick}>
		  <header className="w3-grey w3-padding">
			<h2 className="w3-center">Enter your name, please</h2>
		  </header>
		  <div className="w3-container w3-border-left w3-border-right">
			<h1 className="w3-center">
                <FontAwesomeIcon icon={faUserCircle} className="fa-4x" />
			</h1>
			<h3 className="w3-padding-bottom w3-center">LOGIN</h3>
			<label>
                <FontAwesomeIcon icon={faUser} /> First name
			</label>
			<input className="w3-input w3-round w3-border" id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Enter name" type="text" />
			<br />
			<label className="w3-margin-top">
                <FontAwesomeIcon icon={faUserGroup} /> Surname
			</label>
			<input className="w3-input w3-round w3-border" id="surname" value={surname} onChange={e => setSurname(e.target.value)} type="text" placeholder="Enter surname" />
			<br /> 
			<center>
			   <input className="w3-input w3-black w3-margin w3-btn w3-hover-grey w3-width-25" type="submit" value="ENTER" />
			</center>
		  </div>
		  <footer className="w3-padding w3-grey">
			<p>Fill in all fields</p>
		  </footer>
        </form>
	  </div>
    )
}
export default Login;