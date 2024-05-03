"use client"
import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { RectangleProps } from 'recharts';

const Chart = () => {
         const data = [
  {
    name: 'Jan',
    price: 4000,
  },
  {
    name: 'Feb',
    price: 3000,
  },
  {
    name: 'Mar',
    price: 2000,
  },
  {
    name: 'Apr',
    price: 2780,
  },
  {
    name: 'May',
    price: 1890,
  },
  {
    name: 'Jun',
    price: 2390,
  },
  {
    name: 'Jul',
    price: 3490,
         },
    {
    name: 'Aug',
    price: 1050,
         },
      {
    name: 'Sep',
    price: 4860,
         },
        {
    name: 'Oct',
    price: 5730,
         },
          {
    name: 'Nov',
    price: 2400,
         },
            {
    name: 'Dec',
    price: 3200,
  },
    ];

    const renderCustomBarShape = (props: RectangleProps) => {
    const {
      x, y, width, height, fill,
    } = props;
    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={5}
        ry={5} 
      />
    );
    };
    
  return (
              <BarChart
                  className='p-10 border-2 border-solid border-gray-800 rounded-xl'
              width={900}
              height={400}
                  data={data}
              margin={{
                top: 5,
                right: 5,
                left: 5,
                bottom: 5
              }}
                      >
               <XAxis dataKey="name"  axisLine={false} tickLine={false} />
              <YAxis tickFormatter={(tick) => `$${tick}` }  axisLine={false} tickLine={false} />
              <Tooltip />
          <Bar dataKey="price" fill="#62fc03" shape={renderCustomBarShape as any} />
                      </BarChart>
  )
}

export default Chart