import React from 'react'
import { useCartContext } from '../../context/ContextProvider'
import Filters from '../Home/Filters'
import SingleProduct from '../Home/SingleProduct'
import './styles.css'

const HomePage = () => {

    const {state: {products}} = useCartContext()
    return (
        <div className='home'>
            <Filters />

         <div className='productContainer'>
             {
                 products.map((product) => {
                     return <SingleProduct product={product} key={product.id}>
                       
                     </SingleProduct>
                 })
             }
         </div>
        </div>
    )
}

export default HomePage;
