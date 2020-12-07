import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '../components/Table'



const Provinsi =()=> {
  const [prov, setProv] = useState([])

  useEffect(() => {
    axios.get("https://indonesia-covid-19.mathdro.id/api/provinsi")
    .then((res) => {
      setProv(res.data.data)
    })
    .catch((err) => console.log(err))
  })

  return (
  
    
    <div className='container'>
      
      <h1>Province in Indonesia</h1>
      <h3>The number of cases in each province</h3>
      <div className='container'>
        <Table prov={prov} />
      </div>
    </div>
  );
}

export default Provinsi;