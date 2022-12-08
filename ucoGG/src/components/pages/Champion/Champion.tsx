import {Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import Loading from '../../layout/Loading';

const Champion = ({route}) => {
  const {championName} = route.params;
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [img, setImage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion/${championName}.json`,
      );
      const result = await response.json();
      setName(result.data[championName].name);
      setTitle(result.data[championName].title);
      setIsLoading(false);
    };
    getData();
  }, []);
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch(
  //       `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`,
  //     );
  //     const result = await response.json();
  //     setImage(response);
  //     setIsLoading(false);
  //   };
  // }, []);

  return (
    <>
      {!isLoading ? (
        <>
          <Text>{name}</Text>
          <Text>{title}</Text>
          <View>{img}</View>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Champion;
