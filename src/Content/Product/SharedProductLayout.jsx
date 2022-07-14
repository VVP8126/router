import { Outlet } from 'react-router-dom'
const ProdLayout =() => { return (
    <div>
        <h2 className="w3-padding w3-center">Products</h2>
        <Outlet />
    </div>)
}
export default ProdLayout;
