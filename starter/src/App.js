import Navbar from './Components/Pages/Navbar';
import CartContainer from './Components/Pages/CartContainer';
import Model from './Components/Features/Model';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  calculateTotal,
  getCartItems,
} from './Components/ReducToolkit/reducers/Cartslice';

function App() {
  const { cartItem, isLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.model);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItem]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Model />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
