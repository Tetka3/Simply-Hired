import "./job.scss";

const Job = ({ job }) => { 
 

    return (
      <div className="job">
        <h4 style={{color: "darkblue"}} >{job.title}</h4> 
        <p>{job.description}</p>       
         
         
      </div>
    )
  }
  
  export default Job