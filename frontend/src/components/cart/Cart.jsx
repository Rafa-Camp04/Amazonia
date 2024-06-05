import './Cart.css'
import Navigation from '../navigation/Navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as cartItemsActions from '../../store/cart';
import { useSelector } from 'react-redux';

function Cart() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartItemsActions.indexCartItems());
    }, [dispatch])

    const allCartItems = useSelector(state => state.cartItems)

    const cartItemDiv = () => {
        return Object.values(allCartItems).map(item => (
            <div className='cart-item-div'>

                <div className='cart-item-image-section'>
                    <img className='cart-item-image' src={`${item?.photoUrl}`} alt={item?.name || 'Cart item'} />
                </div>

                <div className='division-between-sections'></div>

            </div>
        ));
    };

    return (
        <>
            <Navigation />
            <div id='cart-body'>
                <div id='main-cart-block'>

                    <div id='shopping-cart-div'>

                        <h2 id='shopping-header'>Shopping Cart</h2>
                        <p id='price-paragraph-in-shopping-cart-div'>Price</p>
                        <div className='division-between-sections'></div>

                        {cartItemDiv()}
                        

                    </div>

                    <div id='checkout-section'>
                        <h2 id='checkout-text-header'>Subtotal (2 items):</h2>
                        <input id='proceed-to-checkout-button' type='submit' value={'Proceed to checkout'} />
                    </div>

                </div>
            </div>
        </>
    )

}

export default Cart;