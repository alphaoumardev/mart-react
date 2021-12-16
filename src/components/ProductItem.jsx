import styled from "styled-components";
import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@material-ui/icons";
const Info= styled.div`
  opacity: 0;
  top: 0; left: 0; 
  width:100%;height:100%; 
  position: absolute;
  background-color: #dfc2c4;
  z-index: 3  ;
  display: flex; 
  cursor: pointer;
  align-items: center; 
  justify-content: center;
  border-radius: 2px;

  transition: all 0.5s ease;`

const Container= styled.div`
  flex: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius:4%;
  margin:5px;
  min-width:280px;
  height:350px;
  position: relative;
  &:hover ${Info}
  {
    opacity: 1;
  }
`
const Circle=styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`
const Image= styled.img`height: 70%; z-index: 2;`

const Icon= styled.div`
  width:40px;height:40px; border-radius:50%;
  background-color: white; 
  display:flex;
  transition: all 0.5s ease;
  align-items: center;
  justify-content: center;
  margin:10px;
   &:hover
   {
     background-color: red;
     transform:scale(2.2);
   }
`
const ProductItem = ({item})=>
{
    return (
        <Container>
            {/*<Circle/>*/}
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
            </Info>
        </Container>
    )
}
export default ProductItem
