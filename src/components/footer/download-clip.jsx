const DownloadClip = () => {
  return (
    <div className="text-center font-bai ">
      <p className="text-[40px] text-[#4C545D]  font-[600] mt-32">
        Clipboard for iOS and Mac OS
      </p>
      <p className="text-[18px] text-[#9FABB2] font-[400] mt-3">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud <br /> and you’re ready to start adding to your clipboard.
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

export default DownloadClip;
