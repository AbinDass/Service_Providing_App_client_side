import React, { useEffect, useState } from 'react'
import LineChart from './LineChart'
import { getProfitData, getuserdata } from '../../API/dashboardcontrols'
import PieCharts from './PieChart'
import ConnectNullChart from './ConnectNullChart'

const AdminDash = () => {
  const [userdata, setUserdata] = useState(null)
  const [profitdata, setprofitdata] = useState(null)
  
  const userChart = async () =>{
   const users = await getuserdata()
   console.log(users.data,'io')
   setUserdata(users.data)
  }

  const profitChart = async () =>{
    const profit = await getProfitData()
    console.log(profit.data)
    setprofitdata(profit.data)
  }
useEffect(() =>{
  userChart()
  profitChart()
},[])
  return (
    <div>
        <div>
          <h1 className='text-xl font-medium capitalize'>users grow chart</h1>
          <LineChart userdata={userdata}/>
        </div>

        <div>
          <h1 className='text-xl font-medium capitalize pt-10'>profit pie-chart</h1>
          <div className='flex'>
          <PieCharts profitdata={profitdata} />
          <ConnectNullChart profitdata={profitdata}/>
          </div>
        </div>
    </div>
  )
}

export default AdminDash
