import React,{useState, useEffect} from 'react';
import './Userdata.css';

const Userdata = () =>{

const[usersData,setUsersData]=useState([]);
const [loading, setLoading]=useState(false);

  const fetchData=()=>{
   setLoading(true);
    fetch("https://reqres.in/api/users?page=1")
    .then(response=>response.json())
    .then(data=> {
      setUsersData(data.data);
      setLoading(false);
    })
    .catch(error=>console.log(error))
  }

  console.log(usersData);
  
  return(
    <>
    <div className="navbar">
<h2>LetsGrowMore</h2>
<button onClick={fetchData}>Get Users</button>           
</div>
  {loading && <p>Loading...</p>}
   {usersData.map((user)=>{
      return (
     <div className="cardcover">
      <div class="card">
  <img src={user.avatar}></img>
  <div class="container">
    <h4><b>{user.first_name} {user.last_name}</b></h4> 
    <p><b>Email : </b>{user.email}</p> 
  </div>
</div>
     </div>
        )
      })}
  </>
    
  )
}

export default Userdata;
