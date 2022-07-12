import BarItem from './BarItem/BarItem'

const Bar = () => {
    return (
      <nav className="w3-bar w3-black">
        <BarItem path="home"  label="HOME"  styles="w3-button w3-mobile w3-bar-item w3-hover-dark-gray w3-xlarge" />
        <BarItem path="about" label="ABOUT" styles="w3-button w3-mobile w3-bar-item w3-hover-dark-gray w3-xlarge" />
        <BarItem path="*"     label="ERROR" styles="w3-button w3-mobile w3-bar-item w3-hover-dark-gray w3-xlarge w3-right"/>
      </nav>
    )
}
export default Bar;
