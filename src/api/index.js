import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'


export const fetchData = async (country) => {
    const changableUrl = `${url}/countries/${country}`
    let response;
    if(country){
        response = await axios.get(changableUrl);
    } else {
        response = await axios.get(url);
    }
    const confirmed = response.data.confirmed.value;
    const recovered = response.data.recovered.value;
    const deaths = response.data.deaths.value;
    const lastUpdate = response.data.lastUpdate;
    const modified_response = {
        'confirmed': confirmed,
        'recovered': recovered,
        'deaths': deaths,
        'lastUpdate': lastUpdate 
    };

    return modified_response;
}

export const fetchDailyData = async () =>{
    const response = await axios.get(url + '/daily');
    const modified_response = response.data.map((index)=> (
     {
         totalConfirmed: index.totalConfirmed,
         totalDeath: index.deaths.total,
         date: index.reportDate
     }   
    ))
    return modified_response;
};

export const fetchCountries = async () => {
    const response = await axios.get(url + '/countries');
    const modified_response = response.data.countries;
    return modified_response;
}
