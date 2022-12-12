import {Text, View, Image} from 'react-native';
import {useEffect, useState} from 'react';
import Loading from '../../layout/Loading';
import {
  BackgroundImage,
  Filter,
  Lore,
  Name,
  Tag,
  TagsSection,
  Title,
  TitleSection,
  Wrapper,
} from './Champion_styles';

const Champion = ({route}) => {
  const {championName} = route.params;
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [lore, setLore] = useState();
  const [tags, setTags] = useState<string[]>();
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
      setName(championResult.data[championName].name.toUpperCase());
      setTitle(championResult.data[championName].title);
      setLore(championResult.data[championName].lore);
      setTags(championResult.data[championName].tags);

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
          <BackgroundImage source={{uri: image}} />
          <Filter />
          <Wrapper>
            <TitleSection>
              <Name>{name}</Name>
              <Title>{title}</Title>
            </TitleSection>
            <Lore>{lore}</Lore>
            <TagsSection>
              {tags?.map(tag => (
                <Tag>{tag}</Tag>
              ))}
            </TagsSection>
          </Wrapper>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Champion;
