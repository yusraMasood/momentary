import React from 'react';
import {View, Image, FlatList} from 'react-native';
import CardQuestions from '../../../../components/Cards/CardQuestions';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const FrequentlyAskedQuestions = () => {
  const renderQuestion = () => {
    return(

        <CardQuestions text={'Lorem ipsum dolor sit amet, consectetur ?'} 
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis "}
        />

    )
  };
  return (
    <ScreenWrapper style={styles.container}>
      <FlatList data={[1, 2, 3, 4, 5]}
      keyExtractor={(item,index)=> index}
      key={"frequentlyaskedQsArray"}
      renderItem={renderQuestion} />
    </ScreenWrapper>
  );
};
export default FrequentlyAskedQuestions;
