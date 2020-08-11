import React from "react";
import scss from "../../styles/app-gerardg/scss/main.scss";

import dbData from "../../db-data/app-gerardg";

const GerardgStackCard = props => {
  const { logoURL, name, level, onClick } = props;
  return (
    <div
      className="appgerardg-stack-card__container"
      onClick={e => {
        // e.preventDefault();
        onClick();
      }}
    >
      <img
        className="appgerardg-stack-card__img"
        src={
          logoURL && logoURL !== ""
            ? logoURL
            : dbData.default.mediaURLs.stackIconURL
        }
      />
      <h5 className="appgerardg-h5 appgerardg-stack-card__text">{name}</h5>
      <div className="appgerardg-stack-card__container--level">
        <div
          style={{
            backgroundColor: "lightGreen",
            width: `${level}%`,
            height: "100%"
          }}
        ></div>
      </div>
      {level && parseInt(level) === 0 && (
        <p className="appgerardg-p appgerardg-stack-card__text--level">
          {"LEARNING"}
        </p>
      )}
      {level && parseInt(level) > 0 && parseInt(level) <= 25 && (
        <p className="appgerardg-p appgerardg-stack-card__text--level">
          {"BASIC"}
        </p>
      )}
      {level && parseInt(level) > 25 && parseInt(level) <= 50 && (
        <p className="appgerardg-p appgerardg-stack-card__text--level">
          {"MEDIUM"}
        </p>
      )}
      {level && parseInt(level) > 50 && parseInt(level) <= 75 && (
        <p className="appgerardg-p appgerardg-stack-card__text--level">
          {"MEDIUM ADVANCED"}
        </p>
      )}
      {level && parseInt(level) > 75 && parseInt(level) <= 99 && (
        <p className="appgerardg-p appgerardg-stack-card__text--level">
          {"ADVANCED"}
        </p>
      )}
      {level && parseInt(level) === 100 && (
        <p className="appgerardg-p appgerardg-stack-card__text--level">
          {"EXPERT"}
        </p>
      )}
    </div>
  );
};
export default GerardgStackCard;

GerardgStackCard.defaultProps = {
  logoURL: dbData.default.mediaURLs.stackIconURL,
  name: "Stack Name",
  level: "50",
  onClick: () => console.log("Stack Clicked!")
};
