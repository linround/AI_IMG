import layoutCss from './layout.module.less'
import {useContext} from "react";
import {demoPromptsContext, pictureContext} from "../context/contextInit.ts";
export function RightSide() {
  const {pictureList} = useContext(pictureContext)
  const {setImgURL} = useContext(demoPromptsContext)
  return (
    <div className={layoutCss.rightSideContainer}>
      {pictureList.map((item,index) => {
        return <img
          onClick={()=>setImgURL(item.imageUrl)}
          key={index}
          src={item.imageUrl}
          alt={item.prompt}
          className={layoutCss.rightSideImg}/>
      })}
    </div>
  )
}
