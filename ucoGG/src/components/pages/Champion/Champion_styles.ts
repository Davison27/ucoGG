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
    opacity: 0.7;
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

export const Spell = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`

export const SpellDescription = styled(Text)`
    color: white;
    font-family: "BeaufortforLOL-Medium";
`
    
export const SpellInfo = styled(View)`
    margin-left: 20px;
    width: 100%;
    flex-wrap: nowrap;
    flex: 1;
`

export const SpellImage = styled(Image)`
    width: 50px;
    height: 50px;
`

export const SpellName = styled(Text)`
    color: white;
    font-family: "BeaufortforLOL-Medium";
    font-weight: 900;
`

export const SpellsSection = styled(View)`
    display: flex;
`

export const SpellsTitle = styled(Text)`
    margin: 30px auto 10px;
    color: white;
    font-family: "BeaufortforLOL-Medium";
    font-weight: 900;
    font-size: 25px;
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