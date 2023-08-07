import  { useRef, useState } from 'react'
import  { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { CardWithStats } from '../Card'
import './index.css'

export default function Home() {
  //  const pageIndexRef = useRef(0)
   const [pageIndex,setPageIndex]=useState(0)   
   const {data,refetch} = useQuery(['message'],() => axios.get(`/api/search/mini/hot_word?&page=${pageIndex}&size=5`))
   const dataArray = data?.data.hits.hot_word;
   
   function changePage(index:number){
        setPageIndex(index);
        // pageIndexRef.current = index
        refetch() 
   }
  return (
    <div>
      <div className='cardList'>
        {dataArray?.map((item:any)=>{
            // console.log(item,4444);
            
           return <CardWithStats key={item?.target_id}
            image={item.background_image_url||''} 
            title={item.target_title||''} 
            description={''} 
            stats={[{title:'id',value:item?.target_id||''},{title:'热度',value:item?.description||''}]} />
        })}
        
        {/* <CardWithStats 
        image={dataArray[1]?.background_image_url||''} 
        title={dataArray[1]?.target_title||''} 
        description={''} 
        stats={[{title:'id',value:dataArray[1]?.target_id},{title:'热度',value:dataArray[1]?.description}]}></CardWithStats>
        <CardWithStats 
        image={dataArray[2]?.background_image_url} 
        title={dataArray[2]?.target_title} 
        description={''} 
        stats={[{title:'id',value:dataArray[2]?.target_id},{title:'热度',value:dataArray[2]?.description}]}></CardWithStats> */}
      </div>
      <div className='buttonList'>
        <button onClick={()=>changePage(1)}>1</button>
        <button onClick={()=>changePage(2)}>2</button>
        <button onClick={()=>changePage(3)}>3</button>
        <button onClick={()=>changePage(4)}>4</button>
        <button onClick={()=>changePage(5)}>5</button>
      </div>
    </div>
  )
}
