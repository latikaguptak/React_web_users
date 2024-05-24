import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const Userdetails=()=>{
    const [loading,setLoading]=useState(false);

    const [userinfo,setUserinfo]=useState([])
const params=useParams();
const getUser=()=>{
    setLoading(true);
    fetch(`https://dummyjson.com/users/${params.id}`).then((res)=>{
        return res.json().then((data)=>{
            setUserinfo(data);
            setLoading(false);
            
        })
    })
    .catch((error)=>{

        console.log(error);
        setLoading(false);
    })
    
}
useEffect(()=>{
    getUser();
    // console.log(params.id);
},[params.id]);



    return(
        <>
        {loading? <Loader/>:
            <div className="bg-white m-5 w-fit text-gray-700 p-5 rounded-3xl">
            <h1> user.id:{userinfo?.id} </h1>
            <img src={userinfo?.image} alt={userinfo?.username} />
            <p>User Name: {userinfo?.firstName} {userinfo?.lastName}</p>
            <p> Company Name: {userinfo?.company?.name}</p>
        </div>}
        </>
    )
}
export default Userdetails;
