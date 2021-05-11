/* eslint-disable no-unused-vars */

import React, { useState} from 'react';
import axios from 'axios'



const PaysN = () => {
    const [pays, setpays] = useState([])
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')

    const onsubmit = async (e) => {
        e.preventDefault()
        const res = await axios.get(`https://restcountries.eu/rest/v2/name/${input}`)
        setOutput(res.data[0])


    }
    return (

        <div className= 'container Search '>
            <div class="container-fluid w-75 p-3">
                <form class="d-flex">
                    <input onChange={e => setInput(e.target.value)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit" onClick={onsubmit}>Search</button>
                </form>
            </div>
            
       
            {output && (
                <div className="container">
{/*                     
                    <div className='country-pays shadow w-50 p-3'>
                        <div className="country-image">
                            <img src={output.flag} alt="flag" />
                        </div>
                        <div className='country-detail'>
                            <p>{output.callingCodes} </p>
                            <p>{output.name} </p>

                        </div>
                    </div> */}

                    <div class="card container bg-secondary" style={{width: "18rem"}}>
                        <img src={output.flag} class="card-img-top mt-2" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">{output.callingCodes}</h5>
                            <p class="card-text">{output.name}</p>
                            
                        </div>
                    </div>
                </div>
            )}
            

        </div>


    );
}

export default PaysN;