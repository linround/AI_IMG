import React, {useContext} from "react";
import * as fal from "@fal-ai/serverless-client";
import {SDXLLightningCredentials} from "./env.ts";
import {AnyObject} from "../type/common.ts";
import {demoPromptsContext} from "../context/contextInit.ts";

fal.config({
  credentials: SDXLLightningCredentials, // or a function that returns a string
});




// url: https://huggingface.co/ByteDance/SDXL-Lightning

export function SDXLLightning() {
  const {setImgURL,setCurrentPrompt,currentPrompt} = useContext(demoPromptsContext)

  const  onClick = async () => {
    const result = await fal.subscribe("110602490-fast-sdxl", {
      input: {
        prompt:currentPrompt,
      },
    });
    const {images} = result as AnyObject;
    if(images && images.length >0){
      setImgURL(images[0].url)
    }
  }
  const onChange= (e:React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPrompt(e.target.value)
  }


  return (
    <div>
      <div>
        <input defaultValue={currentPrompt} onChange={onChange}/>
        <button onClick={onClick}>SDXLLightning 生成图片</button>
      </div>
    </div>
  )
}
