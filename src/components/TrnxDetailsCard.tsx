import { toCurrency } from "@/utils/helpers";
import ChevronDown from "./vectors/ChevronDown";

interface StatCardProps {
  title: string;
  today: number;
  yesterday: number;
  thisWeek: number;
  lastWeek: number;
  notMoney?: boolean;
}

function TrnxDetailsCard({
  title,
  today,
  yesterday,
  thisWeek,
  lastWeek,
  notMoney,
}: StatCardProps) {
  return (
    <div className="rounded-[10px] bg-white w-full p-3 flex flex-col">
      <div className="bg-light-blue h-full p-4 flex flex-col justify-between gap-y-3 rounded-[10px]">
        <div className="flex items-center justify-between">
          <p className="text-deep-blue text-sm font-medium">{title}</p>
          <div className="bg-[#EAF4FF] rounded-md w-20 flex items-center justify-between py-2 px-3">
            <p className="text-xs text-primary">More</p>
            <ChevronDown />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-xs text-deep-blue">Today</p>
            <p className="text-sm text-primary font-medium">
              {!notMoney ? toCurrency(today) : today}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-deep-blue">Yesterday</p>
            <p className="text-sm text-primary font-medium">
              {!notMoney ? toCurrency(yesterday) : yesterday}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-xs text-deep-blue">This week</p>
            <p className="text-sm text-primary font-medium">
              {!notMoney ? toCurrency(thisWeek) : thisWeek}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-deep-blue">Last week</p>
            <p className="text-sm text-primary font-medium">
              {!notMoney ? toCurrency(lastWeek) : lastWeek}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrnxDetailsCard;
