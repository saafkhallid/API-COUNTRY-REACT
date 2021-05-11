/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const ShowCoun = (props) => {
    const name = props.location.pathname;
    const capital = name.split('/')[2];

    const [output, setOutput] = useState('')
    const onsubmit = async () => {

        const res = await axios.get(`https://restcountries.eu/rest/v2/name/${capital}`)
        setOutput(res.data[0])


    }
    console.log(output)
    useEffect(() => {
        onsubmit()
    }, [])

    return (
        <div className="container col-8 p-5 mt-5  ">
            {output && (
                <>
                    <div className='d-flex shadow p-3 mb-5 '>
                        <div >
                            <img src={output.flag} alt="flag" className="w-50 p-3" />
                            <h2 className="d-flex p-3">{output.name} </h2>
                        </div>
                        <div className='col-4 ' >
                            <div className="d-flex"> <b>nativeName: </b> <p>{output.nativeName}</p></div>
                            <div className="d-flex"><b>region: </b> &nbsp;<p> {output.region} </p></div>
                            <div className="d-flex"><b>capital: </b> &nbsp;<p> {output.capital} </p></div>
                            <div className="d-flex"><b>Calling code: </b> &nbsp;<p> {output.callingCodes} </p> </div>
                            <div className="d-flex"> <b>alpha3Code: </b> &nbsp;<p> {output.alpha3Code} </p></div>
                            <div className="d-flex"><b>population: </b> &nbsp;<p> {output.population} </p></div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ShowCoun;