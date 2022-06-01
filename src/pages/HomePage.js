import React from 'react'
import { useState , useEffect } from 'react';
import InstrumentationCard from '../components/Instruments/InstrumentationCard';

function HomePage() {
  const [loading, setLoading] = useState(true)
  const [loaded, setLoaded] = useState([])
useEffect(() => {
  setLoading(true)
  fetch("https://addinstrument-train-default-rtdb.firebaseio.com/Instrument.json"
  ).then((response) => {
    return response.json()
  }).then((data) => {
    const Instruments =[]
    for(const key in data){
      const instrument = {
        id : key,
        ...data[key]
      }
      Instruments.push(instrument)
    }

    setLoading(false)
    setLoaded(Instruments)
  })
} , [])

  if (loading) {
    return <section>
      <h1>Loading...</h1>
    </section>
  }

  return (
    <div>
      <h1>instruments</h1>
      <div>
        <InstrumentationCard Items={loaded} />
      </div>
    </div>
  )
}

export default HomePage