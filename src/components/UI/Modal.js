import React from "react";
import ReactDOM  from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverLay = (props) => {
  return (
    <>
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
