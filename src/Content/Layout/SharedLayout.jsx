import { Outlet } from "react-router-dom";
import LinkBar from "../../Bar/LinkBar";

const Layout = () => {
  return ( <div><LinkBar /><Outlet /></div> )
}
export default Layout;