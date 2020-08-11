import React from "react";
import scss from "../../styles/app-gerardg/scss/main.scss";

const GerardgAboutCard = props => {
  const { title, description } = props;

  return (
    <div className="appgerardg-about-card__container">
      <div className="appgerardg-about-card__container--poly" />
      <div className="appgerardg-about-card__container--content">
        <h4 className="appgerardg-h4 appgerardg-about-card__text--title">
          {title}
        </h4>
        <div className="appgerardg-about-card__container--vertical-line" />
        <p className="appgerardg-p appgerardg-about-card__text--p">
          {description}
        </p>
      </div>
    </div>
  );
};
export default GerardgAboutCard;

GerardgAboutCard.defaultProps = {
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};
