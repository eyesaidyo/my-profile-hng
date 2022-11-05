import i4g from "./i4g.svg";
import zuri from "./zuri.svg";
const Footer = () => {
  return (
    <footer>
      <img className="ft" src={zuri} alt="zuri" />
      <span id="ft-text">HNG Internship 9 Frontend Task</span>
      <img className="ft" src={i4g} alt="i4g" />
    </footer>
  )
}
export default Footer;