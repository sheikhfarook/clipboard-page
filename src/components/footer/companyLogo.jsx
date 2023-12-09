import google from "../../assets/images/logo-google.png";
import ibm from "../../assets/images/logo-ibm.png";
import microsoft from "../../assets/images/logo-microsoft.png";
import hewiett from "../../assets/images/logo-hp.png";
import vector from "../../assets/images/logo-vector-graphics.png";

const CompanyLogo = () => {
  return (
    <div className="flex gap-[14rem] justify-center mt-32 h-9">
      <img src={google} alt="" />
      <img src={ibm} alt="" />
      <img src={microsoft} alt="" />
      <img src={hewiett} alt="" />
      <img src={vector} alt="" />
    </div>
  );
};

export default CompanyLogo;
