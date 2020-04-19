import React, {useState, useEffect} from 'react';
import Style from './Chart.module.css';
import {Line, Bar} from 'react-chartjs-2';
import {fetchDailyData} from '../../api'


const Chart = ({ data: {confirmed, deaths, recovered}, country })=>{
    const [dailyData, setDailyData] = useState([]);

    console.log(confirmed, deaths, recovered);

    useEffect(()=>{
        const fetchAPI = async()=>{
            setDailyData(await fetchDailyData());
        };
        fetchAPI();
    }, [setDailyData]);

    const lineChart = (
        dailyData.length ?
        (<Line
        data={{
            labels: dailyData.map(({ date })=>date),
            datasets:[{
                data : dailyData.map(({totalConfirmed}) => totalConfirmed),
                label: 'Confirmed',
                borderColor: "greenyellow",
                fill: true},

                {data : dailyData.map(({totalDeath})=>totalDeath),
                label: 'Deaths',
                borderColor: 'red',
                fill: true
            }]
        }}
        />) : null
    )

    const BarChart = (
        deaths ?
        <Bar
            data ={
                {labels: ['Infected', 'Recovered', 'Deaths' ],
                datasets: [{
                    label: ['d'],
                    backgroundColor: ['yellow', 'red', 'yellowgreen'],
                    data:[confirmed , deaths, recovered]
                }]
            }}
            options={{
                legend: {display: false},
                title: {display: true, text: `Current in ${country}`}
            }}
        /> : null
    )


    return(
        <div className={Style.container}>
            {country ? BarChart : lineChart}
        </div>
    );

};

export default Chart;