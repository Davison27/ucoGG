import {Text, View, Image} from 'react-native';
import {useEffect, useState} from 'react';
import Loading from '../../layout/Loading';
import {
  BackgroundImage,
  Name,
  Title,
  TitleSection,
  Wrapper,
} from './Champion_styles';

const Champion = ({route}) => {
  const {championName} = route.params;
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [image, setImage] = useState<string>();
  const [version, setVersion] = useState('12.23.1');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // const versionResponse = await fetch(
      //   'https://ddragon.leagueoflegends.com/api/versions.json',
      // );
      // setVersion((await versionResponse.json())[0]);
      // console.log(version);

      const championResponse = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${championName}.json`,
      );
      const championResult = await championResponse.json();
      setName(championResult.data[championName].name);
      setTitle(championResult.data[championName].title);

      const imageResponse = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`,
      );
      setImage(imageResponse.url);

      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          <BackgroundImage
            style={{width: '100%', height: '100%'}}
            source={{uri: image}}
          />

          <Wrapper>
            <TitleSection>
              <Name>{name}</Name>
              <Title>{title}</Title>
            </TitleSection>
          </Wrapper>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Champion;
