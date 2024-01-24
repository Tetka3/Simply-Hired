import "./jobs.scss";
import Job from "../../components/job/Job";


const Jobs = ({ jobs }) => {  

  return (
    
    <div className="jobs">          
        {jobs.map((job) => (<Job key={job.id} job={job} />)  ) }              
    </div>
    
  )
}

export default Jobs