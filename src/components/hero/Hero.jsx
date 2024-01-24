import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="top">
        <div className="topLeft">
          <div className="btins">
            <button className="left">Relevance</button>
            <button className="right">Date</button>
          </div>
          <div className="select1">
            <select>
              <option>Distance</option>
              <option>5 Miles</option>
              <option>10 Miles</option>
              <option>15 Miles</option>
              <option>20 Miles</option>
              <option>25 Miles</option>
              <option>50 Miles</option>
              <option>100 Miles</option>
            </select>
          </div>
          <div className="select2">
            <select>
              <option>Job Type</option>
              <option>All Job Types</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Temporary</option>
              <option>Internship</option>          
            </select>
          </div>
          <div className="select3">
            <select>
              <option>Minimum Salary</option>
              <option>All Salaries</option>
              <option>$100,000</option>
              <option>$120,000</option>
              <option>$130,000</option>
              <option>$145,000</option>
              <option>$160,000</option>
              <option>$200,000 and above</option>
            </select>
          </div>
        </div>
        <div className="topRight">
          <p>1045 junior python developer jobs</p>
        </div>
      </div>
      <div className="bottom">
        <select>
            <option>Date Added</option>
            <option>Anytime</option>
            <option>24 hours</option>
            <option>7 Days</option>
            <option>14 Days</option>
            <option>30 Days</option>            
        </select>
      </div>
    </div>
  )
}

export default Hero