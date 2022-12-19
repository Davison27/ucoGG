import {ScrollView, Text, Image} from 'react-native';
import {useEffect, useState} from 'react';
import Loading from '../../layout/Loading';
import lolItems from 'lol-items/items';
import {ItemProps} from './types';
import {ItemImage} from './Item_styles';

const Item = ({route}) => {
  const {itemName} = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<ItemProps[]>(lolItems);
  const [item, setItem] = useState<ItemProps>();
  const [itemImage, setItemImage] = useState<string>();

  useEffect(() => {
    const currentItem = items.find(item => item.name === itemName);
    setItem(currentItem);
    setIsLoading(false);
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          <Text>{item?.name}</Text>
          <Text>{item?.plaintext}</Text>
          <ItemImage
            source={{
              uri: item?.icon,
            }}></ItemImage>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Item;
