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
            <h1>{item.name}</h1>
            <p>{item.price}</p>
        </div>
    )

}

export default ProductShow;