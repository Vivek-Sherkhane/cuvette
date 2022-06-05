import React, { useEffect, useState } from "react";
import "./body.css";
import html from "../../assets/html.png";
import trophy from "../../assets/trophy.png";
import tick from "../../assets/tick.png";
import clip from "../../assets/clip.png";
import graph from "../../assets/graph.png";
import { syllabusAnalysis } from "../../Data";
import { graphData } from "../../Data";
import Progressbar from "../progressbar/Progressbar";
import Circularprogress from "../circularprogress/Circularprogress";
import UpdateModal from "../modal/UpdateModal";
import Chart from "chart.js/auto";

function Body() {
  const [open, setOpen] = useState(false);
  const [rank, setRank] = useState("12890");
  const [percentile, setPercentile] = useState("37");
  const [score, setScore] = useState("07");
  var myChart = null;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdate = ({ rank2, score2, percentile2 }) => {
    setRank(rank2);
    setScore(score2);
    setPercentile(percentile2);
  };

  window.onload = function () {
    const ctx = document.getElementById("chart").getContext("2d");
    if (myChart != null) {
      myChart.destroy();
    }

    const arbitraryLine = {
      id: "arbitraryLine",
      beforeDraw(chart, args, options) {
        const {
          ctx,
          chartArea: { top, right, bottom, left, width, height },
          scales: { x, y },
        } = chart;
        ctx.save();

        ctx.strokeStyle = "red";
        ctx.strokeRect(x.getPixelValue(`${percentile}`), top, 0, height);
        ctx.restore();
      },
    };

    myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: graphData.x,
        datasets: [
          {
            data: graphData.y,
            fill: false,
            backgroundColor: "#142683",
            borderColor: "#142683",
            lineTension: 0.4,
          },
        ],
      },
      options: {
        scales: {
          x: {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 6,
              min: 0,
              max: 100,
              // stepSize: 20,
            },
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              display: false,
              beginAtZero: true,
              min: 0,
              max: 100,
              stepSize: 20,
            },

            grid: {
              display: false,
            },
          },
        },
        plugins: {
          arbitraryLine,
          legend: {
            position: "top",
            display: false,
          },
          title: {
            display: false,
            text: "Chart.js Line Chart",
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
      },
    });
  };

  return (
    <div className="body">
      <div className="bodyHeading">
        <h2 className="lighter">Skill Test</h2>
      </div>

      {/* skill div starts here */}

      <div className="row skill">
        <div className="row">
          <img src={html} className="small" />
          <div className="details">
            <strong>Hypertext Markup Language</strong>
            <p>Questions: 08 | Duration: 15 min | Submitted on: 5 June 2021</p>
          </div>
        </div>
        <button className="btn" onClick={handleOpen}>
          Update
        </button>
        {open && (
          <UpdateModal
            handleClose={handleClose}
            handleUpdate={handleUpdate}
            open={open}
            rank={rank}
            percentile={percentile}
            score={score}
          />
        )}
      </div>

      {/* skill div ends here */}

      {/* statistics starts here */}
      <div className="statistics">
        <h2>Quick Statistics</h2>
        <div className="row statsContainer">
          <div className="statsItem">
            <span className="imageSpan">
              <img src={trophy} className="medium" />
            </span>
            <div className="statsData">
              <strong>{rank}</strong>
              <p>YOUR RANK</p>
            </div>
          </div>
          <div className="statsItem">
            <span className="imageSpan">
              <img src={clip} className="medium" />
            </span>
            <div className="statsData">
              <strong>{`${percentile}%`}</strong>
              <p>PERCENTILE</p>
            </div>
          </div>
          <div className="statsItem">
            <span className="imageSpan">
              <img src={tick} className="medium" />
            </span>
            <div className="statsData">
              <strong>{`${score} / 15`}</strong>
              <p>CORRECT ANSWERS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Statistics ends here */}

      {/* Graph starts here */}
      <div className="graphContainer">
        <div className="row graphTop">
          <div className="graphText">
            <h2 style={{ color: "#1E272E" }}>Comaprison Graph</h2>
            <span className="">
              <strong>{`You scored ${percentile} percentile`} </strong>
              which is lower than the average percentile 72% of all the
              engineers who took assesment
            </span>
          </div>
          <div className="graphIcon">
            <span className="imageSpan">
              <img src={graph} className="medium" />
            </span>
          </div>
        </div>
        <div className="graphBottom">
          <canvas
            id="chart"
            style={{
              height: "100%",
              width: "100%",
              margin: "0 auto",
            }}
          >
            {/* <Line data={data} /> */}
          </canvas>
        </div>
      </div>

      {/* Gaph ends here */}

      {/* syllabus analysis starts here */}

      <div className="syllabusAnalysisContainer">
        <h2>Syllabus Wise Analysis</h2>
        <div className="syllabusWrapper">
          {syllabusAnalysis.map((item) => {
            return (
              <div className="analysisItem">
                {" "}
                <Progressbar key={item.id} item={item} />{" "}
              </div>
            );
          })}
        </div>
      </div>
      {/* syllabus analysis ends here */}

      {/* Question analysis starts here */}

      <div className="questionAnalysisContainer">
        <Circularprogress answered={score} total={15} />
      </div>

      {/* Question analysis ends here */}
    </div>
  );
}

export default Body;
