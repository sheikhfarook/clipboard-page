import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import instagram from "../../assets/images/icon-instagram.svg";

const Contact = () => {
  return (
    <div
      className="flex justify-around bg-[#d4d9db] mt-32 
      lg:h-32 lg:flex-row 
      md:flex-col md:h-[20rem]
    max-sm:flex-col max-sm:h-[27rem] ">
      <div
        className="flex my-auto  2xl:ml-[23rem]
        xl:ml-52 lg:gap-32 lg:flex-row lg:mt-0 lg:ml-20


        md:flex-col md:gap-1 md:mt-8
      max-sm:flex-col max-sm:gap-10 max-sm:mt-7 ">
        {/* company logo */}
        <div className=" lg:m-auto md:m-auto ">
          <img className="h-12 mt-3 max-sm:m-auto " src={logo} alt="" />
        </div>
        {/* contact details */}
        <div
          className="flex gap-20 font-bai
          md:m-auto md:mt-10       
         max-sm:flex-col max-sm:gap-6 max-sm:text-center">
          <div className="font-[400] text-[#4C545D]  text-[18px]">
            <p>FAQs</p>
            <p className="mt-5">Contact Us</p>
          </div>
          <div className="font-[400] text-[#4C545D] text-[18px]">
            <p>Privacy Policy</p>
            <p className="mt-5">Press Kit</p>
          </div>
          <div className="font-[400] text-[#4C545D]  text-[18px]">
            <p>Install Guide</p>
          </div>
        </div>
      </div>
      {/* social media logo */}
      <div className="flex  h-6 lg:my-auto lg:gap-5 md:m-auto md:gap-12 md:mt-0 max-sm:mb-8 max-sm:m-auto max-sm:gap-10">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
      </div>
    </div>
  );
};

export default Contact;
