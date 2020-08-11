import React from "react";
import scss from "../../styles/app-gerardg/scss/main.scss";

const defaultStyles = {
  addStyle: {
    closeButton: {}
  }
};

const GerardgModal = props => {
  const { closeButtonText, onClose, children } = props;

  const addStyle = { ...defaultStyles.addStyle, ...props.addStyle };

  return (
    <div className="appgerardg-modal__container">
      <div className="appgerardg-modal__container--blurred-bg">
        <div className="appgerardg-modal__container--content">
          <div className="appgerardg-modal__container--content-2">
            {children}
          </div>
        </div>
      </div>
      <button
        className="appgerardg-modal__button--close"
        style={addStyle.closeButton}
        onClick={e => {
          // e.preventDefault();
          onClose();
        }}
      >
        <h4 className="appgerardg-h4 appgerardg-modal__text--close">
          {closeButtonText}
        </h4>
      </button>
    </div>
  );
};
export default GerardgModal;

GerardgModal.defaultProps = {
  closeButtonText: "CLOSE",
  onClose: () => console.log("Modal Close Clicked!"),
  addStyle: {
    closeButton: {}
  }
};
