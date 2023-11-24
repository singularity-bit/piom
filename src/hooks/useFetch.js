import React from 'react'

export const useFetch = () => {
    const [isLoading, setLoading] = useState(false);
    const [country, setCountry] = useState();
    const [error,setError]=useState('')
    useEffect(() => {
      async function loadCountry(){
        try {
            setLoading(true)
            const data=await fetch(`https://restcountries.com/v3.1/${field}/${name}`,{
                method:'GET',
            })
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
