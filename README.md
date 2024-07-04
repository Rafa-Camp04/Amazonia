Amazonia
=========

### Introduction

[Amazonia](https://amazonia-bddg.onrender.com/) is a full-stack clone of the Amazon website, which includes functionalities such as creating and logging into a new account, and adding, editing, and removing products from the cart.

### Technologies implemented:
* **Languages**: Javascript, Ruby, HTML, and CSS
* **Frontend**: React-Redux
* **Database**: PostgreSQL
* **Hosting**: Render
* **Asset Storage**: AWS Simple Cloud Storage (S3)

Features
=========

## Account

Amazonia enables users to create new accounts that are securely stored and managed in the database.

![1](https://github.com/Rafa-Camp04/Amazonia/assets/161013936/341a9ef5-003f-41e8-9a71-4378d1277d9d)

```
<div className='sign-up-block'>
  <form onSubmit={handleSubmit}>

    <h1>Create account</h1>
    <label className='sign-in-form-label'>Email</label> <br/>
    <input
      className='sign-up-form-input'
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    /> <br/><br/>
    <label className='sign-in-form-label'>Password</label> <br/>
    <input
      className='sign-up-form-input'
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    /> <br/><br/>
    <label className='sign-in-form-label'>Re-enter password</label> <br/>
    <input
      className='sign-up-form-input'
      type="password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      required
    /> <br/><br/>
    <button className='sign-up-form-button' type="submit">Sign Up</button> <br/><br/><br/>
    <div id='text-under-form'><p>By continuing, you agree to Amazonia&apos;s Conditions of Use and Privacy Notice.</p></div> <br/><br/><br/>
    <div id='text-with-link'>
      <p>Already have an account? <Link to='/login'>Sign In</Link></p>
    </div>

  </form>
</div>
```

Handling errors with an alert message.

![2](https://github.com/Rafa-Camp04/Amazonia/assets/161013936/dfd767c2-f28f-452a-8f44-6ff00bb29f07)

```
{errors.length > 0 && (
  <div className='error-div'>
    <div id='inner-error-div'>
      <h4 id='alert-heading'>There was a problem</h4>
      <ul className='error-text'>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
    </div>
  </div>
)}
```

## Product Selection and Cart Addition

Upon logging in, users have the ability to browse and select their desired product from the available options.

![5](https://github.com/Rafa-Camp04/Amazonia/assets/161013936/6d0a9d88-431f-4ac7-9a50-d272c2c89074)

Once they've found the item they wish to purchase, they can add it to their cart with a simple click.

![4](https://github.com/Rafa-Camp04/Amazonia/assets/161013936/19ff989c-9176-45dc-af8a-c30b4004d64e)
```
<div id='right-block'>
      <div id='add-to-cart-section'>
          <div id='top-add-to-cart-div'>
              <span className='a-text-bold'>Buy New:</span>
              <div id='price-block'>
                  <span id='dollar-sign'>$</span>
                  <p id='dollar-paragraph'>{dollarOrCents('dollar')}</p>
                  <p id='cents-paragraph'>{dollarOrCents('cents')}</p>
              </div>
          </div>
          <p id='shipping-paragraph'>
              Get 
              <span className='a-text-bold'>Fast, Free Shipping </span>
              with 
              <span className='fake-link-blue'>Amazonia Prime</span>
          </p>
          <p id='free-returns' className='fake-link-blue'>FREE returns</p>
          <span className='in-stock'>In Stock</span>
          <input id='add-to-cart-button' type='submit' value={'Add to Cart'} onClick={handleSubmit} />
      </div>
  </div>
```


An Amazonia user can also update the quantity of products and remove them from the cart:

![6](https://github.com/Rafa-Camp04/Amazonia/assets/161013936/bccec336-4131-410a-b521-75555d8f8e85)

```
<div className='cart-item-div'>
  <div className='cart-item-image-section'>
      <Link className='cart-item-header-link' to={`/products/${product.id}`}>
          <img className='cart-item-image' src={`${product?.photoUrl}`} alt={product?.name || 'Cart item'} />
      </Link>
  </div>
  <div className='cart-item-information'>
      <div>
          <Link className='cart-item-header-link' to={`/products/${product.id}`}>
              <h2 className='cart-item-header'>{product.name}</h2>
          </Link>
      </div>
      <div className='cart-item-delivery-information'>
          <span className='in-stock'>In Stock</span>
          <p className='cart-item-delivery-information-paragraph'>Same-Day</p>
          <p className='cart-item-delivery-information-paragraph'>
              FREE delivery 
              <span className='cart-item-delivery-information-bold-text'>Tomorrow 2 PM - 6 PM</span>
          </p>
      </div>
      <div className='cart-item-buttons-div'>
          <select className='quantity-dropdown' onChange={(e) => updateQuantityHandler(e, item)}>
              <option value="">Qty: {item.quantity}</option>
              <option value="1" >1</option>
              <option value="2" >2</option>
              <option value="3" >3</option>
              <option value="4" >4</option>
              <option value="5" >5</option>
              <option value="6" >6</option>
              <option value="7" >7</option>
              <option value="8" >8</option>
              <option value="9" >9</option>
              <option value="10" >10</option>
          </select>
          <div className='separator-between-quantity-delete-buttons'></div>
          <span className='delete-cart-item-button' onClick={() => deleteItemHandler(item)}>Delete</span>
      </div>
  </div>
  <div className='cart-item-price-div'>
      <p className='cart-item-price-paragraph'>${product.price}</p>
  </div>
</div>
```

