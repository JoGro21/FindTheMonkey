import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import cssStyle from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={cssStyle.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={cssStyle.modal}>
      <div className={cssStyle.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
