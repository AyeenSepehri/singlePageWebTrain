import React from 'react'
import { useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Card from "../ui/Card"
import classes from "./NewInstrumentForm.module.css"
const InstrumentSchema = yup.object().shape({
    name : yup.string().required("fill name correct"),
    image : yup.string().url().required("fill url correct"),
    type : yup.string().required("fill type correct"),
    info : yup.string().required("fill info correct"),
}) 
function NewInstrumentForm(props) {
    const {register,handleSubmit,formState:{errors}} = useForm({resolver : yupResolver(InstrumentSchema)})
    // console.log(errors)
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
                <input type="text" id="name" {...register("name")} ref={nameInputRef}/>
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Instrument's image</label>
                <input type="url" id="image" {...register("image")} ref={imageInputRef}/>
                {errors.image && <p>{errors.image.message}</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='type'>Instrument's type</label>
                <input type="text" id="type" {...register("type")} ref={typeInputRef}/>
                {errors.type && <p>{errors.type.message}</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='info'>Instrument's info</label>
                <textarea id="info" rows="5" {...register("info")} ref={infoInputRef}></textarea>
                {errors.info && <p>{errors.info.message}</p>}
            </div>
            <div className={classes.action}>
                <button>add instrument</button>
            </div>
        </form>
    </Card>
  )
}

export default NewInstrumentForm