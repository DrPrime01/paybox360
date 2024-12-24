import ChevronDown from "./vectors/ChevronDown";
import { toCurrency } from "@/utils/helpers";

interface StatCardProps {
  name: string;
  value: string | number;
}

function StatCard({ name, value }: StatCardProps) {
  return (
    <div className="rounded-[10px] bg-white w-full p-3 flex flex-col justify-between h-[154px]">
      <div className="bg-light-blue py-6 px-4 flex flex-col justify-between h-3/4 rounded-[10px]">
        <p className="text-sm text-deep-blue">{name}</p>
        <h3 className="text-primary font-semibold text-xl">{value}</h3>
      </div>
      <p className="cursor-pointer text-xs text-primary">View details</p>
    </div>
  );
}

export default StatCard;

interface StatCardProps2 {
  title: string;
  label1: string;
  label2: string;
  today: number;
  yesterday: number;
  notMoney?: boolean;
}

export function StatCard2({
  title,
  label1,
  label2,
  today,
  yesterday,
  notMoney,
}: StatCardProps2) {
  return (
    <div className="rounded-[10px] bg-white w-full p-3 flex flex-col justify-between lg:max-w-[289px]">
      <div className="bg-light-blue p-4 flex flex-col justify-between gap-y-3 h-full rounded-[10px]">
        <div className="flex items-center justify-between gap-x-2.5">
          <p className="text-deep-blue text-xs font-medium">{title}</p>
          <div className="bg-[#EAF4FF] rounded-md w-20 flex items-center justify-between py-2 px-3">
            <p className="text-xs text-primary">More</p>
            <ChevronDown />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-xs text-deep-blue">{label1}</p>
            <p className="text-sm text-primary font-medium">
              {!notMoney ? toCurrency(today) : today}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-deep-blue">{label2}</p>
            <p className="text-sm text-primary font-medium">
              {!notMoney ? toCurrency(yesterday) : yesterday}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
