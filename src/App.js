import Card from "./components/Card";
import hero from "./images/drawers.jpg";
import avatar from "./images/avatar-michelle.jpg";
import share from "./images/icon-share.svg";
import Signature from "./components/Signature";
import "./App.scss";
import { useState } from "react";

function App() {
  const data = {
    hero: hero,
    avatar: avatar,
    heading:
      "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
    description:
      "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
    fullName: "Michelle Appleton",
    date: "28 Jun 2020",
    button: share,
  };

  function handlePopup() {
    const btn = document.querySelector(".card-info-author-details-btn");
    const icon = document.querySelector(".card-info-author-details-btn-icon");
    const popup = document.querySelector(".popup");
    btn.classList.toggle("active");
    icon.classList.toggle("active-icon");
    popup.classList.toggle("show");
  }

  return (
    <div>
      <Card
        hero={data.hero}
        avatar={data.avatar}
        heading={data.heading}
        description={data.description}
        fullName={data.fullName}
        date={data.date}
        button={data.button}
        handlePopup={handlePopup}
      />
      <Signature />
    </div>
  );
}

export default App;
