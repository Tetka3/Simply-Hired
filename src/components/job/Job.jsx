import "./job.scss";

const Job = ({ job }) => {  

    return (
      <div className="job">
        <div className="title">
          <h4 style={{color: "darkblue"}} >{job.title}</h4>
        </div>        
        <div className="description">
          <span>{job.company}</span>
          <p>{job.description}</p>
        </div>         
        <div className="estimate">
          <div className="pay">
          <p>{job.pay}</p>
          </div> 
          <div className="apply">
            <li>Quick Apply</li>
          </div> 
          <div className="time">
            <p>2d</p>
          </div>           
        </div>   
      </div>
    )
  }
  
  export default Job