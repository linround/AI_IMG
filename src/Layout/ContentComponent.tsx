import layoutCss from './layout.module.less'
import {ThreeCanvas} from "../component/ThreeCanvas/ThreeCanvas.tsx";
export function ContentComponent() {
  return(
    <div className={layoutCss.contentContainer}>
     <ThreeCanvas />
    </div>
  )
}
