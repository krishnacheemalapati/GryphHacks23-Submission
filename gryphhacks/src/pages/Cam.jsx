import React from 'react'
import Header from '../sitewide/Header.jsx'
import Footer from './../sitewide/Footer'
import { useNavigate } from "react-router-dom";

import LogoWide from './../Images/LogoWide.png'
import Webcam from "react-webcam";
import {useState, useEffect, useRef} from "react";
// Import dependencies
import * as tf from "@tensorflow/tfjs";
import { nextFrame } from "@tensorflow/tfjs";

function Cam() {

  const navigate = useNavigate;

    const onClickImg = (e) =>{
        navigate("/")
    }

    const onClickPrivacy = (e) =>{
        navigate("/privacy")
    }

  const labelMap = {
    1:{name:'Hello', color:'red'},
    2:{name:'Thank You', color:'yellow'},
    3:{name:'I Love You', color:'lime'},
    4:{name:'Yes', color:'blue'},
    5:{name:'No', color:'purple'},
}

  const [transcript, setTranscript] = useState("");
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            ctx.stroke()
            console.log(transcript + " " + labelMap[text]['name'])
            setTranscript(transcript + " " + labelMap[text]['name'])
        }
    }
}

  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network 
    // e.g. const net = await cocossd.load();
    // https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json
    const net = await tf.loadGraphModel('https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json')
    
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640,480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)
      console.log(obj)

      const boxes = await obj[1].array()
      const classes = await obj[2].array()
      const scores = await obj[4].array()
      
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      
      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)  
      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.7, videoWidth, videoHeight, ctx)}); 
      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)

    }
  };

  useEffect(()=>{runCoco()},[]);

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
                {transcript}
            {/* Our tool allows users to instantly determine the desired sign being 
            used to communicate through the video feed using machine learning
            models to provide high accuracy predictions */}
            </div>
        </div>  
        </div>
        <div className='nav foot page lessGap'>
            <img src={LogoWide} className = "fifteenpercent" alt="AI Sign Logo"  onClick={onClickImg}></img>
            <div className="footer-text">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            © AISign, Inc. 2022. All rights reserved. Use of
            this site constitutes acceptance of our User Agreement and <a href="/privacy" onClick={onClickPrivacy}>Privacy Policy and Cookie Statement</a>.<br></br> 
            The AISign Team may earn a portion of sales from
            products that are purchased through our site as part of our
            Affiliate Partnerships with retailers.<br></br> 
            The material on this site
            may not be reproduced, distributed, transmitted, cached or
            otherwise used, except with the prior written permission of The
            AISign.
            </div>
        </div>
      </div>
  );
}

export default Cam;

// function Cam() {

//   const [transcript, setTranscript] = useState("");
//   const webcamRef = useRef();
//   const canvasRef = useRef();
//   const { width, height } = dimensions;

//   useEffect(() => {
//     let detectionInterval;

//     const modelLoaded = () => {
//       webcamRef.current.video.width = width;
//       webcamRef.current.video.height = height;
//       canvasRef.current.width = width;
//       canvasRef.current.height = height;


//       detectionInterval = setInterval(() => {
//         try {
//             detect();
//         } catch (error) {
//             clearInterval(detectionInterval);
//         }
//       }, 200);
//     };

//     const objectDetector = ml5.objectDetector('cocossd', modelLoaded);

//     const detect = () => {
//       if (webcamRef.current.video.readyState !== 4) {
//         console.warn('Video not ready yet');
//         return;
//       }

//       objectDetector.detect(webcamRef.current.video, (err, results) => {
//         const ctx = canvasRef.current.getContext('2d');
//         ctx.clearRect(0, 0, width, height);
//         if (results && results.length) {
//           results.forEach((detection) => {
//             ctx.beginPath();
//             ctx.fillStyle = "#FF0000";
//             const { label, x, y, width, height } = detection;
//             ctx.fillText(label, x, y - 5);
//             console.log(transcript + " " + label)
//             setTranscript(transcript + " " + label) //replace "z" with
//             ctx.rect(x, y, width, height);
//             ctx.stroke();
//           });
//         }
//       });
//     };

//     return () => {
//       if (detectionInterval) {
//         clearInterval(detectionInterval);
//       }
//     }

//   }, [width, height, transcript]);

//   return (
//       <div>
//         <Header />
//         <div className="videoPortion">
//         <div className="videoFeed">
//           <Webcam ref={webcamRef} className="webcam"/>
//           <canvas ref={canvasRef} className="canvas"/>
//         </div>
//         <div className="para-with-subtext camerapage">
//             <div className="subtext">
//               <strong>Detected Signs:</strong>
//             </div>
//             <div className="para-text">
//                 {transcript}
//             {/* Our tool allows users to instantly determine the desired sign being 
//             used to communicate through the video feed using machine learning
//             models to provide high accuracy predictions */}
//             </div>
//         </div>  
//         </div>
//         <Footer className="lessGap"/>
//       </div>
//   );
// }

// export default Cam;
