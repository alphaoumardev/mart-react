import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container=styled.div`
  height: 100vh; width: 100%; 
  display: flex; 
  position:relative; overflow: hidden;
  
  `
const Arrow = styled.div`
  border-radius:50%; 
  width:50px;
  height:50px; 
  background-color: #fff7f7; 
  align-items: center; 
  justify-content: center;
  display:flex;
  position: absolute; top:0;bottom:0; 
  cursor: pointer;opacity:0.5;
  margin:auto; z-index: 2;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  `

const Wrapper =styled.div`
  height:100%;
  display:flex;
  transition: all 1.5s ease;
  transform:translateX( ${(props) => props.slideIndex * -100}vw)`
const Slide = styled.div`background-color: #${(props) => props.bg};display:flex;align-items:center;width: 100vw; height:100vh; `
const ImgContainer= styled.div`flex: 1;`
const Image = styled.img`background-color: #dfc2c4;  `

const Info = styled.div` flex:1; padding: 50px;`
const Title= styled.h1` font-size: 70px;`
const Description= styled.p`margin: 50px 0 ; font-size: 20px; font-weight: 500; letter-spacing:2px;`
const Button= styled.button`padding: 10px; font-size: 20px;
  background-color: transparent; cursor:pointer;`

const Slider =()=>
{
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick=(direction)=> {
        if(direction==='left')
        {
            setSlideIndex(slideIndex >0 ? slideIndex-1:2)
        }
        else
        {
            setSlideIndex(slideIndex <2 ?slideIndex +1:0)
        }

    }
    return(
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                <Slide  bg={item.bg} key={item.id}>
                    <ImgContainer>
                    <Image src={item.img} alt="None" />
                </ImgContainer>
                <Info>
                    <Title>{item.title}</Title>
                    <Description>{item.desc} </Description>
                    <Button>Shop Now</Button>
                </Info>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}
export default Slider
