import LoopController from "../components/LoopController";
import Invite from "../components/Invite";
import DataHub from "../components/DataHub";

const MenuMultiplayerServerBrow = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[36.2px] px-[3px] pb-0 box-border gap-[3.2px] tracking-[normal]">
      <div className="w-[6297.4px] h-[3542.3px] absolute !m-[0] bottom-[-1593.8px] left-[-2241.1px] z-[1] flex items-center justify-center">
        <img
          className="w-full h-full z-[1] object-contain absolute left-[0px] top-[0px] [transform:scale(1.017)]"
          alt=""
          src="/menu--background@2x.png"
        />
      </div>
      <div className="w-px h-[calc(100%_+_1px)] absolute !m-[0] top-[0px] bottom-[-1px] left-[87.6px] box-border z-[2] border-r-[1px] border-solid border-gray-100" />
      <div className="w-[1888px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border max-w-full gap-[20px] mq1400:flex-wrap">
        <LoopController />
        <div className="h-[333.6px] w-[52px] flex flex-col items-start justify-start pt-[22.6px] px-0 pb-0 box-border">
          <Invite />
        </div>
      </div>
      <main className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <section className="absolute top-[-13.8px] left-[-20.4px] bg-gray-300 w-[1952.5px] h-[1113.3px] z-[1]" />
        <img
          className="absolute top-[272.9px] left-[129.9px] w-4 h-2 z-[2]"
          loading="lazy"
          alt=""
          src="/germanyflag.svg"
        />
      </main>
      <DataHub />
    </div>
  );
};

export default MenuMultiplayerServerBrow;
