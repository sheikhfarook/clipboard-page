import "./App.css";
import { TailwindIndicator } from "./components/TailwindIndicator";
import Access from "./components/access/Access";
import CompanyLogo from "./components/footer/companyLogo";
import Contact from "./components/footer/contact";
import DownloadClip from "./components/footer/download-clip";
import Information from "./components/footer/information";
import WorkFlow from "./components/footer/workflow";
import Heading from "./components/headers/heading";
import ClipboardSnippets from "./components/snippets/clipboardsnippets";

function App() {
  return (
    <>
      <div>
        <Heading />
        <ClipboardSnippets />
        <Access />
        <WorkFlow />
        <Information />
        <CompanyLogo />
        <DownloadClip />
        <Contact />
        <TailwindIndicator />
      </div>
    </>
  );
}

export default App;
