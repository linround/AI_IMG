import './App.css'
import {UtilityPole} from "./AIModels/UtilityPole.tsx";
import {SDXLLightning} from "./AIModels/SDXLLightning.tsx";
import React, {useContext, useState} from "react";
import css from "./AIModels/SDXLLightning.module.less";
import appCss from './app.module.less'
import {LayoutComponent} from "./Layout/LayoutComponent.tsx";
import {demoPromptsContext} from "./context/contextInit.ts";

function App() {
  const prompts = useContext(demoPromptsContext).prompts
  const [inputs, setInputs] = useState<string>('')
  const onClickDemo =  (e:React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    setInputs(target.innerText)
  }
  return (
    <div className={appCss.container}>
      <LayoutComponent />
      <div onClick={onClickDemo}>
        {prompts.map((item,index) => {
          return (<div className={css.demoItem} key={index}>{item}</div>)
        })}
      </div>
      <UtilityPole inputs={inputs} setInputs={setInputs} />
      <SDXLLightning inputs={inputs} setInputs={setInputs} />
    </div>
  )
}

export default App
