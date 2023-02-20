import React, {useState} from 'react';
import {FlatList, Image, View} from 'react-native';
import {generalImages} from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import DesignCard from '../../../../components/Cards/DesignCard';
import CustomDropdown from '../../../../components/Dropdowns/CustomDropdown';
import MainDropdown from '../../../../components/Dropdowns/MainDropdown';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ContentContainer from '../../../../components/wrappers/ContentContainer';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const JournalCovers = () => {
  const blackBoardArray = ['Burlap'];
  const printArray = ['Burlap (Distressed)'];
  const chalkBoardArray = ['Full Grain Leather'];
  const collegRuleArray = ['Full Grain Leather (Distressed)'];
  const padArray = ['Canvas'];
  const papyrusArray = ['Canvas (Distressed)'];
  const parchmentArray = ['Cloth Bound'];
  const whiteBoardArray = ['Cloth Bound (Distressed)'];

  const [boardValue, setBoardValue] = useState('Burlap');
  const [printValue, setPrintValue] = useState('Burlap (Distressed)');
  const [chalkBoardValue, setChalkBoardValue] = useState('Full Grain Leather');
  const [collegeRule, setCollegeRule] = useState('Full Grain Leather (Distressed)');
  const [padValue, setPadValue] = useState('Canvas');
  const [papyrusValue, setPapyrusValue] = useState('Canvas (Distressed)');
  const [parchmentValue, setParchmentValue] = useState('Cloth Bound');
  const [whiteBoardValue, setWhiteBoardValue] = useState('Cloth Bound (Distressed)');

  return (
    <ScreenWrapper style={styles.container}>
        <ContentContainer>
      <MainDropdown
        array={blackBoardArray}
        dropdownValue={boardValue}
        dropdownTitle={'Select board'}
        setDropdownValue={setBoardValue}
      />
      <MainDropdown
        array={printArray}
        dropdownValue={printValue}
        dropdownTitle={'Select board'}
        setDropdownValue={setPrintValue}
      />
      <MainDropdown
        array={chalkBoardArray}
        dropdownValue={chalkBoardValue}
        dropdownTitle={'Select board'}
        setDropdownValue={setChalkBoardValue}
      />
      <DesignCard/>
      <MainDropdown
        array={collegRuleArray}
        dropdownValue={collegeRule}
        dropdownTitle={'Select board'}
        setDropdownValue={setCollegeRule}
      />
      <MainDropdown
        array={padArray}
        dropdownValue={padValue}
        dropdownTitle={'Select board'}
        setDropdownValue={setPadValue}
      />
      <MainDropdown
        array={papyrusArray}
        dropdownValue={papyrusValue}
        dropdownTitle={'Select board'}
        setDropdownValue={setPapyrusValue}
      />
      <MainDropdown
        array={parchmentArray}
        dropdownValue={parchmentValue}
        dropdownTitle={'Select board'}
        setDropdownValue={setParchmentValue}
      />
      <MainDropdown
        array={chalkBoardArray}
        dropdownValue={chalkBoardValue}
        dropdownTitle={'Select board'}
        setDropdownValue={setChalkBoardValue}
      />

      <CustomButton text={'Buy Now'} alignStyle={styles.btnContainer} />
      </ContentContainer>
    </ScreenWrapper>
  );
};
export default JournalCovers;
