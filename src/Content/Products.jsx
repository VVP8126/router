import { Outlet } from "react-router-dom";
import Card from "./Product/Card";
import dt from "./../Data/data.js"

const Products = () => {
  return (
    <div>
        <p className="w3-padding">Select product</p>
        <div className="w3-row-padding">
          { dt.map(d => <Card key={d.id} name={d.name} path={d.id} imgsrc={d.imgSrc} /> ) }
        </div>
        <Outlet />
    </div>)
}
export default Products;
