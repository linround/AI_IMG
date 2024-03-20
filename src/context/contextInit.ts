import {createContext} from "react";
import {IDemoPromptsContext} from "../type/context.ts";

export const demoPromptsContext = createContext<IDemoPromptsContext>({
  prompts: [],
  currentPrompt: '',
  setCurrentPrompt: () => void 0,

  imgURL: '',
  setImgURL: () => void 0,
})
