import React from "react";
import scss from "../../styles/app-gerardg/scss/main.scss";

import dbData from "../../db-data/app-gerardg";

const GerardgUserCard = props => {
  const { photoURL, name, title } = props;

  return (
    <div className="appgerardg-user-card__container">
      <div className="appgerardg-user-card__container--blurred">
        <div className="appgerardg-user-card__container--content">
          <img className="appgerardg-user-card__img" src={photoURL} />
          <div className="appgerardg-user-card__container--text">
            <h3 className="appgerardg-h3">{name}</h3>
            <br />
            <h4 className="appgerardg-h4">{title}</h4>
            <hr
              style={{
                border: "solid rgba(255,255,255,0.25) 1px",
                width: "100%"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GerardgUserCard;

GerardgUserCard.defaultProps = {
  photoURL: dbData.default.mediaURLs.profileBackgroundPhotoURL,
  name: "Full Name",
  title: "Profile Title"
};
