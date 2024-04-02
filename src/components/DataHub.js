import BrowserSINext from "./BrowserSINext";

const DataHub = () => {
  return (
    <div className="w-[1536.8px] flex flex-row items-start justify-start py-0 pr-[30px] pl-[30.4px] box-border max-w-full text-left text-base text-white font-rajdhani">
      <div className="flex-1 flex flex-col items-end justify-start gap-[23.6px] max-w-full">
        <div className="self-stretch h-[122.6px] flex flex-col items-start justify-start pt-0 px-0 pb-[85.9px] box-border gap-[10.9px] max-w-full text-center mq1400:h-auto">
          <div className="flex flex-row items-start justify-start gap-[4.4px] shrink-0 [debug_commit:f6aba90]">
            <div className="h-[22px] w-[90.6px] flex flex-row items-start justify-start py-[3px] px-0 box-border z-[3]">
              <img
                className="h-4 w-4 relative"
                loading="lazy"
                alt=""
                src="/sidemenu--help.svg"
              />
              <div className="h-[22px] bg-gray-400 hidden flex-row items-center justify-center py-px px-2 box-border">
                <div className="self-stretch relative tracking-[0.04em] uppercase font-medium whitespace-nowrap">
                  help
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[13.7px] px-0 pb-0 text-left text-lg">
              <div className="h-[23px] relative tracking-[0.07em] uppercase font-semibold inline-block min-w-[122px] z-[2]">
                map rotation
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[9px] shrink-0 [debug_commit:f6aba90] max-w-full">
            <div className="h-[22px] w-[87px] flex flex-row items-start justify-start py-[3px] px-0 box-border z-[3]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/sidemenu--quit.svg"
              />
              <div className="h-[22px] bg-gray-400 hidden flex-row items-center justify-center py-px px-2 box-border">
                <div className="self-stretch relative tracking-[0.04em] uppercase font-medium whitespace-nowrap">
                  Quit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataHub;
