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

    const productsAll = useSelector(state => state.products);

    const productIndexItem = () => {
        return Object.values(productsAll).map(product => (
            <Link key={product.id} className='product-item-link' to={`/products/${product.id}`}>
                <div className="product-item-div">
                    <div id='item-image-section'>

                    </div>

                    <h2>{product.name}</h2>
                    <p>${product.price}</p>
                </div>
            </Link>    
        ));
    };

    return(
        <div className='product-index-body'>

            <form id='items-block'>
                <div id='carousel'>
                
                </div>

                {productIndexItem()}
            </form>
        </div>
    )

}

export default ProductsIndex;