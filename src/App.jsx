import Home from "./pages/home/Home";
import Post from "./components/post/Post";
import Job from "./components/job/Job";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/job" element={<Job />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
