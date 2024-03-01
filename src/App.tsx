import { useState } from 'react'
import './App.css'
import {AnyObject} from "./type/common.ts";
import {ImgComponent} from "./component/ImgComponent/ImgComponent.tsx";

function App() {
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
    <>
      <div>
        <ImgComponent src={imgUrl} />
      </div>
      <div>
        <input defaultValue={inputs} onChange={onChange}/>
        <button onClick={onClick}>生成图片</button>
      </div>
    </>
  )
}

export default App
