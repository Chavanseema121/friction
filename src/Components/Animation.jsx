import React, { useEffect } from "react";
 import "./Style.css"; // Make sure this file exists

import imgoneone from "../assets/home/imgoneone.png";
import imgtwotwo from "../assets/home/imgtwotwo.png";
import imgthreethree from "../assets/home/imgthreethree.png";
import imgfourfour from "../assets/home/imgfourfour.png";
import imgfivefive from "../assets/home/imgfivefive.png";
import imgsixsix from "../assets/home/imgsixsix.png";
import imgsevenseven from "../assets/home/imgsevenseven.png";
import imgeighteight from "../assets/home/imgeighteight.png";
import imgninenine from "../assets/home/imgninenine.png";
import imgtenten from "../assets/home/imgtenten.png";

import contentImgone from "../assets/home/contentImgone.png";
import contentImgtwo from "../assets/home/contentImgtwo.png";
import contentImgthree from "../assets/home/contentImgthree.png";
import contentImgfour from "../assets/home/contentImgfour.png";
import contentImgfive from "../assets/home/contentImgfive.png";

const images = {
  imgoneone,
  imgtwotwo,
  imgthreethree,
  imgfourfour,
  imgfivefive,
  imgsixsix,
  imgsevenseven,
  imgeighteight,
  imgninenine,
  imgtenten,
  contentImgone,
  contentImgtwo,
  contentImgthree,
  contentImgfour,
  contentImgfive,
};

export default function SectionNine() {
  useEffect(() => {
    const handleAnimationEnd = () => {
      const button = document.getElementById("apply-button");
      if (button) {
        button.style.backgroundColor = "#FFFFFF"; // White background
        button.style.color = "#022956"; // Blue text
      }
    };

    const animationEndTrigger = document.getElementById(
      "animation-end-trigger"
    );
    if (animationEndTrigger) {
      animationEndTrigger.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (animationEndTrigger) {
        animationEndTrigger.removeEventListener(
          "animationend",
          handleAnimationEnd
        );
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="timeline section">
        <div className="container left-container">
          <div className="img">
            <img src={images.imgoneone} alt="Advantages of Incubation" />
          </div>
          <div className="text-box">
            <div className="content">
              <h3>Advantages of Incubation</h3>
              <img
                src={images.contentImgone}
                className="content-imag"
                alt="Content"
              />
              <p style={{ textAlign: "center" }}>
                It sharpens your business ideas, offers expert guidance, and
                provides resources to accelerate startup growth.
              </p>
            </div>
          </div>
        </div>

        <div className="container right-0">
          <div className="img">
            <img src={images.imgtwotwo} alt="Operational Mechanism" />
          </div>
          <div className="text-box">
            <div className="content">
              <h3>Operational Mechanism</h3>
              <img
                src={images.contentImgtwo}
                className="content-imag"
                alt="Content"
              />
              <p style={{ textAlign: "center" }}>
                Validate ideas, build prototypes, and prepare for market entry
                through structured mentorship.
              </p>
            </div>
          </div>
        </div>

        <div className="container float-right mr-[0%]  left-[50%]">
          <div className="img">
            <img src={images.imgthreethree} alt="Operational Mechanism" />
          </div>
          <div className="text-box">
            <div className="content">
              <h3>Operational Mechanism</h3>
              <img
                src={images.contentImgthree}
                className="content-imag"
                alt="Content"
              />
              <p style={{ textAlign: "center" }}>
                Validate ideas, build prototypes, and prepare for market entry
                through structured mentorship.
              </p>
            </div>
          </div>
        </div>

        <div className="container left-container">
          <div className="img">
            <img src={images.imgfourfour} alt="How Will You Benefit?" />
          </div>
          <div className="text-box">
            <div className="content">
              <h3>How Will You Benefit?</h3>
              <img
                src={images.contentImgfour}
                className="content-imag"
                alt="Content"
              />
              <p style={{ textAlign: "center" }}>
                Navigate the incubation process with these steps.
              </p>
            </div>
          </div>
        </div>

        <div className="container left-container ">
          <div className="img ">
            <img src={images.imgfivefive} alt="Join" />
          </div>
          <div className="text-box mr-[900px] ">
            <h3>Join</h3>
            <p>
              Join the incubation program to start your entrepreneurial journey.
            </p>
          </div>
        </div>
        <div className="container right-container">
          <div className="img">
            <img src={images.imgsixsix} alt="Interview by Mentors" />
          </div>
          <div className="text-box   mr-[900px]">
            <h3>Interview by Mentors</h3>
            <p>
              Engage in one-on-one sessions with industry mentors to refine your
              business model.
            </p>
          </div>
        </div>
        <div className="container left-container">
          <div className="img">
            <img src={images.imgsevenseven} alt="Evaluation Process" />
          </div>
          <div className="text-box   mr-[900px]">
            <h3>Evaluation Process</h3>
            <p>
              Receive feedback and guidance during the evaluation of your
              business idea.
            </p>
          </div>
        </div>
        <div className="container right-container">
          <div className="img">
            <img src={images.imgeighteight} alt="Finalizing" />
          </div>
          <div className="text-box   mr-[900px]">
            <h3>Finalizing</h3>
            <p>Finalize your business plan and prepare for presentation.</p>
          </div>
        </div>
        <div className="container left-container">
          <div className="img">
            <img src={images.imgninenine} alt="Selection" />
          </div>
          <div className="text-box   mr-[900px]">
            <h3>Selection</h3>
            <p>
              Selected startups receive incubation support based on potential
              and feasibility.
            </p>
          </div>
        </div>
        <div className="container right-container">
          <div className="img">
            <img src={images.imgtenten} alt="Incubation Insights" />
          </div>
          <div className="text-box">
            <div className="content">
              <h3>Incubation Insights</h3>
              <img
                src={images.contentImgfive}
                className="content-imag"
                alt="Content"
              />
              <p style={{ textAlign: "center" }}>
                Validate ideas, build prototypes, and prepare for market entry
                through structured mentorship.
              </p>
            </div>
          </div>
        </div>
        <div className="button">
          <button id="apply-button">Apply Now</button>
        </div>
        <div id="animation-end-trigger"></div>
      </div>
    </div>
  );
}
