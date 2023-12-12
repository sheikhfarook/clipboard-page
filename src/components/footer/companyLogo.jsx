import google from "../../assets/images/logo-google.png";
import ibm from "../../assets/images/logo-ibm.png";
import microsoft from "../../assets/images/logo-microsoft.png";
import hewiett from "../../assets/images/logo-hp.png";
import vector from "../../assets/images/logo-vector-graphics.png";

const CompanyLogo = () => {
  return (
    <div className="flex  justify-center mt-32 h-9 max-sm:mb-[40rem] ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-20 max-sm:justify-items-center">
        <img src={google} alt="" />
        <img src={ibm} alt="" />
        <img src={microsoft} alt="" />
        <img src={hewiett} alt="" />
        <img src={vector} alt="" />
      </div>
    </div>
  );
};

export default CompanyLogo;
