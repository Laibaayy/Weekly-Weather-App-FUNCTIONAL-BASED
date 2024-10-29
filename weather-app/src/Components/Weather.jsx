import React from 'react'
import { useState, useEffect } from 'react'
import WeatherItem from './WeatherItem'

const Weather = () => {
    const [location, setlocation] = useState("")
    const [getbtn, setgetbtn] = useState('')
    const [weekly, setweekly] = useState()
    const [loader, setloader] = useState(true)
    const [DiaplayLocNmae, setDiaplayLocNmae] = useState('')
    const locationhandler = (e) => {
        setlocation(e.target.value)
    }
    const submithandler = (e) => {
        e.preventDefault();

    }
    const clickhandler = () => {
        setgetbtn(location)

    }

    useEffect(() => {
        setloader(true)
        async function mydata() {
            try {
                const myapi = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${getbtn}`)
                if (!myapi.ok) throw new Error("Something went wrong")
                const data = await myapi.json();
                if (!data.results) throw new Error("City not found")
                console.log(data);
                const { country, country_code, latitude, longitude, name, timezone } = data.results.at(0);
                setDiaplayLocNmae(`${country}, ${name}, ${country_code}`);
                const newapi = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`)
                const newdata = await newapi.json();
                setweekly(newdata.daily);
            }
            catch (error) {
                console.error("There was an error fetching the weather data:")
            } finally {
                setloader(false)
            }
        }
        mydata()
    }, [getbtn])


    return (
        <div>
            <div className='content'>
                <form onSubmit={submithandler}>
                    <input className='fontsize' type="text" placeholder='Enter Location...' value={location} onChange={locationhandler} />
                </form>
                <button className='fontsize' value={getbtn} onClick={clickhandler}>Get Weather</button>
            </div>
            <p><strong>Weather Report: </strong>{DiaplayLocNmae}</p>
            {weekly && <>  < WeatherItem weekly={weekly} maxtemp={weekly.temperature_2m_max} mintemp={weekly.temperature_2m_min}
                time={weekly.time} weathercode={weekly.weathercode}
            /></>}
            {loader && <p>Loading...</p>}
        </div>
    )
}

export default Weather
