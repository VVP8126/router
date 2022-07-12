import { useParams } from "react-router-dom";
import dt from "./../../Data/data.js"

const Product = () => {
  const { id } = useParams();
  const prod = dt.find((d) => (d.id == id));
  const { name, description, imgSrc } = prod;
  return (
    <div className="w3-padding">
      <h2 className="w3-center">Product №{id}</h2>
      <h3 className="">{name}</h3>
      <img src={imgSrc} className="w3-image" />
      <h4>{description}</h4>
    </div>)
}
export default Product;
