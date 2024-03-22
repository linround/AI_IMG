import {createContext} from "react";
import {IDemoPromptsContext, IPictureContext} from "../type/context.ts";

export const demoPromptsContext = createContext<IDemoPromptsContext>({
  prompts: [],
  currentPrompt: '',
  setCurrentPrompt: () => void 0,

  imgURL: '',
  setImgURL: () => void 0,
})


export const pictureContext = createContext<IPictureContext>({
  pictureList: [],
  setPictureList: () => void 0,
})
