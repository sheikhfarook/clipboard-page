import monitor from "../../assets/images/image-computer.png";
const ClipboardSnippets = () => {
  return (
    <div className="font-bai mt-36 max-sm:w-11/12 max-sm:m-auto max-sm:mt-[12rem]">
      <div className="text-center">
        <h2 className="text-[37px] text-[#4C545D] font-[600]">
          Keep track of your snippets
        </h2>
        <p className="text-[18px] text-[#9FABB2] mt-5 max-sm:w-11/12 max-sm:m-auto max-sm:mt-5">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access <br /> your snippets immediately on all your devices. Our
          Mac and iOS apps will help you <br /> organize everything.
        </p>
      </div>
      {/* img */}
      <div className="lg:flex lg:flex-row  mt-32 md:flex-col   ">
        <div>
          <img className="ml-[-25px] max-sm:m-auto" src={monitor} alt="" />
        </div>
        {/* md:grid md:m-auto md:grid-rows-1 md:grid-cols-2 */}

        <div className="leading-8 md:ml-[10rem] ">
          <div
            className=" mt-10 max-sm:m-auto max-sm:text-center max-sm:mt-14 
          ">
            <div className="max-sm:m-auto ">
              <h3 className="font-[600]  text-[#4C545D] text-[25px] ">
                Quick Search
              </h3>
              <p className="text-[18px] mt-3  lg:w-8/12  text-[#9FABB2] font-[400] md:w-10/12">
                Easily search your snippets by content,category, web address,
                application, and more.
              </p>
            </div>
            <div className="mt-16">
              <h3 className="font-[600] text-[#4C545D] text-[25px]">
                iCloud Sync
              </h3>
              <p className="text-[18px] mt-3 lg:w-1/2  text-[#9FABB2] font-[400] md:w-10/12 ">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            <div className="mt-16">
              <h3 className="font-[600] text-[#4C545D] text-[25px]">
                {" "}
                Complete History
              </h3>
              <p className="text-[18px] mt-3 lg:w-1/2  text-[#9FABB2]  font-[400] md:w-10/12">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClipboardSnippets;
