import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel/Carousel";
import { CarouselProvider } from "./Carousel/CarouselContext";
import "./styles.css";

const CarouselWithContext = props => {
  return <Carousel {...props} />;
};

function App() {
  return (
    <div className="App">
      <CarouselProvider>
        <CarouselWithContext />
      </CarouselProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
