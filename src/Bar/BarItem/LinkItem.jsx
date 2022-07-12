import { NavLink } from "react-router-dom";

/* Element <NavLink /> adds class .active to clicked elems.
   Check at tab 'Elements' in browser settings
   It let add styles (see .w3-button.active in App.css)
   Alternative:
   style={ (isActive) => { return { color: isActive ? 'grey' : 'white'  }}}
*/

const LinkItem = (params) => {
  return (
    <NavLink  to={`/${params.path}`} className={params.styles} >{params.label}</NavLink>)
}
export default LinkItem;
