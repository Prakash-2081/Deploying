import { useState } from "react";
import FilterImage from "./components/FilterImage";
import Filtering from "./components/Filtering";
import ContextApi from "./store/ContextApi";

const App=()=>{
 

  return (
    <>
    <ContextApi>
    <div className="flex">
    <Filtering />
    <FilterImage />
    </div>
    </ContextApi>
    </>
  )
}
export default App;