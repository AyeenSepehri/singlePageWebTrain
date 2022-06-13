import React from 'react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Card from "../ui/Card"
import classes from "./NewInstrumentForm.module.css"
const InstrumentSchema = yup.object({
    name : yup.string().required(),
    image : yup.string().url().required(),
    type : yup.number().required(),
    info : yup.string().required(),
}) 
function NewInstrumentForm(props) {
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver : yupResolver(InstrumentSchema)
    })
    console.log(errors)
    // console.log(errors)
    // const nameInputRef = useRef()
    // const imageInputRef = useRef()
    // const typeInputRef = useRef()
    // const infoInputRef = useRef()
    // const submitHandler = (data) => {
    //     console.log(data)
    // }
    const submitHandler = (data) => {
        console.log(data)
        // event.preventDefault();
        // const enteredName = register.name.current.value
        // const enteredImage = register.image.current.value
        // const enteredType = register.type.current.value
        // const enteredInfo = register.info.current.value
        // const InstrumentData = {
        //     name : enteredName,
        //     image : enteredImage,
        //     type : enteredType,
        //     info : enteredInfo
        // }
        // props.postData(InstrumentData);
        props.postData(data);

    }
    //vaghti handleSubmit ro be onSubmit midam dige submitHandler va dar asl InstrumentData ro nemishnase
  return (
    <Card>
        <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
            <div className={classes.control}>
                <label htmlFor='name'>Instrument's name</label>
                <input type="text" id="name" {...register("name")}/>
                <p>{errors.name?.message}</p>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Instrument's image</label>
                <input type="url" id="image" {...register("image")}/>
                {errors.image && <p>{errors.image.message}</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='type'>Instrument's type</label>
                <input type="text" id="type" {...register("type")}/>
                {errors.type && <p>{errors.type.message}</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='info'>Instrument's info</label>
                <textarea id="info" rows="5" {...register("info")}></textarea>
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