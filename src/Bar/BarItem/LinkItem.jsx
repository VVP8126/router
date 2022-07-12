import { NavLink } from "react-router-dom";

const LinkItem = (params) => {
  return (
    <NavLink to={`/${params.path}`} className={params.styles} >{params.label}</NavLink>)
}
export default LinkItem;
