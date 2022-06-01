import React from 'react'
import { useRef } from 'react'
import Card from "../ui/Card"
import classes from "./NewInstrumentForm.module.css"
function NewInstrumentForm(props) {
    const nameInputRef = useRef()
    const imageInputRef = useRef()
    const typeInputRef = useRef()
    const infoInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredImage = imageInputRef.current.value
        const enteredType = typeInputRef.current.value
        const enteredInfo = infoInputRef.current.value
        const InstrumentData = {
            name : enteredName,
            image : enteredImage,
            type : enteredType,
            info : enteredInfo
        }
        props.postData(InstrumentData);
    }
  return (
    <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Instrument's name</label>
                <input type="text" id="name" required ref={nameInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Instrument's image</label>
                <input type="url" id="image" required ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='type'>Instrument's type</label>
                <input type="text" id="type" required ref={typeInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='info'>Instrument's info</label>
                <textarea id="info" rows="5" required ref={infoInputRef}></textarea>
            </div>
            <div className={classes.action}>
                <button>add instrument</button>
            </div>
        </form>
    </Card>
  )
}

export default NewInstrumentForm