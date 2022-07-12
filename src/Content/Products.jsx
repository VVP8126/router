import { Outlet } from "react-router-dom";
import Card from "./Product/Card";

const Products = () => {
  return (
    <div>
        <h2 className="w3-padding">Product List</h2>
        <p className="w3-padding">Select product</p>
        <div className="w3-row-padding">
          <Card name="Name1" path="1" />
          <Card name="Name2" path="2" />
          <Card name="Name3" path="3" />
        </div>
        <Outlet />
    </div>)
}
export default Products;