import React from 'react';
import cx from 'classnames';
import CountUp from 'react-countup';
import styles from './TotalEffect.module.css';

const TotalEffect = ({data: {confirmed, recovered, deaths, lastUpdate }})=>{

    if(!confirmed){
        return 'Loading...'
    }

    return(
        <div className={styles.container}>
            <div className={cx(styles.total_item, styles.item1)}>
                <h2>People Have Been Confirmed </h2>
                <h3>
                    <CountUp className={styles.countUp} start = {0} end = {confirmed} duration = {2}/> People
                </h3>
            </div>
            <div className={cx(styles.total_item, styles.item2)}>
                <h2>People Have Been Recovered </h2>
                <h3>
                    <CountUp className={styles.countUp} start = {0} end = {recovered} duration = {2}/> People    
                </h3>
            </div>
            <div className={cx(styles.total_item, styles.item3)}>
                <h2>People Have Dead </h2>
                <h3>
                    <CountUp className={styles.countUp} start = {0} end = {deaths} duration = {2}
                    /> People
                </h3>
            </div>
        </div>
    );

};

export default TotalEffect;