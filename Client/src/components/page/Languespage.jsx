/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState ,useEffect} from 'react';

const Languse = () => {
const [data, setData] = useState([])
const [input, setInput] =useState({name:''})
const [output, setOutput] = useState([])

 useEffect(() => {
      fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setData(data));

 },[])

 useEffect(()=>{
   setOutput([])
   data.filter(val => {
     if (val.languages[0].name.includes(input)){
       setOutput(output =>[...output, val])
     }
   })

 },[input]);

 console.log('output=>', output);

    return (
      <div className='container select'>
          <select name='name' onChange={e => setInput(e.target.value)} class="form-select form-select-sm  w-75 p-3" aria-label=".form-select-sm example">
          <option selected>Languse</option>
          <option value="Arabe">Arabe</option>
          <option value="Spanish">Spanish</option>
          <option value="Pashto">Pashto</option>
          <option value="French">French</option>
          <option value="English">English</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Armenian">Armenian</option>
          <option value="German">German</option>
          <option value="Bosnian">Bosnian</option>
          <option value="Norwegian">Norwegian</option>
          <option value="Bosnian">Bosnian</option>
        </select> 
        <div className="countries">
                {output.map((res, index) => (
                    <>
                       <div className='country' key={index}>
                            <div className="country-image">
                                <img src={res.flag} alt="flag" />
                            </div>
                            <div className='country-detail'>
                                <h4>{res.name}</h4>
                                <p>{res.languages[0].name}</p>
                               
                            </div>
                        </div>
                    </>
                ))}
            </div>

      </div>
    )
}

export default Languse;