import React from "react";
import scss from "../../styles/app-gerardg/scss/main.scss";

import dbData from "../../db-data/app-gerardg";

const renderStackConcepts = stackConcepts => {
  if (stackConcepts.length === 0) {
    return;
  }
  return stackConcepts.map((concept, index) => {
    console.log("StackDetailsCard - concept");
    console.log(concept);
    const { name, level } = concept;
    return (
      <div
        key={index}
        className="appgerardg-stack-details-card__container--concept"
      >
        <h6 className="appgerardg-h6 appgerardg-stack-details-card__text--concept">
          {name}
        </h6>
        <h6 className="appgerardg-h6 appgerardg-stack-details-card__text--mastery-level">
          {`Mastery Level: ${level}%`}
        </h6>
        <div className="appgerardg-stack-details-card__container--level">
          <div
            style={{
              backgroundColor: "lightGreen",
              width: `${level}%`,
              height: "100%"
            }}
          ></div>
        </div>
      </div>
    );
  });
};

const GerardgStackDetailsCard = props => {
  const { logoURL, name, stackConcepts, children } = props;

  return (
    <div className="appgerardg-stack-details-card__container">
      <img
        className="appgerardg-stack-details-card__img--logo"
        src={
          logoURL && logoURL !== ""
            ? logoURL
            : dbData.default.mediaURLs.stackIconURL
        }
      />
      <h4 className="appgerardg-h4 appgerardg-stack-details-card__text--name">
        {name}
      </h4>
      <h5 className="appgerardg-h5 appgerardg-stack-details-card__text--details-title">
        {"CONCEPTS AND MASTERY LEVEL"}
      </h5>
      <div className="appgerardg-stack-details-card__container--concepts">
        {renderStackConcepts(stackConcepts)}
      </div>
      {children}
    </div>
  );
};
export default GerardgStackDetailsCard;

GerardgStackDetailsCard.defaultProps = {
  logoURL: dbData.default.mediaURLs.stackIconURL,
  name: "Stack Name",
  stackConcepts: []
};
