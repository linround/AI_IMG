import React from 'react'
import {IPicture} from "../api/image.ts";
export interface IDemoPromptsContext {
  prompts: string[] // 这是一些示例提示词
  currentPrompt: string// 这是当前输入或者选择的提示词
  setCurrentPrompt: React.Dispatch<React.SetStateAction<string>> // 这里设置当前提示词的方法
  imgURL: string // 这是当前提示词对应的图片
  setImgURL: React.Dispatch<React.SetStateAction<string>> // 这里设置当前图片的方法
}


export interface IPictureContext {
  pictureList: IPicture[] // 这是图片列表
  setPictureList: React.Dispatch<React.SetStateAction<IPicture[]>> // 这里设置图片列表的方法
}
