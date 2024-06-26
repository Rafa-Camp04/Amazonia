import './Delivery.css'
import Navigation from '../navigation/Navigation';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as cartItemsActions from '../../store/cart';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";

function Delivery() {
    const dispatch = useDispatch();
    const allCartItems = useSelector(state => state.cartItems)

    useEffect(() => {

        Object.values(allCartItems).forEach(item => {
            dispatch(cartItemsActions.deleteCartItem(item));
        });
    }, [dispatch, allCartItems]);

    return(
        <>
            <Navigation />
            <div id='delivery-body'>
                <div id='main-delivery-div'>

                    <div id='order-delivery-message-block'>
                        <h2 id='order-delivery-message-header'><FaCheckCircle /> Order placed, thanks!</h2>
                        <p id='order-delivery-confirmation-paragraph'>Confirmation will be sent to your email.</p>
                        <p id='order-quantity-paragraph'>Your items will be shipped to you by Amazonia.com.</p>

                        <div className='division-between-sections'></div>
                        
                        <div id='bottom-message-block'>
                            <div>
                                <p id='order-delivery-bold-paragraph-1'>Order Number:</p>
                                <p id='order-delivery-bold-paragraph-2'>Guaranteed delivery: <span id='delivery-date'>Jun. 04, 3024</span></p>
                            </div>

                            <Link to={'/'} id='order-delivery-home-button'>
                                <input id='add-to-cart-button' type='submit' value={'Home'} />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* <div id='order-delivery-links-block'>

                </div> */}

            </div>
        </>
    )

}

export default Delivery;