import React from 'react'
import styled from "styled-components";
import {popularProducts} from "../data"
import ProductsItem from './ProductItem'

const Container= styled.div`
  display:flex; 
  flex-wrap: wrap;
  justify-content:space-between; 
  padding: 20px;`

const Products = ()=>
{
    return (
        <Container>
            {popularProducts.map((item)=>(<ProductsItem item={item} key={item.id}/>))}
        </Container>
    )
}
export default Products
