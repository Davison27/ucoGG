import { Image, Text, View } from "react-native";
import styled from "styled-components";

export const BackgroundImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`

export const Name = styled(Text)`
    color: white;
    font-size: 30px;
    font-weight: 800;
`

export const Title = styled(Text)`
    color: white;
    font-size: 15px;
    font-weight: 600;
`

export const TitleSection = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled(View)`
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: black;
    border-radius: 5px;
    opacity: 0.65;
`