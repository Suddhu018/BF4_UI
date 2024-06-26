import React, { useState, useEffect } from "react";
const LoopController = () => {
  const [data, setdataarrived] = useState({});
  useEffect(() => {
    fetch("https://bf-4-backend.vercel.app/")
      .then(function (response) {
        if (response.status === 200) {
          response.json().then(function (data) {
            console.log(data);
            setdataarrived(data);
          });
        }
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }, []); // empty dependency array for running only once when component mounts

  return (
    <div className="w-[1290.4px] flex flex-row items-start justify-start gap-[68.8px] max-w-full text-left text-27xl text-white font-rajdhani mq450:gap-[68.8px_17px] mq825:gap-[68.8px_34px]">
      <div className="h-[595.8px] w-[58.1px] flex flex-col items-start justify-start pt-[171.7px] px-0 pb-0 box-border mq825:hidden mq825:pt-28 mq825:box-border">
        <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[16.2px]">
          <img
            className="w-10 h-12 relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/sidemenu@2x.png"
          />
          <img
            className="w-10 h-12 relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/sidemenu-1@2x.png"
          />

          <div className="self-stretch h-12 relative z-[2] hover:cursor-pointer">
            <img
              className="absolute h-full w-[68.85%] top-[0%] right-[0%] bottom-[0%] left-[31.15%] max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/sidemenu--game@2x.png"
            />
            <div className="absolute h-[106.25%] w-[5.16%] top-[0%] right-[94.84%] bottom-[-6.25%] left-[0%] box-border border-r-[3px] border-solid border-orange" />
          </div>
          <div className="flex-1 flex flex-col items-end justify-start py-0 pr-0 pl-[19px] gap-[19.9px]">
            <img
              className="w-10 h-12 relative object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/sidemenu-2@2x.png"
            />
            <div className="h-12 flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border">
              <img
                className="h-10 w-10 relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/sidemenu-3@2x.png"
              />
            </div>
            <div className="h-11 flex flex-row items-start justify-end pt-0 pb-[11.7px] pr-[3.8px] pl-1 box-border">
              <img
                className="h-[32.3px] w-[32.3px] relative z-[2]"
                loading="lazy"
                alt=""
                src="/sidemenu-4.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-end py-0 px-1">
              <div className="h-[31.9px] w-8 relative z-[2]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] opacity-[0.5]">
                  <div className="absolute h-[50.16%] w-full top-[0%] right-[0%] bottom-[49.84%] left-[0%] bg-white" />
                  <div className="absolute h-[12.54%] w-full top-[62.7%] right-[0%] bottom-[24.76%] left-[0%] bg-white" />
                  <div className="absolute h-[12.54%] w-full top-[87.77%] right-[0%] bottom-[-0.31%] left-[0%] bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[79.9px] max-w-[calc(100%_-_127px)] mq825:gap-[20px_79.9px] mq825:max-w-full mq1400:gap-[40px_79.9px]">
        <div className="w-[356.4px] flex flex-row items-start justify-start py-0 pr-px pl-[1.1px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-[16.3px] max-w-full mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start min-w-[212px] max-w-full">
              <div className="self-stretch flex flex-row items-end justify-start gap-[25.8px] shrink-0 [debug_commit:f6aba90]">
                <div className="h-[22.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[6.4px] box-border">
                  <img
                    className="w-[7.2px] h-[15.7px] relative shrink-0 [debug_commit:f6aba90] z-[2]"
                    loading="lazy"
                    alt=""
                    src="/back.svg"
                  />
                </div>
                <nav className="m-0 flex-1 flex flex-row items-start justify-start gap-[9.4px] shrink-0 [debug_commit:f6aba90] text-left text-lg text-white font-rajdhani">
                  <div className="flex flex-col items-start justify-start pt-[4.8px] pb-0 pr-[3px] pl-0">
                    <div className="flex flex-row items-start justify-start z-[3]">
                      <div className="relative tracking-[0.06em] uppercase font-semibold inline-block min-w-[111px]">
                        multiplayer
                      </div>
                    </div>
                  </div>
                  <h3 className="m-0 relative text-5xl tracking-[0.06em] uppercase font-medium font-inherit text-gray-200 inline-block min-w-[12px] z-[3] mq450:text-lgi">
                    /
                  </h3>
                  <div className="flex flex-col items-start justify-start pt-[4.8px] px-0 pb-0">
                    <div className="h-[23px] relative tracking-[0.06em] uppercase font-semibold inline-block z-[3]">
                      server browser
                    </div>
                  </div>
                </nav>
              </div>
              <div className="h-[54.1px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                <h1 className="mt-[-4.899999999999636px] m-0 h-[59px] relative text-inherit tracking-[0.03em] uppercase font-semibold font-inherit inline-block shrink-0 [debug_commit:f6aba90] z-[2] mq450:text-9xl mq825:text-18xl">
                  server info
                </h1>
              </div>
            </div>
            <h3 className="m-0 relative text-5xl tracking-[0.06em] uppercase font-medium font-inherit text-gray-200 inline-block min-w-[12px] z-[2] mq450:text-lgi">
              /
            </h3>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full text-lg">
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[7.5px] box-border gap-[16.7px] max-w-full text-17xl">
            <h1 className="m-0 h-[46px] relative text-inherit tracking-[0.06em] font-semibold font-inherit inline-block max-w-full z-[2] mq450:text-3xl mq825:text-10xl">
              #1| NASA | Noobs Welcome | Conquest 40Hz
            </h1>
            <div className="flex flex-col items-start justify-start gap-[14.1px] max-w-full text-lg text-gray-200">
              <div className="flex flex-row items-start justify-start py-0 px-[23px] box-border max-w-full">
                <div className="relative tracking-[0.06em] uppercase font-semibold z-[2]">
                  conquest large - siege of shanghai - normal - 40 hz
                </div>
              </div>
              <div className="h-[46px] relative tracking-[0.03em] font-semibold inline-block z-[2]">
                <p className="m-0">
                  Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
                  Request, Appeal, Visit us: www.epg.gg | Discord
                </p>
                <p className="m-0">https://discord.gg/3r5NK4d</p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full mq1125:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[27.2px] min-w-[211px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[1.5px] box-border max-w-full">
                <button className="cursor-pointer [border:none] py-[16.5px] px-5 bg-[transparent] flex-1 flex flex-row items-start justify-center box-border relative max-w-full z-[2] ">
                  <div className="w-[39px] relative text-lg tracking-[0.06em] uppercase font-semibold font-rajdhani text-white text-center inline-block min-w-[39px]">
                    join
                  </div>
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border opacity-[0.2] z-[1] border-[1px] border-solid border-white" />
                </button>
              </div>
              <div className="w-[286.1px] flex flex-row items-start justify-between gap-[20px]">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[0.06em] uppercase font-semibold inline-block min-w-[73px] shrink-0 [debug_commit:f6aba90] z-[3]">
                    players
                  </div>
                  <div className="h-[29.1px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-11xl">
                    <div className="mt-[-8.899999999999636px] relative tracking-[0.06em] font-semibold inline-block min-w-[83px] shrink-0 [debug_commit:f6aba90] z-[2] mq450:text-lg mq825:text-5xl">
                      {data.PLAYER}/64
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[0.06em] uppercase font-semibold inline-block min-w-[39px] shrink-0 [debug_commit:f6aba90] z-[3]">
                    ping
                  </div>
                  <div className="h-[29.1px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-11xl">
                    <div className="mt-[-8.899999999999636px] relative tracking-[0.06em] font-semibold inline-block min-w-[71px] shrink-0 [debug_commit:f6aba90] z-[2] mq450:text-lg mq825:text-5xl">
                      {data.PING}ms
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[27.2px] min-w-[211px] max-w-full">
              <button className="cursor-pointer [border:none] py-[16.5px] px-5 bg-[transparent] self-stretch flex flex-row items-start justify-center relative z-[2]">
                <div className="w-[81px] relative text-lg tracking-[0.06em] uppercase font-semibold font-rajdhani text-white text-center inline-block min-w-[81px]">
                  spectate
                </div>
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border opacity-[0.2] z-[1] border-[1px] border-solid border-white" />
              </button>
              <div className="w-[274px] flex flex-row items-start justify-center py-0 px-5 box-border">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[0.06em] uppercase font-semibold inline-block min-w-[74.30000000000018px] whitespace-nowrap z-[3]">
                    tickrate
                  </div>
                  <div className="h-[38px] relative text-11xl tracking-[0.06em] font-semibold inline-block min-w-[76px] whitespace-nowrap z-[2] mt-[-8.9px] mq450:text-lg mq825:text-5xl">
                    {data.TICKRATE} Hz
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[16.5px] px-[74px] bg-[transparent] flex-[0.5432] flex flex-row items-start justify-start box-border relative min-w-[176px] max-w-full z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
              <div className="h-[23px] w-44 relative text-lg tracking-[0.06em] uppercase font-semibold font-rajdhani text-white text-center inline-block">
                join as commander
              </div>
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border opacity-[0.2] z-[1] border-[1px] border-solid border-white" />
            </button>
            <div className="h-14 w-[166px] flex flex-row items-start justify-start pt-[16.5px] px-[44.8px] pb-[15.5px] box-border relative gap-[2.9px] z-[2]">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] box-border opacity-[0.2] border-[1px] border-solid border-white" />
              <img
                className="h-6 w-6 relative min-h-[24px] z-[1]"
                loading="lazy"
                alt=""
                src="/favorite.svg"
              />
              <div className="relative tracking-[0.06em] uppercase font-semibold inline-block min-w-[46px] z-[1]">
                1718
              </div>
            </div>
          </div>
          <div className="w-[1027.9px] flex flex-row items-start justify-start gap-[27.8px] max-w-full mq1125:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[9.9px] min-w-[243px] max-w-full">
              <div className="flex flex-row items-start justify-start py-0 px-[15px]">
                <div className="relative tracking-[0.07em] uppercase font-semibold inline-block min-w-[79px] z-[2]">
                  settings
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5.1px] text-base">
                <div className="self-stretch h-[25.9px] flex flex-col items-start justify-start pt-0 px-0 pb-[5.9px] box-border gap-[5.9px] z-[2]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.6px]">
                    <div className="flex-1 flex flex-row items-start justify-between shrink-0 [debug_commit:f6aba90]">
                      <div className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[51px]">
                        Region
                      </div>
                      <div className="relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[87px]">
                        {data.REGION}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative box-border opacity-[0.1] shrink-0 [debug_commit:f6aba90] border-t-[1px] border-solid border-white" />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[16.5px]">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                    <div className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[92px] z-[2]">
                      punkbuster
                    </div>
                    <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                      {data.PUNKBUSTER}
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.3px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5.9px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                      <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                        <div className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[70px] z-[2]">
                          fairfight
                        </div>
                        <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                          {data.FAIRFIGHT}
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                      <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                        <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                          <div className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[80px] z-[2]">
                            password
                          </div>
                          <div className="w-[26px] relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[26px] z-[2]">
                            {data.PASSWORD}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[16.5px]">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                    <div className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[52px] z-[2]">
                      preset
                    </div>
                    <div className="w-[58px] relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[58px] z-[2]">
                      {data.PRESET}
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10.2px] min-w-[243px] max-w-full">
              <div className="flex flex-row items-start justify-start py-0 px-[15px]">
                <div className="relative tracking-[0.07em] uppercase font-semibold inline-block min-w-[88px] z-[2]">
                  advanced
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px] text-base">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                    <div className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[62px] z-[2]">
                      minimap
                    </div>
                    <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                      {data.MINIMAP}
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5.9px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                      <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                        <div className="relative tracking-[0.04em] leading-[20.5px] uppercase font-medium z-[2]">
                          only squad leader spawn
                        </div>
                        <div className="w-[26px] relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[26px] z-[2]">
                          {data.ONLY_SQUAD_LEADER_SPAWN}
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[3.3px]">
                      <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                      <div className="self-stretch flex flex-col items-start justify-start gap-[5.9px]">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                            <div className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[67px] z-[2]">
                              vehicles
                            </div>
                            <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                              {data.VEHICLES}
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                          <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                            <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                              <div className="relative tracking-[0.04em] leading-[20.5px] uppercase font-medium inline-block min-w-[106px] z-[2]">
                                team balance
                              </div>
                              <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                                {data.TEAM_BALANCE}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.04em] leading-[20.5px] uppercase font-medium z-[2]">
                        minimap spotting
                      </div>
                      <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                        {data.MINIMAP_SPOTTING}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.04em] leading-[20.5px] uppercase font-medium z-[2]">
                        HUD
                      </div>
                      <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                        {data.HUD}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.04em] leading-[20.5px] uppercase font-medium z-[2]">
                        3p vehicle cam
                      </div>
                      <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                        {data.threeP_VEHICLE_CAM}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.04em] leading-[20.5px] uppercase font-medium z-[2]">
                        regenerative health
                      </div>
                      <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                        {data.REGENERATIVE_HEALTH}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.04em] leading-[20.5px] uppercase font-medium z-[2]">
                        kill cam
                      </div>
                      <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                        {data.KILL_CAM}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.04em] leading-[20.5px] uppercase font-medium z-[2]">
                        friendly fire
                      </div>
                      <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                        {data.FRIENDLY_FIRE}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.04em] leading-[20.5px] uppercase font-medium z-[2]">
                        3d spotting
                      </div>
                      <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                        {data.threeD_SPOTTING}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.04em] leading-[20.5px] uppercase font-medium z-[2]">
                        enemy name tags
                      </div>
                      <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                        {data.ENEMY_NAME_TAGS}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10.2px] min-w-[243px] max-w-full">
              <div className="flex flex-row items-start justify-start py-0 px-[15px]">
                <div className="relative tracking-[0.07em] uppercase font-semibold inline-block min-w-[53px] z-[2]">
                  rules
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px] text-base">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                    <div className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[56px] z-[2]">
                      tickets
                    </div>
                    <div className="w-[27px] relative tracking-[0.04em] uppercase font-medium text-yellow text-right inline-block min-w-[27px] z-[2]">
                      {data.TICKETS}
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.04em] leading-[20.5px] uppercase font-medium z-[2]">
                        vehicle spawn delay
                      </div>
                      <div className="w-[17px] relative tracking-[0.04em] uppercase font-medium text-yellow text-right inline-block min-w-[17px] z-[2]">
                        {data.VEHICLE_SPAWN_DELAY}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.3px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[113px] z-[2]">
                        bullet damage
                      </div>
                      <div className="w-6 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[24px] z-[2]">
                        {data.BULLET_DAMAGE}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.04em] uppercase font-medium z-[2]">
                        kick after team kills
                      </div>
                      <div className="w-[9px] relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[9px] z-[2]">
                        {data.KICK_AFTER_TEAM_KILLS}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.04em] leading-[20.5px] uppercase font-medium inline-block min-w-[110px] z-[2]">
                        player health
                      </div>
                      <div className="w-6 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[24px] z-[2]">
                        {data.PLAYER_HEALTH}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.04em] leading-[20.5px] uppercase font-medium z-[2]">
                        player respawn time
                      </div>
                      <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                        {data.PLAYER_RESPAWN_TIME}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.04em] leading-[20.5px] uppercase font-medium z-[2]">
                        kick after idle
                      </div>
                      <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                        {data.KICK_AFTER_IDLE}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.2px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[16.5px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.04em] leading-[20.5px] uppercase font-medium z-[2]">
                        ban after kicks
                      </div>
                      <div className="w-5 relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[20px] z-[2]">
                        {data.BAN_AFTER_KICKS}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border opacity-[0.1] z-[2] border-t-[1px] border-solid border-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoopController;
