import { toCurrency } from "@/utils/helpers";
import EyeIcon from "./vectors/EyeIcon";

function WalletBalCard() {
  return (
    <div className="rounded-[10px] bg-primary w-full p-6 flex flex-col justify-between h-[154px] bg-[url('/card-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col gap-0.5">
        <p className="text-gray text-sm">Wallet Balance</p>
        <div className="flex items-end gap-x-3.5 text-white">
          <h3 className="font-semibold text-xl">{toCurrency(50000)}</h3>
          <EyeIcon />
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <button className="cursor-pointer w-full py-2.5 bg-white/15 text-sm font-semibold text-white rounded-[7px]">
          Add Fund
        </button>
        <button className="cursor-pointer w-full py-2.5 bg-white/15 text-sm font-semibold text-white rounded-[7px]">
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default WalletBalCard;
