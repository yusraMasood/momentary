import React,{useState,useEffect} from 'react'
import { View } from 'react-native'
import UserPosts from '../../../../components/ReusableComponent/UserPosts'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import { useGetFeedQuery } from '../../../../state/friends'
import styles from './styles'
import RobotoMedium from '../../../../components/Texts/RobotoMedium'


const LibraryGlobalContent=(props)=>{
    const [page,setPage] =useState(1)
    const [entriesData,setEntriesData] =useState([])
    // console.log(" props.route?.params?.",props.route?.params);
    const {data,isLoading,originalArgs,error,isFetching, refetch} =useGetFeedQuery({
      page,
      limit:8,
      privacy:props?.route?.params?.type,
      type: "favorite"
    })
    // console.log(" data", data,originalArgs );
      useEffect(() => {
        if(!isFetching){
          if(page===1)
          {
            setEntriesData(data?.feeds)
    
            
          }
          else{
            setEntriesData([...entriesData,...data?.feeds])
          }
        }
       
      }, [data]);
// console.log("pages", data?.feeds);

    return(
        <ScreenWrapper style={styles.container}>
          {error?
        <RobotoMedium>Something went wrong</RobotoMedium>:
        <UserPosts isLoading={isLoading} array={entriesData} refetch={refetch}
        page={page}
        setPage={setPage}
        totalPages={data?.totalPages}
        isFetching={isFetching}
        />

        }

        </ScreenWrapper>
    )
}
export default LibraryGlobalContent

