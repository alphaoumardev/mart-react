import styled from "styled-components";

const Container= styled.div`flex: 1; position:relative; margin:5px;`
const Image= styled.img`width: 100%;height: 100%;`
const Info= styled.div`top: 0; left: 0; width:100%;height:100%; position: absolute; display: flex; align-items: center; justify-content: center; flex-direction:column;`
const Title= styled.p`color:white;margin-bottom: 20px; font-weight:700; font-size: 30px;`
const Button= styled.button`border:none; background-color:white; padding:10px; color:gray; font-size:15px; cursor:pointer; font-weight:600;`


const CategoryItems = ({item})=>
{
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>
    )
}
export default CategoryItems
