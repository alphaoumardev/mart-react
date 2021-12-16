import React from 'react'
import styled from "styled-components";
import {cate} from "../data"
import CategoryItems from './CategoryItems'

const Container= styled.div`display:flex; justify-content:space-between; padding: 20px;`

const Products = ()=>
{
    return (
        <Container>
            {cate.map((item)=>(<CategoryItems item={item} key={item.id}/>))}
        </Container>
    )
}
export default Products
