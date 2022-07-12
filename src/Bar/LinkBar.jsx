import LinkItem from "./BarItem/LinkItem";
const LinkBar = () => {
  return (
    <div className="w3-bar w3-black">
      <LinkItem label="HOME"     styles="w3-button w3-mobile w3-bar-item w3-hover-dark-gray w3-xlarge" path=""/>
      <LinkItem label="ABOUT"    styles="w3-button w3-mobile w3-bar-item w3-hover-dark-gray w3-xlarge" path="about" />
      <LinkItem label="PRODUCTS" styles="w3-button w3-mobile w3-bar-item w3-hover-dark-gray w3-xlarge" path="products" />
      <LinkItem label="ERROR"    styles="w3-button w3-mobile w3-bar-item w3-hover-dark-gray w3-xlarge w3-right" path="*"/>
    </div>)
}
export default LinkBar;