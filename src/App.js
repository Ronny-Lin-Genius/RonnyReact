import React from "react";
import TotalEffect from './components/TotalEffect/TotalEffect';
import Chart from './components/Chart/Chart.js';
import Countries from './components/Countries/Countries.js';
import {fetchData} from './api/index.js'; // the /index.js can be ignore
import Style from './App.module.css';
// import { wait } from "@testing-library/react";

class App extends React.Component{
    state = {
        data: {},
        country: ''
    }

    async componentDidMount(){
        this.setState(this.state.data = await fetchData())
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country)
        this.setState({data: fetchedData, country: country})
    }


    render(){

        return(
            <main>
                <div className={Style.title}>
                    <h1>C<span>RON</span>OVIRUS</h1>
                    <img src={require("./picture/coronavirus.jpg")}></img>
                </div>
                <TotalEffect data={this.state.data} />
                <Countries handleCountryChange={this.handleCountryChange}/>
                <Chart data={this.state.data} country={this.state.country}/>
            </main>
        );
    };

}

export default App;