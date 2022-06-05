import React, { useEffect } from "react";
import target from "../../assets/target.png";
import "./circularprogress.css";

function Circularprogress({ answered, total }) {
  var progressStart = 0;
  var progressEnd = Math.floor((answered / total) * 100);

  useEffect(() => {
    var progressBar = document.getElementsByClassName("circularProgress")[0];
    const progress = setInterval(() => {
      progressStart++;

      progressBar.style.backgroundImage = `conic-gradient(#4d5bf9 ${
        progressStart * 3.6
      }deg,#f7f8fa ${progressStart * 3.6}deg)`;

      if (progressStart >= progressEnd) {
        clearInterval(progress);
      }
    }, 50);
  }, [answered]);

  return (
    <>
      <div className="row quetionAnalysisHeading">
        <h2 style={{ color: "#1E272E" }}>Question Analysis</h2>
        <h2 style={{ color: "#438AF6" }}>{`${answered} / ${total}`}</h2>
      </div>
      <span className="questionAnalysisText">
        <strong>
          {`You scored ${answered} questions correct out of ${total} questions.`}{" "}
        </strong>
        However it still needs some improvments.
      </span>

      <div className="questionAnalysisProgress">
        <div className="circularProgress">
          <div className="circularCenter">
            <img src={target} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Circularprogress;
