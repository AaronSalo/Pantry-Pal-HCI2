import './Modal.css';

const Modal = ({ handleClose, handleShow, children }) => {
  const showHideClassName = handleShow ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={handleClose}>
          Close
        </button>
        <hr/>
        <form id="addItemForm">
          {children}
          <div className="done">
            <button type="button" onClick={handleClose}>
              Done
            </button>
          </div>
         </form>
      </section>
    </div>
  );
};

export {Modal};

