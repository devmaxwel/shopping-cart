import React,{ createContext, useContext, useReducer} from 'react'
import faker from 'faker'
import { cartRedux } from './Redux';

const cartContext = createContext();

// To avoid data from rendering eveytime
faker.seed(99);

const ContextProvider = ({children }) => {

    const products = [...Array(21)].map(() => ({

       id:Math.random().toString(16).slice(2),
       name: faker.commerce.productName(),
       price: faker.commerce.price(),
       image: faker.random.image(),
       fastDelivery:Math.random() < 0.5,
       inStock: faker.random.arrayElement([0,3, 5,7,9]),
       ratings:faker.random.arrayElement([1,2,3,4,5]),
    }));

    console.log(products);

    const [state, dispatch] = useReducer(cartRedux, {
          products:products,
          cart: []
    })

    return <cartContext.Provider value={{dispatch, state}}>
             {children}
    </cartContext.Provider>
}

export default ContextProvider;

export const useCartContext=()=> {
    return useContext(cartContext);
}
