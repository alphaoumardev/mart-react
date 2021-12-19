import React from 'react'
import styled from "styled-components";


const Container=styled.div`height:30px;  background-color: teal; color:white; display:flex; align-items:center; justify-content:center;`
const Announcement =()=>
{
    return(
        <Container>
            <p>Super deal 50% off</p>
        </Container>
    )
}
export default Announcement
