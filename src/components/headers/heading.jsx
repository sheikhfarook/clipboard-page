import logo from "../../assets/images/logo.svg";
const Heading = () => {
  return (
    <div className="text-center font-bai ">
      <img className=" m-auto mt-[10.5rem]" src={logo} alt="" />
      <p className="text-[40px] text-[#4C545D]  font-[600] mt-14">
        A history of everything you copy
      </p>
      <p className="text-[18px] text-[#9FABB2] font-[400] mt-3">
        Clipboard allows you to track and organize everything you copy.
        Instantly <br /> access your clipboard on all your devices.
      </p>
      <div className="flex w-[30rem] mt-10 m-auto font-[600]">
        <div className="bg-[#26BAA4] text-white rounded-full m-auto py-3 h-12 w-[14rem]">
          Download for IOS
        </div>
        <div className="bg-[#6173FF] text-white rounded-full m-auto py-3 h-[3rem] w-[14rem]">
          Download for Mac
        </div>
      </div>
    </div>
  );
};

export default Heading;
