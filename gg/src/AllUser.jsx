import axios from 'axios'
import React, { useDebugValue, useEffect, useState } from 'react'

const User = ({name,aadharId})=>{
    return (
        <tr>
            <td>{name}</td>
            <td>{aadharId}</td>
        </tr>
    )
}

const AllUser = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/allusers").then(x=>setData(x.data.message));
    })
    // console.log(data);
  return (
    <table>
        <tr><th>UserName</th><th>Aadhar Id</th></tr>
       {data && data.map(elem=><User key={elem.aadharId} name={elem.name} aadharId={elem.aadharId}/>)}
    </table>
  )
}


export default AllUser