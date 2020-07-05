import React from 'react';


function CartItem({item, value}) {
   const {id, title, img, price, total, count} = item;
   const {increment, decrement, removeItem} = value
   return (
       <div className="row my-2 text-capitalise text-center">
       <div className="col-10 mx-auto col-lg-2">
       <img src={img} syle={{width:"5rem", height:"5rem"}} className="img-fluid" alt="product">
       </img>      
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product: </span>{title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price: &#8358;</span>{price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
        <div>
        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}> -        
        </span>
        <span className="btn btn-black mx-1">{count}
        </span>
        <span className="btn btn-black mx-1" onClick={()=>increment(id)}> +       
        </span>
        </div>
        </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={ () => removeItem(id)}>
        <ion-icon name="trash-bin-outline"></ion-icon>
        </div>
        </div>

        <div className="col-10 mx-auto col-lg-2">
        <strong>item total: &#8358; {total}</strong>
        </div>

       </div>
   )
}

export default CartItem;
