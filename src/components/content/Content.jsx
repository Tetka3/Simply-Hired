import Left from "../left/Left";
import Jobs from "../jobs/Jobs";
import "./content.scss";
import { useState } from "react";



const Content = () => {

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Jr. Python Developer",
      company: "infotech kochi —Remote",
      description: "Python internship program conduct by infotech, Online internship programme (WFH). 100% job assistance internship program, Inmakes infotech is a software firm located in kochi, vytila, we are hiring python interns for our tie ups companies, for May month, before that we are conducting on job training session to interns who are interested to join, providing international valid certification and work experience (3month)",
      pay: "$50,346.28 - $111,481.87",
    },
    {
      id: 2,
      title: "Jr. Python Developer",
      company: "infotech kochi —Remote",
      description: "Python internship program conduct by infotech, Online internship programme (WFH). 100% job assistance internship program, Inmakes infotech is a software firm located in kochi, vytila, we are hiring python interns for our tie ups companies, for May month, before that we are conducting on job training session to interns who are interested to join, providing international valid certification and work experience (3month)",
      pay: "$50,346.28 - $111,481.87",
    },
    {
      id: 3,
      title: "Jr. Python Developer",
      company: "infotech kochi —Remote",
      description: "Python internship program conduct by infotech, Online internship programme (WFH). 100% job assistance internship program, Inmakes infotech is a software firm located in kochi, vytila, we are hiring python interns for our tie ups companies, for May month, before that we are conducting on job training session to interns who are interested to join, providing international valid certification and work experience (3month)",
      pay: "$50,346.28 - $111,481.87",
    },
    {
      id: 4,
      title: "Jr. Software Developer",
      company: "Illumination Works LLC",
      description: "Do you like seeing your technical craftsmanship come to fruition? Understanding how to work around potential roadblocks and solving those problems is critical to writing code. If finally seeing the finished product of a really cool app is exhilarating to you, we want you to know that you aren’t alone! We’ve all been there: aggressive deadlines and squishy requirements, what’s been rewarding is our ability to put the right group of smart people together to overcome these challenges and get it done. We aren’t just looking for software developers to join our team. We want people that can work collaboratively within a team and help our customers solve THEIR challenges. We want clever people that are always learning, curious about the most efficient and effective way to do things while letting their passion show through in their work.",
      pay: "$50,346.28 - $111,481.87",
    },
    {
      id: 5,
      title: "Junior Java Developer",
      company: "infotech kochi —Remote",
      description: "Python internship program conduct by infotech, Online internship programme (WFH). 100% job assistance internship program, Inmakes infotech is a software firm located in kochi, vytila, we are hiring python interns for our tie ups companies, for May month, before that we are conducting on job training session to interns who are interested to join, providing international valid certification and work experience (3month)",
      pay: "$50,346.28 - $111,481.87",
    },
  ])   
    
  return (
    <div className="content">
      <Jobs jobs={jobs} />
      <Left />
    </div>
  )
}

export default Content