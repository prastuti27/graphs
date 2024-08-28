import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { PieChartProps } from "../../types/types";
import ChartTitle from "./ChartTitle";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, options, title }: PieChartProps) => {
  return (
    <div className="py-4 h-[460px] border rounded-lg shadow-sm md:flex-1">
      <ChartTitle title={title} />
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
