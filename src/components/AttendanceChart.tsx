"use client";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

const data = [
  {
    name: "Sun",
    present: 40,
    absent: 24,
  },
  {
    name: "Mon",
    present: 30,
    absent: 13,
  },
  {
    name: "Tue",
    present: 20,
    absent: 10,
  },
  {
    name: "Wed",
    present: 27,
    absent: 17,
  },
  {
    name: "Thu",
    present: 18,
    absent: 11,
  },
  {
    name: "Fri",
    present: 23,
    absent: 14,
  },
];
const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="">
        <h1>AttendanceChart</h1>
        <Image src="/moreDark.png" alt="" width={12} height={12} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar dataKey="present" fill="#FAE27C" legendType="circle" />
          <Bar dataKey="absent" fill="#C3EBFA" legendType="circle" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
