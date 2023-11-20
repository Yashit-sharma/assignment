import React from 'react'
import '../Styles/Body.css'
import { useEffect,useState } from 'react'
import axios from 'axios';
export default function Body() {
    const [Data, setData] = useState([])  
    const [Loading, setLoading] = useState(false)  
    useEffect(() => {
      const fetchData = async() =>{
        try{
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
        setData(response.data.results)
        setLoading(true);
        }
        catch(err){
            console.log(err);
        }
    };
      fetchData();
    }, [])
    console.log(Data);
  return (
   <>
   {Loading ? 
    <div className="container--main">
    <div className="main--box">
      {Data.map((ele,index) => {
        return(
            <>
            <div key={index} className="img--box">
            <img className='image' src="https://randomuser.me/api/portraits/med/women/88.jpg" alt="" />
            </div>
            <div className="info--content">
            <div className='name'><span>{ele.name.first}</span><span>{ele.name.last}</span></div>
            <div>{ele.gender}</div>
            <div>{ele.phone}</div>
            </div>
            </>
        )
      })} 
    </div>
   </div>
    :
    <h3 className="container--main">Fetching Data Please Wait</h3>
    }
   </>
  )
}


/* <>
<div className="img--box">
<img className='image' src="https://randomuser.me/api/portraits/med/women/88.jpg" alt="" />
</div>
<div className="info--content">
<div className='name'><span>First Name</span><span>Last Name</span></div>
<div>Gender</div>
<div>Phone Number</div>
</div>
</> */