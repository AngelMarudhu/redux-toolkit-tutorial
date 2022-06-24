import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartLists from './CartLists';
import { clearCart } from '../ReducToolkit/reducers/Cartslice';
import { openModal } from '../ReducToolkit/reducers/Modelslice';

const CartContainer = () => {
  const dispatch = useDispatch();

  const { cartItem, amount, total } = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <p className="empty-cart">Your Bag Was Empty</p>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItem.map((item) => {
          return <CartLists key={item.id} {...item} />;
        })}
      </div>

      <footer>
        <hr />
        <div className="cart-total">
          <h3>
            Total <span>${total.toFixed(2)}</span>
          </h3>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
