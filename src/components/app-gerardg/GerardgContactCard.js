import React from "react";
import scss from "../../styles/app-gerardg/scss/main.scss";

import dbData from "../../db-data/app-gerardg";

const GerardgContactCard = props => {
  const {
    whatsappPhoneNumber1,
    whatsappPhoneNumber2,
    gmailAddress,
    githubProfileURL,
    codepenProfileURL,
    facebookProfileURL,
    instagramProfileURL,
    twitterProfileURL,
    linkedinProfileURL,
    githubUsername,
    codepenUsername,
    facebookUsername,
    instagramUsername,
    twitterUsername,
    linkedinUsername
  } = props;

  return (
    <div className="appgerardg-contact-card__container">
      <div className="appgerardg-contact-card__container--top-poly" />
      <div className="appgerardg-contact-card__container--content">
        {whatsappPhoneNumber1 !== null && whatsappPhoneNumber1 !== "" && (
          <a
            className="appgerardg-contact-card__container--social-info"
            href={"https://web.whatsapp.com/"}
            target="_blank"
          >
            <img
              className="appgerardg-contact-card__img"
              src={dbData.default.mediaURLs.socialMediaLogos.whatsapp}
            />
            <h5 className="appgerardg-h5 appgerardg-contact-card__text">
              {whatsappPhoneNumber1}
            </h5>
          </a>
        )}

        {whatsappPhoneNumber2 !== null && whatsappPhoneNumber2 !== "" && (
          <a
            className="appgerardg-contact-card__container--social-info"
            href={"https://web.whatsapp.com/"}
            target="_blank"
          >
            <img
              className="appgerardg-contact-card__img"
              src={dbData.default.mediaURLs.socialMediaLogos.whatsapp}
            />
            <h5 className="appgerardg-h5 appgerardg-contact-card__text">
              {whatsappPhoneNumber2}
            </h5>
          </a>
        )}

        {gmailAddress !== null && gmailAddress !== "" && (
          <a
            className="appgerardg-contact-card__container--social-info"
            href={"https://gmail.com/"}
            target="_blank"
          >
            <img
              className="appgerardg-contact-card__img"
              src={dbData.default.mediaURLs.socialMediaLogos.gmail}
            />
            <h5 className="appgerardg-h5 appgerardg-contact-card__text">
              {gmailAddress}
            </h5>
          </a>
        )}

        {githubProfileURL !== null && githubProfileURL !== "" && (
          <a
            className="appgerardg-contact-card__container--social-info"
            href={githubProfileURL}
            target="_blank"
          >
            <img
              className="appgerardg-contact-card__img"
              src={dbData.default.mediaURLs.socialMediaLogos.github}
            />
            <h5 className="appgerardg-h5 appgerardg-contact-card__text">
              {`@${githubUsername}`}
            </h5>
          </a>
        )}

        {codepenProfileURL !== null && codepenProfileURL !== "" && (
          <a
            className="appgerardg-contact-card__container--social-info"
            href={codepenProfileURL}
            target="_blank"
          >
            <img
              className="appgerardg-contact-card__img"
              src={dbData.default.mediaURLs.socialMediaLogos.codepen}
            />
            <h5 className="appgerardg-h5 appgerardg-contact-card__text">
              {`@${codepenUsername}`}
            </h5>
          </a>
        )}

        {facebookProfileURL !== null && facebookProfileURL !== "" && (
          <a
            className="appgerardg-contact-card__container--social-info"
            href={facebookProfileURL}
            target="_blank"
          >
            <img
              className="appgerardg-contact-card__img"
              src={dbData.default.mediaURLs.socialMediaLogos.facebook}
            />
            <h5 className="appgerardg-h5 appgerardg-contact-card__text">
              {`@${facebookUsername}`}
            </h5>
          </a>
        )}

        {instagramProfileURL !== null && instagramProfileURL !== "" && (
          <a
            className="appgerardg-contact-card__container--social-info"
            href={instagramProfileURL}
            target="_blank"
          >
            <img
              className="appgerardg-contact-card__img"
              src={dbData.default.mediaURLs.socialMediaLogos.instagram}
            />
            <h5 className="appgerardg-h5 appgerardg-contact-card__text">
              {`@${instagramUsername}`}
            </h5>
          </a>
        )}

        {twitterProfileURL !== null && twitterProfileURL !== "" && (
          <a
            className="appgerardg-contact-card__container--social-info"
            href={twitterProfileURL}
            target="_blank"
          >
            <img
              className="appgerardg-contact-card__img"
              src={dbData.default.mediaURLs.socialMediaLogos.twitter}
            />
            <h5 className="appgerardg-h5 appgerardg-contact-card__text">
              {`@${twitterUsername}`}
            </h5>
          </a>
        )}

        {linkedinProfileURL !== null && linkedinProfileURL !== "" && (
          <a
            className="appgerardg-contact-card__container--social-info"
            href={linkedinProfileURL}
            target="_blank"
          >
            <img
              className="appgerardg-contact-card__img"
              src={dbData.default.mediaURLs.socialMediaLogos.linkedin}
            />
            <h5 className="appgerardg-h5 appgerardg-contact-card__text">
              {`@${linkedinUsername}`}
            </h5>
          </a>
        )}

        <div className="appgerardg-contact-card__container--vertical-line" />
      </div>
      <div className="appgerardg-contact-card__container--bottom-poly" />
    </div>
  );
};
export default GerardgContactCard;

GerardgContactCard.defaultProps = {
  whatsappPhoneNumber1: null,
  whatsappPhoneNumber2: null,
  gmailAddress: null,
  githubProfileURL: null,
  codepenProfileURL: null,
  facebookProfileURL: null,
  instagramProfileURL: null,
  twitterProfileURL: null,
  linkedinProfileURL: null,
  //
  githubUsername: null,
  codepenUsername: null,
  facebookUsername: null,
  instagramUsername: null,
  twitterUsername: null,
  linkedinUsername: null
};
