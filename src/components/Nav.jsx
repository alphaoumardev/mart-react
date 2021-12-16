import * as React from 'react';
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from "@mui/icons-material";
import Badge from '@mui/material/Badge';

const Container= styled.div`
  height: 60px;`
const Wrapper= styled.div`
  padding: 10px 20px;
  display:flex;
  justify-content:space-between; `
const Left =styled.div`
  flex:2; 
  align-items:center; 
  display: flex;`
const Language = styled.span`
  cursor:pointer; 
  font-size: 15px;`
const Input = styled.input`
  border:none;`
const SearchContainer = styled.div`
  border: 1px solid;
  margin-left: 25px; 
  display: flex; 
  align-items: center;`

const Center =styled.div`
  flex:1; 
  align-items:center; 
  display: flex;`
const Logo = styled.h1`
  font-weight: bold;`

const Right =styled.div`
  flex:1; 
  align-items:center; 
  display: flex;
  justify-content: flex-end; `
const MenuItem = styled.div`
  cursor:pointer; 
  font-size: 15px;
  margin-left: 20px;`

const Nav = () =>
{
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>DIALLO</Logo>
                </Center>
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
