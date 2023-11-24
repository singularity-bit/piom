import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetCountryByField } from '../hooks/useGetCountryByField';
import { Loading } from '../components/Loading';
import { Country } from '../components/Country';

const CountryName = () => {
    const { countryName} = useParams();
    const {isLoading,country,errors} = useGetCountryByField({field:'name',name:countryName});
    if(isLoading || !country) return <Loading/>
    if(errors) return <h1>something went wrong...</h1>
  return <Country country={country}/>
}

export default CountryName