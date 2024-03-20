import './App.css'
import {UtilityPole} from "./AIModels/UtilityPole.tsx";
import {SDXLLightning} from "./AIModels/SDXLLightning.tsx";
import React, {useState} from "react";
import css from "./AIModels/SDXLLightning.module.less";
import appCss from './common/app.module.less'

function App() {
  const demoPrompt = [
    'this is a photo,Next to a big river in the real world,The mouse and the lion are talking',
    'a moon and a little girl',
    'The moonlight shines in the forest, and the little girl is running leisurely in the forest'
  ]
  const [inputs, setInputs] = useState<string>('')
  const onClickDemo =  (e:React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    setInputs(target.innerText)
  }
  return (
    <div className={appCss.container}>
      <h1>AI IMG</h1>
      <div onClick={onClickDemo}>
        {demoPrompt.map((item,index) => {
          return (<div className={css.demoItem} key={index}>{item}</div>)
        })}
      </div>
      <UtilityPole inputs={inputs} setInputs={setInputs} />
      <SDXLLightning inputs={inputs} setInputs={setInputs} />
    </div>
  )
}

export default App
