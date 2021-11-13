import React, { useEffect, useState } from 'react'
import sliderStyle from "./slider.module.css"
import { src } from './imgsrc'

function Slider() {
    const [temp,setTemp] =useState(0)


    useEffect(()=>{
        let x =setInterval(()=>{
            if(temp===4){
                setTemp(pre=>pre=0)
            }else if(temp<4){
                setTemp(pre=>pre+1)       
            }
        },3000)
        return(()=>clearInterval(x))
    },[temp])
   
   
    return (
        <div className={sliderStyle.main}>
            <div className={sliderStyle.mainimg}>
                <div className={sliderStyle.phone}>
                    <img  src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png" alt="" />
                </div>
                <div className={sliderStyle.opac}>
                    <img className={sliderStyle.images}  src={src[temp]} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Slider
