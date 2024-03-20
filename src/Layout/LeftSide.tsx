import layoutCss from './layout.module.less'
import  {useContext} from "react";
import {demoPromptsContext} from "../context/contextInit.ts";
import {SDXLLightning} from "../AIModels/SDXLLightning.tsx";
export function LeftSide() {
  const {setCurrentPrompt,prompts} = useContext(demoPromptsContext)
  return (
    <div className={layoutCss.leftSideContainer}>
      {prompts.map((item,index) => {
          return (<div key={index} onClick={() => setCurrentPrompt(item)}>{item}</div>)
        })}
      <SDXLLightning   />
    </div>
  )
}
