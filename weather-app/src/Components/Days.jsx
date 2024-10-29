import React from 'react'

const Days = ({ maxtemp, mintemp, time, weathercode, day }) => {
    const weatherCodeToIcon = {
        0: "🌑",
        1: "☀️",
        2: "⛅",
        3: "☁️",
        45: "🌫️",
        48: "🌫️",
        51: "🌧️",
        53: "🌧️",
        55: "🌧️",
        56: "🌨️",
        57: "🌨️",
        61: "🌧️",
        63: "🌧️",
        65: "🌧️",
        66: "🌨️",
        67: "🌨️",
        71: "❄️",
        73: "❄️",
        75: "❄️",
        77: "❄️",
        80: "🌧️",
        81: "🌧️",
        82: "🌧️",
        85: "❄️",
        86: "❄️",
        95: "⛈️",
        96: "⛈️",
        99: "⛈️",
    };

    let icon = weatherCodeToIcon[weathercode]
    return (
        <div className='myboxes'>
            <p className='icon'>{icon}</p>
            <p><strong>Weather Code: </strong>{weathercode}</p>
            <p><strong>DAY: </strong>{day}</p>
            <p><strong>Time: </strong>{time}</p>
            <p><strong>Max Temp: </strong>{maxtemp}</p>
            <p><strong>Min Temp: </strong>{mintemp}</p>
        </div>
    )
}

export default Days
