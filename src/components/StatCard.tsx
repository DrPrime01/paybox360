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
