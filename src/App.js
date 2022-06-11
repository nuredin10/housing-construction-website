import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Testimonials from "./components/Testimonials/Testimonials";
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import ClockLoader from "react-spinners/ClockLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import Credit from "./components/Credit/Credit";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  `;

  return (
  //   <div className="splash">
  //     <h1 className="title">Housing Construction</h1>
  //     <PropagateLoader color={"#36D7B7"} isLoading={isLoading} css={override} />{" "}
  //     <h1 className="credit">Designed by nuredin for versavvy evaluation test </h1>
  //   </div>
  // ) :
   
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Testimonials></Testimonials>
      <Credit></Credit>
    </div>
  );
}

export default App;
