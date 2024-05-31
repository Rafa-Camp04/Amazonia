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
    }, [dispatch]);

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
                    <div id='description-section'>
                        <h1>{item.name}</h1>
                        <p>{item.price}</p>
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