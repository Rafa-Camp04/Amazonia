import './Delivery.css'
import Navigation from '../navigation/Navigation';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as cartItemsActions from '../../store/cart';
import { useEffect } from 'react';

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
                
            </div>
        </>
    )

}

export default Delivery;