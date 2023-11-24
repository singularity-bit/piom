import { useEffect, useState } from "react";
import { axiosInstance } from "../service/httpService";

export function useGetCountryByField({field,name}) {
    const [isLoading, setLoading] = useState(false);
    const [country, setCountry] = useState();
    const [error,setError]=useState('')
    useEffect(() => {
      async function loadCountry(){
        try {
            setLoading(true)
            const data=await axiosInstance.get(`${field}/${name}`)
            data.data && setCountry(data.data[0])
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
      }
      name && loadCountry()
    
    }, []);
  
    return {isLoading,country,error};
}