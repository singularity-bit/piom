import axios from "axios";
import { useEffect, useState } from "react";

function useGetCountries() {
  const [isLoading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [error,setError]=useState('')
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
          setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {isLoading,countries,error};
}
export default useGetCountries;
