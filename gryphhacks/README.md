# AI SIGN

## About

AI SIGN is an application that utilizes computer vision to translate ASL hand movements and signs captured by a webcam into English text. The application detects hand gestures and movements in real-time and processes them to determine the corresponding sign language interpretation. The translated text is then displayed on the screen, enabling users to understand and communicate effectively with those using sign language.

## Contributors ✨

Our hackathon team consisted of:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://krishnacheemalapati.github.io/"><img src="https://avatars.githubusercontent.com/u/45082599?v=4" width="100px;" alt="Krishna Cheemalapati"/><br /><sub><b>Krishna Cheemalapati</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ConverseScholar"><img src="https://avatars.githubusercontent.com/u/97484565?v=4" width="100px;" alt="Chhavi Shah"/><br /><sub><b>Chhavi Shah</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/joutad"><img src="https://avatars.githubusercontent.com/u/72181663?v=4" width="100px;" alt="Joudat Haroon"/><br /><sub><b>Joudat Haroon</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/DevinForr"><img src="https://avatars.githubusercontent.com/u/117605849?v=4" width="100px;" alt="Devin Forrest"/><br /><sub><b>Devin Forrest</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Development Overview

Technologies and frameworks implemented in the production of AI SIGN: 

Machine Learning / Deep Learning: We trained a deep learning model using convolutional neural networks (CNNs) to recognize different sign language gestures. The model was trained on a custom dataset of sign language images to achieve accurate gesture recognition. Libraries such as TensorFlow, NumPy, Pandas, Tensorflow.js, and more were core to the model's development.

Computer Vision: We utilized computer vision algorithms and libraries such as OpenCV to process the video stream from the webcam. These algorithms helped in detecting and tracking hand movements and gestures.

Webcam Integration: We used libraries and APIs to capture video frames from the webcam in real-time. These frames were then passed through the computer vision and deep learning modules for gesture recognition and translation, using the model that we developed and trained over the course of the hackathon weekend. 

User Interface (UI): We designed a user-friendly interface that displayed the translated text in real-time. The UI allows users to easily interact with the application and understand the sign language translations. Large and easy to read text with high contrast, alt-text in case of image download failure, and more make this website extremely accessible to a users from various backgrounds.

Integration and Deployment: Once the core functionality was implemented, we integrated all the components and tested the application extensively. We ensured compatibility across different platforms (i.e. Mac and Windows) and deployed instances of the website locally.

## How to Use AI SIGN

To run this project locally, clone the project directory. Then run 

### `npm install`

This will install the required packages and node modules to run the React application. Then, you can run

### `npm start`

to run the app locally in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.





