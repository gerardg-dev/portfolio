import React from "react";
import scss from "../../styles/app-gerardg/scss/main.scss";

const GerardgErrorModal = props => {
  const { error } = props;
  return (
    <div className="appgerardg-modal__container">
      <div
        style={{
          backgroundColor: "red",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "20px"
        }}
      >
        <h4 className="appgerardg-h4">SOMETHING HAPPENED!</h4>
        <br />
        <br />
        <h5 className="appgerardg-h5">FIREBASE ERROR CODE:</h5>
        <h6 className="appgerardg-h6">{error.code}</h6>
        <br />
        <br />
        <h5 className="appgerardg-h5">FIREBASE ERROR NAME:</h5>
        <h6 className="appgerardg-h6">{error.name}</h6>
        <br />
        <br />
        <h5 className="appgerardg-h5">FIREBASE ERROR MESSAGE:</h5>
        <h6 className="appgerardg-h6">{error.message}</h6>
      </div>
    </div>
  );
};
export default GerardgErrorModal;

GerardgErrorModal.defaultProps = {
  error: ""
};
