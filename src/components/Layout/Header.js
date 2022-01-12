import React from 'react'
import { Navbar, Container, FormControl, Nav, Dropdown, Badge } from 'react-bootstrap';
import {FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/ContextProvider';

const Header = () => {

    const { state: {cart}} = useCartContext();


    return (
        <Navbar variant='dark' style={{
            height: 80,
            background:"#343A40"
        }}>
          <Container>
             <Navbar.Brand>
                 <Link to='/'>
                     <h1>SAM's Collection</h1>
                 </Link>
             </Navbar.Brand>

             <Navbar.Text className="search">
                 <FormControl 
                    style={{
                       width:500
                    }}
                    placeholder='Search a Product'
                   className='m-auto'

                 />

             </Navbar.Text>
             <Nav>
                 <Dropdown alignright="true"> 
                 <Dropdown.Toggle variant='primary'>
                     <FaShoppingCart color='#fff' fontSize='25px' />
                     <Badge bg='none'>{cart.length}</Badge>
                 </Dropdown.Toggle>

                 <Dropdown.Menu 
                 style={{
                     minWidth:370
                 }}
                 >
                     {
                         cart.length >0 ?(
                             <>
                             {
                                 cart.map((prod) => (
                                     <span className="cartitem" key={prod.id}>
                                         <img 
                                         src={prod.image}
                                         alt={prod.name}
                                         className="cartImage"  />

                                     </span>
                                 ))
                             }
                             
                             </>
                         ):(

                            <span style={{padding:10 }}>Cart is Empty!</span>
                         )
                     }


                 </Dropdown.Menu>
                 </Dropdown>
             </Nav>
          </Container>   
        </Navbar>
    )
}

export default Header;
