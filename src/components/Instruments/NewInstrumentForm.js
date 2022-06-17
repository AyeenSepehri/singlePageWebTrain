import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Card from "../ui/Card"
import classes from "./NewInstrumentForm.module.css"
const InstrumentSchema = yup.object({
    name : yup.string().required(),
    image : yup.string().url().required(),
    type : yup.string().required(),
    info : yup.string().required(),
}) 
function NewInstrumentForm(props) {
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver : yupResolver(InstrumentSchema)
    })
    console.log(errors)

    const submitHandler = (InstrumentData) => {
        props.postData(InstrumentData);
        console.log(InstrumentData)
    }
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