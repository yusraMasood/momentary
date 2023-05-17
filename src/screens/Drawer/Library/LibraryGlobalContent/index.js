import React,{useState,useEffect} from 'react'
import { View } from 'react-native'
import UserPosts from '../../../../components/ReusableComponent/UserPosts'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import { useGetFeedQuery } from '../../../../state/friends'
import styles from './styles'


const LibraryGlobalContent=()=>{
    const [page,setPage] =useState(1)
    const [entriesData,setEntriesData] =useState([])
    const {data,isLoading,originalArgs,error,isFetching, refetch} =useGetFeedQuery({
      page:1,
      limit:8,
      privacy:"public"})
      console.log("error",error);
    //   console.log(" data in global content", data);

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
            <UserPosts loading={isLoading} array={data?.feeds} refetch={refetch}
            page={page}
            setPage={setPage}
            totalPages={data?.totalPages}
            isFetching={isFetching}
            />

        </ScreenWrapper>
    )
}
export default LibraryGlobalContent

