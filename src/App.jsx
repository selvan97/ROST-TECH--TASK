import React from "react";
import Header from "./components/Header_Component/Header";
import Component2 from "./components/Second_Component/Component2";
import Comp3 from "./components/Third_Component/Comp3";
import Comp5 from "./components/Fifth_component/Comp5";
import Comp6 from "./components/Sixth_Component/Comp6";
import Comp7 from "./components/Seventh_Component/Comp7";
import Footer from "./components/Footer_Component/Footer";
import Comp4 from "./components/Fourth_component/Comp4";
import MultiComp from "./components/Multi_Component/MultiComp";
import MidComp from "./components/Mid_Component/MidComp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Comp1 from "./components/Component1/Comp1.jsx";

function App() {
  return (
    <>
      <Header />
      <Comp1 />
      <Component2 />
      <Comp3 />
      <MultiComp instanceId="first" />
      <MidComp />
      <MultiComp instanceId="second" />
      <Comp4 />
      <Comp5 />
      <Comp6 />
      <Comp7 />
      <Footer />
    </>
  );
}

export default App;
