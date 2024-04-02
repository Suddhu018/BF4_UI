const Invite = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-px px-px pb-[0.2px] gap-[35.1px] z-[2]">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/home--squad@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-[0.1px] pr-px pl-0 gap-[18.7px]">
        <img
          className="w-[11px] h-[11px] relative"
          loading="lazy"
          alt=""
          src="/online.svg"
        />
        <img
          className="w-[49.1px] h-[50px] relative object-contain"
          loading="lazy"
          alt=""
          src="/friend-profile-pic@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[18.8px]">
        <div className="w-[11px] h-[11px] relative rounded-[50%] box-border border-[0px] border-solid border-white" />
        <img
          className="w-[49.1px] h-[50px] relative object-contain"
          loading="lazy"
          alt=""
          src="/friend-profile-pic-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Invite;
