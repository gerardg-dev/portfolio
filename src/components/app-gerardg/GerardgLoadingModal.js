import React from "react";
import scss from "../../styles/app-gerardg/scss/main.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

const GerardgLoadingModal = () => {
  return (
    <div className="appgerardg-modal__container">
      <div
        style={{
          backgroundColor: "rgba(0,0,0,1)",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white"
        }}
      >
        <CircularProgress color="inherit" size={100} thickness={1} />
      </div>
    </div>
  );
};
export default GerardgLoadingModal;
