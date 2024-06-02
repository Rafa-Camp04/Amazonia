import './ProductShow.css';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import * as productActions from '../../store/product';
import Navigation from '../navigation/Navigation';
import { useParams } from 'react-router-dom';

function ProductShow() {
    const dispatch = useDispatch();
    const {id} = useParams()
    const itemId = parseInt(id, 10)

    useEffect(() => {
        dispatch(productActions.showItem(itemId));
    }, [dispatch, itemId]);

    const items = useSelector(state => state.products);
    const item = items[itemId]

    if (!item) {
        return null
    }

    return(
        <div id='product-show-page-body'>
            <Navigation />
            <div id='main-block'>
                <div id='left-block'>
                    <div id='image-section'>

                    </div>
                </div>

                <div id='center-block'>
                    <div id='name-section'>
                        <h3 id='item-name-header'>{item.name}</h3>
                    </div>

                    <div className='division-between-sections'></div>

                    <div id='price-section'>

                        <div id='price-block'>
                            <span id='dollar-sign'>$</span>
                            <p id='price-paragraph'>{item.price}</p>
                            <p id='cents'>99</p>
                        </div>

                        <p id='shipping-paragraph'>Get <span id='free-shipping-bold-text'>Fast, Free Shipping</span> with Amazonia Prime</p>
                        <p id='free-returns'>FREE returns</p>
                    </div>

                    <div className='division-between-sections'></div>

                    <div id='description-section'>
                        <p>{item.description}</p>
                    </div>

                </div>

                <div id='right-block'>
                    <div id='checkout-section'>

                    </div>
                </div>

            </div>

        </div>
    )

}

export default ProductShow;