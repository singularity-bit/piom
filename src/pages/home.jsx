import React from "react";
import Card from "../components/Card/Card";
import Col from "../components/Layout/Col";
import Row from "../components/Layout/Row";
import { Loading } from "../components/Loading";
import useGetCountries from "../hooks/useGetCountries";


const HomePage = () => {
    const {isLoading,countries,errors} = useGetCountries();
    const countriesList = countries.map((country, index) => {
      return (
        <Col key={`${country?.name.official}_${index}`}>
          <Card
            header={country?.name.official}
            title={country?.capital?.at(0)}
            image={country?.flags.png}
            content={country?.subregion}
          />
        </Col>
      );
    });
    if(isLoading) return <Loading/>
    if(errors) return <h1>something went wrong...</h1>
    return (
      <div className="container">
        <Row className='row-cols-auto g-4 p-4'>{countriesList}</Row>
      </div>
    );
}

export default HomePage