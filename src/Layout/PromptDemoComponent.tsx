import {PromptsItem} from "./leftSideComponent/PromptsItem.tsx";
import {useContext} from "react";
import {demoPromptsContext} from "../context/contextInit.ts";

export function PromptDemoComponent() {

  const {setCurrentPrompt,prompts} = useContext(demoPromptsContext)
  return (
    prompts.map((prompt,index) => {
      return (<PromptsItem key={index} onSelect={()=>setCurrentPrompt(prompt)} prompt={prompt} />)
    })
  )
}
