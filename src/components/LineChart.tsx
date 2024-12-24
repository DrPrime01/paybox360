import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80, tablet: 120 },
  { month: "February", desktop: 305, mobile: 200, tablet: 89 },
  { month: "March", desktop: 237, mobile: 120, tablet: 165 },
  { month: "April", desktop: 73, mobile: 190, tablet: 134 },
  { month: "May", desktop: 209, mobile: 130, tablet: 114 },
  { month: "June", desktop: 214, mobile: 140, tablet: 58 },
  { month: "July", desktop: 73, mobile: 190, tablet: 22 },
  { month: "August", desktop: 186, mobile: 80, tablet: 47 },
  { month: "September", desktop: 214, mobile: 140, tablet: 92 },
  { month: "October", desktop: 186, mobile: 80, tablet: 126 },
  { month: "November", desktop: 237, mobile: 120, tablet: 150 },
  { month: "December", desktop: 214, mobile: 140, tablet: 12 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  tablet: {
    label: "Tablet",
    color: "#5879FD",
  },
} satisfies ChartConfig;

export default function LineChartComponent() {
  return (
    <div className="flex flex-col py-10 px-8 gap-y-7 rounded-[20px] bg-white">
      <div className="flex items-center justify-between">
        <p className="text-[#242424] font-semibold">Transaction status</p>
        <div className="md:flex items-center gap-x-2 mb-0.5 hidden">
          <div className="size-2 bg-green rounded-full" />
          <p className="text-[10px] text-gray_2 font-medium">
            Successful
          </p> - <p className="font-semibold text-primary">8,400</p>
        </div>
        <div className="md:flex hidden items-center gap-x-2 mb-0.5">
          <div className="size-2 bg-red rounded-full" />
          <p className="text-[10px] text-gray_2 font-medium">Failed</p> -{" "}
          <p className="font-semibold text-primary">114</p>
        </div>
      </div>
      <ChartContainer config={chartConfig} className="h-[210px] w-full">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            dataKey="desktop"
            type="monotone"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="mobile"
            type="monotone"
            stroke="var(--color-mobile)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="tablet"
            type="monotone"
            stroke="#5879FD"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
