import * as React from 'react';
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from "@mui/icons-material";
import Badge from '@mui/material/Badge';
import { mobile } from "../responsive";


const Container= styled.div`
  height: 60px;
  ${mobile({height:"50px"})}`
const Wrapper= styled.div`
  padding: 10px 20px;
  display:flex;
  justify-content:space-between;
  ${mobile({padding: "10px 0"})}
`
const Left =styled.div`
  flex:1; 
  align-items:center; 
  display: flex;`
const Language = styled.span`
  cursor:pointer; 
  font-size: 15px;
  ${mobile({display: "none"})}
`
const Input = styled.input`
  border:none;
  width: 100%;

  ${mobile({width: "50px"})}
`
const SearchContainer = styled.div`
  border: 1px solid;
  margin-left: 25px; 
  display: flex; 
  width: 100%;
  align-items: center;`

const Center =styled.div`
  flex:3; 
  align-items:center; 
  display: flex;`
const Logo = styled.img`
  width:58px;
  ${mobile({width: "30px"})}
`

const Right =styled.div`
  flex:1; 
  align-items:center; 
  display: flex;
  justify-content: flex-end;
  ${mobile({justifyContent: "center", flex:2})}
`
const MenuItem = styled.div`
  cursor:pointer; 
  font-size: 15px;
  margin-left: 20px;
  ${mobile({fontSize: "12px", marginRight:"10px"})}
`

const Nav = () =>
{
    return(
        <Container>
            <Wrapper>
                <Center>
                    <Logo src="https://diallo.oss-cn-shanghai.aliyuncs.com/photos/logo.png"/>
                    DIALLO MART
                </Center>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search/>
                    </SearchContainer>
                </Left>

                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={5} color="primary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
export default Nav
