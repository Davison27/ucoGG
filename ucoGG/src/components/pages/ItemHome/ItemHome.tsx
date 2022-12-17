import React from 'react';
import {
  BackgroundImage,
  ImageWrapper,
  LOLImage,
  MainView,
  SearchBarStyle,
  TitleText,
  Wrapper,
} from './ItemHome_styles';
import {useItem} from './hooks';

const ItemHome = ({navigation}) => {
  const {handleChange, handleSearchPress} = useItem(navigation);
  return (
    <MainView>
      <BackgroundImage source={require('../../../assets/item.jpg')} />
      <Wrapper>
        <ImageWrapper>
          <LOLImage source={require('../../../assets/ornn.png')} />
        </ImageWrapper>
        <TitleText>Directorio Objetos</TitleText>
        {/* <Searchbar
          value="Kan0#EUW"
          icon={require('../../assets/search.png')}></Searchbar> */}
        <SearchBarStyle
          placeholder="Nombre del objeto"
          onChangeText={handleChange}
          onSearchPress={handleSearchPress}

          // onSubmitEditing={handleSubmit}
        />
      </Wrapper>
    </MainView>
  );
};

export default ItemHome;
