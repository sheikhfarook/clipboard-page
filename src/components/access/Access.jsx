import AccessClick from "../../assets/images/image-devices.png";
const Access = () => {
  return (
    <div className="text-center mt-32 font-bai ">
      <h2 className="text-[35px] text-[#4C545D] font-[600] max-sm:w-9/12 max-sm:m-auto">
        Access Clipboard anywhere
      </h2>
      <p className="text-[18px] text-[#9FABB2] mt-8 max-sm:w-11/12 max-sm:m-auto max-sm:mt-5">
        {" "}
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard <br /> snippets in a few simple clicks.
      </p>
      <img className="m-auto mt-40" src={AccessClick} alt="" />
    </div>
  );
};

export default Access;
