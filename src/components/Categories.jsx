import React from 'react'
import styled from "styled-components";
import {cate} from "../data"
import CategoryItems from './CategoryItems'
import { mobile } from "../responsive";

const Container= styled.div`
  display:flex; justify-content:space-between;
  ${mobile({padding: "0", flexDirection :"column",justifyContent:"center"})}

  padding: 20px;`

const Products = ()=>
{
    return (
        <Container>
            {cate.map((item)=>(<CategoryItems item={item} key={item.id}/>))}
        </Container>
    )
}
export default Products
