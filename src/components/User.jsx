import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const User= () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch("https://dummyjson.com/users").then((response)=>{
      response.json().then((data)=>{
        setUsers(data?.users);
      })
    }).catch((error)=>{
      console.log(error);
    })
  }
  useEffect(() => {
    getUsers();
  }, []);

  
  return (
    <>
    <div className="text-center text-2xl">Users Details</div>
  
    {users?(
      <div className="grid grid-cols-2 ">
      {users.map((user)=>
        (
          <Link to={`/users/${user.id}`} key={user.id}>
          
          <div className="bg-white m-4 rounded p-4" >
            <img src={user.image} alt={user.username} />
            <p className="text-gray-700">Name: {user.firstName} {user.lastName}</p>
            <p className="text-blue-600">Email: {user.email}</p>
          </div>
          </Link>
        )
      
      )}
      </div>
    ):<div className="text-red-700 text-5xl">Not Found</div>

    } ;
    

    </>
  );
};

export default User;
