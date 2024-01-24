import "./post.scss";
import { useState } from "react";

const Post = () => {   
  
  const [job, setJob] = useState();
  const [company, setCompany] = useState();
  const [jobDescription, setJobDescription] = useState();
  const [payRange, setPayRange] = useState();
  const [date, setDate] = useState();
      
    return (
      <form className="post">
        <label>Job Title</label>
        <input type="text" placeholder="Add a job here" />
        <label>Company</label>
        <input type="text" placeholder="Your company" />
        <label>Job description</label>
        <textarea />
        <label>Pay range</label>
        <input type="text" placeholder="Annual pay" />        
        <label>Date & Time</label>
        <input type="text" placeholder="Time posted" /> 
      </form>
    )
  }
  
  export default Post