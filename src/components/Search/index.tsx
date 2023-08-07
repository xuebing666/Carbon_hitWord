// import  { Component } from 'react'
import  {  useQuery } from '@tanstack/react-query'
import axios from 'axios'
import './index.css'

export default function Search() {
//   search = () => {
    // const search = () => {/
        
        const {data,isLoading,isError} = useQuery(['message'],() => axios.get('/api/search/mini/hot_word?&page=1&size=5'))
        console.log(data,isLoading,isError); 
        console.log(1);
    // }
//    const crea= useMutation
//   } 
//   render() {
    return (
      <div>
        <input type="text"/><button id='button'>搜索</button>
      </div>
    )
  }
// }
