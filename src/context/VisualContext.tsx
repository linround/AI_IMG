import React, {useEffect} from "react";
import { prompts} from "../common/constValue.ts";
import {demoPromptsContext,pictureContext} from "./contextInit.ts";
import {getPictureList, IPicture} from "../api/image.ts";
import {SUCCESS_CODE} from "../api/config.ts";


export function VisualContext(props:React.ProviderProps<any>):React.ReactElement {
  const [currentPrompt, setCurrentPrompt] = React.useState<string>('')
  const [imgURL,setImgURL] = React.useState<string>('')

  const [pictureList, setPictureList] = React.useState<IPicture[]>([])

  useEffect(()=>{
    (async function  handleGetPictureList() {
        const {code,data} = await getPictureList()
        if(code === SUCCESS_CODE){
          setPictureList(data.list)
        }
      })()
  },[])


  return (
    <demoPromptsContext.Provider value={{
        prompts,
        currentPrompt,
        setCurrentPrompt,
        imgURL,
        setImgURL,
      }}>
      <pictureContext.Provider value={{
        pictureList,
        setPictureList,
      }}>
        {props.children}
      </pictureContext.Provider>
    </demoPromptsContext.Provider>
  )
}
