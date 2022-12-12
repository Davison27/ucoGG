import { Image, Text, View } from "react-native";
import styled from "styled-components";

export const BackgroundImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`

export const Filter = styled(View)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: black;
    opacity: 0.6;
`

export const Lore = styled(Text)`
    font-family: "BeaufortforLOL-Bold";
    color: white;
    background-color: black;
    border-radius: 10px;
    margin: 30px 0;
    padding: 15px;
    opacity: 0.6;
`

export const Name = styled(Text)`
    font-family: "BeaufortforLOL-Bold";
    color: white;
    font-size: 50px;
`

export const Tag= styled(Text)`
    background-color: black;
    font-family: "BeaufortforLOL-Bold";
    color: white;
    border-radius: 20px;
    padding: 10px;
    margin: 0 10px;
    opacity: 0.6;
`

export const TagsSection= styled(View)`
    display: flex;
    justify-content: center;
    flex-direction: row;

`


export const Title = styled(Text)`
    font-family: "BeaufortforLOL-MediumItalic";
    color: white;
    font-size: 25px;
    font-weight: 600;
`

export const TitleSection = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled(View)`
    display: flex;
    flex-direction: column;
    padding: 20px;
`