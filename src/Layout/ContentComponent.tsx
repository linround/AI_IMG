import layoutCss from './layout.module.less'
import {ImgComponent} from "../component/ImgComponent/ImgComponent.tsx";
import React from "react";
import {demoPromptsContext} from "../context/contextInit.ts";
export function ContentComponent() {
  const {imgURL} = React.useContext(demoPromptsContext)
  return(
    <div className={layoutCss.contentContainer}>
      {imgURL && <ImgComponent src={imgURL} />}
    </div>
  )
}
