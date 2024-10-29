import React from 'react'
import Days from './Days'

const WeatherItem = ({ maxtemp, mintemp, time, weathercode }) => {
    const formatDay = (dateStr) => {
        return new Intl.DateTimeFormat("en", { weekday: "long" }).format(new Date(dateStr));
    };


    return (
        <div className='flex'>
            {time.map((i, index) => {
                return <Days key={index} maxtemp={maxtemp.at(i)} mintemp={mintemp.at(i)} weathercode={weathercode.at(i)} time={time.at(i)} day={formatDay(i)} />
            })}
        </div>
    )
}

export default WeatherItem
