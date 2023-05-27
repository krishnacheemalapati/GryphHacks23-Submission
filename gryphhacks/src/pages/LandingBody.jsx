import React from "react";
import { useNavigate } from "react-router-dom";
import mainImg from "./../Images/mainImg.gif"
import visImg from "./../Images/ASL.jpeg"
import vfImg from "./../Images/transcript.jpg"

export default function LandingBody() {
  const navigate = useNavigate();

  const onClickDemo = (e) => {
    navigate("/demo")
  }
  return (
    <div>
      <div className="HeroSection">
        <img className="Mainimg" src={mainImg} alt="Main Feature Gif"></img>
        <div className="join">
          <div className="main-text">
          Communicate through sign language with <strong>ease.</strong>
          </div>
          <div className="buttonp join-button" onClick={onClickDemo}>Try it out</div>
        </div>
      </div>
      <div className="LandingPage page">
        <div>
          <div className="create-text" id="feature">
          Communicate through sign language with <strong>ease.</strong>
          </div>
        </div>
        <div className="para left">
          <img className="para-img" src={visImg} alt="Visualization"></img>
          <div className="para-with-subtext">
            <div className="subtext">
              <strong>Convert your ASL to text instantly</strong>
            </div>
            <div className="para-text">
            Our tool allows users to instantly determine the desired sign being 
            used to communicate through the video feed using machine learning
            models to provide high accuracy predictions
            </div>
          </div>
        </div>
        <div className="para right">
          <div className="para-with-subtext">
            <div className="subtext">
              <strong>Export transcripts for longer conversations</strong>
            </div>
            <div className="para-text">
              Instead of having to import each intent manually, our voiceflow
              integration allows users to create Voiceflow intent blocks with
              the click of a button, improving development times dramatically!
            </div>
          </div>
          <img
            className="para-img"
            src={vfImg} alt="Voiceflow Integration"></img>
        </div>
        <div>
          <div className="final-join">
            <div className="final-join-text">
            ASL is not a widely known language. <br></br>
            But that doesn’t mean it has to stop you from communicating.
            </div>
            <div className="buttons">
              <div className="registerbtn">
                <div className="register-button newbtni" role="button" onClick={onClickDemo}>Try it out</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}