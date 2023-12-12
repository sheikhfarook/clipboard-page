const DownloadClip = () => {
  return (
    <div className="text-center font-bai lg:mt-32 md:mt-[15rem]">
      <p className="text-[40px] text-[#4C545D]  font-[600] max-sm:w-11/12 max-sm:m-auto max-sm:mb-5 ">
        Clipboard for iOS and Mac OS
      </p>
      <p className="text-[18px] text-[#9FABB2] font-[400]  m-auto mt-3 lg:w-[40rem]  max-sm:w-4/5 max-sm:m-auto max-sm:mb-10">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>
      <div className="flex mt-10 gap-5 font-[600] justify-center max-sm:px-[1rem] max-sm:flex-col max-sm:gap-5">
        <div className="bg-[#26BAA4] text-white rounded-full px-10 py-3  ">
          Download for IOS
        </div>
        <div className="bg-[#6173FF] text-white rounded-full  px-10  py-3 ">
          Download for Mac
        </div>
      </div>
    </div>
  );
};

export default DownloadClip;
