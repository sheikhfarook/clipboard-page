import blacklist from "../../assets/images/icon-blacklist.svg";
import text from "../../assets/images/icon-text.svg";
import preview from "../../assets/images/icon-preview.svg";

const Information = () => {
  return (
    <div
      className=" justify-evenly  text-center mt-[4rem] font-bai mr-20
    md:grid md:grid-rows-1 md:grid-cols-2 lg:flex max-sm:space-y-20 max-sm:mt-28">
      {/* first */}
      <div className="lg:mr-[-9rem] ">
        <img className="m-auto" src={blacklist} alt="" />
        <h1 className="font-[600] text-[#4C545D] text-[25px] mt-8 max-sm:m-auto">
          Create blacklists
        </h1>
        <p className="mt-4 font-[400] text-[#9FABB2] text-[18px] w-1/2 m-auto max-sm:justify-center">
          Ensure sensitive information never makes its way to your clipboard by
          excluding certain sources.
        </p>
      </div>
      {/* second */}
      <div>
        <img className="m-auto" src={text} alt="" />
        <h1 className="font-[600] text-[#4C545D] text-[25px] mt-10">
          Plain text snippets
        </h1>
        <p className="mt-5 font-[400] text-[#9FABB2] text-[18px] w-10/12 m-auto">
          Remove unwanted formatting from copied text for a consistent look.
        </p>
      </div>
      {/* third */}
      <div className="lg:mt-0 md:mt-5">
        <img className="m-auto " src={preview} alt="" />
        <h1 className="font-[600] text-[#4C545D] text-[25px] mt-10">
          Sneak preview
        </h1>
        <p className="mt-5 font-[400] text-[#9FABB2] text-[18px] w-10/12 m-auto ">
          Quick preview of all snippets on your Clipboard for easy access.
        </p>
      </div>
    </div>
  );
};

export default Information;
