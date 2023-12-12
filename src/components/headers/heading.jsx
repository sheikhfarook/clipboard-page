import logo from "../../assets/images/logo.svg";

const Heading = () => {
  return (
    <div className="text-center font-bai ">
      <img className=" m-auto mt-[10.5rem]" src={logo} alt="" />
      <p className="text-[40px] text-[#4C545D]  font-[600] mt-14 max-sm:w-10/12 max-sm:m-auto max-sm:mt-14">
        A history of everything you copy
      </p>
      <p className="text-[18px] text-[#9FABB2] font-[400] m-auto mt-3 lg:w-[40rem] max-sm:p-[14px] max-sm:m-auto max-sm:mt-5">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <div
        className="flex  mt-10 gap-5 font-[600] justify-center 
      max-sm:px-[1rem] max-sm:flex-col max-sm:gap-5">
        <div className="bg-[#26BAA4] text-white rounded-full px-10  py-3 ">
          Download for IOS
        </div>
        <div className="bg-[#6173FF] text-white rounded-full py-3 px-10">
          Download for Mac
        </div>
      </div>
    </div>
  );
};

export default Heading;
