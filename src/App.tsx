import StatCard from "./components/StatCard";
import TrnxDetailsCard from "./components/TrnxDetailsCard";
import DashboardLayout from "./layouts/DashboardLayout";
import { toCurrency } from "./utils/helpers";

export default function App() {
  return (
    <DashboardLayout>
      <div className="bg-white md:rounded-[30px] pt-11 pb-6 flex items-center justify-between px-5 md:px-12 mb-8">
        <h1 className="text-2xl font-semibold text-dark">
          Analytics Dashboard
        </h1>
      </div>
      <div className="flex flex-col px-5 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
          <StatCard name="Total savings balance" value={toCurrency(194000)} />
          <StatCard name="Total customers" value={919} />
          <StatCard name="Total POS" value={0} />
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
        </div>
      </div>
    </DashboardLayout>
  );
}
