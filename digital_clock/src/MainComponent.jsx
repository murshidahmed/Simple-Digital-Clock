import React, { useEffect, useState } from 'react'
import BgImage from './assets/wllpaper.jfif'

function MainComponent() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interValid = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return() => {
      clearInterval(interValid);
    }

  },[])

  function formatTime(){
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const maridiem = hours >= 12 ? "PM" : "AM";

    return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)} ${maridiem}`
  }

  function padZero(number){
    return (number < 10 ? "0" : "") + number;
  }

  
  return (
    <div className='container'>
        <div className='bg'>
            <div className='overlay'></div>
            <h1>{formatTime()}</h1>
        </div>
        
    </div>
  )
}

export default MainComponent