import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import RedHookForm from "./RedHookForm/RedHookForm";
// import ReactHookform from "./ReactHookForm/ReactHookform";
import "./index.css";
// import ShippingForm from "./ShippingForm";

// import { DataProvider } from "./Contexts/DataContext";

ReactDOM.render(
  <React.StrictMode>
    {/* <DataProvider> */}
    {/* <App /> */}
    <RedHookForm />
    {/* <ReactHookform /> */}
    {/* <ShippingForm /> */}
    {/* </DataProvider> */}
  </React.StrictMode>,

  document.getElementById("root")
);
