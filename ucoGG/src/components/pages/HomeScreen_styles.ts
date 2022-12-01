import {Image, Text, View} from 'react-native';
import styled from 'styled-components';
import Video from 'react-native-video';
import SearchBar from 'react-native-dynamic-search-bar';

export const MainView = styled(View)`
  height: 100%;
`;

export const BackgroundVideo = styled(Video)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const LOLImage = styled(Image)`
  width: 35%;
  height: 30%;
`;

export const TitleText = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: 30px;
  margin-top: 5px;
`;

export const Wrapper = styled(View)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: center;
  padding: 10px;
`;

export const SearchBarStyle = styled(SearchBar)`
  margin-top: 3%;
`;
