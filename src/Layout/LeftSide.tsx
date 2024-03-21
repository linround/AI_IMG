import layoutCss from './layout.module.less'
import  {useContext} from "react";
import {demoPromptsContext} from "../context/contextInit.ts";
import {SDXLLightning} from "../AIModels/SDXLLightning.tsx";
import {PromptsItem} from "./leftSideComponent/PromptsItem.tsx";
export function LeftSide() {
  const {setCurrentPrompt,prompts} = useContext(demoPromptsContext)
  return (
    <div className={layoutCss.leftSideContainer}>
      {prompts.map((prompt,index) => {
          return (<PromptsItem key={index} onSelect={()=>setCurrentPrompt(prompt)} prompt={prompt} />)
        })}
      <SDXLLightning   />
    </div>
  )
}
