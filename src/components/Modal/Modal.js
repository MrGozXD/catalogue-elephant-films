import React, { useEffect,useRef } from 'react'
import "./Modal.css"


function Modal(props) {

  const { visible, cancel, children } = props;
  const modalRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (visible && modalRef.current && !modalRef.current.contains(e.target)) {
        cancel();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [cancel, visible]);

  return (
    <>
      {visible && (
        <div className="modal-bg">
          <div ref={modalRef} className="modal-container">
            {children}
            <button onClick={cancel}>Fermer</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal