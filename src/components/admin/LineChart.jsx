import React from "react";
import {
    ComposedChart,
    Line,
    // Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";


const LineChart = ({userdata}) => {
  console.log(userdata+"jihojhoj")
    return (
    <div>
        
        <ComposedChart
          width={500}
          height={400}
          data={userdata}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="count" stroke="#ff7300" />
        </ComposedChart>
      
    </div>
    )
};

export default LineChart;
