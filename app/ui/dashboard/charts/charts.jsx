"use client"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Charts = () => {
    const data = [
        {
          name: "Sun",
          visit: 4000,
          click: 2400,
        },
        {
          name: "Mon",
          visit: 3000,
          click: 1398,
        },
        {
          name: "Tue",
          visit: 2000,
          click: 3800,
        },
        {
          name: "Wed",
          visit: 2780,
          click: 3908,
        },
        {
          name: "Thu",
          visit: 1890,
          click: 4800,
        },
        {
          name: "Fri",
          visit: 2390,
          click: 3800,
        },
        {
          name: "Sat",
          visit: 3490,
          click: 4300,
        },
      ];
      
   
    return(
        <div className="flex flex-col gap-4 px-5 py-4 bg-[#182237] rounded-lg h-[450px]">
            <h2 className="text-[#b7bac1] text-xl">Weekly Recap</h2>
            
            <ResponsiveContainer width="100%" height="100%">
               <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip contentStyle={{background:"#151c2c",border:"none"}}/>
                <Legend />
                <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                </LineChart>
             </ResponsiveContainer>
           
        </div>
    )
}
export default Charts;