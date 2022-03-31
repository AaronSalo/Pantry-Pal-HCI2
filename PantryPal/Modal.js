import './Modal.css';

const Modal = ({ handleClose, handleShow, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export {Modal};
