import React from "react";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/ContextProvider";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    filterDispatch
  } = useCartContext();

  return (
    <Navbar
      variant="dark"
      style={{
        height: 80,
        background: "#343A40",
      }}
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <h1>SAM's Collection</h1>
          </Link>
        </Navbar.Brand>

        <Navbar.Text className="search">
          <FormControl
            style={{
              width: 500,
            }}
            placeholder="Search a Product"
            className="m-auto"
            onClick={(e) => filterDispatch({
              type:"FILTER_BY_SEARCH",
              payload:e.target.value
            })}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown className="btn-group dropleft">
            <Dropdown.Toggle variant="primary">
              <FaShoppingCart color="#fff" fontSize="25px" />
              <Badge bg="none">{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                minWidth: 370,
              }}
            >
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="cartItemImg"
                      />

                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span> ${prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{
                          cursor: "pointer",
                          color: "#f00",
                        }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to='/cart'> 
                    <Button variant="success" style={{
                        padding:"5px 10px",
                        width: "95%",
                        margin:5
                    }}> Proceed to Cart</Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
