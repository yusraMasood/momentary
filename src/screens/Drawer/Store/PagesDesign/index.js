import React, {useState} from 'react';
import CustomButton from '../../../../components/Buttons/CustomButton';
import DesignCard from '../../../../components/Cards/DesignCard';
import MainDropdown from '../../../../components/Dropdowns/MainDropdown';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ContentContainer from '../../../../components/wrappers/ContentContainer';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const PagesDesign = () => {
  const blackBoardArray = ['Blackboard'];
  const printArray = ['Blueprint'];
  const chalkBoardArray = ['Chalkboard'];
  const collegRuleArray = ['College Rule'];
  const padArray = ['Legal Pad'];
  const papyrusArray = ['Papyrus'];
  const parchmentArray = ['Parchment'];
  const whiteBoardArray = ['Whiteboard'];

  const [boardValue, setBoardValue] = useState('Blackboard');
  const [printValue, setPrintValue] = useState('Blueprint');
  const [chalkBoardValue, setChalkBoardValue] = useState('Chalkboard');
  const [collegeRule, setCollegeRule] = useState('College Rule');
  const [padValue, setPadValue] = useState('Legal Pad');
  const [papyrusValue, setPapyrusValue] = useState('Papyrus');
  const [parchmentValue, setParchmentValue] = useState('Parchment');
  const [whiteBoardValue, setWhiteBoardValue] = useState('Whiteboard');

  // const renderPrints = () => {
  //   return (
  //     <View style={styles.printContainer}>
  //       <View style={styles.printImgContainer}>
  //         <Image source={generalImages.print} style={styles.imagePrint} />
  //       </View>
  //       <RobotoRegular style={styles.printText}> Dotted - $1</RobotoRegular>
  //     </View>
  //   );
  // };

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

      {/* <FlatList
        data={[1, 2, 3, 4, 5]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderPrints}
      /> */}
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
export default PagesDesign;
