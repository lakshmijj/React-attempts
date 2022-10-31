import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';

import { getJSONData } from "./tools/Toolkit";
import { SamplesData, Sample } from "./tools/Samples.model";

import LoadingOverlay from "./LoadingOverlay/LoadingOverlay";
import SelectedView from "./SelectedView/SelectedView";
import AllView from "./AllView/AllView";
import RandomView from "./RandomView/RandomView";
import SearchView from "./SearchView/SearchView";
import Error from "./Error/Error";

// request url of Web API to retrieve JSON
const RETRIEVE_SCRIPT:string = "http://localhost/portfolioData.php";
// Use this constant below to test for an empty database table
// const RETRIEVE_SCRIPT:string = "http://localhost/portfolioData_empty.php";

const App = () => {

  const navigate:Function = useNavigate();
  const location:string = useLocation().pathname;

  // ---------------------------------------------- event handers
  const onResponse = (result:SamplesData) => {
    // data received from Web API
    console.table(result);
    // store received JSON samples array in state variable since samples is used heavily in JSX of App and SelectedView
    setSamples(result.samples);
    setLoading(false);
  };

  const onError = (message:string) => console.log("*** Error has occured during AJAX data transmission: " + message);

  // ---------------------------------------------- state variables
  const [loading, setLoading] = React.useState<boolean>(true);
  const [samples, setSamples] = React.useState<Sample[]>([]);
  const [view, setView] = React.useState<number>(1);

  // ---------------------------------------------- lifecycle hooks
  React.useEffect(() => {
    // component mounted - loading JSON data when root component mounts
    getJSONData(RETRIEVE_SCRIPT, onResponse, onError);
  }, []);

  return (
    <>
      <LoadingOverlay bgColor="#035074" spinnerColor="#FFFFFF" enabled={loading} />

      <div className="min-h-screen
        bg-[#035074] 
        text-white
        p-6">

        <div className="col-span-2 opacity-50 pb-4">
          <div className="font-bold font-title text-5xl">Portfolio Sampler</div>
          <div className="text-xs tracking-widest mt-1">Web App implemented with React.js</div>
        </div>

        {/* Conditional Rendering Trick - an easy way to handle the test case of no data in the JSON samples array - is also useful in ensuring that SelectedView component does not get rendered until JSON data has been received */}
        {
          (samples.length > 0) ?
            // ------------------------------------- challenge solution  
            <div>
              <div className="mb-4">
                View: 
                <input name="view" className="mx-1.5" type="radio" value="1" 
                      defaultChecked={location === "/selected" || location === "/" ? true : false} 
                      onClick={() => navigate("/selected")} />Selected 
                <input name="view" className="mx-1.5" type="radio" value="2" 
                      defaultChecked={location === "/all" ? true : false} 
                      onClick={() => navigate("/all")} />All
                <input name="view" className="mx-1.5" type="radio" value="3" 
                      defaultChecked={location === "/random" ? true : false} 
                      onClick={() => navigate("/random")} />Random
                <input name="view" className="mx-1.5" type="radio" value="4" 
                      defaultChecked={location === "/search" ? true : false} 
                      onClick={() => navigate("/search")} />Search      
              </div> 

              <Routes>
                <Route path="/" 
                      element={<SelectedView samples={samples} />} />

                <Route path="/selected" 
                      element={<SelectedView samples={samples} />} />

                <Route path="/all" 
                      element={<AllView samples={samples} />} />
                
                <Route path="/random" 
                      element={<RandomView samples={samples} />} />

                <Route path="/search" 
                      element={<SearchView samples={samples} />} />      

                <Route path="/*" 
                      element={<Error />} />
              </Routes>
                        
            </div>
            // ----------------------------------------------------------
          :
            <div>
              No portfolio samples available :(
            </div>
      }
      </div>
    </>
  );
}

export default App;