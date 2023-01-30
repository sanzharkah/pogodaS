import React from 'react';
import module from './WeatherCard.module.scss'
import cloud from '../assets/cloudspng.png'

function WeatherCard(props) {
    return (
        <div className={module.container}>
            <div className={module.card}>
                <h2>Алай</h2>
                <div className={module.card_img}>
                    <img src={cloud} />
                </div>
                <div className={module.temperature}>
                    +200°
                </div>
                <div className={module.Day}>
                    Пятница - 27.01.2023
                </div>
                <div className={module.Date}>
                    {/* {data} */}
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;