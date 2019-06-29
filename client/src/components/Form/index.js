import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Button, Alert } from 'react-bootstrap';
import HeaderComponent from "../Header/header";
import './style.css'


var firebase = require('firebase');
// require('firebase/storage');
var firebaseConfig = {


    apiKey: "AIzaSyDm3P5EmlNJSrtXiEUGWG1EM7hLdnJOLs8",
    authDomain: "buddy-b5bf1.firebaseapp.com",
    databaseURL: "https://buddy-b5bf1.firebaseio.com",
    projectId: "buddy-b5bf1",
    storageBucket: "buddy-b5bf1.appspot.com",
    messagingSenderId: "322870274050",
    appId: "1:322870274050:web:45179035a634f7c0"


};

//initialize app

firebase.initializeApp(firebaseConfig);

 //global vars  
 var image = null;
 var video = null; 

 //var imageURL = null;
 //var videoURL = null;

 
var storage = firebase.storage();





class ShelterForm extends React.Component {
  // Setting the initial values of this.state.username and this.state.password
  // state = {
  //   username: "",
  //   password: ""
  // };



  // // handle any changes to the input fields
  // handleInputChange = event => {
  //   // Pull the name and value properties off of the event.target (the element which triggered the event)
  //   const { name, value } = event.target;

  //   // Set the state for the appropriate input field
  //   this.setState({
  //     [name]: value

    
  //   });



  // };

  // When the form is submitted, prevent the default event and alert the username and password
  handleImageFormSubmit = (event) => {
    event.preventDefault();

    image = document.querySelector('input.image[type=file]').files[0];
    console.log("uploading " + image.name);

   

    // var name = image.name;

    var storageRef = storage.ref(`/image/${image.name}`);

    storageRef.put(image).then(function(snapshot){
       // console.log(snapshot);
       storageRef.getDownloadURL().then(function (imageURL){
        
           console.log(imageURL);
           console.log("send image to database")
          //  imageURL = globalImageURL;
          alert("Successfully Uploaded");
           return;
          //  console.log("globalImageURL");
          //  console.log(globalImageURL);
       })
    })
   

   // var name = image.name;

  //   const storageRef = storage.ref(`/image/${name}`);

  //   storageRef.put(photo).then(function(snapshot){
  //      // console.log(snapshot);
  //      storageRef.getDownloadURL().then(function (photoURL){
  //          //save downloadurl to state
  //          console.log(photoURL)
  //     //.then //video upload
  //   //})
  // )};

  };


  handleVideoFormSubmit = (event) => {
    event.preventDefault();

   


    video = document.querySelector('input.video[type=file]').files[0];
    console.log("uploading " + video.name);
  
    // var name = video.name;

    var storageRef = storage.ref(`/video/${video.name}`);

    storageRef.put(video).then(function(snapshot){
       // console.log(snapshot);
       storageRef.getDownloadURL().then(function (videoURL){
        // videoURL = globalVideoURL;
        console.log(videoURL);
        console.log("send video to database")

        alert("Successfully Uploaded");
        return videoURL;
        // console.log("globalImageURL");
        // console.log(globalVideoURL);
       })
    })

   // var name = image.name;

  //   const storageRef = storage.ref(`/image/${name}`);

  //   storageRef.put(photo).then(function(snapshot){
  //      // console.log(snapshot);
  //      storageRef.getDownloadURL().then(function (photoURL){
  //          //save downloadurl to state
  //          console.log(photoURL)
  //     //.then //video upload
  //   //})
  // )};

  };



  
  render() {
    return (
      <>
      <div className="form-page">

        <div>
          <HeaderComponent></HeaderComponent>
        </div>

<div className="search-test">
       <Form>
  <Form.Group as={Row} >
    <Form.Label column sm={1}>
      Name
    </Form.Label>
    <Col sm={5}>
      <Form.Control type="email" placeholder="Specify the dog name" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} >
    <Form.Label column sm={1}>
      Breed
    </Form.Label>
    <Col sm={5}>
      <Form.Control type="email" placeholder="Specify the dog breed or mix" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} >
    <Form.Label column sm={1}>
      Age
    </Form.Label>
    <Col sm={5}>
      <Form.Control type="email" placeholder="Specify the dog age" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} >
    <Form.Label column sm={1}>
      Shelter Name
    </Form.Label>
    <Col sm={5}>
      <Form.Control type="email" placeholder="Specify the shelter name" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} >
    <Form.Label column sm={1}>
      Shelter Address
    </Form.Label>
    <Col sm={5}>
      <Form.Control type="email" placeholder="Specify the shelter address" />
    </Col>
  </Form.Group>







      {/* <h2>Video Upload</h2> */}
     <input type="file" accept="video/mp4" class="video"/>
     <input type="submit" onClick={this.handleVideoFormSubmit} class="vidSubmit" value="upload video"/>


     {/* <h2>Image Upload</h2> */}
     <input type="file" accept="image/jpg" class="image"/>
     <input type="submit" onClick={this.handleImageFormSubmit} class="imgSubmit" value="upload image"/>

     <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Submit</Button>
    </Col>

  </Form.Group>
</Form>

  </div>
  </div>

    </>
    );
  }
}

export default ShelterForm;