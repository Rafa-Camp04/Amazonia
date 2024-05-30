import './ProductsIndex.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import * as productActions from '../../store/product';

function ProductsIndex() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActions.indexProducts());
      }, [dispatch]);

    const productIndexItem = () => {
        const productsAll = useSelector(state => state.products.products);

        return(
            <div>
            </div>
        )
    }

    return(
        <div className='product-index-body'>
            <form id='items-block'>
                {productIndexItem()}
            </form>
        </div>
    )

}

export default ProductsIndex;