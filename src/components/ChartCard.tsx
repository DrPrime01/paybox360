import { toCurrency } from "@/utils/helpers";

function ChartCard() {
  return (
    <div className="bg-white rounded-[10px] p-6 flex flex-col md:flex-row md:items-center md:gap-x-[72px] w-full lg:max-w-[732px]">
      <div className="flex flex-col flex-1">
        <p className="font-medium mb-5 text-gray_2">Transaction Comparative</p>
        <div className="flex items-center gap-x-2 mb-0.5">
          <div className="size-2 bg-primary rounded-full" />
          <p className="text-[10px] text-gray_2 font-medium">Send money</p>
        </div>
        <p className="text-secondary_2 font-semibold mb-5 pb-4 border-b border-dashed">
          {toCurrency(105000000)}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-[5px]">
            <div className="flex items-center gap-x-2 mb-0.5">
              <div className="size-2 bg-yellow rounded-full" />
              <p className="text-[10px] text-gray_2 font-medium">Cashout</p>
            </div>
            <p className="text-secondary_2 font-semibold mb-5">
              {toCurrency(120000)}
            </p>
          </div>
          <div className="flex flex-col gap-y-[5px]">
            <div className="flex items-center gap-x-2 mb-0.5">
              <div className="size-2 bg-light_purple rounded-full" />
              <p className="text-[10px] text-gray_2 font-medium">
                Utilities and Bills
              </p>
            </div>
            <p className="text-secondary_2 font-semibold mb-5">
              {toCurrency(4200000)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden xl:block">
        <img src="/pie-chart.png" className="w-auto h-full" />
      </div>
    </div>
  );
}

export default ChartCard;
