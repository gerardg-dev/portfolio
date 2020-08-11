import React from "react";
import { connect } from "react-redux";

import { getLandingData } from "../../../thunks/app-gerardg/Landing";

import scss from "../../../styles/app-gerardg/scss/main.scss";

import mp4VideoSrc from "../../../assets/app-gerardg/bg-video.mp4";
// import webmVideoSrc from "../../../assets/app-gerardg/bg-video.webm";
// import bgImgSrc from "../../../assets/app-gerardg/bg-video.jpg";

import GerardgUserCard from "../../../components/app-gerardg/GerardgUserCard";
import GerardgStackCard from "../../../components/app-gerardg/GerardgStackCard";
import GerardgStackDetailsCard from "../../../components/app-gerardg/GerardgStackDetailsCard";
import GerardgProjectCard from "../../../components/app-gerardg/GerardgProjectCard";
import GerardgProjectDetailsCard from "../../../components/app-gerardg/GerardgProjectDetailsCard";
import GerardgAboutCard from "../../../components/app-gerardg/GerardgAboutCard";
import GerardgContactCard from "../../../components/app-gerardg/GerardgContactCard";
import GerardgLoadingModal from "../../../components/app-gerardg/GerardgLoadingModal";
import GerardgErrorModal from "../../../components/app-gerardg/GerardgErrorModal";
import GerardgModal from "../../../components/app-gerardg/GerardgModal";

import dbData from "../../../db-data/app-gerardg";

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldRenderLoadingModal: false,
      shouldRenderStackDetailsModal: false,
      shouldRenderProjectDetailsModal: false,
      shouldRenderMediaPreviewModal: false,
      selectedStack: null,
      selectedProject: null,
      projectIndex: null,
      mediaURL: null,
      mediaType: null
    };
  }

  async componentDidMount() {
    await this.props.getLandingData();
  }

  renderBackground = () => {
    return (
      <div className="appgerardg-bg-video">
        <video
          className="appgerardg-bg-video__content"
          autoPlay
          loop
          muted
          playsInline={true}
          disablePictureInPicture={true}
          poster={
            this.props &&
            this.props.user &&
            this.props.user.profile &&
            this.props.user.profile.background_photo_url &&
            this.props.user.profile.background_photo_url !== ""
              ? this.props.user.profile.background_photo_url
              : dbData.default.mediaURLs.profileBackgroundPhotoURL
          }
        >
          {/* type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' */}
          {/* type='video/webm;codecs="vp8, vorbis"' */}
          {/* <source src={mp4VideoSrc} type="video/mp4" /> */}
          {/* <source src={webmVideoSrc} type="video/webm" /> */}
          {this.props &&
            this.props.user &&
            this.props.user.profile &&
            this.props.user.profile.show_background_video &&
            this.props.user.profile.show_background_video === true && (
              <source src={mp4VideoSrc} type="video/mp4" />
            )}
          {/*Your browser does not support the video tag.*/}
        </video>
      </div>
    );
  };

  renderUserProfile = () => {
    return (
      <GerardgUserCard
        photoURL={
          this.props.user &&
          this.props.user.profile &&
          this.props.user.profile.photo_url &&
          this.props.user.profile.photo_url !== ""
            ? this.props.user.profile.photo_url
            : dbData.default.mediaURLs.profilePhotoURL
        }
        name={
          this.props.user &&
          this.props.user.profile &&
          this.props.user.profile.name &&
          this.props.user.profile.name !== ""
            ? this.props.user.profile.name
            : "Full Name"
        }
        title={
          this.props.user &&
          this.props.user.profile &&
          this.props.user.profile.title &&
          this.props.user.profile.title !== ""
            ? this.props.user.profile.title
            : "Profile Title"
        }
      />
    );
  };

  renderStacks = () => {
    let stacks = [];
    if (this.props && this.props.stacks) {
      stacks = this.props.stacks;
    }
    if (stacks.length === 0) {
      return;
    }
    return stacks.map((stack, index) => {
      return (
        <GerardgStackCard
          key={index}
          name={stack.name}
          logoURL={stack.logo_url}
          level={stack.level}
          onClick={e => {
            // e.preventDefault();
            if (stack && stack.show_stack_concepts === true) {
              this.setState({
                ...this.state,
                ...{
                  shouldRenderStackDetailsModal: true,
                  selectedStack: stack
                }
              });
            }
          }}
        />
      );
    });
  };

  renderStackDetails = () => {
    if (this.state.selectedStack === null) {
      return;
    }
    return (
      <GerardgModal
        onClose={e => {
          // e.preventDefault();
          this.setState({
            ...this.state,
            ...{ shouldRenderStackDetailsModal: false }
          });
        }}
      >
        <GerardgStackDetailsCard
          logoURL={this.state.selectedStack.logo_url}
          name={this.state.selectedStack.name}
          // stackConcepts={this.state.selectedStack.stack_concepts}
          stackConcepts={this.state.selectedStack.concepts}
        />
      </GerardgModal>
    );
  };

  renderProjects = () => {
    let projects = [];
    if (this.props && this.props.projects) {
      projects = this.props.projects;
    }
    if (projects.length === 0) {
      return;
    }
    return projects.map((project, index) => {
      return (
        <GerardgProjectCard
          key={index}
          name={project.name}
          logoURL={project.logo_url}
          projectIndex={index}
          onClick={e => {
            // e.preventDefault();
            this.setState({
              ...this.state,
              ...{
                shouldRenderProjectDetailsModal: true,
                projectIndex: index,
                selectedProject: project
              }
            });
          }}
        />
      );
    });
  };

  renderProjectDetails = () => {
    if (this.state.selectedProject === null) {
      return;
    }
    return (
      <GerardgModal
        onClose={e => {
          // e.preventDefault();
          this.setState({
            ...this.state,
            ...{ shouldRenderProjectDetailsModal: false }
          });
        }}
      >
        <GerardgProjectDetailsCard
          logoURL={this.state.selectedProject.logo_url}
          name={this.state.selectedProject.name}
          description={this.state.selectedProject.description}
          about={this.state.selectedProject.about}
          techStack={this.state.selectedProject.tech_stack_all}
          images={this.state.selectedProject.urls.images}
          videos={this.state.selectedProject.urls.videos}
          githubURL={this.state.selectedProject.urls.github}
          webProdURL={this.state.selectedProject.urls.web_prod}
          webDevURL={this.state.selectedProject.urls.web_dev}
          appleAppStoreURL={this.state.selectedProject.urls.apple_app_store}
          googlePlayStoreURL={this.state.selectedProject.urls.google_play_store}
          amazonAppStoreURL={this.state.selectedProject.urls.amazon_app_store}
          onPreviewMediaClick={(mediaURL, mediaType) => {
            this.setState({
              ...this.state,
              ...{ mediaURL, mediaType, shouldRenderMediaPreviewModal: true }
            });
          }}
        ></GerardgProjectDetailsCard>
      </GerardgModal>
    );
  };

  renderMediaPreview = () => {
    if (this.state.shouldRenderMediaPreviewModal === true) {
      return (
        <div className="appgerardg-media-preview__container">
          <GerardgModal
            onClose={e => {
              // e.preventDefault();
              this.setState({
                ...this.state,
                ...{ shouldRenderMediaPreviewModal: false }
              });
            }}
            closeButtonText="DONE"
            addStyle={{
              closeButton: { backgroundColor: "lightGreen" }
            }}
          >
            <div className="appgerardg-media-preview__container--content">
              {this.state.mediaType === "image" && (
                <img
                  className="appgerardg-media-preview__img"
                  src={this.state.mediaURL}
                />
              )}
              {this.state.mediaType === "video" && (
                <iframe
                  className="appgerardg-media-preview__iframe"
                  allowfullscreen="yes"
                  marginwidth="0"
                  marginheight="0"
                  frameborder="0"
                  scrolling="no"
                  src={this.state.mediaURL}
                />
              )}
            </div>
          </GerardgModal>
        </div>
      );
    }
  };

  renderAbouts = () => {
    let abouts = [];
    if (this.props && this.props.user && this.props.user.about) {
      abouts = this.props.user.about;
    }
    if (abouts.length === 0) {
      return;
    }
    return abouts.map((obj, index) => {
      return (
        <GerardgAboutCard
          key={index}
          title={obj.title}
          description={obj.description}
        />
      );
    });
  };

  renderSocials = () => {
    return (
      <GerardgContactCard
        whatsappPhoneNumber1={
          this.props.user &&
          this.props.user.social &&
          this.props.user.social.whatsapp_num_1
            ? this.props.user.social.whatsapp_num_1
            : null
        }
        whatsappPhoneNumber2={
          this.props.user &&
          this.props.user.social &&
          this.props.user.social.whatsapp_num_2
            ? this.props.user.social.whatsapp_num_2
            : null
        }
        gmailAddress={
          this.props.user &&
          this.props.user.social &&
          this.props.user.social.gmail_address
            ? this.props.user.social.gmail_address
            : null
        }
        githubProfileURL={
          this.props.user &&
          this.props.user.social &&
          this.props.user.social.github_profile_url
            ? this.props.user.social.github_profile_url
            : null
        }
        codepenProfileURL={
          this.props.user &&
          this.props.user.social &&
          this.props.user.social.codepen_profile_url
            ? this.props.user.social.codepen_profile_url
            : null
        }
        facebookProfileURL={
          this.props.user &&
          this.props.user.social &&
          this.props.user.social.facebook_profile_url
            ? this.props.user.social.facebook_profile_url
            : null
        }
        instagramProfileURL={
          this.props.user &&
          this.props.user.social &&
          this.props.user.social.instagram_profile_url
            ? this.props.user.social.instagram_profile_url
            : null
        }
        twitterProfileURL={
          this.props.user &&
          this.props.user.social &&
          this.props.user.social.twitter_profile_url
            ? this.props.user.social.twitter_profile_url
            : null
        }
        linkedinProfileURL={
          this.props.user &&
          this.props.user.social &&
          this.props.user.social.linkedin_profile_url
            ? this.props.user.social.linkedin_profile_url
            : null
        }
        //
        githubUsername={
          this.props.user &&
          this.props.user.social &&
          this.props.user.social.github_username
            ? this.props.user.social.github_username
            : null
        }
        codepenUsername={
          this.props.user &&
          this.props.user.social &&
          this.props.user.social.codepen_username
            ? this.props.user.social.codepen_username
            : null
        }
        facebookUsername={
          this.props.user &&
          this.props.user.social &&
          this.props.user.social.facebook_username
            ? this.props.user.social.facebook_username
            : null
        }
        instagramUsername={
          this.props.user &&
          this.props.user.social &&
          this.props.user.social.instagram_username
            ? this.props.user.social.instagram_username
            : null
        }
        twitterUsername={
          this.props.user &&
          this.props.user.social &&
          this.props.user.social.twitter_username
            ? this.props.user.social.twitter_username
            : null
        }
        linkedinUsername={
          this.props.user &&
          this.props.user.social &&
          this.props.user.social.linkedin_username
            ? this.props.user.social.linkedin_username
            : null
        }
      />
    );
  };

  render() {
    const { showMessage, loader, alertMessage } = this.props;
    const { locale } = this.props;

    return (
      <div>
        <div className="appgerardg-page-landing__container">
          <div className="appgerardg-page-landing__section-user">
            {this.renderBackground()}
            {this.renderUserProfile()}
          </div>
          <div className="appgerardg-page-landing__section-stack">
            <div className="appgerardg-page-landing__section-stack--header">
              <h1 className="appgerardg-h1 appgerardg-page-landing__text--section-header">
                {"STACK"}
              </h1>
            </div>
            <div className="appgerardg-page-landing__section-stack--content-container">
              {this.renderStacks()}
            </div>
          </div>
          <div className="appgerardg-page-landing__section-work-projects">
            <div className="appgerardg-page-landing__section-work-projects--header">
              <h1 className="appgerardg-h1 appgerardg-page-landing__text--section-header">
                {"PROJECTS"}
              </h1>
            </div>
            <div className="appgerardg-page-landing__section-work-projects--content-container">
              {this.renderProjects()}
            </div>
          </div>
          <div className="appgerardg-page-landing__section-about">
            <div className="appgerardg-page-landing__section-about--header">
              <h1 className="appgerardg-h1 appgerardg-page-landing__text--section-header">
                {"ABOUT"}
              </h1>
            </div>
            <div className="appgerardg-page-landing__section-about--content-container">
              {this.renderAbouts()}
            </div>
          </div>
          <div className="appgerardg-page-landing__section-contact">
            <div className="appgerardg-page-landing__section-contact--header">
              <h1 className="appgerardg-h1 appgerardg-page-landing__text--section-header">
                {"CONTACT"}
              </h1>
            </div>
            <div className="appgerardg-page-landing__section-contact--content-container">
              {this.renderSocials()}
            </div>
          </div>
        </div>
        {this.props.isLoading === true && <GerardgLoadingModal />}
        {this.props.error !== undefined && this.props.error !== null && (
          <GerardgErrorModal error={this.props.error} />
        )}
        {this.state.shouldRenderStackDetailsModal === true &&
          this.renderStackDetails()}
        {this.state.shouldRenderProjectDetailsModal === true &&
          this.renderProjectDetails()}
        {this.state.shouldRenderMediaPreviewModal === true &&
          this.renderMediaPreview()}
      </div>
    );
  }
}

const mapStateToProps = ({ landing }) => {
  const {
    isLoading,
    error,
    user,
    stacks,
    projects,
    tools,
    experience,
    languages
  } = landing;
  return {
    isLoading,
    error,
    user,
    stacks,
    projects,
    tools,
    experience,
    languages
  };
};

export default connect(mapStateToProps, { getLandingData })(Landing);
