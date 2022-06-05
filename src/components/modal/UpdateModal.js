import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./modal.css";
import html from "../../assets/html.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function UpdateModal({
  handleClose,
  handleUpdate,
  open,
  rank,
  percentile,
  score,
}) {
  const [rank2, setRank2] = useState(rank);
  const [percentile2, setPercentile2] = useState(percentile);
  const [score2, setScore2] = useState(score);

  const handleSubmit = () => {
    handleUpdate({ rank2, score2, percentile2 });
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modalBox">
          <div className="row top">
            <h1>Update Scores</h1>
            <img src={html} alt="html.png" />
          </div>
          <div className="center">
            <div className="centerWrapper">
              <form className="form">
                <div className="inputItem">
                  <div className="inputItemText">
                    <span className="index ">1</span>
                    <span style={{ color: "#566474" }}>
                      Update your <strong>Rank</strong>
                    </span>
                  </div>
                  <input
                    type="text"
                    value={rank2}
                    onChange={(e) => setRank2(e.target.value)}
                  />
                </div>
                <div className="inputItem">
                  <div className="inputItemText">
                    <span className="index">2</span>
                    <span style={{ color: "#566474" }}>
                      Update your <strong>Percentile</strong>
                    </span>
                  </div>
                  <input
                    type="text"
                    value={percentile2}
                    onChange={(e) => setPercentile2(e.target.value)}
                  />
                </div>
                <div className="inputItem">
                  <div className="inputItemText">
                    <span className="index">3</span>
                    <span style={{ color: "#566474" }}>
                      Update your <strong>current score (out of 15)</strong>
                    </span>
                  </div>
                  <input
                    type="text"
                    value={score2}
                    onChange={(e) => setScore2(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="bottom">
            <Button
              variant="outlined"
              style={{ color: "#142683", border: "1px solid #142683" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              style={{ color: "#fff", background: "#142683" }}
              endIcon={<ArrowRightAltIcon />}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default UpdateModal;
