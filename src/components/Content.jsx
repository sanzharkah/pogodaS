import React from 'react';
import module from './Content.module.scss'
import Weather from '../assets/photka.jpg'
import Search from './Search'
import WeatherCard from './WeatherCard'

function Content(props) {
    return (
        <main style={{
        }}>
            <div className={module.main}>
                <h1>Просмотр Погоды</h1>
                <Search />
                <WeatherCard />
            </div>
        </main>
    );
}

export default Content;