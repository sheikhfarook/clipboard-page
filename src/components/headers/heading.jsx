import mountain from "../../assets/images/bg-header-desktop.png";
import logo from "../../assets/images/logo.svg";
const Heading = () => {
  return (
    <div className="text-center font-bai ">
      <img src={mountain} alt="" />
      <img className=" m-auto mt-[-9rem]" src={logo} alt="" />
      <p className="text-[40px]  font-[600] mt-14">
        A history of everything you copy
      </p>
      <p className="text-[18px] font-[400] mt-3">
        {" "}
        Clipboard allows you to track and organize everything you copy.
        Instantly <br /> access your clipboard on all your devices.
      </p>
      <div className="flex gap-8  w-[20rem] m-auto">
        <div className="bg-slate-400 px-20 h-12">Download for IOS</div>
        <div className="bg-slate-300 h-12">Download for MAc</div>
      </div>
    </div>
  );
};

export default Heading;
