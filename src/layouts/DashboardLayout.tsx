import CardsIcon from "@/components/vectors/CardsIcon";
import ChevronRightOutline from "@/components/vectors/ChevronRightOutline";
import DashboardIcon from "@/components/vectors/DashboardIcon";
import HomeIcon from "@/components/vectors/HomeIcon";
import LeaderboardIcon from "@/components/vectors/LeaderboardIcon";
import PerformanceIcon from "@/components/vectors/PerformanceIcon";
import PersonalIcon from "@/components/vectors/PersonalIcon";
import SalesIcon from "@/components/vectors/SalesIcon";
import SettingsIcon from "@/components/vectors/SettingsIcon";
import SpendIcon from "@/components/vectors/SpendIcon";
import TalentIcon from "@/components/vectors/TalentIcon";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-secondary flex items-stretch h-screen w-screen md:p-7 relative">
      <aside className="hidden lg:flex flex-col gap-y-6 max-w-[252px] pt-[34px] pr-7 h-[calc(100vh-56px)]">
        <div className="border-b-[0.4px] border-dashed border-deep-blue pb-[30px] flex flex-col">
          <h2 className="text-2xl font-bold text-white">Paybox360</h2>
          <p className="text-white text-xs">by LibertyPay</p>
        </div>
        <div className="border-b-[0.4px] border-dashed border-deep-blue pb-5 flex flex-col gap-y-5">
          <div className="flex items-center gap-x-3 cursor-pointer w-[224px]">
            <HomeIcon />
            <p className="font-semibold text-sm text-white">Home</p>
          </div>
          <div className="py-3 px-6 rounded-lg bg-active-navlink flex items-center gap-x-3 w-[224px]">
            <DashboardIcon />
            <p className="font-semibold text-sm text-white">
              Analytics Dashboard
            </p>
          </div>
        </div>
        <div className="border-b-[0.4px] border-dashed border-deep-blue pb-5 flex flex-col gap-y-5">
          <div className="flex items-center gap-x-3 cursor-pointer w-[224px]">
            <PersonalIcon />
            <p className="font-semibold text-sm text-white">Personal</p>
          </div>
          <div className="flex items-center gap-x-3 cursor-pointer w-[224px]">
            <SalesIcon />
            <p className="font-semibold text-sm text-white">Sale Hub</p>
          </div>
          <div className="flex items-center justify-between cursor-pointer w-[224px]">
            <div className="flex items-center gap-x-3">
              <TalentIcon />
              <p className="font-semibold text-sm text-white">
                Talent Management
              </p>
            </div>
            <ChevronRightOutline />
          </div>
          <div className="flex items-center justify-between cursor-pointer w-[224px]">
            <div className="flex items-center gap-x-3">
              <SpendIcon />
              <p className="font-semibold text-sm text-white">
                Spend Management
              </p>
            </div>
            <ChevronRightOutline />
          </div>
          <div className="flex items-center justify-between cursor-pointer w-[224px]">
            <div className="flex items-center gap-x-3">
              <CardsIcon />
              <p className="font-semibold text-sm text-white">Cards</p>
            </div>
            <ChevronRightOutline />
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex items-center gap-x-3 cursor-pointer w-[224px]">
            <LeaderboardIcon />
            <p className="font-semibold text-sm text-white">Leaderboard</p>
          </div>
          <div className="flex items-center justify-between cursor-pointer w-[224px]">
            <div className="flex items-center gap-x-3">
              <SettingsIcon />
              <p className="font-semibold text-sm text-white">
                Profile & Settings
              </p>
            </div>
            <ChevronRightOutline />
          </div>
          <div className="flex items-center justify-between cursor-pointer w-[224px]">
            <div className="flex items-center gap-x-3">
              <PerformanceIcon />
              <p className="font-semibold text-sm text-white">
                Bank Performance
              </p>
            </div>
            <ChevronRightOutline />
          </div>
        </div>
      </aside>
      <main className="md:rounded-[30px] md:h-[calc(100vh-56px)] w-full overflow-y-auto flex flex-col bg-light-gray">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
