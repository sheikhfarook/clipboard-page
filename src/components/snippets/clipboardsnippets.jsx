import monitor from "../../assets/images/image-computer.png";
const ClipboardSnippets = () => {
  return (
    <div className="font-bai mt-36 ">
      <div className="text-center">
        <h2 className="text-[37px] text-[#4C545D] font-[600]">
          Keep track of your snippets
        </h2>
        <p className="text-[18px] text-[#9FABB2] mt-5">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access <br /> your snippets immediately on all your devices. Our
          Mac and iOS apps will help you <br /> organize everything.
        </p>
      </div>
      {/* img */}
      <div className="flex mt-32 gap-[8rem] ">
        <div>
          <img className="" src={monitor} alt="" />
        </div>
        <div className="mt-16  leading-8">
          <div>
            <h3 className="font-[600] text-[#4C545D] text-[25px]">
              Quick Search
            </h3>
            <p className="text-[18px] text-[#9FABB2] font-[400]">
              Easily search your snippets by content, <br /> category, web
              address, application, and more.
            </p>
          </div>
          <div className="mt-16">
            <h3 className="font-[600] text-[#4C545D] text-[25px]">
              iCloud Sync
            </h3>
            <p className="text-[18px] text-[#9FABB2] font-[400]">
              Instantly saves and syncs snippets across all <br />
              your devices.
            </p>
          </div>
          <div className="mt-16">
            <h3 className="font-[600] text-[#4C545D] text-[25px]">
              {" "}
              Complete History
            </h3>
            <p className="text-[18px] text-[#9FABB2] font-[400]">
              Retrieve any snippets from the first moment <br /> you started
              using the app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClipboardSnippets;
