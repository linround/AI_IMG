import React from "react";
// url: https://huggingface.co/BotsOne/utilitypole
import { useState } from 'react'
import {AnyObject} from "../type/common.ts";
import {ImgComponent} from "../component/ImgComponent/ImgComponent.tsx";
export function UtilityPole() {
  const [imgUrl,setImgUrl ] = useState<string>('')
  const [inputs, setInputs] = useState<string>('')
  async function query(data:AnyObject) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/BotsOne/utilitypole",
      {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    return result;
  }
  const onClick = () => {
    query({inputs:inputs}).then((response) => {
      // Use image
      const type = response.type;
      const file = new File([response], "image.jpg", { type });
      const imageUrl = URL.createObjectURL(file);
      setImgUrl(imageUrl)
      console.log(imageUrl);
      console.log(response)
    });
  }
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputs(e.target.value)
  }
  return (
    <div>
      <div>
        <ImgComponent src={imgUrl} />
      </div>
      <div>
        <input defaultValue={inputs} onChange={onChange}/>
        <button onClick={onClick}>UtilityPole 生成图片</button>
      </div>
    </div>
  )
}

