import React from "react";
import * as fal from "@fal-ai/serverless-client";
import {SDXLLightningCredentials} from "./env.ts";
import {ImgComponent} from "../component/ImgComponent/ImgComponent.tsx";
import {useState} from "react";
import {AnyObject} from "../type/common.ts";
fal.config({
  credentials: SDXLLightningCredentials, // or a function that returns a string
});

const demoPrompt = [
  'The mouse and the lion are talking',
  'moon'
]


// url: https://huggingface.co/ByteDance/SDXL-Lightning
export function SDXLLightning() {

  const [imgUrl,setImgUrl ] = useState<string>('')
  const [inputs, setInputs] = useState<string>('')
  const  onClick = async () => {
    const result = await fal.subscribe("110602490-fast-sdxl", {
      input: {
        prompt:inputs,
      },
    });

    const {images} = result as AnyObject;
    if(images && images.length >0){
      setImgUrl(images[0].url)
    }
  }
  const onChange= (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputs(e.target.value)
  }

  const onClickDemo = async () => {}

  return (
    <div>
      <div>
        <ImgComponent src={imgUrl} />
      </div>
      <div onClick={onClickDemo}>
        {demoPrompt.map((item,index) => {
            return (<div key={index}>{item}</div>)
          })}
      </div>

      <div>
        <input defaultValue={inputs} onChange={onChange}/>
        <button onClick={onClick}>SDXLLightning 生成图片</button>
      </div>
    </div>
  )
}
