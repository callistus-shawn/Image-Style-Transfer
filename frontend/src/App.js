import './App.css';
import { useState } from 'react';
import Drop from "./Dropdown"
import Loading from './Load';
import Upload from './Upload';


function App() 
{
    const[File,SetFile]=useState(null);
    const[URL,setURL]=useState("")
    const[Ch,setCh]=useState()
    const[Org,setOrg]=useState("")
    const[But,setBut]=useState(false)
    const[Load,setLoad]=useState(false)
    const[View,setView]=useState(false)

    const setAction=(action)=>{
      setCh(action)
      setBut(true)
    }

    const pass=async ()=>{
      setLoad(true)
      const formData = new FormData();
      formData.append('file', File);
      formData.append('style', Ch); 

      const response= await fetch('http://localhost:8000/data',{
        method:'POST',
        body:formData
      })
    

      const blob=await response.blob()
      const url=window.URL.createObjectURL(blob)
      setURL(url)
      setLoad(false)
     }


return (
    <>
    <h1 className='h' >Image <span>Style</span> Transfer</h1>   
    <Upload passFile={SetFile} passOrg={setOrg} passView={setView}/>

    <div className='d'>
        <Drop passAction={setAction}/>
    </div>

    { But && View &&
        (<button  type="button" className='but' onClick={pass}>Magic!</button>)
    }

     <div className='image'>
        <img src={Org} width="530" height="400" alt="original"></img>
     </div>


    { Load &&
        (<Loading/>)
    }

    <div className='image2'>
        <img src={URL} width="530" height="400" alt="styled"></img>
    </div>
    </>

  );
}

export default App;
