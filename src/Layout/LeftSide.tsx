import layoutCss from './layout.module.less'
import {SDXLLightning} from "../AIModels/SDXLLightning.tsx";
export function LeftSide() {
  return (
    <div className={layoutCss.leftSideContainer}>
      <SDXLLightning   />
    </div>
  )
}
