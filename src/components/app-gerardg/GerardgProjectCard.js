import React from "react";
import scss from "../../styles/app-gerardg/scss/main.scss";

import dbData from "../../db-data/app-gerardg";

const GerardgProjectCard = props => {
  const { onClick, name, logoURL } = props;
  return (
    <button
      className="appgerardg-project-card__container appgerardg-project-card__button"
      onClick={e => {
        // e.preventDefault();
        onClick();
      }}
    >
      <img
        className="appgerardg-project-card__img"
        src={
          logoURL && logoURL !== ""
            ? logoURL
            : dbData.default.mediaURLs.projectIconURL
        }
      />
      <h5 className="appgerardg-h5 appgerardg-project-card__text--title">
        {name}
      </h5>
    </button>
  );
};
export default GerardgProjectCard;

GerardgProjectCard.defaultProps = {
  onClick: () => console.log("Project Clicked!"),
  name: "Project Name",
  logoURL: dbData.default.mediaURLs.projectIconURL
};
