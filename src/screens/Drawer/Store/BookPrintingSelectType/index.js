import React,{useState} from 'react'
import { FlatList, View,StyleSheet } from 'react-native'
import Animated from "react-native-reanimated"
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import * as Progress from 'react-native-progress';
import { vw } from '../../../../utils/dimensions';
import styles from './styles';
import BookPrintingCard from '../../../../components/Cards/BookPrintingCard';
import BookPrintingSelectCard from '../../../../components/Cards/BookPrintingSelectCard';
import { generalImages } from '../../../../assets/images';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';

const BookPrintingSelectType=()=>{
    const [progressValue,setProgressValue] =useState(0.1)
    const [count, setCount] = useState(0);
    const printingOptions=[
        {
            title:"Print Yearbook",
            desc:"Print all entries from any given year",
            image: generalImages.yearbook
        },
        {
            title:"Print Existing Journal",
            desc:"Print any of your saved journals.",
            image: generalImages.existingJournal
        },
        {
            title:"eBook (Export PDF)",
            desc:"Print all entries from any given year",
            image: generalImages.ebook
        },
    ]
    const renderPrintingData=({item})=>{
        return(
            <BookPrintingSelectCard
            image={item.image}
            title={item.title}
            desc={item.desc}
            />
        )
    }
    const width = animation.current.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
        extrapolate: "clamp"
      })
    const renderProgressBar=()=>{
        return(
            <View>
                <RobotoRegular style={styles.prgressText}>15%</RobotoRegular>
                <View style={styles.progressBar}>

                <Animated.View style={[[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width}]}/>
                </View>

            </View>
        )
    }
    return(
        <ScreenWrapper style={styles.container}>
            <RobotoRegular style={styles.momentaryDescText}>With Momentary, you can bring{"\n"}
your content to life in professionally-bound{"\n"} hardcover journals</RobotoRegular>
            {/* <Progress.Bar 
            showsText
            progress={progressValue} width={vw*85} /> */}
            {renderProgressBar()}

            <FlatList
            data={printingOptions}
            contentContainerStyle={styles.contentContainer}
            renderItem={renderPrintingData}
            />

        </ScreenWrapper>
    )
}
export default BookPrintingSelectType