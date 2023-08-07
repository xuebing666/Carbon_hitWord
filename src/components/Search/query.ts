import axios from "axios";
import { useQuery } from "react-query";

export function useDataQuery(){ 
 return useQuery(['message'],()=> axios.get('https://m.kuaikanmanhua.com/search/mini/hot_word?&page=1&size=5') )
}