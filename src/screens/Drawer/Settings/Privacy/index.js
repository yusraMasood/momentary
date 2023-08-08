import React, {useRef} from 'react';
import {View} from 'react-native';
import {icons} from '../../../../assets/images';
import PublishQuestionPopup from '../../../../components/popups/PublishQuestionPopup';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import TextWithArrowIcon from '../../../../components/ReusableComponent/TextWithArrowIcon';
import TextWithSwitch from '../../../../components/ReusableComponent/TextWithSwitch';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const Privacy = () => {
  const downloadRef = useRef(null);
  const successRef = useRef(null);
  const deleteJournalRef = useRef(null);
  const journalSuccessRef = useRef(null);
  const commentPopup = useRef(null);
  const commentSuccess = useRef(null);
  return (
    <ScreenWrapper style={styles.container}>
      <RobotoMedium style={styles.mainHeading}>Friend Request</RobotoMedium>
      <TextWithSwitch
        text={'Allow Friend Requests'}
        style={styles.switchContainer}
      />
      <TextWithSwitch
        text={'Allow Search by Phone Number'}
        style={styles.switchContainer}
      />
      <TextWithSwitch
        text={'Allow Search by Email Address'}
        style={styles.switchContainer}
      />
      <TextWithSwitch
        text={'Allow Search by Name'}
        style={styles.switchContainer}
      />

      <RobotoMedium style={styles.historicalHeading}>
        Historical Content
      </RobotoMedium>

      <TextWithArrowIcon
        icon={icons.download}
        text={'Download All Journals'}
        iconStyle={styles.downloadIcon}
        onPressPageDesign={() => downloadRef.current.show()}
      />
      <TextWithSwitch text={'Make All Journals Private'} />
      <TextWithArrowIcon
        icon={icons.deleteIcon}
        text={'Delete All Journals'}
        iconStyle={styles.deleteIcon}
        onPressPageDesign={() => deleteJournalRef.current.show()}
      />
      <TextWithArrowIcon
        icon={icons.deleteIcon}
        text={'Delete All Comments'}
        iconStyle={styles.deleteIcon}
        onPressPageDesign={() => commentPopup.current.show()}

      />
      <TextWithArrowIcon
        icon={icons.deleteIcon}
        text={'Delete All Likes'}
        iconStyle={styles.deleteIcon}
      />

      <PublishQuestionPopup
        reference={downloadRef}
        title={'Download Journal'}
        desc={`Are you sure you want to Download Your\njournal?`}
        contentStye={styles.popupStyle}
        onAccept={() => successRef.current.show()}
      />
      <SuccessPopup
        reference={successRef}
        title={'Success'}
        desc={'You have  been successfully downloaded\nyour  journal.'}
      />
      <PublishQuestionPopup
        reference={deleteJournalRef}
        title={'Download Journals'}
        desc={`Are you sure you want to delete all\nyour journals?`}
        contentStye={styles.popupStyle}
        onAccept={() => journalSuccessRef.current.show()}
      />
      <SuccessPopup
        reference={journalSuccessRef}
        title={'Success'}
        desc={'You have been successfully deleted Your journals.'}
      />

      <PublishQuestionPopup
        reference={commentPopup}
        title={'Delete Comments'}
        desc={`Are you sure you want to delete all\nyour comments?`}
        contentStye={styles.popupStyle}
        onAccept={() => commentSuccess.current.show()}
      />
      <SuccessPopup
        reference={commentSuccess}
        title={'Success'}
        desc={'You have been successfully Deleted your\ncomments.'}
      />
    </ScreenWrapper>
  );
};
export default Privacy;
