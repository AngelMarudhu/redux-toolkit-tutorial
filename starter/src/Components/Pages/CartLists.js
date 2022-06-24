import React from 'react';
import { ChevronDown, ChevronUp } from '../../icons';
import { removeItem } from '../ReducToolkit/reducers/Cartslice';
import { useDispatch } from 'react-redux';
import { increaseItem } from '../ReducToolkit/reducers/Cartslice';
import { decreaseItem } from '../ReducToolkit/reducers/Cartslice';

const CartLists = ({ id, title, total, img, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div className="cart-item-details">
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          Remove
        </button>
      </div>

      <div>
        {/* increase amount */}
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseItem({ id }))}
        >
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decreaseItem({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartLists;
