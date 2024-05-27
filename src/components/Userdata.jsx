import axios from "axios"
import { useEffect , useState} from "react";
const Userdata = () => {
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState(false)
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
  const handleDelete = async (id) => {
    try{
    const res = await axios.delete(`http://localhost:3000/users/${id}`);
    setFlag(!flag);
    console.log(res);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getUsersDetails();
  },[flag])
  
  return (

    <>
    <div className="text-center"> User-Data</div>
    {users.length?
      users.map((user)=>(
      <>
      <div key={user.id} className="bg-white m-5 w-fit text-gray-700 p-5 rounded-3xl flex flex-col">
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>age: {user.age}</p>
      <p>Email {user.email}</p>
      <button onClick={()=>{handleDelete(user.id)}} className="p-2 bg-rose-600 m-3 text-white cursor-pointer w-20 rounded-full">
        Delete
      </button>
      </div>
      
      
      </>

      )

      
      
      )

    : <div> Data Not Found</div>}


    </>
  )
}

export default Userdata