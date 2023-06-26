import React from 'react'
import styled from 'styled-components';
import mov from '../static/download.jpeg';

import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from "@material-ui/icons";
import { useState } from "react";
const ItemContainer = styled.div`
    width: 225px;
    height: 120px;
    background-color: #0b0b0b;
    margin-right: 5px;
    overflow: hidden;
    cursor: pointer;
    color: white;
    &:hover {
        width: 325px;
        height: 300px;
        position: absolute;
        top: -150px;
        box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
        border-radius: 5px;
img {
            height: 140px;
        }
    }
`
const MainImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Video = styled.video`
    width: 100%;
    height: 140px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`
const ItemInfo = styled.div`
        display: flex;
        flex-direction: column;
        padding: 5px;
`
const IconsContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
.icon {
        border: 2px solid white;
        padding: 5px;
        border-radius: 50%;
        margin-right: 10px;
        font-size: 16px;
    }
        
`
const InfoTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: gray;
.limit {
        border: 1px solid gray;
        padding: 1px 3px;
        margin: 0 10px;
    }
`
const Description = styled.div`
    font-size: 13px;
    margin-bottom: 10px;
`
const Genre = styled.div`
    font-size: 14px;
    color: lightgray;`

export default function MovieItem({index}) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  return (
    <ItemContainer style={{ left: isHovered && index * 225 - 5 + index * 2.5 }} onMouseEnter={() =>setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
    <MainImage src={mov} alt={trailer}/>
    {isHovered && (
        <>
            <Video src={trailer} autoPlay loop />
            <ItemInfo>
                <IconsContainer>
                    <PlayArrow className="icon" />
                    <Add className="icon" />
                    <ThumbUpAltOutlined className="icon" />
                    <ThumbDownOutlined className="icon" />
                </IconsContainer>
                <InfoTop>
                    <span>2 hour 14 mins</span>
                    <span className="limit">13+</span>
                    <span>2022</span>
                </InfoTop>
                <Description> Saving Earth from Thanos </Description>
                <Genre>Adventure</Genre>
            </ItemInfo>
        </>
    )}
</ItemContainer>
  )
}
