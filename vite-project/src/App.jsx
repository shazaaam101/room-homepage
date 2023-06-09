import "./App.css";
import Navbar from "./Navbar";
import leftImage from "./images/image-about-dark.jpg";
import rightImage from "./images/image-about-light.jpg";
import angleLeft from "./images/icon-angle-left.svg";
import angleRight from "./images/icon-angle-right.svg";
import { slides } from "./store";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="App">
      <Navbar />
      <main className="layout">
        <div className="first-row">
          <div className="slide-img">
            <img src={slides[index].image} alt="slide" />
            <div className="slider">
              <button
                className="left-btn"
                onClick={() => setIndex((prev) => (prev === 0 ? 2 : prev - 1))}
              >
                <img src={angleLeft} alt="angle-left" />
              </button>
              <button
                className="right-btn"
                onClick={() => setIndex((prev) => (prev === 2 ? 0 : prev + 1))}
              >
                <img src={angleRight} alt="angle-right" />
              </button>
            </div>
          </div>
          <div className="content">
            <div className="wrapper">
              <h1 className="title">{slides[index].title}</h1>
              <p className="details">{slides[index].detail}</p>
              <div className="links">
                <a href="#">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>

        <div className="second-row">
          <div className="left-img">
            <img src={leftImage} alt="left" />
          </div>
          <div className="content">
            <div className="wrapper">
              <h1 className="title">About our furniture</h1>
              <p className="details">
                Our multifunctional collection blends design and function to
                suit your individual taste. Make each room unique, or pick a
                cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from
                traditional to contemporary styles or anything in between.
                Product specialists are available to help you create your dream
                space.
              </p>
            </div>
          </div>
          <div className="right-img">
            <img src={rightImage} alt="right" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
