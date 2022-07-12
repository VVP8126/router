import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  return (
    <div className="w3-padding">
      <h2 className="">Product №{id}</h2>
    </div>)
}
export default Product;
