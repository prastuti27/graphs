import { ChartData, ChartOptions } from "chart.js";

export interface BarChartProps {
  data: ChartData<"bar">;
  options: ChartOptions<"bar">;
  title: string;
}

export type TitleType = {
  title: string;
};

export interface PieChartProps {
  data: ChartData<"pie">;
  options: ChartOptions<"pie">;
  title: string;
}
