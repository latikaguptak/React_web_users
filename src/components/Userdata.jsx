import axios from "axios"
import { useEffect , useState} from "react";
const Userdata = () => {
  const [users, setUsers] = useState([]);
  const getUsersDetails = async () => {
    try{
    const res = await axios.get("http://localhost:3000/users");
    console.log(res);
    setUsers(res.data);
    } 
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getUsersDetails();
  },[])
  return (

    <>
    <div className="text-center"> User-Data</div>
    {users?
      users.map((user)=>(
      <>
      <div className="bg-white m-5 w-fit text-gray-700 p-5 rounded-3xl flex flex-col">
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>age: {user.age}</p>
      <p>Email {user.email}</p>
      </div>
      
      
      </>

      )

      
      
      )

    : <div> Data Not Found</div>}


    </>
  )
}

export default Userdata