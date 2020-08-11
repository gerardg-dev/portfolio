import React from "react";
import scss from "../../styles/app-gerardg/scss/main.scss";

import dbData from "../../db-data/app-gerardg";

const renderImages = (images, onPreviewMediaClick) => {
  if (
    images === undefined ||
    images === null ||
    images === "" ||
    images.length === 0
  ) {
    return <p className="appgerardg-p">NO IMAGES</p>;
  }
  return images.map((img, index) => {
    return (
      <img
        key={index}
        className="appgerardg-project-details-card__img--img-thumb"
        src={img}
        onClick={e => {
          // e.preventDefault();
          onPreviewMediaClick(img, "image");
        }}
      />
    );
  });
};
const renderVideos = (videos, onPreviewMediaClick) => {
  if (
    videos === undefined ||
    videos === null ||
    videos === "" ||
    videos.length === 0
  ) {
    return <p className="appgerardg-p">NO VIDEOS</p>;
  }
  return videos.map((vid, index) => {
    return (
      <img
        key={index}
        className="appgerardg-project-details-card__img--vid-thumb"
        src={dbData.default.mediaURLs.playVideoIconURL}
        onClick={e => {
          // e.preventDefault();
          onPreviewMediaClick(vid, "video");
        }}
      />
    );
  });
};

const GerardgProjectDetailsCard = props => {
  const {
    logoURL,
    name,
    description,
    about,
    techStack,
    videos,
    images,
    githubURL,
    webProdURL,
    webDevURL,
    appleAppStoreURL,
    googlePlayStoreURL,
    amazonAppStoreURL,
    onPreviewMediaClick,
    children
  } = props;

  let isProjectURLs = false;
  if (githubURL !== null && githubURL.length > 0) {
    isProjectURLs = true;
  }
  if (webProdURL !== null && webProdURL.length > 0) {
    isProjectURLs = true;
  }
  if (webDevURL !== null && webDevURL.length > 0) {
    isProjectURLs = true;
  }
  if (appleAppStoreURL !== null && appleAppStoreURL.length > 0) {
    isProjectURLs = true;
  }
  if (googlePlayStoreURL !== null && googlePlayStoreURL.length > 0) {
    isProjectURLs = true;
  }
  if (amazonAppStoreURL !== null && amazonAppStoreURL.length > 0) {
    isProjectURLs = true;
  }

  return (
    <div className="appgerardg-project-details-card__container">
      <img
        className="appgerardg-project-details-card__img--logo"
        src={
          logoURL && logoURL !== ""
            ? logoURL
            : dbData.default.mediaURLs.projectIconURL
        }
      />
      <h4 className="appgerardg-h4 appgerardg-project-details-card__text--name">
        {name}
      </h4>

      <div className="appgerardg-project-details-card__container--text">
        {description !== null && description !== "" && (
          <div style={{ width: "100%" }}>
            <h5 className="appgerardg-h5 appgerardg-project-details-card__text--about-title">
              {"DESCRIPTION"}
            </h5>
            <p className="appgerardg-p appgerardg-project-details-card__text--parr">
              {description}
            </p>
          </div>
        )}
        {about !== null && about !== "" && (
          <div style={{ width: "100%" }}>
            <h5 className="appgerardg-h5 appgerardg-project-details-card__text--about-title">
              {"ABOUT"}
            </h5>
            <p className="appgerardg-p appgerardg-project-details-card__text--parr">
              {about}
            </p>
          </div>
        )}
        {techStack !== null && techStack !== "" && (
          <div style={{ width: "100%" }}>
            <h5 className="appgerardg-h5 appgerardg-project-details-card__text--about-title">
              {"TECH STACK"}
            </h5>
            <p className="appgerardg-p appgerardg-project-details-card__text--parr">
              {"HTML, CSS, SCSS, Javascript, Typescript, ReactJS, Firebase."}
            </p>
          </div>
        )}

        {/* RENDER IMAGES TITLE EVEN IF NO IMAGES ADDED */}
        {/*
        <div style={{ width: "100%" }}>
          <h5 className="appgerardg-h5 appgerardg-project-details-card__text--about-title">
            {"IMAGES"}
          </h5>
          {renderImages()}
        </div>
        */}

        {/* RENDER IMAGES TITLE ONLY IF IMAGES ADDED */}
        {images !== null && images !== "" && images.length > 0 && (
          <div style={{ width: "100%" }}>
            <h5 className="appgerardg-h5 appgerardg-project-details-card__text--about-title">
              {"IMAGES"}
            </h5>
            {renderImages(images, onPreviewMediaClick)}
          </div>
        )}

        {/* RENDER VIDEOS TITLE ONLY IF VIOEOS ADDED */}
        {videos !== null && videos !== "" && videos.length > 0 && (
          <div style={{ width: "100%" }}>
            <h5 className="appgerardg-h5 appgerardg-project-details-card__text--about-title">
              {"VIDEOS"}
            </h5>
            {renderVideos(videos, onPreviewMediaClick)}
          </div>
        )}
      </div>

      {isProjectURLs && (
        <h5 className="appgerardg-h5 appgerardg-project-details-card__text--about-title">
          {"PROJECT URLs"}
        </h5>
      )}

      {githubURL !== null && githubURL !== "" && (
        <a
          className="
          appgerardg-project-details-card__link
          appgerardg-project-details-card__link--github
          "
          href={githubURL}
          target="_blank"
        >
          <p className="appgerardg-p appgerardg-project-details-card__text--github">
            {"GITHUB"}
          </p>
        </a>
      )}

      {webProdURL !== null && webProdURL !== "" && (
        <a
          className="
          appgerardg-project-details-card__link
          appgerardg-project-details-card__link--web-prod
          "
          href={webProdURL}
          target="_blank"
        >
          <p className="appgerardg-p appgerardg-project-details-card__text--web-prod">
            {"WEB"}
          </p>
        </a>
      )}

      {webDevURL !== null && webDevURL !== "" && (
        <a
          className="
          appgerardg-project-details-card__link
          appgerardg-project-details-card__link--web-dev
          "
          href={webDevURL}
          target="_blank"
        >
          <p className="appgerardg-p appgerardg-project-details-card__text--web-dev">
            {"WEB (DEVELOPMENT)"}
          </p>
        </a>
      )}

      {appleAppStoreURL !== null && appleAppStoreURL !== "" && (
        <a
          className="
          appgerardg-project-details-card__link
          appgerardg-project-details-card__link--apple-app-store
          "
          href={appleAppStoreURL}
          target="_blank"
        >
          <p className="appgerardg-p appgerardg-project-details-card__text--apple-app-store">
            {"APPLE APP STORE"}
          </p>
        </a>
      )}

      {googlePlayStoreURL !== null && googlePlayStoreURL !== "" && (
        <a
          className="
          appgerardg-project-details-card__link
          appgerardg-project-details-card__link--google-play-store
          "
          href={googlePlayStoreURL}
          target="_blank"
        >
          <p className="appgerardg-p appgerardg-project-details-card__text--google-play-store">
            {"GOOGLE PLAY STORE"}
          </p>
        </a>
      )}

      {amazonAppStoreURL !== null && amazonAppStoreURL !== "" && (
        <a
          className="
          appgerardg-project-details-card__link
          appgerardg-project-details-card__link--amazon-app-store
          "
          href={amazonAppStoreURL}
          target="_blank"
        >
          <p className="appgerardg-p appgerardg-project-details-card__text--amazon-app-store">
            {"AMAZON APP STORE"}
          </p>
        </a>
      )}
      {children}
    </div>
  );
};
export default GerardgProjectDetailsCard;

GerardgProjectDetailsCard.defaultProps = {
  logoURL: dbData.default.mediaURLs.projectIconURL,
  name: "Project Name",
  description: null,
  about: null,
  techStack: null,
  videos: null,
  images: null,
  onPreviewMediaClick: () => console.log("Clicked!"),
  githubURL: null,
  webProdURL: null,
  webDevURL: null,
  appleAppStoreURL: null,
  googlePlayStoreURL: null,
  amazonAppStoreURL: null
};
