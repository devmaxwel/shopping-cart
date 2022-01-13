import React from 'react'
import { useCartContext } from '../../context/ContextProvider'
import Filters from '../Home/Filters'
import SingleProduct from '../Home/SingleProduct'
import './styles.css'

const HomePage = () => {

    const {state: {products},
    filterState: { byStock, byFastDelivery, sort, byRating, searchQuerry }

} = useCartContext();

    const transformProducts=() => {
        let sortedProducts = products;

        if(sort){
            sortedProducts =sortedProducts.sort((a,b) => 
                sort === "lowToHigh" ? a.price - b.price: b.price - a.price
            )
        }

        if(!byStock){
            sortedProducts = sortedProducts.filter((prod) => prod.inStock)
        };

        if(byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
        };

        if(byRating){
            sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating)
        };

        if(searchQuerry){
            sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuerry))
        };



        return sortedProducts;
    }

    return (
        <div className='home'>
            <Filters />

         <div className='productContainer'>
             {
                 transformProducts().map((product) => {
                     return <SingleProduct product={product} key={product.id}>
                       
                     </SingleProduct>
                 })
             }
         </div>
        </div>
    )
}

export default HomePage;
