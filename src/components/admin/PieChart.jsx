import React from 'react'
import { PieChart, Pie, } from 'recharts';



const PieCharts = ({profitdata}) => {
  return (
    <div>
      <PieChart width={400} height={400}>
          <Pie
            dataKey="profit_count"
            startAngle={180}
            endAngle={0}
            data={profitdata}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
    </div>
  )
}

export default PieCharts
