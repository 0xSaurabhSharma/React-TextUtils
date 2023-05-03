import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText); // setText changes the value of text
    props.showAlert("Text Captilized Successfully", "success");
  };
  const handleLowClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText); // setText changes the value of text
    props.showAlert("Text Small Cased Successfully", "success");
  };
  const handleReverseClick = () => {
    // console.log("Uppercase was clicked" + text);

    const stringArray = text.split("");
    const stringReverse = stringArray.reverse();
    const stringJoin = stringReverse.join("");
    console.log(stringJoin);
    console.log(typeof stringJoin);
    setText(stringJoin); // setText changes the value of text
    props.showAlert("Text Reversed successfully", "success");
  };

  // onChange also provides us with event object which can be used
  const handleOnChange = (event) => {
    // console.log("On Change ");
    setText(event.target.value);
    // what is target in event
    // here we are handling 2 events: onChange, onClick,
  };

  const handleCopyClick = () => {
    var text = document.getElementById("outBox");
    text.select();
    navigator.clipboard
      .writeText(text.value)
      .then(() => {
        alert("successfully copied");
      })
      .catch(() => {
        alert("something went wrong");
      });
    props.showAlert("Text Copied To Clipboard", "success");
  };

  const [text, setText] = useState("");
  // array destructuring syntex: we need to use updation function to set var in array

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "#34383d" : "white",
          color: props.mode === "light" ? "#34383d" : "white",
        }}>
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            placeholder="Enter your text here"
            className="form-control col-3"
            id="myBox"
            rows="5"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#505356" : "white",
              color: props.mode === "light" ? "#34383d" : "white",
            }}

            // what is default visual text in textarea, how to use it
          ></textarea>
          <h2>Preview</h2>
          <textarea
            className="form-control col-3"
            id="outBox"
            disabled
            rows="5"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#505356" : "white",
              color: props.mode === "light" ? "#34383d" : "white",
            }}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          LOWERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReverseClick}>
          REVERSE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          COPY
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words, {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} Minutes to read</p>
      </div>
    </>
    // a button to find word and replace it with another word
  );
}
