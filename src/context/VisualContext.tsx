import React from "react";
import { prompts} from "../common/constValue.ts";
import {demoPromptsContext} from "./contextInit.ts";


export function VisualContext(props:React.ProviderProps<any>):React.ReactElement {
  const [currentPrompt, setCurrentPrompt] = React.useState<string>('')
  const [imgURL,setImgURL] = React.useState<string>('')
  return (
    <demoPromptsContext.Provider value={{
        prompts,
        currentPrompt,
        setCurrentPrompt,
        imgURL,
        setImgURL,
      }}>
      {props.children}
    </demoPromptsContext.Provider>
  )
}
