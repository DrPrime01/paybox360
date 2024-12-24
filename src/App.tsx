import ChartCard from "./components/ChartCard";
import LineChartComponent from "./components/LineChart";
import StatCard, { StatCard2 } from "./components/StatCard";
import TrnxDetailsCard from "./components/TrnxDetailsCard";
import WalletBalCard from "./components/WalletBalCard";
import DashboardLayout from "./layouts/DashboardLayout";
import { toCurrency } from "./utils/helpers";

export default function App() {
  return (
    <DashboardLayout>
      <div className="md:bg-white bg-primary md:rounded-[30px] pt-11 pb-6 flex items-center justify-between px-5 md:px-12 mb-8">
        <h1 className="text-2xl font-semibold text-white md:text-dark">
          Analytics Dashboard
        </h1>
      </div>
      <div className="flex flex-col px-5 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
          <WalletBalCard />
          <StatCard name="Total savings balance" value={toCurrency(194000)} />
          <StatCard name="Total customers" value={919} />
          <StatCard name="Total POS" value={0} />
          <TrnxDetailsCard
            title="Total transfer"
            today={500}
            yesterday={200}
            thisWeek={200}
            lastWeek={500}
          />
          <TrnxDetailsCard
            title="Total inflow"
            today={2000000}
            yesterday={5000000}
            thisWeek={2000000}
            lastWeek={5000000}
          />
          <TrnxDetailsCard
            title="Total transactions"
            today={2000000}
            yesterday={5000000}
            thisWeek={2000000}
            lastWeek={5000000}
          />
          <TrnxDetailsCard
            title="Transaction count"
            today={120}
            yesterday={95}
            thisWeek={2260}
            lastWeek={1980}
            notMoney
          />
          <StatCard2
            title="Total cashout"
            label1="Today"
            label2="Yesterday"
            today={1200000}
            yesterday={1200000}
          />
          <StatCard2
            title="Transaction status"
            label1="Successful"
            label2="Failed"
            today={422}
            yesterday={5}
            notMoney
          />
          <StatCard2
            title="Average transaction count"
            label1="Value"
            label2="Count"
            today={20400}
            yesterday={422}
          />
          <StatCard2
            title="Total count"
            label1="POS commission"
            label2="Lotto commission"
            today={87000}
            yesterday={107000}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 my-4">
          <StatCard2
            title="Average commission per transaction"
            label1="POS commission"
            label2="Lotto commission"
            today={500}
            yesterday={200}
          />
          <ChartCard />
        </div>
        <div className="">
          <LineChartComponent />
        </div>
      </div>
    </DashboardLayout>
  );
}
