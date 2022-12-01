import React from 'react';
import {
  BackgroundVideo,
  LOLImage,
  MainView,
  SearchBarStyle,
  TitleText,
  Wrapper,
} from './HomeScreen_styles';

const HomeScreen = () => {
  return (
    <MainView>
      <BackgroundVideo
        source={require('../../assets/lol.mp4')}
        repeat={true}
        muted={true}
        resizeMode={'cover'}
      />

      <Wrapper>
        <LOLImage source={require('../../assets/ucoGG.png')} />
        <TitleText>¡Bienvenido a ucoGG!</TitleText>
        {/* <Searchbar
          value="Kan0#EUW"
          icon={require('../../assets/search.png')}></Searchbar> */}
        <SearchBarStyle
          placeholder="Search here"
          onChangeText={text => console.log(text)}
        />
      </Wrapper>
    </MainView>
  );
};

export default HomeScreen;
