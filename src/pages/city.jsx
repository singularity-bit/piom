import React from 'react'
import { useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { useGetCountryByField } from '../hooks/useGetCountryByField';
import { Country } from '../components/Country';

export const City = () => {
  const { capitalName} = useParams();
  const {isLoading,country,errors} = useGetCountryByField({field:'capital',name:capitalName});
  if(isLoading || !country) return <Loading/>
  if(errors) return <h1>something went wrong...</h1>
  return <Country country={country}/>
}
