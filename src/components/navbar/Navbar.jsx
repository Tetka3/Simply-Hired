import "./navbar.scss";
import logo from "../../assets/logo.png";
import open from "../../assets/open.png";



const Navbar = ({ openLeftBar }) => {
  
  
 
  return (
        
      <div className="navbar">
          <div className="logo">           
              <img src={logo} alt="logo" className="images"/>            
          </div>
          <div className="search1">
            <input type="text" placeholder="Job Title, Skills or Company" />
          </div>
          <div className="search2">
          <input type="text" placeholder='City, State, ZIP or "Remote"'  />
          </div>
          <div className="btn">
            <button>Search Jobs</button>
            <img src={open} alt="open" className="imagess" onClick={() => openLeftBar(true)} />            
          </div> 
                  
      </div>      
      
  )
}

export default Navbar