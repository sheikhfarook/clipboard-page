import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import instagram from "../../assets/images/icon-instagram.svg";

const Contact = () => {
  return (
    <div className="mt-20 flex h-32   justify-around bg-[#d4d9db]">
      <div className="flex gap-32 my-auto">
        <div>
          <img className="h-12 mt-3" src={logo} alt="" />
        </div>
        <div className="font-[400] text-[#4C545D]  text-[18px]">
          <p>FAQs</p>
          <p className="mt-3">Contact Us</p>
        </div>
        <div className="font-[400] text-[#4C545D] text-[18px]">
          <p>Privacy Policy</p>
          <p className="mt-3">Press Kit</p>
        </div>
        <div className="font-[400] text-[#4C545D]  text-[18px]">
          Install Guide
          <p></p>
        </div>
      </div>
      <div className="flex gap-5 h-6 my-auto">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
      </div>
    </div>
  );
};

export default Contact;
