import layoutCss from './layout.module.less'
import {useContext} from "react";
import {pictureContext} from "../context/contextInit.ts";
export function RightSide() {
  const {pictureList} = useContext(pictureContext)
  return (
    <div className={layoutCss.rightSideContainer}>
      {pictureList.map((item,index) => {
        return <img key={index} src={item.imageUrl} alt={item.prompt} className={layoutCss.rightSideImg}/>
      })}
    </div>
  )
}
