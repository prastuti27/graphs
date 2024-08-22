import { ChartData, ChartOptions } from "chart.js";
export interface DonutChartProps {
  data?: ChartData<"doughnut">;
  options?: ChartOptions<"doughnut">;
}

export interface BarChartProps {
  title?: string;
  data: ChartData<"bar">;
  options: ChartOptions<"bar">;
}

export type TitleType = {
  title: string;
};
