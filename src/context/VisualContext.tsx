import React from "react";
import {demoPrompts} from "../common/constValue.ts";
import {demoPromptsContext} from "./contextInit.ts";


export function VisualContext(props:React.ProviderProps<any>):React.ReactElement {
  return (
    <demoPromptsContext.Provider value={{
        prompts: demoPrompts
      }}>
      {props.children}
    </demoPromptsContext.Provider>
  )
}
