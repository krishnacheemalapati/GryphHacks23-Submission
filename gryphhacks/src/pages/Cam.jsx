import * as ml5 from "ml5";
import React from 'react'
import Header from '../sitewide/Header.jsx'
import Footer from './../sitewide/Footer'
import LandingBody from './LandingBody'
import Webcam from "react-webcam";
import {useEffect, useRef} from "react";
import switchCam from "./Layout"
const dimensions = {
  width: 800,
  height: 600
}
function Cam() {

  const webcamRef = useRef();
  const canvasRef = useRef();
  const { width, height } = dimensions;

  useEffect(() => {
    let detectionInterval;

    const modelLoaded = () => {
      webcamRef.current.video.width = width;
      webcamRef.current.video.height = height;
      canvasRef.current.width = width;
      canvasRef.current.height = height;


      detectionInterval = setInterval(() => {
        try {
            detect();
        } catch (error) {
            clearInterval(detectionInterval);
        }
      }, 200);
    };

    const objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    const detect = () => {
      if (webcamRef.current.video.readyState !== 4) {
        console.warn('Video not ready yet');
        return;
      }

      objectDetector.detect(webcamRef.current.video, (err, results) => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, width, height);
        if (results && results.length) {
          results.forEach((detection) => {
            ctx.beginPath();
            ctx.fillStyle = "#FF0000";
            const { label, x, y, width, height } = detection;
            ctx.fillText(label, x, y - 5);
            ctx.rect(x, y, width, height);
            ctx.stroke();
          });
        }
      });
    };

    return () => {
      if (detectionInterval) {
        clearInterval(detectionInterval);
      }
    }

  }, [width, height]);

  return (
      <div>
        <Header />
        <div className="videoPortion">
        <div className="videoFeed">
          <Webcam ref={webcamRef} className="webcam"/>
          <canvas ref={canvasRef} className="canvas"/>
        </div>
        <div className="para-with-subtext camerapage">
            <div className="subtext">
              <strong>Detected Signs:</strong>
            </div>
            <div className="para-text">
            Our tool allows users to instantly determine the desired sign being 
            used to communicate through the video feed using machine learning
            models to provide high accuracy predictions
            </div>
        </div>  
        </div>
        <Footer className="lessGap"/>
      </div>
  );
}

export default Cam;
