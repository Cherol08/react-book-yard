import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=> {
                 const{id, author, img, price, title, about, inCart} =  
                 value.detailBook;
                 return(
                     <div className='container py-5'>
                         {/*Title*/}
                         <div className='row'>
                             <div className='col-10 mx-auto text-center text-slanted text-green my-5'></div>
                         <h1>{title}</h1>
                         </div>
                         {/*end title*/}
                         {/*Product about*/}
                         <div className='row'>
                             <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                <img src={img} className='img-fluid' alt='product' />
                             </div>
                             {/*Product description*/}
                             <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                 <h2>Title : {title}</h2>
                                 <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                     Written by: <span className='text-uppercase'>{author}</span>
                                 </h4>
                                 <h4 className='text-green'>
                                    <strong>price : <span>$ </span>
                                    {price}</strong>
                                 </h4>
                                 <p className='text-capitalize font-weight-bold mt-3 mb-0 '>
                                     about the book:
                                 </p>
                                 <p className='text-muted lead'>{about}</p>
                                 {/*buttons*/}
                                 <div>
                                     <Link to='/'>
                                         <ButtonContainer>back to products</ButtonContainer>
                                     </Link>
                                     <ButtonContainer cart disabled={inCart? true : false}
                                     onClick={()=>{value.addToCart(id)}}>
                                         {inCart? 'in cart': 'add to cart'}
                                    </ButtonContainer>
                                 </div>
                             </div>
                         </div>


                     </div>
                 )
                }}
            </ProductConsumer>
        )
    }
}
