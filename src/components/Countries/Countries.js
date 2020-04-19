import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl } from '@material-ui/core';
import Style from './Countries.module.css';
import {fetchCountries} from '../../api/index.js';


const Countries = ({handleCountryChange}) =>{
    
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        const fetchAPI = async ()=> {
            setCountries( await fetchCountries() );
        };
        fetchAPI();
    }, [setCountries]);



    return(
        <FormControl>
            <NativeSelect className={Style.nativeSelect} onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country, i)=><option key={i} value={country.name}>{country.name}</option>)};
            </NativeSelect>
        </FormControl>
    );
}

export default Countries;