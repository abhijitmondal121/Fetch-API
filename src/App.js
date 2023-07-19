import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

const  App=()=> {
  const [lyricsitem,setlyricsitem]=useState(null);
  const[loading,setloading]=useState(false);

const lyricsFunction=async()=>{
  try{
    const data=await axios
    .get('https://lyrics.ovh/v1/Eminem/Godzilla')
    .then(res=>{
      console.log(res)
      setlyricsitem(res.data.lyrics);
    })

  }catch(e){
    console.log();
  }
};

useEffect(()=>{
  lyricsFunction()
},[]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
