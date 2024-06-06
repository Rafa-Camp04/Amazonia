import './ProductsIndex.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import * as productActions from '../../store/product';
// import Carousel from 'react-bootstrap/Carousel';
// import image01 from '../../../media/carousel-images/':

function ProductsIndex() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActions.indexProducts());
    }, [dispatch]);

    const dollarOrCents = (dollarOrCents, item) => {
        let num = item.price.toString()
        const arr = num.split(".")

        if (dollarOrCents === "dollar") {
            return arr[0]
        } else if (dollarOrCents === "cents") {
            return arr[1]
        } else {
            return "please insert the string 'dollar' or 'cents'"
        }
    }

    // const UncontrolledExample = () => {
    //     return (
    //       <Carousel>
    //         <Carousel.Item>
    //           <ExampleCarouselImage text="First slide" />
    //           <Carousel.Caption>
    //             <h3>First slide label</h3>
    //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //         <Carousel.Item>
    //           <ExampleCarouselImage text="Second slide" />
    //           <Carousel.Caption>
    //             <h3>Second slide label</h3>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //         <Carousel.Item>
    //           <ExampleCarouselImage text="Third slide" />
    //           <Carousel.Caption>
    //             <h3>Third slide label</h3>
    //             <p>
    //               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //             </p>
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //       </Carousel>
    //     );
    //   }

    const productsAll = useSelector(state => state.products);

    const productIndexItem = () => {
        return Object.values(productsAll).map(product => (
            <Link key={product.id} className='product-item-link' to={`/products/${product.id}`}>
                <div className="product-item-div">
                    <div id='item-image-section'>
                        <div className='out-image'>
                            <img className='product-image-show-page' src={`${product?.photoUrl}`} />
                        </div>
                    </div>

                    <div className='bottom-index-item-section'>
                        <h2 className='product-name-header-index'>{product.name}</h2>

                        <div className='price-block-index-page'>
                            <span id='dollar-sign'>$</span>
                            <p id='price-paragraph'>{dollarOrCents('dollar', product)}</p>
                            <p id='cents'>{dollarOrCents('cents', product)}</p>
                        </div>

                    </div>
                </div>
            </Link>    
        ));
    };

    return(
        <div className='product-index-body'>

            {/* {UncontrolledExample()} */}

            <form id='items-block'>
                <div id='carousel'>
                
                </div>

                {productIndexItem()}
            </form>
        </div>
    )

}

export default ProductsIndex;