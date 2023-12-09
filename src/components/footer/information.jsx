import blacklist from "../../assets/images/icon-blacklist.svg";
import text from "../../assets/images/icon-text.svg";
import preview from "../../assets/images/icon-preview.svg";

const Information = () => {
  return (
    <div className="flex justify-evenly  text-center mt-[4rem] font-bai">
      {/* first */}
      <div>
        <img className="m-auto" src={blacklist} alt="" />
        <h1 className="font-[600] text-[#4C545D] text-[25px] mt-10 ">
          {" "}
          Create blacklists
        </h1>
        <p className="mt-5 font-[400] text-[#9FABB2] text-[18px]">
          Ensure sensitive information never makes its <br /> way to your
          clipboard by excluding certain <br /> sources.
        </p>
      </div>
      {/* second */}
      <div>
        <img className="m-auto" src={text} alt="" />
        <h1 className="font-[600] text-[#4C545D] text-[25px] mt-10">
          {" "}
          Plain text snippets
        </h1>
        <p className="mt-5 font-[400] text-[#9FABB2] text-[18px]">
          Remove unwanted formatting from copied text <br /> for a consistent
          look.
        </p>
      </div>
      {/* third */}
      <div>
        <img className="m-auto" src={preview} alt="" />
        <h1 className="font-[600] text-[#4C545D] text-[25px] mt-10">
          {" "}
          Sneak preview
        </h1>
        <p className="mt-5 font-[400] text-[#9FABB2] text-[18px] ">
          {" "}
          Quick preview of all snippets on your Clipboard <br /> for easy
          access.
        </p>
      </div>
    </div>
  );
};

export default Information;
