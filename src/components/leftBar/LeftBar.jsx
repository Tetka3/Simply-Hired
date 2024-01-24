import "./leftBar.scss";
import logo from "../../assets/logo.png";
import close from "../../assets/close.png";
import { Link } from "react-router-dom";


const LeftBar = ({ closeLeftBar }) => {

    

  return (
    <div className="leftBar">
        <div className="top">
            <img src={close} alt="close" onClick={() => closeLeftBar(false)}/>
        </div>
        <div className="second">
            <h3>Sign In / Create Account</h3>
        </div>
        <div className="third">
            <ul>
                <Link to="/job" style={{textDecoration: 'none'}}><li>Post Jobs</li></Link>
                <Link to="/" style={{textDecoration: 'none'}}><li>Browse</li></Link>
                <Link to="/" style={{textDecoration: 'none'}}><li>Company Pages</li></Link>
                <Link to="/" style={{textDecoration: 'none'}}><li>Job Tools</li></Link>
                <Link to="/" style={{textDecoration: 'none'}}><li>Contact Us</li></Link>
            </ul>
        </div>
        <div className="fourth">
            <img src={logo} alt="co" />
            <select>
                <option>United States</option>
                <option>Canada</option>
                <option>UK</option>
                <option>France</option>
                <option>India</option>
                <option>Australia</option>
                <option>Germany</option>
                <option>Mexico</option>
                <option>Switzerland</option>
                <option>Spain</option>
                <option>Italy</option>
            </select>            
        </div>
        <div className="last">
            <p>2024 SH Inc</p>
        </div> 
    </div>
  )
}

export default LeftBar