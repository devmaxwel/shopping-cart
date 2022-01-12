import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useCartContext } from '../../context/ContextProvider';
import Rating from './Rating';

const SingleProduct = ({product}) => {
    
    const { state: {cart}, dispatch }  = useCartContext()

    return (
        <div className='products'>
            <Card>
                <Card.Img variant='top' src={product.image} alt={product.name} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle
                    style={{
                        paddingBottom:10
                    }}
                    >
                        <span>${product.price}</span>
                        {product.fastDelivery ? (
                            <div>Fast delivery</div>
                        ):(
                            <div>4 days to Delivery</div>
                        )}
                        <Rating rating={product.ratings} />
                    </Card.Subtitle>
                    {
                       cart.some((p) => p.id ===product.id)?(
                        <Button onClick={() =>{dispatch({
                            type:"REMOVE_FROM_CART",
                            payload:product
                        })}} variant="danger">Remove from Cart</Button>

                       ):(
                        <Button onClick={() =>{dispatch({
                            type:"ADD_TO_CART",
                            payload:product
                        })}} disabled={!product.inStock} variant="primary">Add to Cart</Button>

                       )
                    }
                   
                   
                </Card.Body>
            </Card>  
        </div>
    )
}

export default SingleProduct;
