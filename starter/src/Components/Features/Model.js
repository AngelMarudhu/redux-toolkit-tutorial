import React from 'react';
import { closeModal } from '../ReducToolkit/reducers/Modelslice';
import { useDispatch } from 'react-redux';
import { clearCart } from '../ReducToolkit/reducers/Cartslice';

const Model = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove All Items From Your Shopping Cart</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            Clear
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Model;
