import {ScrollView} from 'react-native';

import {useEffect, useState} from 'react';
import Loading from '../../layout/Loading';
import {
  BackgroundImage,
  Filter,
  Lore,
  Name,
  Spell,
  SpellDescription,
  SpellInfo,
  SpellImage,
  SpellName,
  SpellsSection,
  SpellsTitle,
  Tag,
  TagsSection,
  Title,
  TitleSection,
  Wrapper,
} from './Champion_styles';
import {SpellProps} from './types';

const Champion = ({route}) => {
  const spellImageUrl =
    'https://ddragon.leagueoflegends.com/cdn/12.23.1/img/spell';
  const {championName} = route.params;
  const [image, setImage] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [lore, setLore] = useState();
  const [name, setName] = useState();

  const [spells, setSpells] = useState<SpellProps[]>();
  const [tags, setTags] = useState<string[]>();
  const [title, setTitle] = useState();
  const [version, setVersion] = useState('12.23.1');

  useEffect(() => {
    (async () => {
      // Hacer también un botón para el idioma que debe de ser sencillo, para ello deberemos de implementar un apartado de ajustes dentro de la app

      const championResponse = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${championName}.json`,
      );
      const championResult = await championResponse.json();

      setLore(championResult.data[championName].lore);
      setName(championResult.data[championName].name.toUpperCase());
      setSpells(
        championResult.data[championName].spells.map(spell => {
          return {
            description: spell.description,
            id: spell.id,
            name: spell.name,
          };
        }),
      );
      setTags(championResult.data[championName].tags);
      setTitle(championResult.data[championName].title);

      const imageResponse = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`,
      );
      setImage(imageResponse.url);

      setIsLoading(false);
    })();
  }, []);

  console.log(spells);

  return (
    <>
      {!isLoading ? (
        <>
          <BackgroundImage source={{uri: image}} />
          <Filter />
          <ScrollView>
            <Wrapper>
              <TitleSection>
                <Name>{name}</Name>
                <Title>{title}</Title>
              </TitleSection>
              <Lore>{lore}</Lore>
              <TagsSection>
                {tags?.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsSection>
              <SpellsTitle>Habilidades</SpellsTitle>
              <SpellsSection>
                {spells?.map(spell => (
                  <Spell key={spell.id}>
                    <SpellImage
                      source={{
                        uri: `${spellImageUrl}/${spell.id}.png`,
                      }}></SpellImage>
                    <SpellInfo>
                      <SpellName>{spell.name}</SpellName>
                      <SpellDescription>{spell.description}</SpellDescription>
                    </SpellInfo>
                  </Spell>
                ))}
              </SpellsSection>
            </Wrapper>
          </ScrollView>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Champion;
