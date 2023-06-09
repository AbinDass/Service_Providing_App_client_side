import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';


const ConnectNullChart = ({profitdata}) => {
  return (
    <div>

          <LineChart
            width={500}
            height={200}
            data={profitdata}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="profit_count" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
       
      
    </div>
  )
}

export default ConnectNullChart
