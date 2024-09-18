import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis} from 'recharts';
import '../style/BarChart.css';
const BarChartDemo = (props) => {
  const Array = [
    {month: 'Jan', revenue: 3000000},
    {month: 'Feb', revenue: 3450000},
    {month: 'Mar', revenue: 2300000},
    {month: 'Apr', revenue: 7630000},
    {month: 'May', revenue: 1360000},
    {month: 'June', revenue: 1350000},
    {month: 'July', revenue: 6420000},
    {month: 'Aug', revenue: 650000},
    {month: 'Sept', revenue: 1240000},
    {month: 'Oct', revenue: 6630000},
    {month: 'Nov', revenue: 2240000},
    {month: 'Dec', revenue: 6740000},
  ];
  return (
    <>
      <ResponsiveContainer width= "98%" aspect={1.5}>
          <BarChart data={Array} width={400} height={300}>
          <XAxis dataKey="month"/>
          <YAxis/>
            <Bar dataKey="revenue" fill='#C89B90'/>
          </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default BarChartDemo;