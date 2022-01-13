
import React, { useState, useEffect } from 'react'
import { ListGroup, Button, Row, Col, Image,  Form} from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { useCartContext } from '../../context/ContextProvider';
import Rating from '../Home/Rating';


const CartPage = () => {
    const {state: {cart }, dispatch} = useCartContext();
    const [total, setTotal] = useState();
   
    useEffect(() => {
          setTotal(cart.reduce((accumalator, current)=> accumalator +( Number(current.price)* current.qty), 0));
    },[cart])

    return (
        <div className='home'>
            <div className='productContainer'>
                  <ListGroup>
                     {
                         cart.map((product) => {
                             return <ListGroup.Item key={product.id}>
                                 <Row>
                                 <Col md={2}>
                                        <Image src={product.image} fluid rounded />
                                     </Col>
                                     <Col md={2}>
                                        <span>{product.name}</span>
                                     </Col>
                                     <Col md={2}>
                                        <span>$ {product.price}</span>
                                     </Col>
                                     <Col md={2}>
                                        <Rating rating={product.ratings} />
                                     </Col>
                                     <Col md={2}>
                                         <span>Quatity</span>
                                        <Form.Control 
                                         as="select" value={product.qty}
                                         onChange={(e) => dispatch({
                                             type:"CHANGE_CART_QTY",
                                             payload:{
                                                 id:product.id,
                                                 qty:e.target.value
                                             }
                                         })}
                                        >
                                            {
                                                [...Array(product.inStock).keys()].map((x) => {
                                                    return<option key={ x + 1}>{x + 1}</option>
                                                })
                                            }    
                                            </Form.Control>
                                     </Col>

                                     <Col md={2}>
                                        <AiFillDelete 
                                        onClick={() =>{dispatch({
                                            type:"REMOVE_FROM_CART",
                                            payload:product
                                        })}}
                                        style={{
                                            color:"#f00",
                                            cursor:"pointer",
                                            fontSize:25
                                        }} />
                                     </Col>
                                 </Row>
                             </ListGroup.Item>
                         })
                     }
                  </ListGroup>
            </div>
            <div className='filters summury' >
                <span className='title'>Subtotal({cart.length})Items</span>
                <span style={{fontWeight: 700, fontSize: 20}}>Total: $ {total} </span>
               <Button disabled={cart.length === 0}>Proceed To CheckOut</Button>
            </div>
        </div>
    )
}

export default CartPage;
