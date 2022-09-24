import React, { useState } from 'react'
import {GiPaperWindmill} from 'react-icons/gi'
import {BsCloudSun} from 'react-icons/bs'
import {FaCompressAlt} from 'react-icons/fa'

const WeatherCards = ({weather, temperature}) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const changeTemperature = () => setIsCelsius(!isCelsius)


  const upper = weather.weather[0].description.toUpperCase()
  

  return (
    <article className='card'>
        <h1 className='card__title'>Weater App</h1>
        <h2 className='card__subtitle'>{`${weather?.name}, ${weather?.sys.country}`}</h2>

        <section className='card__first-section'>
          <img className='card__icon' src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}/>
          

        </section>

        <section className='card__second-section'>
          <h3 className='second__title'>{upper}</h3>
          <ul className='second__list'>
            <li className='second__item'><span className='second__span'><GiPaperWindmill/>  Wind Speed</span> {weather?.wind.speed} m/s</li>
            <li className='second__item'><span className='second__span'><BsCloudSun/>  Clouds</span> {weather?.clouds.all}%</li>
            <li className='second__item'><span className='second__span'><FaCompressAlt/>  Presure</span> {weather?.main.pressure} hPA</li>
          </ul>
        </section>
        <h2 className='card__temperature'>{isCelsius ? `${temperature?.celsius} °C` : `${temperature?.farenheit} °F`}</h2>
        <button className='card__btn' onClick={changeTemperature}>{isCelsius ? 'Change to °f' : 'Change to °C'}</button>
    </article>
    
  )
}

export default WeatherCards