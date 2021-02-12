import React from 'react'
import style from './PrimaryTextField.module.scss'

export default function PrimaryTextField(props: { 
    placeholder?: string,
    value: string,
    onChange,
    error: string | null,
    onKeyPress}) {

    let errorStyle = [style.Error]

    if(!props.error) errorStyle.push(style.ErrorInActive)
    else errorStyle.push(style.ErrorActive)

    return (<div>
        <p className={errorStyle.join(' ')}>{props.error}</p>
        <input className={style.PrimaryTextField}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            type="text" 
            onKeyPress={props.onKeyPress}/>
    </div>)
}
