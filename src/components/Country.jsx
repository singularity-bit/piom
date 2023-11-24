import React from 'react'
import Row from './Layout/Row'
import Col from './Layout/Col'

export const Country = ({country}) => {
  return (
    <div className='container'>
   {country && <>
   <div className='container'>
   <Row className='justify-content-center text-center'>
      <Col>
        <h1>{country?.name?.official}</h1>
      </Col>
    </Row>
     <Row className='row-cols-auto justify-content-between'>
      <Col>
      <h2 >Flag:</h2>
        <img
          src={country?.flags?.png}
          alt="flag"
          loading="lazy" className="card-img-top mb-2"
        />
      </Col>
      <Col>
      <h2>Coat of arms:</h2>
        <img
          src={country?.coatOfArms?.png}
          alt="coat of arms"
        />
      </Col>
     </Row>
   </div>
    <div className='container mt-5'>
    <Row>
        <table className='table table-bordered'>
            <tr>
                <th>Capital</th>
                <th>Area</th>
                <th>Population</th>
                <th>Region</th>
                <th>Subregion</th>
                <th>Car sign</th>
                <th>Driving side</th>
                <th>Flag emoji</th>
                <th>UN Member</th>
                <th>FIFA namer</th>
            </tr>
            <tr>
                <td>{country?.capital[0]}</td>
                <td>{country?.area}</td>
                <td>{country?.population}</td>
                <td>{country?.region}</td>
                <td>{country?.subregion}</td>
                <td>{country?.car?.signs[0]}</td>
                <td>{country?.car?.side}</td>
                <td>{country?.flag}</td>
                <td>{country?.unMember ? 'Yes' : 'No'}</td>
                <td>{country?.fifa}</td>
            </tr>
        </table>
     </Row>
    </div>
   </>}
  </div>
  )
}
