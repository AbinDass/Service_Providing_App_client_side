import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
]

const PieCharts = ({profitdata}) => {
    console.log(profitdata,'ffff')
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
