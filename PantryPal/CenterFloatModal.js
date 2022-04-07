import './Modal.css';

const CenterFloatModal = ({ handleClose, handleShow, onFormComplete, children }) => {
  const showHideClassName = handleShow ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-center-float-main">
        <button onClick={handleClose}>
          Cancel
        </button>
        <hr/>
        <form id="addItemForm">
          {children}
          <div className="done">
            <button type="button" onClick={onFormComplete}>
              Done
            </button>
          </div>
         </form>
      </section>
    </div>
  );
};

export {CenterFloatModal};

