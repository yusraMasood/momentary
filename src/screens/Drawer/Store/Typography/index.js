import React, {useState} from 'react';
import {FlatList, Image, View} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import MainDropdown from '../../../../components/Dropdowns/MainDropdown';
import PoppinsRegular from '../../../../components/Texts/PoppinsRegular';
import ContentContainer from '../../../../components/wrappers/ContentContainer';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const Typography = () => {
  const fontPackArray = ['Academic Font Pack'];
  const BrutalistFontArray = ['Brutalist Font Pack'];
  const classicFontArray = ['Classical Font Pack'];
  const cursiveFontArray = ['Cursive Font Pack'];
  const hipsterFontArray = ['Hipster Font Pack'];
  const retroFontArray = ['Retro Font Pack'];

  const [fontPack, setFontPack] = useState('Academic Font Pack');
  const [brutalistFont, setBrutalistFont] = useState('Brutalist Font Pack');
  const [classicFont, setClassicFont] = useState('Classical Font Pack');
  const [cursiveFont, setCursiveFont] = useState('Cursive Font Pack');
  const [hipsterFont, setHipsterFont] = useState('Hipster Font Pack');
  const [retroFont, setRetroFont] = useState('Retro Font Pack');

  const renderFonts = () => {
    return (
      <PoppinsRegular style={styles.poppinsText}> Poppins - $1</PoppinsRegular>
    );
  };
  return (
    <ScreenWrapper style={styles.container}>
      <ContentContainer aware>
        <MainDropdown
          array={fontPackArray}
          dropdownValue={fontPack}
          dropdownTitle={'Select board'}
          setDropdownValue={setFontPack}
        />
        <MainDropdown
          array={BrutalistFontArray}
          dropdownValue={brutalistFont}
          dropdownTitle={'Select board'}
          setDropdownValue={setBrutalistFont}
        />
        <MainDropdown
          array={classicFontArray}
          dropdownValue={classicFont}
          dropdownTitle={'Select board'}
          setDropdownValue={setClassicFont}
        />
        <FlatList
          data={[1, 2, 3, 4]}
          keyExtractor={(item, index) => index}
          key={'typographyArray'}
          renderItem={renderFonts}
          contentContainerStyle={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
        <MainDropdown
          array={cursiveFontArray}
          dropdownValue={cursiveFont}
          dropdownTitle={'Select board'}
          setDropdownValue={setCursiveFont}
        />
        <MainDropdown
          array={hipsterFontArray}
          dropdownValue={hipsterFont}
          dropdownTitle={'Select board'}
          setDropdownValue={setHipsterFont}
        />
        <MainDropdown
          array={retroFontArray}
          dropdownValue={retroFont}
          dropdownTitle={'Select board'}
          setDropdownValue={setRetroFont}
        />

        <CustomButton text={'Buy Now'} alignStyle={styles.btnContainer} />
      </ContentContainer>
    </ScreenWrapper>
  );
};
export default Typography;
