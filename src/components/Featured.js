import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react';
import styled, { css } from "styled-components";
import images from '../static/626155.jpeg'

const FeaturedContainer = styled.div`
    height: 90vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const InfoContainer = styled.div`
    width: 35%;
    position: absolute;
    left: 50px;
    bottom: 100px;
    color: white;
    display: flex;
    flex-direction: column;
    img {
        width: 400px;
    }
.desc {
        margin: 20px 0px;
    }
`
const ButtonContainer = styled.div`
    display: flex;
`
const StyledButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    cursor: pointer;
    background: ${props => props.primary ? "white" : "#0b0b0b"};
    color: ${props => props.primary ? "#0b0b0b" : "white"};
    span {
        margin-left: 5px;
    }`

export default function Featured() {
  return (
    <FeaturedContainer>
        <Image src={images}/>
        <InfoContainer>
            <img src="https://www.seekpng.com/png/detail/210-2107958_matrix-colorsync-watercolors-sapphire-blue.png"/>
            <span className="desc">
                The Matrix depicts the dystopian future in which human are unknowingly trapped.
            </span>
            <ButtonContainer>
                <StyledButton primary>
                    <PlayArrow/>
                    <span>Play</span>
                </StyledButton>
                <StyledButton>
                    <InfoOutlined/>
                    <span>Info</span>
                </StyledButton>
            </ButtonContainer>
        </InfoContainer>
    </FeaturedContainer>
  )
}
