import React from 'react'
import { useNavigate } from 'react-router-dom'
import NewInstrumentForm from '../components/Instruments/NewInstrumentForm'


function SecondPage() {
  const navigate = useNavigate();
  const AddInstrument = (InstrumentData) => {

      fetch(
        "https://addinstrument-train-default-rtdb.firebaseio.com/Instrument.json",
        {
          method : "POST",
          body : JSON.stringify(InstrumentData),
          headers : {
            "Content-Type" : "application/json"
          },
        }
      ).then(() => {
        navigate("/")
      })
  }
  return (
    <div>
      <h1>new instrument</h1>
      <NewInstrumentForm postData = {AddInstrument}/>
    </div>
  )
}

export default SecondPage