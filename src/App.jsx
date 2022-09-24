import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import WeatherCards from './components/WeatherCards'
import video from './assets/pexels-tim-samuel.mp4'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperture, setTemperature] = useState()


  useEffect(() => {

    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        long: pos.coords.longitude
      }
      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
 // ---------- Peticion del clima -------------

  useEffect(() => {
    if (coords) {
      const APIKEY = '7a605e66531445a851b4e5879aec9d3c'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${APIKEY}`
      axios.get(URL)

      .then(res => {
        const celsius = (res.data.main.temp - 273.15).toFixed(0)
        const farenheit = (celsius * 9 /5 + 32).toFixed(0)
        setTemperature({celsius, farenheit})
        setWeather(res.data)
      })


      .catch(err => console.log(err))
    }

  }, [coords])
  
  

  return (
    
    <div className="App">
      <video autoPlay loop muted className='video'>
        <source src={video}/> <source />
      </video>

      {
        weather ?
        <WeatherCards weather={weather} temperature={temperture}/>
        
        :
        <Loading/>
      }
    </div>
    
  )
}

export default App
