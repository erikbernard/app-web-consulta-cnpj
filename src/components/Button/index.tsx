import React from "react";
import  "./index.css"
interface ButtonProps{
    title: string,
    css: string,
    onClick():void
}
export default function Button(props: ButtonProps){
    return(
        <button type="button" onClick={props.onClick} className={`${props.css}`}>{props.title}</button>
    )
}