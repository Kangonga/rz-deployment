import {Routes, Route} from "react-router-dom"
import Employers from "./components/employerComponents/Employers";
import LandingPage from "./components/landingPage";
import AddJob from "./components//employerComponents/AddJob"
import EmployerProfile from "./components/employerComponents/EmployerProfile";
import EmployerJobs from "./components//employerComponents/EmployerJobs";
import Cards from "./components/Cards";
import './employers.css'
import './cards.css'
import UserList from "./components/employerComponents/UserList";
import { useContext, useState } from "react";
import { createContext } from "react";
import Login from "./components/Login";
import UserProfile from "./components/userComponents/UserProfile";
import SignUpForm from "./components/userComponents/SignUpForm";
import Jobs from "./components/jobs";
import Applicants from "./components/employerComponents/Applicants";
import UserJobs from "./components/userComponents/UserJobs";
import AppliedJobs from "./components/userComponents/AppliedJobs";
import MainPage from "./components/adminComponents/MainPage";
import AdminLogin from "./components/adminComponents/AdminLogin";
import AdminSignUpForm from "./components/adminComponents/AdminSignUp";
import EmployerSignUpForm from "./components/employerComponents/EmployerSignUp";
import EmployerMatchedJobs from "./components/employerComponents/EmployerMatched";

export const UserContext = createContext()


function App() {
  // const [user,setUser] = useState({name:"first"})
  const [user,setUser] = useState({})
  return (
  <>

  <UserContext.Provider value={{user,setUser}}>
    <Routes>
    <Route path="/admin/*" element={<MainPage />} />
     <Route path="/" element={<LandingPage />} />
     <Route path="/employers/*" element={<Employers />} />
     <Route path="/jobform" element={<AddJob />} />
     <Route path="/profile" element={<EmployerProfile />} />
     <Route path="/employerJobs" element={<EmployerJobs />} />
     <Route path="/cards" element={<Cards />} />
     <Route path="/userlist" element={<UserList />} />
     <Route path="/login" element={<Login />} />
     <Route path="/userprofile" element={< UserProfile/>} />
     <Route path="/signup" element={<SignUpForm />} />
     <Route path="/employersignup" element={<EmployerSignUpForm />} />
     <Route path="test" element={<FlavorForm />} />
     <Route path="/jobs" element={<Jobs />} />
     <Route path="/applicants/*" element={<Applicants />} />
     <Route path="/applicants/:job_id" element={<Applicants />} />
     <Route path="/userjobs" element= {<UserJobs />} />
     <Route path="/userAppliedJobs" element={<AppliedJobs/>} />
     <Route path="/adminLogin" element={<AdminLogin/>} />
     <Route path="/adminSignUp" element={<AdminSignUpForm/>} />
     <Route path="/matchedjobs" element={<EmployerMatchedJobs />} />
    </Routes>
  </UserContext.Provider>
    
    </>
   
  );
}
export default App;


















function FlavorForm() {
  const [value, setValue] = useState(["initial"]);
  const {user} = useContext(UserContext)
  function handleChange(event) {
    let selected = [...event.target.selectedOptions].map(option =>option.value);
    console.log("before")
    setValue(()=>selected);
    console.log(value)
    console.log("after");
    // console.log(event.target.selectedOptions[0].value);
  }
  function handleSubmit(event) {
    alert('Your favorite flavor is: ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      
      {/* <label>
        Pick your favorite flavor:
        <select multiple={true} value={value} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
      {value} */}
     <h1>{user.username}</h1>
     {console.log(user)}
    </form>
  );
    }